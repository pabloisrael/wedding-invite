# ⚡ Quick Start - 5 Minutes

Ultra-fast guide to get your invitation up and running.

## 🎯 3 Steps to Get Started

### 1️⃣ Edit Configuration (2 minutes)

Open `config.js` and change:

```javascript
couple: {
  name1: "YourName",        // ← Change here
  name2: "TheirName"        // ← Change here
},

date: {
  day: "15",                // ← Your day
  month: "JUNE",            // ← Your month
  year: "2026",             // ← Your year
  fullDate: "2026-06-15 19:00:00"  // ← Full date
},
```

### 2️⃣ View Your Invitation (1 minute)

The server is already running at:

**http://localhost:3001**

Open that link in your browser. You should see your invitation!

### 3️⃣ Deploy to Vercel (2 minutes)

```bash
# 1. Upload to GitHub
git init
git add .
git commit -m "My wedding invitation"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/wedding-invite.git
git push -u origin main

# 2. Go to vercel.com and connect your repo
# 3. Click "Deploy"
```

Done! Your invitation is online.

---

## 🎨 Quick Customization

### Change Colors

In `config.js`:

```javascript
colors: {
  primary: "#d4a574",     // Primary color
  secondary: "#8b7355",   // Secondary color
  // ... change the hex values
}
```

### Add Logo

1. Create folder: `public/images/`
2. Place your `logo.png` there
3. In `config.js`:

```javascript
images: {
  logo: "/images/logo.png"
}
```

### Create Form

1. Go to [forms.google.com](https://forms.google.com)
2. Create your form
3. Copy the link
4. Paste it in `config.js`:

```javascript
rsvp: {
  formUrl: "https://forms.gle/your-link"
}
```

---

## 📱 Essential Commands

```bash
npm run dev      # Start development (already running)
npm run build    # Check it works before deploy
vercel           # Deploy to production
```

---

## ✅ Before Sharing

- [ ] Changed names and date in config.js
- [ ] Updated ceremony and reception addresses
- [ ] Created and connected Google Form
- [ ] Tested on my mobile
- [ ] Deployed to Vercel

---

## 🆘 Quick Help

**Server won't start:**
```bash
npm install
npm run dev
```

**Changes not showing:**
- Refresh browser (Cmd+R / Ctrl+R)
- If it doesn't work: stop server and restart

**Deploy error:**
- Check that `npm run build` works locally
- Review for errors in `config.js`

---

## 📚 More Information

- `README.md` - Complete documentation

---

Enjoy your invitation! 🎉

**Current server:** http://localhost:3001
