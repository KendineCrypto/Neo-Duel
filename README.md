# MegaETH GameFi Landing Page

A modern, responsive landing page for the MegaETH GameFi project built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, futuristic GameFi aesthetic with smooth animations
- **Responsive Layout**: Optimized for both desktop and mobile devices
- **Interactive Elements**: Hover effects, smooth transitions, and micro-animations
- **Countdown Timer**: Dynamic countdown with smooth number transitions
- **Modal System**: Early access modal with social media integration
- **Sticky Header**: Navigation that stays at the top while scrolling

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Responsive Design** - Mobile-first approach

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd megaeth-gamefi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.js          # Sticky navigation header
│   ├── Hero.js            # Main hero section with CTA
│   └── Footer.js          # Footer with countdown timer
├── App.js                 # Main application component
├── index.js              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎨 Components

### Header
- Sticky positioning with backdrop blur
- Project branding with gradient text
- Responsive navigation menu
- Mobile menu button (expandable)

### Hero Section
- Large, animated title with gradient text
- Call-to-action button with hover effects
- Feature cards with icons and descriptions
- Smooth entrance animations

### Early Access Modal
- Overlay modal with backdrop blur
- Social media integration buttons
- Smooth open/close animations
- Responsive design

### Footer
- Live countdown timer (7 days from start)
- Social media links
- Newsletter subscription
- Quick navigation links

## 🎯 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- Primary: `gamefi-*` colors (blue variants)
- Background: Dark gray gradients
- Accents: Purple and blue gradients

### Countdown Timer
To adjust the countdown duration, modify the initial state in `Footer.js`:
```javascript
const [timeLeft, setTimeLeft] = useState({
  days: 7,      // Change this value
  hours: 0,
  minutes: 0,
  seconds: 0
});
```

### Animations
All animations are powered by Framer Motion and can be customized in each component:
- Entrance animations with staggered delays
- Hover effects with scale and rotation
- Smooth transitions between states

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Uses Tailwind's responsive prefixes
- **Grid Layouts**: Responsive grid systems for different screen sizes
- **Touch Friendly**: Optimized for touch interactions

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder**
   - Upload to your hosting provider
   - Configure for single-page application routing

## 🔧 Development

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Adding New Components
1. Create a new file in `src/components/`
2. Import and use Framer Motion for animations
3. Follow the existing component structure
4. Add responsive Tailwind classes

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ for the GameFi community**

