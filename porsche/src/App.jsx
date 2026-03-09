import Footer from "./Footer";
import PorscheMiniconfig from "./componentes/PorscheMiniconfig";
import PorscheSection from "./componentes/PorscheSection";
import PorscheDiscovery from "./componentes/PorscheDiscovery";
import Porscheheader from "./componentes/PorscheHeader";
import ModelsSection from "./componentes/PorscheSection";

function App() {
  return (
    <>
      <Porscheheader />
      <ModelsSection />
      <PorscheSection />
      <PorscheMiniconfig />
      <PorscheDiscovery />
      <Footer />
    </>
  );
}

export default App;