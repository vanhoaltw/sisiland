import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import ProductService from "@/components/HomeSections/ProductServices";
import Trading from "@/components/HomeSections/Trading";
import Market360 from "@/components/HomeSections/Market360";
import Partnership from "@/components/HomeSections/Partnership";

const Home = () => {
  return (
    <Layout>
      <div className="py-12 space-y-16">
        <section className="container mx-auto">
          <Banner />
        </section>

        <ProductService />
        <Trading />
        <Market360 />
        <Partnership />
      </div>
    </Layout>
  );
};

export default Home;
