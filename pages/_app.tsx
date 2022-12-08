import "../styles/dist.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      },
    },
  });
  <link rel="shortcut icon" href="/public/Star-Wars-Icons-No.1.jpg" />;
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
