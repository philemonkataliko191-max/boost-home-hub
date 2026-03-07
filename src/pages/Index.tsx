import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import LiveSport from "@/components/LiveSport";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";
import ContactBar from "@/components/ContactBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <LiveSport />
      <Footer />
      <WhatsAppButton />
      <ChatWidget />
      <ContactBar />
    </div>
  );
};

export default Index;
