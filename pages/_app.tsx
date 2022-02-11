import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <meta name="twitter:card" content="player"/>
      <meta name="twitter:site" content="modelviewer"/>
      <meta name="twitter:player:width" content="480"/>
      <meta name="twitter:player:height" content="480"/>
      <meta name="twitter:player" content="https://modelviewer.dev/examples/twitter/player.html?src=https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb&poster=https://modelviewer.dev/shared-assets/models/NeilArmstrongPoster.webp&alt=Neil%20Armstrong%27s%20Spacesuit%20from%20the%20Smithsonian%20Digitization%20Programs%20Office%20and%20National%20Air%20and%20Space%20Museum&environmentImage=https%3A%2F%2Fmodelviewer.dev%2Fshared-assets%2Fenvironments%2Fmoon_1k.hdr"/>
      <meta property="og:title" content="3D model-viewer embed"/>
      <meta property="og:description" content="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"/>
      <meta property="og:image" content="https://modelviewer.dev/shared-assets/models/NeilArmstrong.png"/>

      <meta httpEquiv="refresh" content="0; url='https://modelviewer.dev/'"/>

    </Head>
    <Component {...pageProps} />
  </>)
}
export default MyApp
