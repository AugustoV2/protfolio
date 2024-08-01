import Script from 'next/script'
 
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <script type="module" defer crossorigin src="https://api.babble-ai.com/api/v1/script/chat-bot/66abf2ac1acfb352b52d355e"></script>
    </>
  )
}