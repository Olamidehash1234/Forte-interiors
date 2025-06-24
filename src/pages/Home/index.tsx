import Hero from './hero';
import Whoweare from './whoweare';
import Service from './services'
import Operate from './operate'
import Portfolio from './portfolio';
import Testimonials from './Testimonial';
import Faq from './FAQ'
import Consultation from './consultation'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Whoweare />
      <Service />
      <Operate />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Consultation />
    </div>
  );
};

export default HomePage;
