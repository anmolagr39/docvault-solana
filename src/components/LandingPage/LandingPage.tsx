import Footer from "./Footer";
import HeroSection from "./HeroSection/HeroSection";

import Navbar from "./Navbar/Navbar";
import WhyDocVault from "./WhyDocVault/WhyDocVault";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyDocVault />
     
      <Footer />
    </div>
  );
};
export default LandingPage;
