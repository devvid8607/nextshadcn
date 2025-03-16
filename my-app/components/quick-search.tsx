"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
// import { useHotkeys } from "react-hotkeys-hook"; // optional if you want ⌘K hotkey

export function QuickSearch() {
  const [open, setOpen] = React.useState(false);

  // Optional: open the dialog with a hotkey (e.g. cmd+k or ctrl+k)
  //   useHotkeys("meta+k, ctrl+k", (event) => {
  //     event.preventDefault();
  //     setOpen(true);
  //   });

  return (
    <>
      {/* This div is the "search bar" in the header */}
      <div
        onClick={() => setOpen(true)}
        className="relative flex w-[220px] items-center rounded-md border px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted/50 cursor-pointer"
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="flex-1">Quick search...</span>
        <kbd className="pointer-events-none flex select-none items-center gap-1 rounded border bg-muted px-1 font-mono text-[10px] uppercase opacity-100">
          ⌘K
        </kbd>
      </div>

      {/* The Dialog that shows the command menu */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 overflow-hidden shadow-2xl sm:max-w-xl sm:rounded-lg">
          {/* Add this header + title for accessibility */}
          <DialogHeader>
            <DialogTitle className="sr-only">Quick Search</DialogTitle>
          </DialogHeader>

          <Command>
            <div className="flex items-center border-b px-3">
              {/* <Search className="mr-2 h-4 w-4 text-muted-foreground" /> */}
              <CommandInput placeholder="Search or jump to..." />
              {/* <button
                onClick={() => setOpen(false)}
                className="ml-auto rounded p-1 text-muted-foreground hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </button> */}
            </div>
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Start your search here...">
                <CommandItem>
                  <span>Users</span>
                  <CommandShortcut>See All</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <span>Departments</span>
                  <CommandShortcut>See All</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <span>Products</span>
                  <CommandShortcut>See All</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <span>Mails</span>
                  <CommandShortcut>See All</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Recent Searches">
                <CommandItem>Order #1234</CommandItem>
                <CommandItem>Sales Report</CommandItem>
                <CommandItem>Invoices</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
