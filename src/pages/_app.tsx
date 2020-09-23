import { Provider } from 'next-auth/client'

export default function App({ Component, pageProps }) {
  console.log(pageProps.session)
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}
