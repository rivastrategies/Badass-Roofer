# Roof Tech LLC Website Template

A professional, modern website template for roofing contractors and construction businesses. This template is a carbon copy of the Roof Tech LLC website, designed to be easily customizable for future projects.

## 🎨 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations and transitions
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and optimized structure
- **Contact Forms**: Built-in form handling with validation
- **Image Gallery**: Lightbox gallery with keyboard navigation
- **Fast Loading**: Optimized images and minimal dependencies
- **Easy to Customize**: Well-organized code with clear comments

## 📁 Project Structure

```
template/
├── index.html          # Homepage with hero section and contact form
├── about.html          # About page with company story and values
├── gallery.html        # Project gallery with lightbox
├── contact.html        # Contact page with detailed information
├── css/
│   └── style.css       # Main stylesheet with design system
├── js/
│   ├── main.js         # Core functionality and utilities
│   └── gallery.js      # Gallery lightbox functionality
├── images/
│   ├── logo.svg        # Main logo (replace with your own)
│   ├── logo-white.svg  # White logo for dark backgrounds
│   ├── hero-bg.jpg     # Hero section background image
│   ├── google-reviews.png  # Google Reviews badge
│   └── gallery/        # Gallery project images
│       ├── project-1.jpg
│       ├── project-2.jpg
│       └── ...
└── README.md           # This file
```

## 🚀 Quick Start

### 1. Clone or Download
Download this template to your local machine.

### 2. Customize Content

#### Update Company Information
Search and replace the following throughout all HTML files:
- **Company Name**: "Roof Tech LLC" → Your Company Name
- **Phone Number**: "(715) 768-6314" → Your Phone Number
- **Email**: "michaely@rooftechllc.com" → Your Email
- **Address**: "200805 County Hwy M, Auburndale, WI 54412" → Your Address
- **Service Area**: "Wisconsin and surrounding areas" → Your Service Area

#### Replace Images
1. **Logo**: Replace `images/logo.svg` and `images/logo-white.svg` with your company logo
2. **Hero Background**: Replace `images/hero-bg.jpg` with your own background image (recommended size: 1920x1080px)
3. **About Images**: Replace images in the about page
4. **Gallery**: Add your project photos to `images/gallery/` folder

#### Update Colors (Optional)
Edit `css/style.css` and modify the CSS variables at the top:
```css
:root {
    --primary-blue: #2B7FDB;      /* Main brand color */
    --dark-blue: #1A3A5C;         /* Dark accent color */
    --darker-blue: #0F2238;       /* Footer background */
}
```

### 3. Form Integration

The contact form currently shows a success message without sending data. To integrate with a real backend:

1. **Option A - Email Service (Formspree, EmailJS, etc.)**
   - Sign up for a service like [Formspree](https://formspree.io/)
   - Update the form action in `js/main.js`

2. **Option B - Custom Backend**
   - Update the form submission handler in `js/main.js` (line ~50)
   - Point it to your API endpoint

Example with Formspree:
```javascript
// In js/main.js, replace the form submission code with:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
});
```

### 4. Deploy

#### GitHub Pages
1. Create a new repository on GitHub
2. Push your template files
3. Go to Settings → Pages
4. Select your branch and save

#### Netlify
1. Drag and drop the template folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly

#### Traditional Hosting
1. Upload all files to your web server via FTP
2. Ensure the directory structure is maintained

## 🎨 Customization Guide

### Adding New Pages
1. Copy an existing HTML file (e.g., `about.html`)
2. Update the content
3. Add a navigation link in the header of all pages

### Modifying the Gallery
1. Add images to `images/gallery/` folder
2. Update `gallery.html` to include new images:
```html
<div class="gallery-item">
    <img src="images/gallery/your-image.jpg" alt="Project Description" loading="lazy">
</div>
```

### Changing Typography
The template uses **Inter** font from Google Fonts. To change:
1. Update the Google Fonts link in all HTML files
2. Update the `--font-family` variable in `css/style.css`

### Adding Social Media Links
Add social media icons to the footer in all HTML files:
```html
<div class="social-links">
    <a href="https://facebook.com/yourpage" target="_blank">
        <svg><!-- Facebook icon --></svg>
    </a>
    <!-- Add more social links -->
</div>
```

## 📱 Responsive Breakpoints

The template includes responsive design for:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## ⚡ Performance Tips

1. **Optimize Images**: Use tools like [TinyPNG](https://tinypng.com/) to compress images
2. **Enable Caching**: Configure your server to cache static assets
3. **Use WebP Format**: Convert images to WebP for better compression
4. **Lazy Loading**: Images already use lazy loading attribute

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 SEO Checklist

- [x] Semantic HTML structure
- [x] Meta descriptions on all pages
- [x] Proper heading hierarchy (H1, H2, H3)
- [x] Alt text for all images
- [x] Mobile-friendly design
- [ ] Add sitemap.xml (create one for your site)
- [ ] Add robots.txt (create one for your site)
- [ ] Submit to Google Search Console

## 🎯 Features Breakdown

### Homepage (`index.html`)
- Hero section with background image overlay
- Google Reviews badge with 5-star rating
- Contact information cards
- Contact form
- Footer with detailed contact info

### About Page (`about.html`)
- Company story section
- Statistics showcase
- "Why Choose Us" features grid
- Goals & Values section
- Personal message from owner
- Call-to-action buttons

### Gallery Page (`gallery.html`)
- Responsive image grid
- Lightbox modal for full-size viewing
- Keyboard navigation (arrow keys, ESC)
- Lazy loading for performance

### Contact Page (`contact.html`)
- Detailed contact information
- Business hours
- Contact form
- Multiple contact methods

## 🛠️ Technical Details

### CSS Features
- CSS Grid for layouts
- Flexbox for components
- CSS Variables for easy theming
- Smooth transitions and animations
- Mobile-first responsive design

### JavaScript Features
- Mobile menu toggle
- Form validation and submission
- Lightbox gallery
- Smooth scrolling
- Lazy loading
- Phone number formatting
- Notification system

## 📞 Support

For questions or issues with this template:
1. Check the code comments for guidance
2. Review this README thoroughly
3. Inspect browser console for errors

## 📄 License

This template is provided as-is for your use. Feel free to modify and customize it for your projects.

## 🎉 Credits

- **Design**: Based on Roof Tech LLC website
- **Icons**: SVG icons (inline)
- **Fonts**: Inter from Google Fonts
- **Images**: Replace with your own project images

---

**Happy Building! 🏗️**

For best results, customize all content, images, and contact information before deploying your site.
