"use client";
import { AppSidebar } from "@/components/app-sidebar";
import Contact02Page from "@/components/contact-02/contact-02";
import { QuickSearch } from "@/components/quick-search";
import RegisterPreview from "@/components/signup-form";
import { Team1 } from "@/components/theme-switch-test-component";
import { Slider } from "@/components/theme-switch-test-component2";
import { ModeToggle } from "@/components/theme-toggles";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useFetchOrganisationTemplates } from "@/sharedLib/useOrganisationTemplate";
import { useEffect } from "react";

export default function Page() {
  const { refetch: refetchTemplates } = useFetchOrganisationTemplates(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: templates } = await refetchTemplates();
        console.log("templates data", templates);
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };

    fetchData(); // Call the async function
  }, [refetchTemplates]);

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
              <Button onClick={() => refetchTemplates()}></Button>
              <RegisterPreview />
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
                    <Slider />
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                {/* Bottom Panel */}
                <ResizablePanel defaultSize={50} minSize={20}>
                  <div className="flex h-full items-center justify-center p-4">
                    <Contact02Page />
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
