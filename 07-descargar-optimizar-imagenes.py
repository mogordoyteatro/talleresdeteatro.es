#!/usr/bin/env python3
"""
07-descargar-optimizar-imagenes.py
===================================
Descarga todas las imágenes de talleresdeteatro.es,
las optimiza (WebP o JPEG de alta calidad) y las renombra
con nombres SEO en español.

SIN INSTALACIONES — usa solo herramientas que ya vienen en tu Mac.

USO:
    1. Abrí Terminal
    2. cd "/Users/seba/Documents/Claude/Projects/pagina web talleres"
    3. python3 07-descargar-optimizar-imagenes.py

RESULTADO:
    imagenes_originales/   → originales descargados
    imagenes_optimizadas/  → renombradas y optimizadas
    reporte_imagenes.csv   → tabla con peso antes/después
"""

import os
import re
import csv
import time
import sys
import subprocess
import tempfile
import shutil
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError

# ──────────────────────────────────────────────────────────────────────────────
# CONFIGURACIÓN
# ──────────────────────────────────────────────────────────────────────────────

BASE_URL  = "https://talleresdeteatro.es/wp-content/uploads/"
DIR_ORIG  = Path("imagenes_originales")
DIR_OPT   = Path("imagenes_optimizadas")
MAX_WIDTH = 2000          # píxeles máx de ancho
JPEG_Q    = 82            # calidad JPEG (fallback si sips no soporta WebP)

DIR_ORIG.mkdir(exist_ok=True)
DIR_OPT.mkdir(exist_ok=True)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0.0.0 Safari/537.36"
    )
}

# ──────────────────────────────────────────────────────────────────────────────
# DETECTAR SI sips SOPORTA WEBP (macOS 14+)
# ──────────────────────────────────────────────────────────────────────────────

def check_sips_webp():
    """Devuelve True si sips en este Mac puede exportar WebP."""
    try:
        result = subprocess.run(
            ["sips", "--listExportTypes"],
            capture_output=True, text=True, timeout=5
        )
        return "webp" in result.stdout.lower()
    except Exception:
        return False

SIPS_WEBP = check_sips_webp()
EXT_OUT   = "webp" if SIPS_WEBP else "jpg"

print(f"\n  Herramienta: sips (macOS built-in)")
print(f"  Formato de salida: {'WebP ✓' if SIPS_WEBP else 'JPEG (tu macOS no soporta WebP via sips)'}")

# ──────────────────────────────────────────────────────────────────────────────
# IMÁGENES NOMBRADAS
# ──────────────────────────────────────────────────────────────────────────────

NAMED_IMAGES = [
    (BASE_URL + "2023/11/cropped-icono-taller-de-teatro-270x270.png",
     "icono-talleres-de-teatro-barcelona"),
    (BASE_URL + "2023/12/cropped-logo-talleresdeteatro.es_.png",
     "logo-talleres-de-teatro-barcelona"),
    (BASE_URL + "2023/12/CANDELARIA-SESIN.png",
     "candelaria-sesin-actriz-profesora-teatro-barcelona"),
    (BASE_URL + "2024/08/MG_7176Foto-Estudio-Inglize-en-BAJAFoto-Estudio-Inglize-en-BAJA-edited-scaled.jpg",
     "sebastian-mogordoy-director-actor-teatro-barcelona"),
    (BASE_URL + "2025/09/nosotros.png",
     "sebastian-mogordoy-candelaria-sesin-profesores-teatro-barcelona"),
    (BASE_URL + "2025/03/la-mansion1.png",
     "espacio-la-mansion-coworking-roger-flor-barcelona"),
    (BASE_URL + "2025/03/avsnados.png",
     "nivel-avanzados-entrenamiento-actoral-teatro-barcelona"),
    (BASE_URL + "2025/08/INSCRIBIR-LO-PROPIO.png",
     "inscribir-lo-propio-taller-teatro-intermedios-barcelona"),
    (BASE_URL + "2025/08/creacion-1.png",
     "la-creacion-del-artificio-taller-teatro-principiantes-barcelona"),
    (BASE_URL + "2025/08/TEATRO-EN-BARCELONA-1.png",
     "teatro-en-barcelona-entrenamiento-actoral-intermedios"),
    (BASE_URL + "2026/04/CLASES-DE-TEATRO.png",
     "clases-de-teatro-barcelona-principiantes-intermedios-avanzados"),
    (BASE_URL + "2026/04/Capa-1-2.png",
     "cartel-informativo-talleres-de-teatro-barcelona-2026"),
    (BASE_URL + "2023/12/MG_6183-scaled.jpg",
     "clase-teatro-intermedios-barcelona-ensayo-01"),
    (BASE_URL + "2023/12/MG_6285-scaled.jpg",
     "clase-teatro-intermedios-barcelona-ensayo-02"),
    (BASE_URL + "2023/11/MG_6399.jpg",
     "clase-teatro-barcelona-foto-estudio-01"),
    (BASE_URL + "2023/11/MG_6447.jpg",
     "clase-teatro-barcelona-foto-estudio-02"),
    (BASE_URL + "2023/12/escuela-de-teatro-162.jpeg",
     "escuela-de-teatro-barcelona-espacio-la-mansion"),
    (BASE_URL + "2023/12/Large.jpeg",
     "clase-teatro-barcelona-grupo-1"),
    (BASE_URL + "2023/11/vibre.png",
     "vibra-taller-de-teatro-barcelona"),
    (BASE_URL + "2025/03/la-creacion-del-artificio-1.png",
     "la-creacion-del-artificio-cartel-taller-principiantes"),
    (BASE_URL + "2026/04/Gemini_Generated_Image_jek1ksjek1ksjek1-scaled.png",
     "entrenamiento-actoral-teatro-barcelona-imagen"),
    (BASE_URL + "2026/04/LOGO_RGB_T_TEATRE_LLIURE_BLANCO-1.png",
     "logo-teatre-lliure-barcelona"),
    (BASE_URL + "2026/04/logotc_comunidad-1.png",
     "logo-teatro-comunidad-barcelona"),
]

# ──────────────────────────────────────────────────────────────────────────────
# FOTOS DE SESIÓN PXL_*
# ──────────────────────────────────────────────────────────────────────────────

SESSION_NAMES = {
    "20230523": "clase-teatro-barcelona-mayo-2023-sesion-1",
    "20230524": "clase-teatro-barcelona-mayo-2023-sesion-2",
    "20230530": "clase-teatro-barcelona-mayo-2023-sesion-3",
    "20230531": "clase-teatro-barcelona-mayo-2023-sesion-4",
    "20230606": "clase-teatro-barcelona-junio-2023-sesion-1",
    "20230613": "clase-teatro-barcelona-junio-2023-sesion-2",
    "20230614": "clase-teatro-barcelona-junio-2023-sesion-3",
    "20230620": "clase-teatro-barcelona-junio-2023-sesion-4",
    "20230621": "clase-teatro-barcelona-junio-2023-sesion-5",
    "20230627": "clase-teatro-barcelona-junio-2023-sesion-final",
    "20231031": "clase-teatro-barcelona-octubre-2023-sesion-1",
    "20231107": "clase-teatro-barcelona-noviembre-2023-sesion-1",
}

PXL_FILES = [
    "PXL_20230523_18282287021-Large.jpeg",
    "PXL_20230523_1830477222-02-Large.jpeg",
    "PXL_20230523_1831526292-Large.jpeg",
    "PXL_20230523_183158674-Large.jpeg",
    "PXL_20230523_1831586741-Large.jpeg",
    "PXL_20230523_183525287-Large.jpeg",
    "PXL_20230523_184621637-Large.jpeg",
    "PXL_20230523_184708352-Large.jpeg",
    "PXL_20230523_184821346-Large.jpeg",
    "PXL_20230523_185331916-Large.jpeg",
    "PXL_20230523_185337080-Large.jpeg",
    "PXL_20230523_185409367-01-Large.jpeg",
    "PXL_20230523_185949270-Large.jpeg",
    "PXL_20230523_191403589-Large.jpeg",
    "PXL_20230523_1914035891-Large.jpeg",
    "PXL_20230523_192144676-Large.jpeg",
    "PXL_20230523_1929502142-Large.jpeg",
    "PXL_20230523_195317404_exported_1095_1684914613148-Large.jpeg",
    "PXL_20230523_195322734_exported_673_16849145288822-Large.jpeg",
    "PXL_20230523_195409569-Large.jpeg",
    "PXL_20230523_195609489-Large.jpeg",
    "PXL_20230523_1956560901-Large.jpeg",
    "PXL_20230523_195731833-Large.jpeg",
    "PXL_20230523_195839379-Large.jpeg",
    "PXL_20230523_1958393791-Large.jpeg",
    "PXL_20230523_195847436-Large.jpeg",
    "PXL_20230523_195946064-Large.jpeg",
    "PXL_20230523_195952397-Large.jpeg",
    "PXL_20230524_174330895-Large.jpeg",
    "PXL_20230524_180212657-Large.jpeg",
    "PXL_20230524_180220696-Large.jpeg",
    "PXL_20230524_180328560.MP-Large.jpeg",
    "PXL_20230524_180912986-Large.jpeg",
    "PXL_20230524_180923484-Large.jpeg",
    "PXL_20230524_183034400.MP-Large.jpeg",
    "PXL_20230524_183034400.MP1-Large.jpeg",
    "PXL_20230524_184124350-Large.jpeg",
    "PXL_20230524_184235518-Large.jpeg",
    "PXL_20230524_184616770.MP-Large.jpeg",
    "PXL_20230524_191621061-Large.jpeg",
    "PXL_20230524_193100782-Large.jpeg",
    "PXL_20230524_193404280-Large.jpeg",
    "PXL_20230524_193605256-Large.jpeg",
    "PXL_20230524_193613052-Large.jpeg",
    "PXL_20230524_194843480-Large.jpeg",
    "PXL_20230524_1948434801-Large.jpeg",
    "PXL_20230524_195853733-Large.jpeg",
    "PXL_20230524_1958537331-Large.jpeg",
    "PXL_20230530_180100168-Large.jpeg",
    "PXL_20230530_180745049-Large.jpeg",
    "PXL_20230530_180850468-Large.jpeg",
    "PXL_20230530_181215369-Large.jpeg",
    "PXL_20230530_181351132-Large.jpeg",
    "PXL_20230530_195129343.MP-Large.jpeg",
    "PXL_20230530_195151446-Large.jpeg",
    "PXL_20230531_170603475.MP-Large.jpeg",
    "PXL_20230531_174729109-Large.jpeg",
    "PXL_20230531_183126452-Large.jpeg",
    "PXL_20230531_183755707-Large.jpeg",
    "PXL_20230531_184013087-Large.jpeg",
    "PXL_20230531_184029643.MP-01-Large.jpeg",
    "PXL_20230531_191724218.PORTRAIT.ORIGINAL2-012-Large.jpeg",
    "PXL_20230606_172115736-01-Large.jpeg",
    "PXL_20230606_175356830.MP-Large.jpeg",
    "PXL_20230606_185025884-Large.jpeg",
    "PXL_20230606_185033452-Large.jpeg",
    "PXL_20230606_190054692-Large.jpeg",
    "PXL_20230606_194019884.NIGHT-Large.jpeg",
    "PXL_20230606_194859846-Large.jpeg",
    "PXL_20230606_194912894-Large.jpeg",
    "PXL_20230606_194917922-Large.jpeg",
    "PXL_20230606_195341481-Large.jpeg",
    "PXL_20230606_195648235-Large.jpeg",
    "PXL_20230613_190030580-Large.jpeg",
    "PXL_20230613_191212942-Large.jpeg",
    "PXL_20230613_195358529-Large.jpeg",
    "PXL_20230613_200109320-Large.jpeg",
    "PXL_20230613_200634280-Large.jpeg",
    "PXL_20230614_173459728.MP-Large.jpeg",
    "PXL_20230614_175511033-Large.jpeg",
    "PXL_20230614_180641636.MP-Large.jpeg",
    "PXL_20230614_181732064.MP-Large.jpeg",
    "PXL_20230614_181742785.MP-Large.jpeg",
    "PXL_20230614_182429205-Large.jpeg",
    "PXL_20230614_184550272-Large.jpeg",
    "PXL_20230614_185343154-Large.jpeg",
    "PXL_20230614_190555703-Large.jpeg",
    "PXL_20230620_180343473-Large.jpeg",
    "PXL_20230620_180653664-Large.jpeg",
    "PXL_20230620_183403052-Large.jpeg",
    "PXL_20230620_183644272.MP-Large.jpeg",
    "PXL_20230620_183651868-Large.jpeg",
    "PXL_20230620_190725414.MP-Large.jpeg",
    "PXL_20230620_195240069.MP-Large.jpeg",
    "PXL_20230621_174505146-Large.jpeg",
    "PXL_20230621_174944828.MP-Large.jpeg",
    "PXL_20230621_175903901-Large.jpeg",
    "PXL_20230621_180254281-Large.jpeg",
    "PXL_20230621_184324536-Large-1.jpeg",
    "PXL_20230621_184616964-Large-1.jpeg",
    "PXL_20230621_185609165-Large-1.jpeg",
    "PXL_20230621_193350216-Large-1.jpeg",
    "PXL_20230621_194332762-Large-1.jpeg",
    "PXL_20230621_194345521-Large-1.jpeg",
    "PXL_20230621_194500304-Large-1.jpeg",
    "PXL_20230621_194502825.MP-Large-1.jpeg",
    "PXL_20230621_200533266-Large-1.jpeg",
    "PXL_20230621_203148018.MP-Large-1.jpeg",
    "PXL_20230627_173727494-Large-1.jpeg",
    "PXL_20230627_180445173-Large-1.jpeg",
    "PXL_20230627_182956069-Large.jpeg",
    "PXL_20230627_182956069-Large-1.jpeg",
    "PXL_20230627_183215273-Large-1.jpeg",
    "PXL_20230627_183217729-Large-1.jpeg",
    "PXL_20230627_183546879-Large-1.jpeg",
    "PXL_20230627_183921351-Large-1.jpeg",
    "PXL_20230627_184324006-Large-1.jpeg",
    "PXL_20230627_185954370-Large-1.jpeg",
    "PXL_20230627_185956964-Large-1.jpeg",
    "PXL_20230627_190143851-Large-1.jpeg",
    "PXL_20230627_190557990-Large-1.jpeg",
    "PXL_20230627_190932617-Large-1.jpeg",
    "PXL_20230627_191420614-Large-1.jpeg",
    "PXL_20230627_191655888-Large-1.jpeg",
    "PXL_20230627_192125365-Large.jpeg",
    "PXL_20230627_192125365-Large-1.jpeg",
    "PXL_20230627_193429320-Large-1.jpeg",
    "PXL_20230627_193918058-Large-1.jpeg",
    "PXL_20230627_194733149-Large-1.jpeg",
    "PXL_20230627_195041406-Large-1.jpeg",
    "PXL_20230627_200505106-Large.jpeg",
    "PXL_20230627_200505106-Large-1.jpeg",
    "PXL_20230627_200741273-Large-1.jpeg",
    "PXL_20230627_200820677-Large-1.jpeg",
    "PXL_20230627_205719427-Large.jpeg",
    "PXL_20230627_205719427-Large-1.jpeg",
    "PXL_20230627_211118119-Large.jpeg",
    "PXL_20230627_211118119-Large-1.jpeg",
    "PXL_20231031_1919018552-Large-1.jpeg",
    "PXL_20231031_1920382772-01-Large.jpeg",
    "PXL_20231031_1920382772-01-Large-1.jpeg",
    "PXL_20231031_192112648-Large-1.jpeg",
    "PXL_20231031_192152885.MP2-01-Large.jpeg",
    "PXL_20231031_192152885.MP2-01-Large-1.jpeg",
    "PXL_20231031_192152885.MP2-Large.jpeg",
    "PXL_20231031_192152885.MP2-Large-1.jpeg",
    "PXL_20231031_1923096512-Large.jpeg",
    "PXL_20231031_1923096512-Large-1.jpeg",
    "PXL_20231031_1928378112-Large.jpeg",
    "PXL_20231031_1928378112-Large-1.jpeg",
    "PXL_20231031_1937019013-Large.jpeg",
    "PXL_20231031_1937019013-Large-1.jpeg",
    "PXL_20231031_1937051502-Large.jpeg",
    "PXL_20231031_1937051502-Large-1.jpeg",
    "PXL_20231031_1937111532-Large.jpeg",
    "PXL_20231031_1937111532-Large-1.jpeg",
    "PXL_20231031_1945342243-01-Large.jpeg",
    "PXL_20231031_1945342243-01-Large-1.jpeg",
    "PXL_20231031_1945481933-Large.jpeg",
    "PXL_20231031_1945481933-Large-1.jpeg",
    "PXL_20231031_2001205832-Large.jpeg",
    "PXL_20231031_2001205832-Large-1.jpeg",
    "PXL_20231031_2004485703-Large.jpeg",
    "PXL_20231031_2004485703-Large-1.jpeg",
    "PXL_20231031_202548340_exported_stabilized_1698825197424-Large.jpeg",
    "PXL_20231031_202548340_exported_stabilized_1698825197424-Large-1.jpeg",
    "PXL_20231031_202557172-01-Large.jpeg",
    "PXL_20231031_202557172-01-Large-1.jpeg",
    "PXL_20231031_2031434912-Large.jpeg",
    "PXL_20231031_2031434912-Large-1.jpeg",
    "PXL_20231031_203251325-Large.jpeg",
    "PXL_20231031_203251325-Large-1.jpeg",
    "PXL_20231031_2033428112-Large-1.jpeg",
    "PXL_20231107_193939858-Large.jpeg",
]


def build_session_images():
    counters = {}
    result = []
    seen = set()
    for fn in PXL_FILES:
        url = BASE_URL + "2023/12/" + fn
        if url in seen:
            continue
        seen.add(url)
        m = re.match(r"PXL_(\d{8})_", fn)
        if not m:
            continue
        date = m.group(1)
        base = SESSION_NAMES.get(date)
        if not base:
            continue
        n = counters.get(base, 0) + 1
        counters[base] = n
        result.append((url, f"{base}-{n:03d}"))
    return result


# ──────────────────────────────────────────────────────────────────────────────
# DESCARGA
# ──────────────────────────────────────────────────────────────────────────────

def download(url):
    urls_to_try = [url]
    if "-scaled" in url:
        urls_to_try.append(url.replace("-scaled", ""))
    for u in urls_to_try:
        try:
            req = Request(u, headers=HEADERS)
            with urlopen(req, timeout=30) as r:
                if r.status == 200:
                    return r.read(), u
        except HTTPError as e:
            if e.code != 404:
                print(f"    ✗ HTTP {e.code}")
                return None, u
        except Exception as e:
            print(f"    ✗ {e}")
            return None, u
    print(f"    ✗ 404 en todas las variantes")
    return None, url


# ──────────────────────────────────────────────────────────────────────────────
# OPTIMIZACIÓN CON sips (built-in macOS)
# ──────────────────────────────────────────────────────────────────────────────

def optimize_with_sips(src_path: Path, dst_path: Path) -> bool:
    """
    Usa sips para:
    1. Redimensionar si ancho > MAX_WIDTH
    2. Convertir a WebP (macOS 14+) o JPEG

    Retorna True si tuvo éxito.
    """
    try:
        # Obtener dimensiones actuales
        info = subprocess.run(
            ["sips", "--getProperty", "pixelWidth", str(src_path)],
            capture_output=True, text=True, timeout=10
        )
        width_line = [l for l in info.stdout.splitlines() if "pixelWidth" in l]
        current_width = int(width_line[0].split()[-1]) if width_line else 0

        # Construir comando sips
        cmd = ["sips"]

        if SIPS_WEBP:
            cmd += ["-s", "format", "webp"]
            # Calidad WebP vía sips (--setProperty formatOptions)
            cmd += ["--setProperty", "formatOptions", str(JPEG_Q)]
        else:
            cmd += ["-s", "format", "jpeg",
                    "-s", "formatOptions", str(JPEG_Q)]

        if current_width > MAX_WIDTH:
            cmd += ["--resampleWidth", str(MAX_WIDTH)]

        cmd += [str(src_path), "--out", str(dst_path)]

        result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
        return dst_path.exists() and dst_path.stat().st_size > 0

    except Exception as e:
        print(f"    ✗ sips error: {e}")
        return False


# ──────────────────────────────────────────────────────────────────────────────
# MAIN
# ──────────────────────────────────────────────────────────────────────────────

def main():
    all_images = list(NAMED_IMAGES) + build_session_images()
    total = len(all_images)

    print(f"\n{'='*62}")
    print(f"  talleresdeteatro.es — Descarga y optimización")
    print(f"  {total} imágenes · formato salida: {EXT_OUT.upper()}")
    print(f"{'='*62}\n")

    report = []
    total_orig = total_opt = ok = fail = 0

    for i, (url, seo_name) in enumerate(all_images, 1):
        orig_fn = url.split("/")[-1]
        print(f"[{i:03d}/{total}] {seo_name}")
        print(f"  ← {orig_fn}")

        # Descargar
        data, actual_url = download(url)
        if not data:
            fail += 1
            report.append({"url": url, "seo_nombre": seo_name + "." + EXT_OUT,
                           "estado": "ERROR-descarga", "kb_orig": 0,
                           "kb_opt": 0, "reduccion_%": 0})
            continue

        orig_size = len(data)

        # Guardar original en carpeta de originales
        src_ext = orig_fn.rsplit(".", 1)[-1].lower()
        orig_path = DIR_ORIG / f"{seo_name}.{src_ext}"
        orig_path.write_bytes(data)

        # Optimizar con sips
        dst_path = DIR_OPT / f"{seo_name}.{EXT_OUT}"
        success = optimize_with_sips(orig_path, dst_path)

        if success:
            opt_size = dst_path.stat().st_size
            reduction = round((1 - opt_size / orig_size) * 100, 1)
            print(f"  ✓ {orig_size//1024}KB → {opt_size//1024}KB  (-{reduction}%)")
            total_orig += orig_size
            total_opt  += opt_size
            ok += 1
            estado = "OK"
        else:
            # Fallback: copiar original sin convertir
            shutil.copy2(orig_path, dst_path.with_suffix("." + src_ext))
            opt_size = orig_size
            reduction = 0
            fail += 1
            estado = "COPIADO-sin-convertir"
            print(f"  ⚠ sips falló — copiado sin convertir")

        report.append({
            "url": url,
            "seo_nombre": seo_name + "." + EXT_OUT,
            "estado": estado,
            "kb_orig": round(orig_size / 1024, 1),
            "kb_opt": round(opt_size / 1024, 1),
            "reduccion_%": reduction,
        })

        time.sleep(0.2)

    # CSV
    csv_path = Path("reporte_imagenes.csv")
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=list(report[0].keys()))
        writer.writeheader()
        writer.writerows(report)

    # Resumen
    print(f"\n{'='*62}")
    print(f"  RESUMEN")
    print(f"{'='*62}")
    print(f"  ✓ Exitosas  : {ok}")
    print(f"  ✗ Fallidas  : {fail}")
    if total_orig > 0:
        red = round((1 - total_opt / total_orig) * 100, 1)
        print(f"  Original    : {total_orig/1024/1024:.1f} MB")
        print(f"  Optimizado  : {total_opt/1024/1024:.1f} MB")
        print(f"  Reducción   : {red}%")
    print(f"\n  → {DIR_ORIG}/   (originales)")
    print(f"  → {DIR_OPT}/   (optimizadas)")
    print(f"  → {csv_path}")
    print()


if __name__ == "__main__":
    main()
