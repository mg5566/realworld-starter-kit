import Footer from '@/components/Footer'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
  <Html>
    <Head>
      {/* NextJS 에서 styleSheet 을 이렇게 사용하는 것은 좋은 방법이 아니지만 style template 이 CDN 으로 제공되기 때문에 방법이 없음. */}
      <link
        href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
        rel="stylesheet"
        type="text/css"
      />
      {/* <!-- Import the custom Bootstrap 4 theme from our hosted CDN --> */}
      <link rel="stylesheet" href="//demo.productionready.io/main.css" />
    </Head>
    <body>
      <Main />
      <NextScript />
      <Footer />
    </body>
  </Html>
  )
}
