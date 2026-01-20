# Kasper - Portfolio & Agency Website Template

A modern, responsive, and feature-rich portfolio/agency website template built with HTML5, CSS3, and vanilla JavaScript. This template showcases a professional design suitable for creative agencies, freelancers, or businesses.

## 🌟 Features

### 🎨 Design & Layout
- **Fully Responsive**: Adapts seamlessly to all screen sizes (mobile, tablet, desktop)
- **Modern UI**: Clean and professional design with smooth animations
- **Custom Color Scheme**: CSS variables for easy customization
- **Font Awesome Icons**: Rich iconography throughout the site
- **Google Fonts Integration**: Open Sans font family

### 🔄 Interactive Components

#### Image Slider (Hero Section)
- Automatic slideshow with 3-second intervals
- Manual navigation with left/right arrows
- Clickable bullet indicators
- Smooth transitions between slides

#### Portfolio Gallery
- Filterable portfolio items (All, App, Photo, Web, Print)
- "Load More" functionality to display additional items
- Hover effects on images
- Dynamic flex-basis adjustments based on screen size

#### Testimonials Carousel
- Rotating testimonials with multiple boxes
- Automatic rotation every 3 seconds
- Manual navigation with bullet indicators
- Displays 2 testimonials at a time

#### Animated Statistics
- Counter animations that trigger on scroll
- Displays key metrics (Coffee Drinks, Projects, Mails, Awards)
- Smooth counting animation up to target numbers

#### Skills Progress Bars
- Animated progress bars
- Scroll-triggered animations
- Visual representation of skill levels

#### Pricing Plans
- Interactive "Buy" buttons
- Confirmation modal with overlay
- Purchase confirmation flow
- Prevents page scroll when modal is active

### 📱 Sections

1. **Header/Navigation**
   - Fixed navigation bar
   - Mobile-friendly menu
   - Search icon
   - Smooth scroll to sections

2. **Home/Hero**
   - Full-screen image slider
   - Call-to-action content
   - Navigation controls

3. **Services**
   - Icon-based service cards
   - Responsive grid layout
   - Service descriptions

4. **Design Features**
   - Mobile mockup showcase
   - Feature list with icons
   - Visual presentation

5. **Portfolio**
   - Filterable image gallery
   - Category-based filtering
   - Expandable grid

6. **Video Section**
   - Autoplay background video
   - Overlay text content
   - Call-to-action button

7. **About**
   - Company information
   - Visual representation

8. **Statistics**
   - Animated counters
   - Icon-based stats display

9. **Skills & Testimonials**
   - Client testimonials carousel
   - Skill progress indicators

10. **Quote Section**
    - Featured quote display

11. **Pricing**
    - Multiple pricing tiers
    - Interactive purchase flow
    - Contact call-to-action

12. **Newsletter Subscription**
    - Email subscription form
    - Icon integration

13. **Contact**
    - Contact form
    - Contact information

14. **Footer**
    - Social media links (Email, Facebook, Instagram, LinkedIn)
    - Logo display
    - Copyright information

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation

1. **Clone or download** the project files to your local machine

2. **Project Structure**:
   ```
   my_Second-project/
   ├── index.html          # Main HTML file
   ├── main.js             # JavaScript functionality
   ├── css/
   │   ├── kaspar.css      # Main stylesheet
   │   ├── normalize1.css  # CSS reset
   │   └── all.min.css     # Font Awesome icons
   ├── images/             # Image assets
   ├── webfonts/           # Font files
   └── front/static/       # Additional resources
   ```

3. **Open** `index.html` in your web browser

### Usage

Simply open the `index.html` file in any modern web browser. The site is fully functional without requiring a server.

## 🎨 Customization

### Colors
Modify the CSS variables in `kaspar.css`:
```css
:root {
    --main-color: #19c8fa;
    --transparent-color: rgb(15 116 143 / 70%);
    --border-color: #333;
    --poring-color: #777;
    --main-transition: 0.3s;
}
```

### Content
- Edit text content directly in `index.html`
- Replace images in the `images/` folder
- Update service descriptions, portfolio items, and testimonials

### Functionality
Modify `main.js` to adjust:
- Slider timing intervals
- Animation speeds
- Counter targets
- Portfolio categories

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and animations
- **JavaScript (ES6+)**: Vanilla JavaScript for all interactions
- **Font Awesome**: Icon library
- **Google Fonts**: Open Sans font family
- **Normalize.css**: CSS reset for consistency

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 991px
- **Desktop**: 992px - 1199px
- **Large Desktop**: ≥ 1200px

## ⚡ JavaScript Features

### Key Functions:
- `home()`: Manages hero slider transitions
- `swatch()`: Controls testimonial carousel
- `startcon()`: Animates statistics counters
- Scroll event listeners for triggering animations
- Portfolio filtering logic
- Modal/overlay management for pricing

### Auto-Rotating Elements:
- Hero images (3-second interval)
- Testimonials (3-second interval)

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 👨‍💻 Developer

**Made by Mohamed Halima**

## 📄 License

This project is available for personal and commercial use.

## 🔗 Social Links

- Email: m714506@gmail.com
- Facebook: [modern.hulk](https://www.facebook.com/modern.hulk)
- Instagram: [@mohamedo_ohany](https://www.instagram.com/mohamedo_ohany)
- LinkedIn: [Mohammed Halima](https://www.linkedin.com/in/mohammed-halima-21b40a1b3)

## 📝 Notes

- All images are placeholders and should be replaced with actual content
- Video file (`awesome-video.mp4`) should be added to the images folder
- Ensure all image paths are correct for your deployment
- Form submissions currently have no backend - implement server-side handling as needed

---

**Designed by Kasper | Developed by Mohamed Halima**
