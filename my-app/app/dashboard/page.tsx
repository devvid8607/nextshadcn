import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/theme-toggles";
import { QuickSearch } from "@/components/quick-search";

export default function Page() {
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
          {/* Center: Command component as a search bar */}

          <div className="flex-1 px-4 flex justify-center">
            <QuickSearch />
          </div>

          {/* Navigation Menu at the right end */}
          <div className="ml-auto pr-4">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4">
                <NavigationMenuItem>
                  <NavigationMenuLink href="#">
                    <ModeToggle />
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#">Profile</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#">Settings</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>
        <ResizablePanelGroup direction="horizontal" className="flex-1">
          {/* CENTER CONTENT */}
          <ResizablePanel defaultSize={60} minSize={20}>
            <div className="h-full w-full p-4 bg-muted/50">
              <h2 className="mb-2 text-xl font-semibold">Center Content</h2>
              <p>
                Here is your main content area. Resizing the right panel will
                shrink or grow this area.
              </p>
            </div>
          </ResizablePanel>

          <ResizableHandle />

          {/* RIGHT PANEL */}
          <ResizablePanel defaultSize={40} minSize={20}>
            <div className="h-full w-full border-l bg-muted/50">
              {/* Nested vertical ResizablePanelGroup for top and bottom panels */}
              <ResizablePanelGroup direction="vertical" className="h-full">
                {/* Top Panel */}
                <ResizablePanel defaultSize={50} minSize={20}>
                  <div className="flex h-full items-center justify-center p-4">
                    <span className="font-semibold">Top Right Panel</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                {/* Bottom Panel */}
                <ResizablePanel defaultSize={50} minSize={20}>
                  <div className="flex h-full items-center justify-center p-4">
                    <span className="font-semibold">Bottom Right Panel</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </SidebarInset>
    </SidebarProvider>
  );
}
