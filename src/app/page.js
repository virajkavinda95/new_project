import Image from "next/image";
import Banner from "./components/Banner";
import CategorySection from "./components/Category/CategorySection";
import AboutCard from "./components/AboutCard";
import CommonSection from "./components/CommonSection/CommonSection";

export default function Home() {
  return (
    <>
      <Banner />
      <CategorySection />
      <AboutCard />
      <CommonSection />
      <CommonSection />
      <CommonSection />
    </>
  );
}
