import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
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
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
