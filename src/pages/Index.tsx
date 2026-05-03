import { Navbar } from "@/components/nexivo/Navbar";
import { Hero } from "@/components/nexivo/Hero";
import { LogoMarquee } from "@/components/nexivo/LogoMarquee";
import { Services } from "@/components/nexivo/Services";
import { Solutions } from "@/components/nexivo/Solutions";
import { Playground } from "@/components/nexivo/Playground";
import { Work } from "@/components/nexivo/Work";
import { WhyNexivo } from "@/components/nexivo/WhyNexivo";
import { Testimonials } from "@/components/nexivo/Testimonials";
import { CTA } from "@/components/nexivo/CTA";
import { Footer } from "@/components/nexivo/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Services />
        <Solutions />
        <Playground />
        <Work />
        <WhyNexivo />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
