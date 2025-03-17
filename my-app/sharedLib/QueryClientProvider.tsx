"use client";
import React, { ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider as RQProvider,
} from "@tanstack/react-query";

export const queryClient = new QueryClient();

interface QueryClientProviderProps {
  children: ReactNode;
}

const QueryClientProvider: React.FC<QueryClientProviderProps> = ({
  children,
}) => {
  return (
    <RQProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom" /> */}
    </RQProvider>
  );
};

export default QueryClientProvider;
