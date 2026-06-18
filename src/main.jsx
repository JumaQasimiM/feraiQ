import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import App from "./App.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Query configuration
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 50000,
      staleTime: 10000, // data is fresh for 10s

      //  Remove inactive query cache after 8 seconds
      gcTime: 8000, // (when component is inactive)
      retry: 5,
      refetchOnMount: false,
      refetchOnReconnect: true, // when loss the connection with server or refetch when the app reconnects to the network
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
