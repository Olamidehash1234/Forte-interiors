import Hero from './hero';
import Story from './story';
import Values from './values'
import Ceo from './ceo'
// import P from './portfolio';
// import Testimonials from './Testimonial';
// import Faq from './FAQ'
import Consultation from '../Home/consultation'

const AboutPage = () => {
  return (
    <div>
      <Hero />
      <Story />
      <Values />
      <Ceo />
      <Consultation />
    </div>
  );
};

export default AboutPage;
