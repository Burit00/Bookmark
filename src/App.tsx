import { Header } from './containers/Header';
import { HeroSection } from './containers/HeroSection';
import { FeaturesSection } from './containers/FeaturesSection';
import { PluginsSection } from './containers/PluginsSection';
import { FAQSection } from '@/containers/FAQSection';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PluginsSection />
      <FAQSection />
    </div>
  );
};

export default App;
