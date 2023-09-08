import Nav from "./Components/Nav";
import {
  Hero,
  PopularProducts,
  Services,
  SuperQuality,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer
} from "./sections";

const App = () => {
  return (
  <main className="relative">
    {/* -----------------------------Navigation Bar----------------------------- */}
    <Nav />

    {/* -----------------------------Hero Section----------------------------- */}
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>

    {/* -----------------------------Popular Products----------------------------- */}
    <section className="padding">
      <PopularProducts />
    </section>

    {/* -----------------------------Super Quality----------------------------- */}
    <section className="padding">
      <SuperQuality />
    </section>

    {/* -----------------------------Services----------------------------- */}
    <section className="padding-x py-10">
      <Services />
    </section>

    {/* -----------------------------Special Offer----------------------------- */}
    <section className="padding">
      <SpecialOffer />
    </section>

    {/* -----------------------------Customer Reviews----------------------------- */}
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>

    {/* -----------------------------Subscribe----------------------------- */}
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>

    {/* -----------------------------Footer----------------------------- */}
    <section className="padding-x padding-t bg-black pb-8">
      <Footer />
    </section>
  </main>
  );
};

export default App;
