import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { hotjar } from "react-hotjar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.dataLayer.push({
        event: "pageview",
        page: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_HOTJAR_ID) {
      hotjar.initialize(process.env.NEXT_PUBLIC_HOTJAR_ID, 6);
    }
  }, []);

  return (
    <>
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <Script
          id="gtm-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');
          `,
          }}
        />
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
