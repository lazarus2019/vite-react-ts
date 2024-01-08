import { DefaultOptions, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

interface IAppProviderProps {
  children: ReactNode;
}

const queryConfig: DefaultOptions = {
  queries: {
    throwOnError: false, // rename of useErrorBoundary (v4)
    retry: false,
    refetchOnWindowFocus: false,
  },
};

const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

export const AppProvider = ({ children }: IAppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {import.meta.env.MODE !== "test" && <ReactQueryDevtools />}

      {children}
    </QueryClientProvider>
  );
};
