import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()
export const wrapperQuery= ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)