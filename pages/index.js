import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beste Tokpınar</title>
        <meta name="description" content="Beste Tokpınar's blog" />
      </Head>
      <Intro />
    </div>
  );
}
