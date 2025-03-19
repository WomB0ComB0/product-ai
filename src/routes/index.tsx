import { Link, createFileRoute, useRouter } from "@tanstack/react-router";
import { Brain, Target, Zap, Sparkles } from "lucide-react";
import authClient from "~/lib/auth-client";
import ThemeToggle from "~/lib/components/ThemeToggle";
import { Button } from "~/lib/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
  loader: ({ context }) => {
    return { user: context.user };
  },
});

function Home() {
  const { queryClient } = Route.useRouteContext();
  const { user } = Route.useLoaderData();
  const router = useRouter();

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictive analytics for your product decisions.',
    },
    {
      icon: Target,
      title: 'Smart Prioritization',
      description: 'Automatically prioritize features and tasks based on data-driven insights.',
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Monitor product performance and team productivity in real-time.',
    },
    {
      icon: Sparkles,
      title: 'Automated Workflows',
      description: 'Streamline your product management process with intelligent automation.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="ml-2 text-2xl font-bold text-gray-800 dark:text-white">TanStarter</span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <Button
                onClick={async () => {
                  await authClient.signOut();
                  await queryClient.invalidateQueries({ queryKey: ["user"] });
                  await router.invalidate();
                }}
                variant="destructive"
                size="sm"
              >
                Sign out
              </Button>
            ) : (
              <Button asChild variant="default" size="sm">
                <Link to="/signin">Sign in</Link>
              </Button>
            )}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 dark:text-white">
            Transform Your Development with TanStarter
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            {user ? (
              `Welcome back, ${user.name}! Ready to continue building?`
            ) : (
              "Empower your development with intelligent insights, automated workflows, and data-driven recommendations."
            )}
          </p>
          <Button asChild size="lg" className="px-8">
            <Link to={user ? "/dashboard" : "/signin"}>
              {user ? "Go to Dashboard" : "Start Free Trial"}
            </Link>
          </Button>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={`features-${+index}`} className="rounded-xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md dark:bg-gray-800">
              <feature.icon className="mb-4 h-12 w-12 text-indigo-600 dark:text-indigo-400" />
              <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-indigo-600 p-12 text-center text-white dark:bg-indigo-500">
          <h2 className="mb-4 text-3xl font-bold">Ready to start building?</h2>
          <p className="mb-8 text-lg">Join thousands of developers who are already using TanStarter.</p>
          <Button asChild variant="secondary" size="lg" className="px-8">
            <Link to={user ? "/dashboard" : "/signin"}>
              {user ? "Go to Dashboard" : "Get Started Now"}
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
