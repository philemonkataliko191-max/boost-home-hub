import Navbar from "@/components/Navbar";
import HeroPrestige from "@/components/HeroPrestige";
import VisionScanner from "@/components/VisionScanner";
import FeaturedProperties from "@/components/FeaturedProperties";
import ProfitCenter from "@/components/ProfitCenter";
import TikTokVideos from "@/components/TikTokVideos";
import EliteViral from "@/components/EliteViral";
import SocialProof from "@/components/SocialProof";
import SecurityFooter from "@/components/SecurityFooter";
import ContactBar from "@/components/ContactBar";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Navbar />
      <HeroPrestige />
      <VisionScanner />
      <FeaturedProperties />
      <ProfitCenter />
      <TikTokVideos />
      <EliteViral />
      <SocialProof />
      <SecurityFooter />
      <ChatWidget />
      <ContactBar />
    </div>
  );
};

export default Index;
