
import './App.css';
import Root from "./routes/Root";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  });
  return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Root/>
        </ThemeProvider>
      </QueryClientProvider>
  );
}

export default App;
