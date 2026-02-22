# Photo Gallery

Add your wedding photos to this folder.

## Instructions

1. Add your photos to this directory
2. Recommended format: JPG or PNG
3. Recommended size: At least 800x1000px for best quality
4. Vertical or portrait orientation works best (3:4 ratio)

## Configuration

Update the photo paths in `config.js`:

```javascript
gallery: {
  enabled: true,
  photos: [
    "/images/gallery/photo1.jpg",
    "/images/gallery/photo2.jpg",
    "/images/gallery/photo3.jpg",
    // Add more photos as needed
  ]
}
```

## Tips

- Use high-quality images
- Keep file sizes under 2MB each for faster loading
- Photos will be displayed with rounded corners in a horizontal carousel
- Users can scroll horizontally to view all photos
