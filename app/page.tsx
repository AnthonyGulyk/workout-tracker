import { Button } from "@/components/ui/button";
import { PlusCircle, Activity, Calendar, History } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Track Your Fitness Journey</h1>
          <p className="text-xl mb-8">Log workouts, track progress, achieve goals.</p>
          <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/workout/new">
              <PlusCircle className="mr-2 h-5 w-5" />
              Start New Workout
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Activity className="h-6 w-6 text-blue-600" />
                <h3 className="font-medium">Track Workout</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Log your exercises, sets, and reps in real-time.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/workout/new">Start Tracking</Link>
              </Button>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
                <h3 className="font-medium">Plan Workout</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule and plan your upcoming workouts.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/workout/plan">Plan Workout</Link>
              </Button>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <History className="h-6 w-6 text-blue-600" />
                <h3 className="font-medium">View History</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Check your workout history and progress.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/history">View History</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Workouts Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Recent Workouts</h2>
          <div className="bg-white rounded-lg border p-6 text-center">
            <p className="text-muted-foreground">
              Your recent workouts will appear here once you start tracking.
            </p>
            <Button variant="outline" className="mt-4" asChild>
              <Link href="/workout/new">Record Your First Workout</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
