import BannerSlider from "./homePageComponents/BannerSlider";
import AboutUs from "./homePageComponents/AboutUs";


export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <BannerSlider />
      <AboutUs />
    </div>
  );
}
