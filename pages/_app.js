import Layout from "components/Layout";
import "styles/globals.css";
import { StateCartProvider } from "hooks/useContext";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <StateCartProvider>
        <Component {...pageProps} />
      </StateCartProvider>
    </Layout>
  );
}
export default MyApp;
