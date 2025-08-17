# Next.js Template

A modern, production-ready Next.js 15+ template with TypeScript, Tailwind CSS, Drizzle ORM, and comprehensive testing setup. Perfect for building scalable web applications.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15+ with App Router, TypeScript, Tailwind CSS
- **Database**: Drizzle ORM with MySQL/SQLite support
- **Testing**: Jest setup with React Testing Library
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI with shadcn/ui styling
- **Code Quality**: ESLint, Prettier, and TypeScript strict mode
- **Performance**: Optimized bundling, lazy loading, and Core Web Vitals
- **Developer Experience**: Hot reload, TypeScript, and comprehensive tooling

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Git

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nextjs-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up the database**

   ```bash
   npm run db:generate
   npm run db:push
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

The project uses SQLite with Drizzle ORM for development:

```bash
# Generate migrations
npm run db:generate

# Apply migrations
npm run db:migrate

# Push schema changes (development)
npm run db:push

# Open Drizzle Studio
npm run db:studio
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run Jest tests
- `npm run format` - Format code with Prettier
- `npm run db:generate` - Generate database migrations
- `npm run db:push` - Push schema to database

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── hello/         # Example API endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   └── sitemap.ts         # Dynamic sitemap
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── TemplateHero.tsx  # Template hero component
│   ├── Navbar.tsx        # Navigation component
│   └── Footer.tsx        # Footer component
└── lib/                  # Utilities and configurations
    ├── db/               # Database setup
    ├── validations/      # Zod schemas
    └── utils.ts          # Utility functions
```

## 🎨 Design System

### Colors

- **Primary Blue**: `#2563eb` (blue-600)
- **Accent Colors**: Tailwind CSS color palette
- **Background**: Clean white with subtle gradients
- **Text**: Gray scale for readability

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight with good line height

## 📱 Responsive Design

The site is built mobile-first with responsive breakpoints:

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Configuration Files

- `tailwind.config.ts` - Tailwind CSS configuration
- `drizzle.config.ts` - Database configuration
- `jest.config.js` - Testing configuration
- `.prettierrc` - Code formatting rules
- `next.config.ts` - Next.js configuration

## 🌐 SEO Features

- **Metadata**: Comprehensive OpenGraph and Twitter cards
- **Sitemap**: Dynamic sitemap generation
- **Robots.txt**: Search engine crawling rules
- **Structured Data**: JSON-LD for rich snippets
- **Performance**: Optimized Core Web Vitals

## 📊 Form Validation

The template includes example form validation:

- **Client-side**: Real-time validation with React Hook Form
- **Server-side**: Zod schema validation
- **Example Schema**: User registration with name, email, and bio
- **Error Handling**: User-friendly error messages

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables if needed
3. Deploy automatically on push

### Other Platforms

1. Build the project: `npm run build`
2. Start the server: `npm run start`
3. Configure your hosting platform

## 🔒 Environment Variables

Create a `.env.local` file for local development:

```env
# Database Configuration
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=nextjs_template

# For SQLite (alternative)
DATABASE_URL="file:./local.db"

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID="your-ga-id"

# Google Search Console (optional)
NEXT_PUBLIC_GOOGLE_VERIFICATION="your-verification-code"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm test`
5. Format code: `npm run format`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:

- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Updates

To update dependencies:

```bash
npm update
npm audit fix
```

## 📈 Performance Monitoring

The site includes:

- Core Web Vitals optimization
- Image optimization with Next.js
- Efficient bundling
- Lazy loading for components

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Drizzle ORM
