import LandingSection from "@/components/Home/LandingSection";
import OurStorybook from "@/components/Home/OurStorybook";
import Scroll from "@/components/Home/Scroll";
import StoriesTold from "@/components/Home/stories-told";

export default function Home() {
  return (
    <div className="w-full pt-32 px-4">
      <LandingSection />
      <Scroll />
      <OurStorybook />
      <StoriesTold />
    </div>
  );
}
