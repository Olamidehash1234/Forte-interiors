import Hero from './hero'
import Header from './header'
import Grid from './service-grid'
import Finish from './finish'
import Consult from '../Home/consultation'

const ServicesPage = () => {
  return (
    <div>
      <Hero />
      <Header />
      <Grid />
      <Finish />
      <Consult />
      {/* Add more sections or components as needed */}
    </div>
  );
}

export default ServicesPage;