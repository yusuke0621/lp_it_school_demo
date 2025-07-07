// Components
import FAQSection from "./components/FaqSectionAccordion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Feature from "./components/Feature";
import CTA from "./components/CTA";
import Curriculum from "./components/Curriculum";
import Support from "./components/Support";
import Carrer from "./components/Carrer";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="scroll-smooth">
        {/* ヘッダー */}
        <Header />

        {/* ヒーローセクション */}
        <Hero />

        {/* ビジョンセクション */}
        <Vision />

        {/* 3つの特徴 */}
        <Feature />

        {/* 無料体験の CTA */}
        <CTA />

        {/* カリキュラム内容 */}
        <Curriculum />

        {/* Growbase Lab の学習サポート */}
        <Support />

        {/* 無料体験の CTA */}
        <CTA />

        {/* Growbase Lab の転職サポート */}
        <Carrer />

        {/* FAQ */}
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
