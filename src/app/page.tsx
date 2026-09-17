import Nav           from "@/components/layout/Nav";
import Hero          from "@/components/sections/Hero";
import Ticker        from "@/components/sections/Ticker";
import Story         from "@/components/sections/Story";
import WhyTonito     from "@/components/sections/WhyTonito";
import ColdStrip     from "@/components/sections/ColdStrip";
import Recipes       from "@/components/sections/Recipes";
import Products      from "@/components/sections/Products";
import SocialFeed    from "@/components/sections/SocialFeed";
import Newsletter    from "@/components/sections/Newsletter";
import Footer        from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Story />
        <WhyTonito />
        <ColdStrip />
        <Recipes />
        <Products />
        <SocialFeed />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
