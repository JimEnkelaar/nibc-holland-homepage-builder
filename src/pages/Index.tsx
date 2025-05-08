import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat bg-white">
      <Header />
      <main>
        <Hero />
        {/* The current screenshot doesn't show other sections */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
