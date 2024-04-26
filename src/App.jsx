import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "./shared/components/Slider";
import Header from "./shared/layouts/Header";
import FormTracking from "./shared/components/FormTracking";
import Services from "./shared/components/Services";
import News from "./shared/components/New";
import ImpressiveFigures from "./shared/components/ImpressiveFigures";
import PostOffice from "./shared/components/PostOffice";
import Weather from "./shared/components/Weather";
import FooterTop from "./shared/layouts/FooterTop";
import FooterBottom from "./shared/layouts/FooterBottom";

export default function App() {
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <FormTracking></FormTracking>
      <Services></Services>
      <News></News>
      <ImpressiveFigures></ImpressiveFigures>
      <PostOffice></PostOffice>
      <Weather></Weather>
      <footer>
      <FooterTop></FooterTop>
      <FooterBottom></FooterBottom>
      </footer>
      
    </>
  );
}
