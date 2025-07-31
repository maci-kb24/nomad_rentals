# Nomad Rentals - Long-term Rental Marketplace
A modern, full-stack rental marketplace platform designed for long-term accommodations, built with cutting-edge technologies and best practices.

## Project Overview
Nomad Rentals is an Airbnb-style platform specifically tailored for long-term rentals (1+ months). The platform connects property owners with digital nomads, remote workers, and professionals seeking quality long-term accommodations.

## Key Features (Planned)
User Authentication - Secure registration/login with email verification
Property Listings - Comprehensive property management with image uploads
Advanced Search - Filter by location, price, amenities, and availability
Booking System - Calendar integration with booking management
Review System - Host and guest reviews with ratings
Real-time Messaging - Communication between hosts and guests
Payment Integration - Secure payments with Stripe
Responsive Design - Mobile-first, fully responsive interface
🛠️ Tech Stack
Frontend
React 18 - Modern UI library with hooks
TypeScript - Type-safe development
TanStack Router - Type-safe routing with data loading
Tailwind CSS - Utility-first CSS framework
shadcn/ui - High-quality component library
React Hook Form - Performant forms with validation
Zod - Schema validation
Axios - HTTP client for API requests
Backend (Planned)
Node.js - JavaScript runtime
Express.js - Web application framework
TypeScript - Type-safe backend development
PostgreSQL - Relational database
Prisma - Database ORM and migrations
JWT - Authentication tokens
Multer - File upload handling
Development Tools
Vite - Fast build tool and dev server
ESLint - Code linting
Prettier - Code formatting
Git - Version control
📁 Project Structure
nomad-rentals/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API service layer
│   │   ├── types/         # TypeScript type definitions
│   │   └── utils/         # Utility functions
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── server/                # Node.js backend (coming soon)
├── database/              # Database schemas and migrations
├── docs/                  # Project documentation
└── README.md             # This file

## Getting Started
Prerequisites
Node.js 18+
npm or yarn
Git
Installation
Clone the repository
bash
git clone https://github.com/yourusername/nomad-rentals.git
cd nomad-rentals
Install frontend dependencies
bash
cd client
npm install
Start development server
bash
npm run dev
Open your browser
http://localhost:5173

📖 Development Progress
✅ Completed
 Project setup with Vite + React + TypeScript
 TanStack Router configuration
 Tailwind CSS integration
 shadcn/ui component library setup
 Basic routing and navigation
 Git repository initialization
🚧 In Progress
 Authentication pages (Login/Register)
 Property listing components
 Homepage design and layout
📋 Upcoming
 Backend API development
 Database schema design
 User authentication system
 Property management features
 Search and filtering
 Booking system
 Payment integration
 Deployment setup
🎨 Design System
This project uses a consistent design system built on:

Color Palette: Tailwind's default palette with custom brand colors
Typography: System fonts with carefully chosen hierarchy
Components: shadcn/ui components for consistency and accessibility
Spacing: 8px grid system
Responsive Design: Mobile-first approach
🧪 Testing Strategy
Unit Testing: Jest + React Testing Library
Integration Testing: API endpoint testing
E2E Testing: Playwright (planned)
Type Safety: TypeScript strict mode
📚 Learning Objectives
This project serves as a comprehensive learning experience covering:

## Frontend Stack

Modern React patterns and hooks
TypeScript in a real-world application
Advanced routing with TanStack Router
Form handling and validation
State management patterns


## Backend Development

Node.js and Express.js
Database design and relationships
API development and documentation
Authentication and authorization
File handling and storage
Full-Stack Integration
API design and consumption
Error handling strategies
Performance optimization
Security best practices
DevOps and Deployment
Git workflow and version control
Environment configuration
CI/CD pipeline setup
Production deployment
🤝 Contributing
This is a personal learning project, but feedback and suggestions are welcome! Feel free to:

Open issues for bugs or feature requests
Submit pull requests for improvements
Share feedback on code quality and architecture
📝 License
This project is open source and available under the MIT License.

📞 Contact
Marjan Stojanovski - your.email@example.com

Project Link: https://github.com/yourusername/nomad-rentals

This project is actively being developed as part of a portfolio to demonstrate full-stack development skills with modern technologies.

