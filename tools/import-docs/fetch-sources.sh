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

# Clones only the given folders of a GitHub repository (they are big).
sparse_clone() {
  local dir=$1 repo=$2
  shift 2
  if [ ! -d "$dir" ]; then
    git clone --filter=blob:none --no-checkout --depth 1 "https://github.com/$repo.git" "$dir"
  fi
  git -C "$dir" config core.longpaths true # some example paths are too long for Windows
  git -C "$dir" config core.autocrlf false # keep the upstream line endings (\n)
  git -C "$dir" sparse-checkout set --no-cone "$@"
  git -C "$dir" checkout
  git -C "$dir" pull --ff-only
}

# Angular: guides, tutorials, the examples they show, and their images.
sparse_clone angular angular/angular \
  "adev/src/content/introduction/*" "adev/src/content/guide/*" \
  "adev/src/content/best-practices/*" "adev/src/content/tutorials/*" \
  "adev/src/content/examples/*" "adev/src/assets/images/guide/*"

# NgRx: the documentation site (pages, examples and images).
sparse_clone ngrx ngrx/platform "projects/www/src/app/pages/*" \
  "projects/www/src/app/examples/*" "projects/www/public/images/*"

# RxJS: the guide and its images.
sparse_clone rxjs ReactiveX/rxjs "apps/rxjs.dev/content/guide/*" "apps/rxjs.dev/src/assets/images/*"

# Atomic Design explained in the react-atomic-design README, with the images it shows.
mkdir -p react-atomic-design
curl -sSfL https://raw.githubusercontent.com/danilowoz/react-atomic-design/master/README.md \
  -o react-atomic-design/README.md
grep -oE 'https://user-images\.githubusercontent\.com/[^"]+\.png' react-atomic-design/README.md |
  while read -r url; do
    curl -sSfL "$url" -o "react-atomic-design/$(basename "$url")"
  done

echo "Sources ready in $SOURCES_DIR"
