import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MKSDVTS5');`,
          }}
        />
        {/* MTS Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function (dl, id) {
              window[dl] = window[dl] || [];
              const script = document.createElement('script'),
                    params = dl !== 'dataLayer' ? '?l=' + dl : '';
              script.async = true;
              script.src = \`https://tag.a.mts.ru/container/\${id}/tag.js\${params}\`;
              document.head.appendChild(script);
            })('dataLayer', '019c5128-597e-7a91-a9a8-8a1052b0a67b');`,
          }}
        />
      </Head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MKSDVTS5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
