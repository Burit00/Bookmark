import { Header } from './containers/Header';
import { HeroSection } from './containers/HeroSection';
import { FeaturesSection } from './containers/FeaturesSection';
import { PluginsSection } from './containers/PluginsSection';
import { FAQSection } from '@/containers/FAQSection';
import { NewsletterSection } from '@/containers/NewsletterSection';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PluginsSection />
      <FAQSection />
      <NewsletterSection />
    </div>
  );
};

export default App;
