# PRE ULTIMATE GYMS - Modern Gym Website

A modern, responsive single-page gym website built with React and Tailwind CSS featuring a dark theme and mobile-first design.

## 🏋️‍♂️ Features

- **Modern Design**: Clean, professional UI with dark gym-style theme
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth scrolling, hover effects, and animations
- **Complete Sections**:
  - Hero section with compelling CTAs
  - Why Choose Us with key benefits
  - Membership plans with pricing
  - Image gallery with hover effects
  - Free trial booking form
  - Contact information with map placeholder
  - Sticky WhatsApp button

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Build for Production
```bash
npm run build
```

## 🛠️ Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Modern JavaScript** - ES6+ features
- **Responsive Design** - Mobile-first approach

## 📱 Sections Overview

1. **Hero Section** - Eye-catching intro with gym name and CTAs
2. **Why Choose Us** - Key benefits and features
3. **Membership Plans** - Three pricing tiers with features
4. **Gallery** - Responsive image grid with hover effects
5. **Free Trial Form** - Lead capture form with validation
6. **Contact** - Address, phone, email, and map placeholder
7. **WhatsApp Button** - Floating contact button

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`. Main colors:
- Primary: Blue gradient (#3b82f6 to #2563eb)
- Dark theme: Various shades of dark gray/black
- Accent: Purple for highlights

### Content
Update the following files to customize content:
- `src/components/Hero.js` - Main headline and tagline
- `src/components/MembershipPlans.js` - Pricing and features
- `src/components/Contact.js` - Contact information
- `src/components/WhatsAppButton.js` - WhatsApp number

### Images
Replace placeholder images in `src/components/Gallery.js` with your gym photos.

## 📞 Contact Integration

### WhatsApp
Update the phone number in `src/components/WhatsAppButton.js`:
```javascript
const phoneNumber = '919876543210'; // Replace with your number
```

### Form Handling
The free trial form currently logs to console. Integrate with your backend:
```javascript
// In src/components/FreeTrialForm.js
const handleSubmit = (e) => {
  e.preventDefault();
  // Add your API call here
  console.log('Form submitted:', formData);
};
```

## 🌟 Key Features

- **Smooth Scrolling**: Navigation smoothly scrolls to sections
- **Mobile Responsive**: Optimized for all screen sizes
- **Modern Animations**: Fade-in, slide-up, and hover effects
- **Professional Design**: Clean, gym-focused aesthetic
- **SEO Ready**: Semantic HTML structure
- **Fast Loading**: Optimized images and code

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

---

**PRE ULTIMATE GYMS** - Transform Your Body. Transform Your Life.