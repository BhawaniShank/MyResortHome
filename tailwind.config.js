/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors
        'desert-sand': '#f1cea8', // Main Background
        'off-white': '#F5F5F5', // Secondary Background and Input Background
        'indigo-blue': '#2E3A8C', // Footer Background

        // Text Colors
        'clay-red': '#42100c', // Primary Text Color
        'dark-gray': '#333333', // Secondary Text Color
        'soft-gray': '#BDC3C7', // Muted Text Color

        // Accent Colors (for buttons, links, hover states, etc.)
        'burnt-orange': '#D35400', // Primary Button Color
        'button-text': '#FFFFFF', // Button Text Color (Off-White)
        'golden-yellow': '#F1C40F', // Button Hover Color and Hover Mask Color
        'turquoise-blue': '#1ABC9C', // Link Color and Nav Background Color

        // Navigation Bar Colors
        'nav-text': '#FFFFFF', // Nav Text Color (Off-White)
        'nav-item-hover': '#D35400', // Nav Item Hover Color (Burnt Orange)

        // Forms & Inputs
        'input-border': '#BDC3C7', // Input Border Color (Soft Gray)
        'input-focus-border': '#D35400', // Input Focus Border Color (Burnt Orange)

        // Hover Effects
        'card-hover': '#D1A85C', // Card Hover Effect (Darker Desert Sand)

        // Icon Colors
        'icon-color': '#9C3D3D', // Icon Color (Clay Red)
        'icon-hover-color': '#F1C40F', // Icon Hover Color (Golden Yellow)
      },
    },
  },
  plugins: [],
}
