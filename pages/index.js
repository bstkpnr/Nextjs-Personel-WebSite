import Head from "next/head";
import Services from "../components/Services";
import Intro from "../components/Intro";
import {data} from "../data"
import Testimonials from "../components/Testimonials";

export default function Home({services}) {
  return (
    <div>
      <Head>
        <title>Beste Tokpınar</title>
        <meta name="description" content="Beste Tokpınar's blog" />
      </Head>
      <Intro />
      <Services services={services}/>
      <Testimonials />
    </div>
  );
}

export const getStaticProps = async () =>{
  const services = data;
  return {
    props:{services},
  }
}
