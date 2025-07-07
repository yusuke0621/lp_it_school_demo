import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <div className="py-20">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
