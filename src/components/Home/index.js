import {Navbar} from '../Navbar'
import Banner from '../Banner'
import Team from '../Team'
import Features from '../Features'
import GetStarted from '../GetStarted'
import Footer from '../Footer'
const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <Banner />
      <Team />
      <Features />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default Home
