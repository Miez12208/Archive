# ROM Phone Images

Folder ini untuk menyimpan gambar ponsel yang akan ditampilkan di ROM card.

## Cara Pakai:

1. **Tambahkan gambar ponsel** ke folder ini (format: PNG, JPG, atau WebP)
2. **Nama file** sesuai dengan yang ada di `RomList.tsx`, contoh:
   - `redmi-note-10-pro.png`
   - `poco-f5.png`
   - `xiaomi-13.png`
   - dll.

3. **Ukuran gambar** yang disarankan: 
   - Minimal: 200x200px
   - Optimal: 400x400px
   - Format: Square (1:1 ratio)

## Contoh:

Jika di `RomList.tsx` ada:
```tsx
{
    name: 'Evolution X',
    device: 'Redmi Note 10 PRO/MAX (sweet)',
    image: '/images/roms/redmi-note-10-pro.png',
}
```

Maka taruh file gambar ponsel dengan nama `redmi-note-10-pro.png` di folder ini.

## Fallback:

Jika gambar tidak ada atau path salah, akan muncul icon SVG ponsel sebagai fallback.
