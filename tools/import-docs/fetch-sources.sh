#!/usr/bin/env bash
# Downloads the documentation sources the importer reads. Needs internet access, so run it
# outside the closed network. Usage: tools/import-docs/fetch-sources.sh <sources-dir>
set -euo pipefail

SOURCES_DIR="${1:?Usage: fetch-sources.sh <sources-dir>}"
mkdir -p "$SOURCES_DIR"
cd "$SOURCES_DIR"

# MDN: only the "Learn web development" core lessons, not the whole 500 MB repository.
if [ ! -d mdn ]; then
  git clone --filter=blob:none --no-checkout --depth 1 https://github.com/mdn/content.git mdn
fi
git -C mdn sparse-checkout set --no-cone "files/en-us/learn_web_development/core/*"
git -C mdn checkout
git -C mdn pull --ff-only

# Diagrams some MDN lessons use, from MDN's shared-assets repository (same license).
SHARED=images/diagrams/learn/structuring-documents
mkdir -p "shared-assets/$SHARED"
for file in site-structure.svg site-map.svg; do
  curl -sSfL "https://raw.githubusercontent.com/mdn/shared-assets/main/$SHARED/$file" \
    -o "shared-assets/$SHARED/$file"
done

# The Sass "Basics" guide.
curl -sSfL https://raw.githubusercontent.com/sass/sass-site/main/source/guide.md -o sass-guide.md

echo "Sources ready in $SOURCES_DIR"
