// Components
import ContactForm from './components/ContactForm';
import FAQSection from './components/FaqSectionAccordion';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Definition from './components/Definition';
import Feature from './components/Feature';
import CTA from './components/CTA';
import Curriculum from './components/Curriculum';
import Support from './components/Support';
import Carrer from './components/Carrer';
import Reason from './components/Reason';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <main className='scroll-smooth'>
        {/* ヘッダー */}
        <Header />

        {/* ヒーローセクション */}
        <Hero />

        {/* ビジョンセクション */}
        <Vision />

        {/* 課題の提示 */}
        <Definition />

        {/* 3つの特徴 */}
        <Feature />

        {/* 無料体験の CTA */}
        <CTA />

        {/* カリキュラム内容 */}
        <Curriculum />

        {/* スタカレの学習サポート */}
        <Support />

        {/* 無料体験の CTA */}
        <CTA />

        {/* スタカレの転職サポート */}
        <Carrer />

        {/* 未経験でも採用される理由 */}
        <Reason />

        {/* FAQ */}
        <FAQSection />

        {/* 無料カウンセリング申し込み */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
