# 💍 Wedding Invitation Web - Next.js + Tailwind CSS

Elegant and modern wedding invitation website built with **Next.js 14**, **Tailwind CSS**, and ready to deploy on **Vercel**.

## ✨ Features

- 🎨 **Tailwind CSS** - Modern, fully customizable styles
- ⚡ **Next.js 14** - React framework with App Router
- 📱 **100% Responsive** - Perfect on mobile, tablet, and desktop
- ⏱️ **Real-time countdown** - Live countdown to your big day
- 🗺️ **Google Maps integration** - Easy directions to venues
- 🎯 **Simple configuration** - Just edit `config.js`
- 🚀 **Deploy to Vercel** with one click
- 🎭 **Optimized Google Fonts**
- ♿ **Accessible** and SEO optimized

## 🚀 Quick Start

### 1. Clone or download the project

```bash
cd wedding-invite
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your invitation

Edit the `config.js` file with your information:

```javascript
export const CONFIG = {
  couple: {
    name1: "YourName",
    name2: "TheirName"
  },
  date: {
    day: "15",
    month: "JUNE",
    year: "2026",
    fullDate: "2026-06-15 19:00:00"
  },
  // ... customize everything else
}
```

### 4. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
wedding-invite/
├── app/
│   ├── components/
│   │   ├── Header.js           # Fixed navigation with Tailwind
│   │   ├── Hero.js             # Hero section with animations
│   │   ├── Countdown.js        # Real-time countdown
│   │   ├── Ceremony.js         # Ceremony information
│   │   ├── Reception.js        # Reception information
│   │   ├── InfoSection.js      # Useful information
│   │   ├── RSVP.js             # RSVP confirmation
│   │   ├── Footer.js           # Footer
│   │   └── ColorCustomizer.js  # CSS color variables
│   ├── layout.js               # Layout with Google Fonts
│   ├── page.js                 # Main page
│   └── globals.css             # Tailwind + custom styles
├── config.js                   # ⚙️ MAIN CONFIGURATION
├── tailwind.config.js          # Tailwind config
├── postcss.config.js           # PostCSS config
├── next.config.js              # Next.js config
├── vercel.json                 # Vercel config
├── package.json
└── README.md
```

## ⚙️ Configuration

Everything is configured from `config.js`:

### Available options:

✅ Couple's names  
✅ Event date (with countdown)  
✅ Main title  
✅ Ceremony (venue, address, time, map)  
✅ Reception (venue, address, time, map)  
✅ Dress code  
✅ Children policy  
✅ Gift information (banking details)  
✅ RSVP (form link)  
✅ Images (logo, background, favicon)  
✅ Theme colors  
✅ Contact and social media  

## 🎨 Color Customization

Change colors by editing the `colors` section in `config.js`:

```javascript
colors: {
  primary: "#d4a574",      // Gold/beige color
  secondary: "#8b7355",    // Brown color
  background: "#faf8f5",   // Cream background
  text: "#333333",         // Dark text
  textLight: "#666666"     // Gray text
}
```

Colors are automatically applied using CSS variables and Tailwind.

## 🖼️ Adding Images

### Option 1: Local images (recommended)

1. Create a `public/images/` folder
2. Place your images there (logo.png, background.jpg, etc.)
3. Update in `config.js`:

```javascript
images: {
  logo: "/images/logo.png",
  heroBackground: "/images/background.jpg",
  favicon: "/images/favicon.ico"
}
```

### Option 2: External URLs

```javascript
images: {
  logo: "https://your-cdn.com/logo.png",
  heroBackground: "https://your-cdn.com/background.jpg"
}
```

## 📱 RSVP Form

1. Create a form on [Google Forms](https://forms.google.com/)
2. Design your questions (name, email, attendance, menu, etc.)
3. Copy the form link
4. Update in `config.js`:

```javascript
rsvp: {
  formUrl: "https://forms.gle/your-link-here"
}
```

## 🚀 Deploy to Vercel

### Option 1: Deploy with Git (Recommended)

1. Upload your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/wedding-invite.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Done! Your site will be online in seconds.

### Option 2: Deploy with Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the on-screen instructions.

### Option 3: Direct deploy from folder

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag your project folder
3. Click "Deploy"

## 🛠️ Available Scripts

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run start    # Production server
npm run lint     # Check code
```

## 🎯 Included Sections

- ✅ **Header** - Fixed navigation with smooth scroll
- ✅ **Hero** - Names, date, and title with animations
- ✅ **Countdown** - Real-time countdown
- ✅ **Ceremony** - Venue, address, time, and map
- ✅ **Reception** - Venue, address, time, and map
- ✅ **Info Section** - Dress code, children policy, and gift
- ✅ **RSVP** - Call-to-action with form link
- ✅ **Footer** - Contact and copyright

## 🎨 Customization with Tailwind

All components use Tailwind classes. You can easily customize:

### Change component colors

```jsx
// In any component
<div className="bg-primary text-white hover:bg-secondary">
  Content
</div>
```

### Customize Tailwind config

Edit `tailwind.config.js` to add colors, fonts, etc:

```javascript
theme: {
  extend: {
    colors: {
      'my-color': '#hexcode',
    }
  }
}
```

## 📱 Responsive Design

Tailwind breakpoints used:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Usage example:

```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## 🔧 Advanced Customization

### Add new section

1. Create a component in `app/components/MySection.js`
2. Import it in `app/page.js`
3. Add config in `config.js` if needed

### Change fonts

Edit `app/layout.js` and change Google Fonts:

```javascript
import { Your_Font } from 'next/font/google'

const yourFont = Your_Font({
  weight: ['400', '700'],
  subsets: ['latin'],
})
```

### Add custom animations

Edit `tailwind.config.js`:

```javascript
animation: {
  'my-animation': 'myKeyframe 2s ease-in-out infinite',
},
keyframes: {
  myKeyframe: {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
    '100%': { transform: 'scale(1)' },
  }
}
```

## 💡 Tips and Best Practices

- ✅ Optimize images before uploading (use [TinyPNG](https://tinypng.com/))
- ✅ Use WebP format for better performance
- ✅ Test on different devices and browsers
- ✅ Set up the form before sharing the link
- ✅ Consider a custom domain on Vercel (free)
- ✅ Send the link well in advance
- ✅ Keep the design simple and elegant

## 🆘 Troubleshooting

### Countdown not working

Check the date format in `config.js`: `"YYYY-MM-DD HH:MM:SS"`

### Styles not applying

```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

### Build error

```bash
# Check all dependencies are installed
npm install
npm run build
```

### Images not showing

Images in `public/` must be referenced with `/` at the beginning:
- ✅ `/images/logo.png`
- ❌ `images/logo.png`

## 📦 Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "tailwindcss": "^3.4.0",
  "autoprefixer": "^10.4.0",
  "postcss": "^8.4.0"
}
```

## 🌟 Vercel Features

When deploying to Vercel you get:

- 🚀 Automatic deployment on every push
- 🌐 Free HTTPS
- 🔄 Preview deployments for each PR
- 📊 Analytics (optional)
- 💨 Global edge network
- 🎯 Free custom domain

## 📄 License

Free to use project. Customize and modify as you wish.

---

## 🤝 Support

If you have questions or issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Tailwind documentation](https://tailwindcss.com/docs)
3. Check the [Vercel documentation](https://vercel.com/docs)

---

**Enjoy your special day! 🎉💍**

Made with ❤️ using Next.js, Tailwind CSS & Vercel
