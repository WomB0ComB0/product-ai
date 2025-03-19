/* eslint-disable @typescript-eslint/no-unused-vars */
import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Brain, CheckCircle, Clock } from 'lucide-react';
import { AppSidebar } from "~/lib/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/lib/components/ui/breadcrumb"
import { Separator } from "~/lib/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/lib/components/ui/sidebar"

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
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
