# CUSTOMIZATION GUIDE

This guide will help you quickly customize the Roof Tech template for your own roofing business.

## Quick Customization Checklist

### 1. Replace All Company Information

Use Find & Replace (Ctrl+H in most editors) across all HTML files:

| Find This | Replace With |
|-----------|--------------|
| Roof Tech LLC | Your Company Name |
| (715) 768-6314 | Your Phone Number |
| michaely@rooftechllc.com | your@email.com |
| 200805 County Hwy M, Auburndale, WI 54412 | Your Full Address |
| Wisconsin and surrounding areas | Your Service Area |
| Michael Yurkovich | Your Name |
| Founder-Owner | Your Title |

### 2. Update Images

#### Required Images:
1. **Logo** (`images/logo.png`) - 200-300px wide, transparent background
2. **White Logo** (`images/logo-white.png`) - Same as above but white version
3. **Hero Background** (`images/hero-bg.jpg`) - 1920x1080px minimum
4. **Google Reviews** (`images/google-reviews.png`) - Download from Google My Business
5. **About Images** (`images/about-1.jpg`, `images/about-2.jpg`) - 800x600px minimum
6. **Gallery Images** (`images/gallery/project-1.jpg` through `project-12.jpg`) - 800x800px square

#### Image Tips:
- Use JPG for photos (smaller file size)
- Use PNG for logos (transparency support)
- Compress images with TinyPNG.com before uploading
- Keep images under 500KB each for fast loading

### 3. Customize Colors

Edit `css/style.css` (lines 5-9):

```css
:root {
    --primary-blue: #2B7FDB;      /* Change to your brand color */
    --dark-blue: #1A3A5C;         /* Darker shade of brand color */
    --darker-blue: #0F2238;       /* Even darker for footer */
}
```

**Color Picker Tools:**
- [Coolors.co](https://coolors.co/) - Generate color palettes
- [Adobe Color](https://color.adobe.com/) - Create harmonious colors

### 4. Update Content

#### Homepage (`index.html`):
- Line 47-51: Update hero title and description
- Line 56-72: Update contact information cards
- Line 78-80: Update form title and subtitle

#### About Page (`about.html`):
- Line 33-36: Update statistics (years, clients, projects)
- Line 45-54: Rewrite your company story
- Line 66-97: Update "Why Choose Us" features
- Line 107-126: Update goals & values
- Line 136-138: Update personal message

#### Gallery Page (`gallery.html`):
- Line 31-78: Add/remove gallery items as needed
- Update image paths and alt text

#### Contact Page (`contact.html`):
- Line 36-38: Update contact intro text
- Line 93-94: Update business hours

### 5. Setup Contact Form

The form currently shows a success message without sending emails. To make it functional:

#### Option A: Use Formspree (Easiest - Free)
1. Go to [formspree.io](https://formspree.io/)
2. Sign up and create a new form
3. Copy your form endpoint
4. Edit `js/main.js` around line 50:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
});
```

#### Option B: Use EmailJS (Free tier available)
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Follow their integration guide
3. Update the form handler in `js/main.js`

#### Option C: Custom Backend
Connect to your own server/API endpoint.

### 6. SEO Optimization

Update meta tags in all HTML files:

```html
<title>Your Company Name - Professional Roofing Services</title>
<meta name="description" content="Your unique description here (150-160 characters)">
```

**SEO Checklist:**
- [ ] Update all page titles
- [ ] Write unique meta descriptions for each page
- [ ] Add alt text to all images
- [ ] Create sitemap.xml
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics

### 7. Add Google Analytics (Optional)

Add before closing `</head>` tag in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 8. Mobile Testing

Test your site on:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop (Chrome, Firefox, Safari, Edge)

**Testing Tools:**
- Chrome DevTools (F12 → Toggle Device Toolbar)
- [BrowserStack](https://www.browserstack.com/) - Test on real devices
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### 9. Performance Optimization

Before launching:
- [ ] Compress all images
- [ ] Test page speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Enable browser caching (if using a server)
- [ ] Minify CSS and JS (optional)

### 10. Deployment

#### GitHub Pages (Free):
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourrepo.git
git push -u origin main
```
Then enable GitHub Pages in repository settings.

#### Netlify (Free):
1. Drag and drop the `template` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Done! Your site is live.

#### Traditional Hosting:
Upload all files via FTP to your web server's public_html folder.

---

## Common Customizations

### Add a New Page

1. Copy an existing HTML file (e.g., `about.html`)
2. Rename it (e.g., `services.html`)
3. Update the content
4. Add navigation link to all pages:

```html
<a href="services.html" class="nav-link">SERVICES</a>
```

### Change Font

1. Go to [Google Fonts](https://fonts.google.com/)
2. Select a font and copy the `<link>` tag
3. Replace the font link in all HTML files
4. Update CSS variable in `css/style.css`:

```css
--font-family: 'Your Font Name', sans-serif;
```

### Add Social Media Icons

Add to footer in all HTML files:

```html
<div class="social-links" style="display: flex; gap: 1rem; margin-top: 1rem;">
    <a href="https://facebook.com/yourpage" target="_blank" style="color: #fff;">
        <svg width="24" height="24" fill="currentColor">
            <!-- Facebook icon SVG -->
        </svg>
    </a>
    <!-- Add more social icons -->
</div>
```

### Remove Google Reviews Badge

Delete lines 43-51 in `index.html`:
```html
<div class="google-reviews">
    <!-- ... -->
</div>
```

---

## Need Help?

- Check browser console (F12) for JavaScript errors
- Validate HTML: [W3C Validator](https://validator.w3.org/)
- Validate CSS: [CSS Validator](https://jigsaw.w3.org/css-validator/)
- Test forms: Use a test email to verify submissions

---

**Pro Tip:** Make changes incrementally and test after each change. This makes it easier to identify and fix issues!
