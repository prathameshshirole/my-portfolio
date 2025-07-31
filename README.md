# Prathamesh Shirole - Data Insights Portfolio

Welcome to my personal portfolio website showcasing my journey and work as a Data Science graduate with a focus on data analytics and visualization.

## Live Website

**URL**: https://pshirole.me

## About This Project

This portfolio website serves as a comprehensive showcase of my skills, projects, and professional journey in the field of data science. It features:

- Professional introduction and background
- Educational qualifications and certifications
- Work experience and key accomplishments
- Technical skills in data analysis tools and technologies
- Portfolio of data science projects with detailed case studies
- Contact information and professional links

## Technologies Used

This project is built with modern web technologies:

- **Vite** - Fast build tool and development server
- **TypeScript** - Strongly typed programming language
- **React** - Component-based UI library
- **shadcn/ui** - Reusable component library built with Tailwind CSS and Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Declarative routing for React
- **React Hook Form** - Performant, flexible forms with easy validation
- **Zod** - TypeScript-first schema declaration and validation
- **Recharts** - Composable charting library

## Development Setup

To run this project locally, you'll need Node.js installed on your system.

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The website will be available at `http://localhost:5173` by default.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── assets/         # Images and static assets
├── lib/            # Utility functions
└── hooks/          # Custom React hooks
```

Key sections include:
- Hero Section with introduction and call-to-action buttons
- About Section with professional background
- Education Section with academic qualifications
- Experience Section with work history
- Skills Section with technical competencies
- Projects Section showcasing data science work
- Contact Section with contact form and links

## Deployment

This project can be deployed to any static site hosting service:

- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

To build for production:
```bash
npm run build
```

The build output will be in the `dist/` directory.

## Customization

To customize this portfolio for your own use:

1. Update personal information in the component files
2. Replace profile photo and other images in `src/assets/`
3. Modify project details in the Projects section
4. Update contact information and social media links
5. Adjust color scheme in `tailwind.config.ts` if desired

## Connecting a Custom Domain

Yes, you can connect a custom domain to your deployed site. The process varies depending on your hosting provider:

- **Vercel**: Add a domain in project settings
- **Netlify**: Update DNS records with your domain provider
- **GitHub Pages**: Configure custom domain in repository settings

Consult your chosen hosting provider's documentation for detailed instructions.
