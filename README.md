# React Vite ShadCN/UI Project

A modern React application built with Vite, TypeScript, Tailwind CSS, and ShadCN/UI components. This project serves as a comprehensive starter template featuring a complete UI component library based on Radix UI primitives and styled with Tailwind CSS.

## 🚀 Project Overview

This project is a sophisticated React application that demonstrates modern web development practices using:

- **React 18** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool with Hot Module Replacement (HMR)
- **TypeScript** - Type-safe development experience
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **ShadCN/UI** - High-quality, accessible UI components built on Radix UI
- **React Router** - Client-side routing for single-page application navigation
- **Radix UI** - Unstyled, accessible components for building design systems

The project includes a comprehensive collection of 50+ pre-built UI components, multiple demo pages showcasing different layouts and designs, and a robust theming system with dark mode support.

## 📁 Project Structure

```
react-vite/
├── public/                     # Static assets
│   ├── images/                # Image assets
│   ├── placeholder.svg        # Placeholder image
│   └── robots.txt            # SEO robots file
├── src/                       # Source code
│   ├── components/           # React components
│   │   ├── ui/              # ShadCN/UI component library (50+ components)
│   │   └── [demo-components] # Various demo page components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   │   └── utils.ts         # Class name utility functions
│   ├── App.tsx              # Main application component with routing
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles and CSS variables
│   └── App.css              # Component-specific styles
├── components.json           # ShadCN/UI configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.ts           # Vite build configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## 🎨 UI Components Library

The `src/components/ui` directory contains a comprehensive collection of 50+ professionally designed, accessible UI components:

### Core Components

#### **button.tsx**

- **Purpose**: Versatile button component with multiple variants and sizes
- **Functionality**:
  - 6 variants: default, destructive, outline, secondary, ghost, link
  - 4 sizes: default, sm, lg, icon
  - Support for icons and custom styling
  - Polymorphic component (can render as different elements)
- **Implementation**: Uses `class-variance-authority` for variant management and `@radix-ui/react-slot` for polymorphic behavior
- **Example Usage**:

```tsx
<Button variant="default" size="lg">Click Me</Button>
<Button variant="outline" size="sm">Secondary Action</Button>
```

#### **card.tsx**

- **Purpose**: Flexible card container with header, content, and footer sections
- **Functionality**:
  - Modular design with CardHeader, CardTitle, CardDescription, CardContent, CardFooter
  - Consistent spacing and styling
  - Responsive design with shadow and border styling
- **Implementation**: Composed of multiple forwarded ref components for maximum flexibility
- **Example Usage**:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
```

#### **input.tsx**

- **Purpose**: Styled input field with consistent design system integration
- **Functionality**:
  - Full HTML input element support
  - Integrated focus states and accessibility features
  - File input styling support
  - Responsive text sizing
- **Implementation**: Forward ref component with comprehensive styling via Tailwind classes
- **Example Usage**:

```tsx
<Input type="email" placeholder="Enter your email" />
<Input type="password" placeholder="Password" />
```

### Advanced Components

#### **dialog.tsx**

- **Purpose**: Modal dialog component built on Radix UI Dialog primitive
- **Functionality**:
  - Accessible modal with focus management
  - Overlay with backdrop blur
  - Smooth animations for open/close states
  - Portal rendering for proper z-index stacking
- **Implementation**: Wraps Radix UI Dialog with custom styling and animations

#### **accordion.tsx**

- **Purpose**: Collapsible content sections with smooth animations
- **Functionality**:
  - Single or multiple item expansion
  - Smooth height animations
  - Keyboard navigation support
  - Customizable trigger and content styling

#### **alert-dialog.tsx**

- **Purpose**: Confirmation dialogs for destructive actions
- **Functionality**:
  - Action confirmation workflows
  - Cancel and confirm button variants
  - Accessible focus management
  - Custom styling for different alert types

### Form Components

#### **form.tsx**

- **Purpose**: Form wrapper with React Hook Form integration
- **Functionality**:
  - Form validation with Zod schema support
  - Error message display
  - Field state management
  - Accessible form labels and descriptions

#### **checkbox.tsx**, **radio-group.tsx**, **switch.tsx**

- **Purpose**: Form input controls with consistent styling
- **Functionality**:
  - Accessible form controls
  - Custom styling with focus states
  - Integration with form libraries
  - Consistent design system adherence

### Navigation Components

#### **navigation-menu.tsx**

- **Purpose**: Accessible navigation menu with dropdown support
- **Functionality**:
  - Multi-level navigation
  - Keyboard navigation
  - Hover and focus states
  - Responsive design

#### **breadcrumb.tsx**

- **Purpose**: Navigation breadcrumb component
- **Functionality**:
  - Hierarchical navigation display
  - Separator customization
  - Link and text variants

### Data Display Components

#### **table.tsx**

- **Purpose**: Styled table components for data display
- **Functionality**:
  - Header, body, row, and cell components
  - Responsive table design
  - Consistent spacing and typography

#### **badge.tsx**

- **Purpose**: Small status indicators and labels
- **Functionality**:
  - Multiple variants (default, secondary, destructive, outline)
  - Size variations
  - Icon support

#### **avatar.tsx**

- **Purpose**: User profile image display with fallback
- **Functionality**:
  - Image loading with fallback text
  - Multiple sizes
  - Rounded styling options

### Layout Components

#### **separator.tsx**

- **Purpose**: Visual divider component
- **Functionality**:
  - Horizontal and vertical orientations
  - Customizable spacing and styling

#### **aspect-ratio.tsx**

- **Purpose**: Maintains aspect ratio for media content
- **Functionality**:
  - Responsive aspect ratio maintenance
  - Common ratio presets
  - Media container optimization

### Interactive Components

#### **tooltip.tsx**

- **Purpose**: Contextual information display on hover
- **Functionality**:
  - Accessible tooltip implementation
  - Multiple positioning options
  - Delay and animation controls

#### **popover.tsx**

- **Purpose**: Floating content container
- **Functionality**:
  - Positioned floating content
  - Click and hover triggers
  - Portal rendering

#### **dropdown-menu.tsx**

- **Purpose**: Contextual menu with actions
- **Functionality**:
  - Nested menu support
  - Keyboard navigation
  - Separator and label support

### Additional Components

The UI library also includes many other specialized components:

- **alert.tsx** - Status messages and notifications
- **calendar.tsx** - Date picker with React Day Picker integration
- **carousel.tsx** - Image/content carousel with Embla Carousel
- **chart.tsx** - Data visualization components with Recharts
- **collapsible.tsx** - Expandable content sections
- **command.tsx** - Command palette with search functionality
- **context-menu.tsx** - Right-click context menus
- **drawer.tsx** - Mobile-friendly slide-out panels
- **hover-card.tsx** - Hover-triggered content cards
- **input-otp.tsx** - One-time password input fields
- **label.tsx** - Form field labels with accessibility
- **menubar.tsx** - Application menu bar
- **pagination.tsx** - Page navigation controls
- **progress.tsx** - Progress indicators and loading bars
- **resizable.tsx** - Resizable panel layouts
- **scroll-area.tsx** - Custom scrollable areas
- **select.tsx** - Dropdown select components
- **sheet.tsx** - Slide-out panels and drawers
- **sidebar.tsx** - Navigation sidebar component
- **skeleton.tsx** - Loading placeholder components
- **slider.tsx** - Range input sliders
- **sonner.tsx** - Toast notification system
- **tabs.tsx** - Tabbed content interfaces
- **textarea.tsx** - Multi-line text input
- **toast.tsx** & **toaster.tsx** - Toast notification system
- **toggle.tsx** & **toggle-group.tsx** - Toggle button controls

## ⚙️ Tailwind Configuration

The project uses a sophisticated Tailwind CSS setup with custom design tokens:

### **tailwind.config.ts**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // CSS custom properties for theming
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
```

### **Key Features**:

- **CSS Custom Properties**: Uses HSL color values with CSS variables for dynamic theming
- **Dark Mode**: Class-based dark mode implementation
- **Custom Animations**: Smooth accordion animations using CSS keyframes
- **Design Tokens**: Consistent spacing, colors, and typography scales
- **Plugin Integration**: `tailwindcss-animate` for enhanced animations

### **postcss.config.js**

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

The PostCSS configuration enables Tailwind CSS processing and adds vendor prefixes for better browser compatibility.

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Quick Start

1. **Clone the repository**:

```bash
git clone https://github.com/Jeetanshu18/react-vite.git
cd react-vite
```

2. **Install dependencies**:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start development server**:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser** and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## 📜 Available Scripts

| Script              | Description                       |
| ------------------- | --------------------------------- |
| `npm run dev`       | Start development server with HMR |
| `npm run build`     | Build for production              |
| `npm run build:dev` | Build in development mode         |
| `npm run lint`      | Run ESLint for code quality       |
| `npm run preview`   | Preview production build locally  |

## 🏗️ Application Architecture

### **Entry Point (`src/main.tsx`)**

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

The application entry point renders the main App component with React's StrictMode for development warnings and concurrent features.

### **Main Application (`src/App.tsx`)**

The App component implements a comprehensive routing system with React Router, featuring:

- **Multi-page Architecture**: 20+ demo routes showcasing different components and layouts
- **Component Showcase**: Various marketing pages, dashboards, and form implementations
- **Route Organization**: Structured routing for different application sections

### **Styling System (`src/index.css`)**

The global stylesheet implements:

- **Tailwind Integration**: Base, components, and utilities layers
- **CSS Custom Properties**: Comprehensive design token system for light/dark themes
- **Typography**: System font stack with optimized rendering
- **Theme Variables**: 60+ CSS custom properties for colors, spacing, and effects

### **Utility Functions (`src/lib/utils.ts`)**

```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

The `cn` utility function combines `clsx` for conditional classes and `tailwind-merge` for intelligent Tailwind class merging, preventing style conflicts.

### **Component Architecture**

- **Composition Pattern**: Components are built using composition for maximum flexibility
- **Forward Refs**: All UI components use `React.forwardRef` for proper ref forwarding
- **TypeScript Integration**: Full type safety with proper prop interfaces
- **Accessibility**: ARIA attributes and keyboard navigation support throughout

### **Build Process**

- **Vite**: Ultra-fast development with instant HMR
- **SWC**: Speedy Web Compiler for faster TypeScript compilation
- **Path Aliases**: `@/` alias for clean import statements
- **Tree Shaking**: Automatic dead code elimination for smaller bundles

## 🎯 Key Dependencies

### **Core Framework**

- `react` (^18.3.1) - UI library with concurrent features
- `react-dom` (^18.3.1) - DOM rendering for React
- `typescript` (^5.5.3) - Type-safe JavaScript

### **Build Tools**

- `vite` (^5.4.19) - Next-generation frontend tooling
- `@vitejs/plugin-react-swc` (^3.5.0) - Fast React refresh

### **UI Framework**

- `@radix-ui/*` - Unstyled, accessible UI primitives
- `tailwindcss` (^3.4.11) - Utility-first CSS framework
- `class-variance-authority` (^0.7.1) - Component variant management
- `tailwind-merge` (^2.5.2) - Intelligent Tailwind class merging

### **Routing & State**

- `react-router-dom` (^6.30.1) - Declarative routing
- `@tanstack/react-query` (^5.56.2) - Server state management

### **Form Handling**

- `react-hook-form` (^7.53.0) - Performant forms with validation
- `@hookform/resolvers` (^3.9.0) - Validation schema resolvers
- `zod` (^3.23.8) - TypeScript-first schema validation

### **Icons & Assets**

- `lucide-react` (^0.462.0) - Beautiful & consistent icon library

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Maintain component composition patterns
- Ensure accessibility standards (WCAG 2.1)
- Write meaningful commit messages
- Test components across different screen sizes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ShadCN/UI](https://ui.shadcn.com/) - For the excellent component library
- [Radix UI](https://www.radix-ui.com/) - For accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Vite](https://vitejs.dev/) - For the blazing fast build tool
