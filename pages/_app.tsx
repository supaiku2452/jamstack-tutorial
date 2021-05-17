import { Provider } from "next-auth/client";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { Hydrate } from "react-query/hydration";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef<undefined | QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
