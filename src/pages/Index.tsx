import Navbar from "@/components/Navbar";
import HeroPrestige from "@/components/HeroPrestige";
import MemberCounter from "@/components/MemberCounter";
import VisionScanner from "@/components/VisionScanner";
import FeaturedProperties from "@/components/FeaturedProperties";
import ProfitCenter from "@/components/ProfitCenter";
import TikTokVideos from "@/components/TikTokVideos";
import EliteViral from "@/components/EliteViral";
import SocialProof from "@/components/SocialProof";
import SecurityFooter from "@/components/SecurityFooter";
import ContactBar from "@/components/ContactBar";
import ChatWidget from "@/components/ChatWidget";
import FeatureGuard from "@/components/FeatureGuard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Navbar />
      <HeroPrestige />
      <MemberCounter />
      <FeatureGuard label="le Scan Vision IA">
        <VisionScanner />
      </FeatureGuard>
      <FeatureGuard label="les Villas de Prestige">
        <FeaturedProperties />
      </FeatureGuard>
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
