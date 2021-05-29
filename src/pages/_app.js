import { Provider } from 'react-redux'
import { useStore } from './../redux/store/store'
import Layout from './../components/layout/layout'

//styles
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Layout><Component {...pageProps} /></Layout>
    </Provider>
  )
}
