import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Brain, CheckCircle, Clock } from 'lucide-react';

type Metric = {
  title: string;
  value: string;
  trend: string;
  icon: React.ElementType;
};

const metrics: Metric[] = [
  { title: 'Active Projects', value: '12', trend: '+2', icon: Brain },
  { title: 'Tasks Due Today', value: '8', trend: '-3', icon: Clock },
  { title: 'Risks Identified', value: '3', trend: '+1', icon: AlertTriangle },
  { title: 'Completed Tasks', value: '45', trend: '+5', icon: CheckCircle },
];

const insights = [
  'Risk detected: Project Alpha timeline may slip based on current velocity',
  'Opportunity: User feedback suggests high demand for Feature X',
  'Resource optimization: Team capacity underutilized in Sprint 4',
];

const deadlines = [
  { task: 'Feature Review Meeting', date: 'Today, 2:00 PM' },
  { task: 'Sprint Planning', date: 'Tomorrow, 10:00 AM' },
  { task: 'Stakeholder Update', date: 'Friday, 3:00 PM' },
];

export const Route = createFileRoute("/dashboard/")({
  component: DashboardIndex,
});

function DashboardIndex() {
  const handleNewProject = () => {
    // Implement new project creation logic
    console.log('New project clicked');
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Product Dashboard</h1>
        <button
          onClick={handleNewProject}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-indigo-700"
          aria-label="Create new project"
        >
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <metric.icon className="h-8 w-8 text-indigo-600" />
              <span className={`text-sm font-medium ${metric.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {metric.trend}
              </span>
            </div>
            <h3 className="text-sm text-gray-500">{metric.title}</h3>
            <p className="text-2xl font-bold text-gray-800">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">AI Insights</h2>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-3 rounded-lg bg-gray-50 p-3">
                <Brain className="mt-0.5 h-5 w-5 text-indigo-600" />
                <p className="text-sm text-gray-600">{insight}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">Upcoming Deadlines</h2>
          <div className="space-y-4">
            {deadlines.map((deadline, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-indigo-600" />
                  <span className="text-sm text-gray-800">{deadline.task}</span>
                </div>
                <span className="text-sm text-gray-500">{deadline.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
