import styles from '../styles/globals.css'
import SideBar from '../components/SideBar'
import ContentPane from '../components/ContentPane'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div class="container">
      <div class="main">
        <SideBar />
        <ContentPane />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
