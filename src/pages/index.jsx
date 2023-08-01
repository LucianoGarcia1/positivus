import Case from "@/components/Case";
import { Faq } from "@/components/Faq";
import { Layout } from "@/components/Layout";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import Head from "next/head";
const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Positivus | Home</title>
        <meta name="author" content="Luciano Garcia | Frontend Developer" />
        <meta
          name="description"
          content="Maximize your online success with our digital marketing agency! We drive business growth and success through strategic services such as SEO, PPC, social media marketing, and high-performance content creation. Reach the top of search results, attract more customers, and strengthen your digital presence. Join us and turn your company into a leading force in the online world!"
        />
      </Head>
      <main className="p-home">
        <Services />
        <Case />
        <Faq />
        <Team />
      </main>
    </Layout>
  );
};
export default Home;
