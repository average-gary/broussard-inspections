# Technology Stack

## Core Framework
- **MKStack**: AI-powered framework for building Nostr applications
- **React 18.x**: Modern React with hooks, concurrent rendering, and improved performance
- **TypeScript**: Type-safe development with relaxed strict mode configuration
- **Vite**: Fast build tool and development server with SWC for React compilation

## UI & Styling
- **TailwindCSS 3.x**: Utility-first CSS framework with custom design system
- **shadcn/ui**: 48+ unstyled, accessible UI components built with Radix UI
- **CSS Variables**: HSL-based color system supporting light/dark themes
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Nostr Integration
- **@nostrify/nostrify**: Core Nostr protocol framework for Deno and web
- **@nostrify/react**: React hooks and components for Nostr integration
- **nostr-tools**: Additional Nostr utilities and cryptographic functions
- **NIP Support**: Comprehensive implementation of 50+ Nostr Improvement Proposals

## State Management & Data
- **TanStack Query**: Data fetching, caching, and synchronization
- **React Context**: Global state management for app configuration and authentication
- **Local Storage**: Persistent storage for user preferences and authentication
- **Multi-relay Support**: Distributed data storage across Nostr relays

## Payments & Wallet Integration
- **@getalby/sdk**: Lightning wallet integration
- **WebLN**: Browser-based Lightning Network payments
- **QR Code Generation**: Payment request QR codes with qrcode library

## Development Tools
- **ESLint**: Code linting with custom rules and TypeScript support
- **Vitest**: Fast unit testing with jsdom environment
- **React Testing Library**: Component testing utilities
- **Custom ESLint Rules**: Project-specific linting rules in `eslint-rules/`

## Build & Deployment
- **Vite Build**: Optimized production builds with error-level logging
- **NostrDeploy**: Deployment to decentralized hosting via `nostr-deploy-cli`
- **PWA Support**: Progressive Web App capabilities for mobile experience

## Common Commands

```bash
# Development
npm run dev          # Start development server with auto-install

# Testing
npm test            # Run full test suite (TypeScript, ESLint, Vitest, build)

# Building
npm run build       # Production build with 404.html generation

# Deployment
npm run deploy      # Build and deploy to NostrDeploy.com
```

## Path Aliases
- `@/*` maps to `./src/*` for clean imports
- Components, hooks, lib, and UI utilities use consistent aliasing

## Key Dependencies
- **Form Handling**: react-hook-form with Zod validation and @hookform/resolvers
- **Routing**: react-router-dom with BrowserRouter
- **Date Handling**: date-fns for date manipulation
- **Animations**: tailwindcss-animate for smooth transitions
- **Icons**: lucide-react for consistent iconography