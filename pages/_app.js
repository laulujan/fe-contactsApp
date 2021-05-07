import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css';
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp
