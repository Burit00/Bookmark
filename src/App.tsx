import { Header } from './containers/Header';
import { HeroSection } from './containers/HeroSection';
import { FeaturesSection } from './containers/FeaturesSection';
import { PluginsSection } from './containers/PluginsSection';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PluginsSection />
    </div>
  );
};

export default App;
