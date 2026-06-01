#!/bin/bash

PUBLIC_DIR="./public"

for file in "$PUBLIC_DIR"/*.docx; do
    echo "Converting $(basename "$file")..."
    /Applications/LibreOffice.app/Contents/MacOS/soffice \
        --headless \
        --convert-to pdf \
        --outdir "$PUBLIC_DIR" \
        "$file"
done

echo "Done converting resumes."
