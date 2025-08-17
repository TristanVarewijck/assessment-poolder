import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function TemplateHero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-gray-900 tracking-tight">
              Project Template
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A modern Next.js template with TypeScript, Tailwind CSS, Drizzle ORM, and comprehensive testing setup.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-600">Next.js 15</CardTitle>
                <CardDescription>
                  Latest Next.js with App Router, Server Components, and Turbopack
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-600">TypeScript</CardTitle>
                <CardDescription>
                  Full TypeScript support with strict type checking and modern features
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-600">Tailwind CSS</CardTitle>
                <CardDescription>
                  Utility-first CSS framework with custom components and animations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-16 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              What's Included
            </h3>
            <ul className="text-sm text-gray-600 space-y-1 text-left">
              <li>• Drizzle ORM with MySQL/SQLite support</li>
              <li>• Jest testing setup with React Testing Library</li>
              <li>• ESLint and Prettier configuration</li>
              <li>• Radix UI components with shadcn/ui styling</li>
              <li>• Form handling with React Hook Form and Zod validation</li>
              <li>• Database migrations and schema management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
