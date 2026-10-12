# Jamia Ayesha Siddiqua — Website Editor Guide

**Version:** 1.0  
**Last updated:** October 2026  
**For:** Maulana Muhammad Saleem Rahmani / Jamia Admin Staff

---

## 📁 File Structure

```
jamia-website/
├── index.html          ← Homepage
├── about.html          ← About (tabbed: EN/UR/AR/HI + mission/vision/leadership)
├── departments.html    ← Shoba-e-Banin & Shoba-e-Banat
├── courses.html        ← All 6 courses in detail
├── admissions.html     ← Rules, online enquiry form, download link
├── news.html           ← News, notices, events
├── donations.html      ← UPI, bank transfer, monthly donor info
├── gallery.html        ← Photo gallery + video section
├── contact.html        ← Address, map, WhatsApp, contact form
├── privacy.html        ← Privacy policy (create when needed)
├── css/
│   └── style.css       ← All styling (colours, fonts, layout)
├── js/
│   └── main.js         ← All interactive behaviour
├── images/             ← Put all your photos here
└── downloads/          ← Put PDFs here (admission form, etc.)
```

---

## ✏️ SECTION 1 — Things to Replace Before Going Live

Open each file in a plain text editor (Notepad, VS Code, Notepad++).  
Search for the placeholder text and replace it with real information.

### Replace in EVERY page:

| Find this | Replace with |
|---|---|
| `+91 00000 00000` | Actual phone/WhatsApp number |
| `jamia@upi` | Actual UPI ID |
| `info@jamiaayesha.org` | Actual email address |
| `XXXX XXXX XXXX` | Actual bank account number |
| `XXXXXXXX` (IFSC) | Actual IFSC code |
| `Bank Name` | Actual bank name |

### In `index.html` and all pages — Logo:
Find:
```html
<div class="logo-placeholder">
```
Replace with:
```html
<img src="images/logo.png" alt="Jamia Logo" class="logo-img">
```
(First save your logo as `images/logo.png`, 200×200px recommended)

---

## 📢 SECTION 2 — How to Add/Edit News & Notices

Open `news.html` in a text editor.

### To add a new notice, copy this block and paste it at the TOP of the news list:

```html
<div class="news-card-full notice" data-category="notice">
  <div class="news-header">
    <div>
      <span class="badge badge-notice">Notice</span>
      <h3>YOUR NOTICE TITLE HERE</h3>
    </div>
    <span class="news-date">📅 Month Year</span>
  </div>
  <span class="urdu-news">اردو عنوان یہاں لکھیں</span>
  <p>Notice details in English go here. Write as much as needed.</p>
  <a href="#" class="read-more">Read More →</a>
</div>
```

### Change the badge type:
- **`notice`** → general notice (green badge)
- **`event`** → event announcement (gold badge) — also change class to `news-card-full event`
- **`result`** → exam results (blue badge) — also change class to `news-card-full result`
- **`holiday`** → holiday notice (red badge) — also change class to `news-card-full holiday`

### To link to a PDF download instead of a page:
```html
<a href="downloads/your-file.pdf" class="read-more" download>Download →</a>
```
Put the PDF file in the `downloads/` folder first.

---

## 🖼️ SECTION 3 — How to Add Photos to the Gallery

Open `gallery.html`.

### To add a real photo (replace a placeholder):

Find a block like this:
```html
<div class="g-item" data-category="campus" onclick="openLightbox(this)">
  <div class="g-placeholder"><span>🕌</span><p>Campus — Main Building</p></div>
  <div class="g-overlay"><span class="g-overlay-icon">🔍</span></div>
</div>
```

Replace the inner `<div class="g-placeholder">` with:
```html
<img src="images/your-photo-name.jpg" alt="Description of photo">
```

**Full example after replacement:**
```html
<div class="g-item" data-category="campus" onclick="openLightbox(this)">
  <img src="images/campus-front.jpg" alt="Jamia main building">
  <div class="g-overlay"><span class="g-overlay-icon">🔍</span></div>
</div>
```

### Photo categories for filtering:
Use `data-category="campus"`, `"events"`, `"classes"`, or `"graduation"`.

### To add a completely new photo:
Copy the block above, change `data-category` and the image path, paste inside `<div class="gallery-masonry" id="galleryGrid">`.

### Photo size recommendation:
- Horizontal photos: 800×600px minimum
- Save as `.jpg` for photos (smaller file size)
- Keep file names simple: `campus-1.jpg`, `event-2026.jpg` (no spaces)

---

## 📹 SECTION 4 — How to Add YouTube Videos

Open `gallery.html`. Find a `<div class="video-card">` block.

Replace the placeholder:
```html
<div class="video-thumb">
  <div class="video-thumb-placeholder">...</div>
  <div class="play-btn">▶</div>
</div>
```

With:
```html
<div class="video-thumb">
  <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
          allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
  </iframe>
</div>
```

**To get YOUR_VIDEO_ID:**
1. Open the YouTube video
2. Click Share → Embed
3. Copy just the ID from the URL — e.g., from `https://www.youtube.com/watch?v=dQw4w9WgXcQ` the ID is `dQw4w9WgXcQ`

---

## 📝 SECTION 5 — How to Edit Admissions Info

Open `admissions.html`.

### Update admission status (open/closed):
Find this section and change `Open` to `Closed` and the colour class as needed:
```html
<div class="info-row">
  <span class="label">Current Status</span>
  <span class="value open">🟢 Open</span>   ← Change to: 🔴 Closed
</div>
```

### Update dates:
```html
<div class="info-row"><span class="label">Last Date</span><span class="value">31 Dec 2026</span></div>
<div class="info-row"><span class="label">Classes Begin</span><span class="value">Jan 2027</span></div>
```
Change the dates to the correct ones.

### To link the admission form PDF:
1. Save the form as `downloads/admission-form.pdf`
2. The download button already points to this path — no change needed.

---

## 💚 SECTION 6 — How to Update Donation Details

Open `donations.html`.

### Replace UPI QR code:
Find:
```html
<div class="qr-area">
  <span>📲</span>
  <small>Place your UPI QR code image here</small>
</div>
```
Replace with:
```html
<div class="qr-area">
  <img src="images/upi-qr.png" alt="UPI QR Code" style="width:100%;">
</div>
```
Save your QR code image as `images/upi-qr.png`.

### Replace UPI ID:
Find: `jamia@upi`  
Replace with your actual UPI ID everywhere it appears.

### Update bank details:
Find the `<div class="bank-details">` section and update the account number, IFSC, and bank name.

---

## 🗺️ SECTION 7 — How to Add Google Maps

Open `contact.html`.

1. Go to [maps.google.com](https://maps.google.com)
2. Search for the Jamia's exact address
3. Click **Share** → **Embed a map** → Copy the `<iframe>` HTML
4. In `contact.html`, find:
```html
<div class="map-placeholder">
  <span>🗺️</span>
  ...
</div>
```
5. Replace the entire `<div class="map-placeholder">` block with the `<iframe>` code you copied.

---

## 🎨 SECTION 8 — How to Change Colours

Open `css/style.css`. The colours are all defined at the top under `:root { }`:

```css
:root {
  --green:        #1a6b3a;   ← Main green
  --green-dark:   #134f2b;   ← Dark green (header, footer)
  --green-light:  #e8f5ee;   ← Light green (backgrounds)
  --gold:         #c9a84c;   ← Gold accent
  --gold-light:   #f5e6c0;   ← Light gold
  ...
}
```

Change the hex values to change the entire site's colour theme at once.

---

## 🚀 SECTION 9 — How to Upload to Web Hosting (Go Live)

### What you need:
- Domain name (e.g., `jamiaayesha.org`)
- Web hosting account (Hostinger, GoDaddy, Namecheap cPanel hosting, etc.)

### Steps:

**1. Log in to your hosting cPanel**

**2. Open File Manager**

**3. Navigate to `public_html/`** (this is your website's root folder)

**4. Upload all files** — use the Upload button or drag and drop:
```
index.html
about.html
departments.html
courses.html
admissions.html
news.html
donations.html
gallery.html
contact.html
css/      (entire folder)
js/       (entire folder)
images/   (entire folder)
downloads/ (entire folder)
```

**5. Done!** Open your domain in a browser and the site will load.

### Using FTP (alternative to cPanel):
- Download FileZilla (free): https://filezilla-project.org
- Connect using your hosting's FTP credentials
- Upload the same files to `public_html/`

### Connecting your domain:
- In your domain registrar (GoDaddy, Namecheap, etc.), set the nameservers to your hosting provider's nameservers
- Your hosting company will provide these — usually `ns1.hostname.com` and `ns2.hostname.com`
- DNS propagation takes 1–24 hours

---

## 📋 SECTION 10 — Quick Checklist Before Going Live

- [ ] Replace all `+91 00000 00000` with actual phone number
- [ ] Replace `jamia@upi` with actual UPI ID
- [ ] Replace `info@jamiaayesha.org` with actual email
- [ ] Replace bank details with actual account number and IFSC
- [ ] Add logo image (`images/logo.png`)
- [ ] Add UPI QR code image (`images/upi-qr.png`)
- [ ] Add at least a few real photos to the gallery
- [ ] Add Google Maps embed to `contact.html`
- [ ] Update the WhatsApp number in the floating button (search for `wa.me/910000000000` and replace with actual number)
- [ ] Put the admission form PDF in `downloads/admission-form.pdf`
- [ ] Test on a mobile phone before showing to the school

---

## 🆘 SECTION 11 — Common Questions

**Q: The page looks different on my phone?**  
A: The site is fully responsive. If something looks off, it may be the browser cache — try a hard refresh (Ctrl+Shift+R or clear cache in browser settings).

**Q: The form doesn't send emails?**  
A: The current forms show a "thank you" message only. To actually receive emails:
- Sign up for free at [formspree.io](https://formspree.io)
- Follow the instructions in the form's HTML comment (search for "FORMSPREE" in the HTML files)
- It takes 5 minutes and requires no coding

**Q: How do I add a new page?**  
A: Copy any existing page (e.g., `contact.html`), rename it, and edit the content. Then add a link to it in the navigation menu in the copied page — find the `<ul class="nav-list">` section in the header.

**Q: Can I edit the Urdu text?**  
A: Yes. Find any text inside `<span class="urdu">` or `class="urdu-*"` tags and edit directly. Make sure your text editor is set to UTF-8 encoding.

**Q: The WhatsApp button is showing the wrong number?**  
A: Open each HTML file, search for `wa.me/910000000000` and replace `0000000000` with the actual 10-digit mobile number (no spaces, no +).

---

*This guide was prepared for Jamia Ayesha Siddiqua Lil Banin Wal Banat, Patancheru, Hyderabad.*  
*May Allah make this website a means of benefit for the Jamia and the community. Ameen.*
