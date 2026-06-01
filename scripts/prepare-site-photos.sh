#!/usr/bin/env bash
# Copy & resize client photos into public/images (run from repo root)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/Photos for Website"
DEST="$ROOT/public/images"
GALLERY="$DEST/gallery"

mkdir -p "$DEST" "$GALLERY"

resize() {
  local infile="$1" outfile="$2"
  if [[ ! -f "$infile" ]]; then
    echo "skip missing: $infile" >&2
    return 0
  fi
  sips -s format jpeg -Z 1920 "$infile" --out "$outfile" >/dev/null 2>&1 || cp "$infile" "$outfile"
}

copy_named() {
  local src_name="$1" dest_name="$2"
  resize "$SRC/$src_name" "$DEST/$dest_name"
}

# —— Named photos → site placeholders ——
copy_named "MAIN ENTRANCE.jpg" "main-entrance.jpg"
copy_named "Farm Train Ride.jpeg" "farm-train-ride.jpg"
copy_named "Bullock Cart Ride.jpeg" "bullock-cart-ride.jpg"
copy_named "Village Pond.JPG" "village-pond.jpg"
copy_named "Mud Bath.JPG" "mud-bath.jpg"
copy_named "Mud Bath(1).JPG" "mud-bath-2.jpg"
copy_named "Box Cricket.jpg" "box-cricket.jpg"
copy_named "Tug of War.JPG" "tug-of-war.jpg"
copy_named "Team Games.JPG" "team-games.jpg"
copy_named "Miyawaki Forest Tour.jpg" "miyawaki-forest-tour.jpg"
copy_named "Kids in Goushala.JPG" "kids-in-goushala.jpg"
copy_named "Family in Goushala.jpg" "family-in-goushala.jpg"
copy_named "Kid with Gomatha.jpg" "kid-with-gomatha.jpg"
copy_named "Ananda Brundavanam.jpg" "ananda-brundavanam.jpg"
copy_named "Dandiya Night.jpg" "dandiya-night.jpg"
copy_named "Farm Lunch.JPG" "farm-lunch.jpg"
copy_named "Farm Lunch(1).jpg" "farm-lunch-2.jpg"
copy_named "Family at Rachabanda.jpg" "family-at-rachabanda.jpg"
copy_named "Kids on Airswing.jpg" "kids-on-airswing.jpg"
copy_named "Corporate Team.JPG" "corporate-team.jpg"
copy_named "Corporate Team Pics .JPG" "corporate-team-2.jpg"
copy_named "Shloka School Trip 1.jpg" "shloka-school-trip.jpg"
copy_named "Sloka School Trip Group Photo.JPG" "sloka-school-group.jpg"
copy_named "Organic Farming Explanation to Shloka Schools.JPG" "organic-farming-school.jpg"
copy_named "Goushala vist for students.JPG" "goushala-students.jpg"
copy_named "Kitty Party Ladies.jpg" "kitty-party.jpg"
copy_named "Shata Chandi Homam.JPG" "shata-chandi-homam.jpg"
copy_named "AB Homam.JPG" "ab-homam.jpg"
copy_named "AB Chandihomam.jpg" "ab-chandi-homam.jpg"
copy_named "AK Signature Shed 1.jpg" "farm-stay-shed.jpg"
copy_named "Pottery.jpeg" "pottery.jpg"
copy_named "Cycling.JPG" "cycling.jpg"
copy_named "Chess.jpg" "chess.jpg"
copy_named "Table Football.jpg" "table-football.jpg"
copy_named "Rope Climbing.jpg" "rope-climbing.jpg"
copy_named "Village Well.jpg" "village-well.jpg"
copy_named "Air Swing & Uyyala.jpg" "air-swing.jpg"
copy_named "Gobar Gas Plant.JPG" "gobar-gas-plant.jpg"
copy_named "Plantation.jpg" "plantation.jpg"
copy_named "India Map.jpg" "india-map.jpg"
copy_named "AK India Map.jpg" "ak-india-map.jpg"
copy_named "Cow Products.jpg" "cow-products.jpg"
copy_named "Ganuga explanation to kids.jpg" "ganuga-kids.jpg"
copy_named "Startup Founders Meet.jpeg" "startup-founders.jpg"

# Generic gallery set (AK Website Pics + extras not used above)
idx=1
while IFS= read -r -d '' f; do
  base="$(basename "$f")"
  slug="gallery-$(printf '%03d' "$idx").jpg"
  resize "$f" "$GALLERY/$slug"
  idx=$((idx + 1))
done < <(find "$SRC" -maxdepth 1 \( \
  -iname 'AK Website Pics*' \
  -o -iname 'Air SwingJPG.jpg' \
  -o -iname 'Miyawaki Forest.jpg' \
  -o -iname 'Miyawaki Forest(1).JPG' \
  -o -iname 'Corporate  Team.JPG' \
  -o -iname 'AK Signature Shed.jpg' \
  -o -iname 'AK Website Pics (3).jpeg' \
  \) -print0 | sort -z)

manifest="$ROOT/src/lib/gallery-manifest.json"
printf '[' > "$manifest"
first=1
for f in "$GALLERY"/gallery-*.jpg; do
  [[ -f "$f" ]] || continue
  base="/images/gallery/$(basename "$f")"
  if [[ $first -eq 1 ]]; then first=0; else printf ',' >> "$manifest"; fi
  printf '"%s"' "$base" >> "$manifest"
done
printf ']\n' >> "$manifest"

echo "Prepared $((idx - 1)) gallery images and named photos in $DEST"
echo "Wrote $manifest"
