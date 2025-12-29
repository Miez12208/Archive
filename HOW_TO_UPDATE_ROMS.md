# How to Add/Update ROMs

## Quick Guide

To add or update a ROM, simply edit the `src/data/roms.json` file!

## Adding a New ROM

1. Open `src/data/roms.json`
2. Copy this template:

```json
{
  "name": "ROM Name",
  "version": "1.0",
  "androidVersion": "16",
  "maintainer": "YourName",
  "status": "Official",
  "updatedAt": "2025-12-29",
  "device": "Redmi Note 10 PRO/MAX (sweet)",
  "image": "/images/roms/Sweet.png",
  "downloadUrl": "https://download-link-here.com",
  "variant": "GApps",
  "changelogUrl": "#"
}
```

3. Paste it into the array (don't forget the comma!)
4. Fill in your ROM details
5. Save the file
6. Done! The website will automatically update

## Field Descriptions

- **name**: ROM name (e.g., "Evolution X", "LineageOS")
- **version**: ROM version (e.g., "11.2", "23.0")
- **androidVersion**: Android version (e.g., "16", "15")
- **maintainer**: Maintainer username (e.g., "therealmharc")
- **status**: Either "Official" or "Unofficial"
- **updatedAt**: Last update date (YYYY-MM-DD format)
- **device**: Device name (usually "Redmi Note 10 PRO/MAX (sweet)")
- **image**: Path to device image (usually "/images/roms/Sweet.png")
- **downloadUrl**: Direct download link
- **variant**: Either "GApps" or "Vanilla"
- **changelogUrl**: Link to changelog (use "#" if none)

## Example: Adding a New ROM

```json
[
  {
    "name": "Evolution X",
    "version": "11.2",
    ...existing ROM...
  },
  {
    "name": "My New ROM",
    "version": "2.0",
    "androidVersion": "16",
    "maintainer": "Miez12208",
    "status": "Unofficial",
    "updatedAt": "2025-12-29",
    "device": "Redmi Note 10 PRO/MAX (sweet)",
    "image": "/images/roms/Sweet.png",
    "downloadUrl": "https://example.com/rom.zip",
    "variant": "Vanilla",
    "changelogUrl": "https://example.com/changelog"
  }
]
```

## Updating Existing ROM

1. Find the ROM in `roms.json`
2. Update the fields you want (version, downloadUrl, etc.)
3. Save
4. Done!

## Tips

- Always use double quotes `"` for strings in JSON
- Don't forget commas between objects
- Last object in array should NOT have a trailing comma
- Use a JSON validator if unsure: https://jsonlint.com/
