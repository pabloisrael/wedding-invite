# 🎨 How to Customize Your Wedding Invitation

Complete guide to personalize every aspect of your invitation.

---

## 🚀 Quick Start (5 Minutes)

1. **Open** `config.js`
2. **Change** couple names and date
3. **Save** the file
4. **Refresh** browser - changes appear instantly!

---

## 📝 Step-by-Step Customization

### 1. Basic Information

Open `config.js` and update:

```javascript
couple: {
  name1: "Sarah",           // First person's name
  name2: "Michael"          // Second person's name
}
```

### 2. Wedding Date

```javascript
date: {
  day: "15",                          // Day of month
  month: "JUNE",                      // Month (uppercase)
  year: "2026",                       // Year
  fullDate: "2026-06-15 19:00:00"    // Format: YYYY-MM-DD HH:MM:SS
}
```

**Important:** The `fullDate` must be exact for the countdown to work correctly!

### 3. Main Title

```javascript
title: "Save the Date!"
// or
title: "Join us for our special day!"
// or
title: "The adventure begins!"
```

### 4. Ceremony Details

```javascript
ceremony: {
  name: "St. Mary's Church",
  address: "123 Church Street",
  city: "New York, NY",
  time: "4:00 PM",
  mapsUrl: "https://maps.google.com/?q=St+Mary's+Church+New+York"
}
```

**Tip:** Get your Google Maps URL:
1. Search location on [maps.google.com](https://maps.google.com)
2. Click "Share"
3. Copy the link

### 5. Reception Details

```javascript
reception: {
  name: "The Grand Ballroom",
  address: "456 Avenue Road",
  city: "New York, NY",
  time: "6:00 PM",
  mapsUrl: "https://maps.google.com/?q=Grand+Ballroom+New+York"
}
```

### 6. Dress Code

```javascript
dressCode: {
  title: "DRESS CODE",
  description: "The dress code for our wedding is **black tie optional**."
}
```

**Formatting:** Use `**text**` for bold.

Common dress codes:
- White tie
- Black tie
- Black tie optional
- Cocktail attire
- Semi-formal
- Smart casual
- Casual

### 7. Children Policy

```javascript
children: {
  title: "CHILDREN",
  description: "We love your little ones, but this will be an adults-only celebration."
}
```

Or if children are welcome:

```javascript
children: {
  title: "CHILDREN",
  description: "Children are welcome! Childcare and entertainment will be provided."
}
```

### 8. Gift Information

```javascript
gift: {
  title: "GIFT",
  description: "**Your presence is the best gift!**\n\nBut if you wish to give us a gift, here are our details:",
  accountHolder: "Sarah & Michael Johnson",
  accountNumber: "1234567890123456",
  alias: "SarahMichael.Wedding",
  bank: "Bank of America"
}
```

**Tip:** Use `\n` for line breaks in descriptions.

### 9. RSVP Section

```javascript
rsvp: {
  title: "RSVP",
  subtitle: "Please join us on our special day!",
  description: "Kindly respond by June 1, 2026.\n\nIf you were invited with a guest, please complete one form per person.",
  buttonText: "CONFIRM ATTENDANCE",
  formUrl: "https://forms.gle/your-google-form-link"
}
```

**Creating Google Form:**
1. Go to [forms.google.com](https://forms.google.com)
2. Create new form
3. Add questions:
   - Full Name (required)
   - Email (required)
   - Will you attend? (Yes/No)
   - Number of guests
   - Dietary restrictions
   - Song requests
4. Click "Send"
5. Copy the link
6. Paste in `formUrl`

---

## 🖼️ Adding Images

### Step 1: Create Images Folder

```bash
mkdir -p public/images
```

### Step 2: Add Your Images

Place these files in `public/images/`:
- `logo.png` - Your logo/monogram (recommend 200x200px)
- `background.jpg` - Hero background (recommend 1920x1080px)
- `favicon.ico` - Browser icon (16x16px or 32x32px)

### Step 3: Update Config

```javascript
images: {
  logo: "/images/logo.png",
  heroBackground: "/images/background.jpg",
  favicon: "/images/favicon.ico"
}
```

**Image Tips:**
- Optimize before uploading (use [TinyPNG](https://tinypng.com))
- Use WebP format for better performance
- Keep file sizes under 500KB
- Use descriptive filenames

---

## 🎨 Changing Colors

### Option 1: Use Preset Color Schemes

#### Romantic Blush & Gold
```javascript
colors: {
  primary: "#d4a574",
  secondary: "#e6b8b8",
  background: "#fff8f8",
  text: "#333333",
  textLight: "#666666"
}
```

#### Classic Navy & Champagne
```javascript
colors: {
  primary: "#c9a961",
  secondary: "#1e3a5f",
  background: "#f8f9fa",
  text: "#1a1a1a",
  textLight: "#5a5a5a"
}
```

#### Garden Green & Gold
```javascript
colors: {
  primary: "#d4a574",
  secondary: "#7a9e7e",
  background: "#f7faf7",
  text: "#2d3e2d",
  textLight: "#6b7b6b"
}
```

#### Elegant Purple & Silver
```javascript
colors: {
  primary: "#9b8db4",
  secondary: "#c0c0c0",
  background: "#f8f7fa",
  text: "#333333",
  textLight: "#666666"
}
```

### Option 2: Find Your Own Colors

1. Use [coolors.co](https://coolors.co) to generate palettes
2. Pick your primary color (main accent)
3. Pick complementary secondary color
4. Choose light background
5. Set text colors (dark for readability)

---

## ✏️ Customizing Text

### Markdown Support

You can use basic markdown in descriptions:

```javascript
description: "This is **bold text**.\n\nThis is a new paragraph."
```

- `**text**` = bold
- `\n` = line break
- `\n\n` = new paragraph

### Examples

```javascript
// Multi-line with formatting
description: "**Important:** Please arrive 15 minutes early.\n\nWe can't wait to celebrate with you!"

// Simple with bold
description: "Dress code is **formal attire**."
```

---

## 🔧 Advanced Customization

### Change Fonts

Edit `app/layout.js`:

```javascript
import { Playfair_Display, Open_Sans } from 'next/font/google'

const playfair = Playfair_Display({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
})

const openSans = Open_Sans({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-body',
})
```

Browse fonts at [fonts.google.com](https://fonts.google.com)

### Add New Section

1. Create `app/components/MySection.js`:

```javascript
import { CONFIG } from '../../config'

export default function MySection() {
  return (
    <section className="py-20 bg-white" id="my-section">
      <div className="container mx-auto px-5 max-w-7xl">
        <h2 className="font-heading text-4xl text-center mb-12">
          My Custom Section
        </h2>
        <p className="text-center text-textLight">
          Content here
        </p>
      </div>
    </section>
  )
}
```

2. Add to `app/page.js`:

```javascript
import MySection from './components/MySection'

export default function Home() {
  return (
    <>
      {/* ... other components ... */}
      <MySection />
      {/* ... */}
    </>
  )
}
```

3. Add config if needed in `config.js`.

### Modify Component Styles

Components use Tailwind classes. Example:

```javascript
// Change button color from primary to secondary
<button className="bg-secondary text-white">  // Changed from bg-primary
  Click me
</button>

// Change text size
<h2 className="text-6xl">  // Changed from text-4xl
  Bigger Title
</h2>

// Add shadow
<div className="shadow-2xl">
  Card with big shadow
</div>
```

---

## 📱 Contact Information

Update social media links:

```javascript
contact: {
  instagram: "@your_handle",
  whatsapp: "+1234567890",
  email: "hello@yourwedding.com"
}
```

Footer will automatically display these if filled.

---

## 🎯 Pre-Launch Checklist

Before sharing your invitation:

### Content ✅
- [ ] Couple names spelled correctly
- [ ] Date and time accurate
- [ ] Both addresses correct and complete
- [ ] Google Maps links work
- [ ] Dress code clearly stated
- [ ] Banking details correct (if included)
- [ ] RSVP deadline set
- [ ] Google Form link works

### Design ✅
- [ ] Colors look good together
- [ ] Logo displays properly (if added)
- [ ] All text is readable
- [ ] Images load correctly

### Technical ✅
- [ ] Countdown timer counting down correctly
- [ ] All links work
- [ ] Navigation smooth scrolls
- [ ] Site looks good on mobile
- [ ] Site looks good on tablet
- [ ] Site looks good on desktop
- [ ] Tested in Chrome, Safari, Firefox

### Deployment ✅
- [ ] `npm run build` completes successfully
- [ ] Deployed to Vercel
- [ ] Custom domain configured (optional)
- [ ] Shared test link with 2-3 friends for feedback

---

## 💡 Pro Tips

1. **Test Early** - Share with friends before sending to all guests
2. **Mobile First** - Most people will view on phones
3. **Keep It Simple** - Don't overcomplicate the design
4. **Fast Loading** - Optimize all images
5. **Clear CTA** - Make RSVP button obvious
6. **Deadline** - Set clear RSVP deadline
7. **Follow Up** - Remind guests who haven't responded
8. **Backup Plan** - Download guest list before wedding day

---

## 🎨 Design Inspiration

### Color Palettes by Season

**Spring:**
- Pastels: Soft pink, mint green, lavender
- Fresh: Coral, sage, cream

**Summer:**
- Bright: Turquoise, yellow, coral
- Tropical: Bright pink, orange, teal

**Fall:**
- Warm: Burgundy, gold, rust
- Earthy: Terracotta, olive, mustard

**Winter:**
- Cool: Navy, silver, ice blue
- Elegant: Emerald, gold, ivory

---

## 📞 Need Help?

- **Documentation:** See `README.md`
- **Quick Start:** See `QUICKSTART.md`
- **This Guide:** `HOW_TO_CUSTOMIZE.md`
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind Docs:** [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Happy customizing! Your perfect invitation awaits! 💍✨**
