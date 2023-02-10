import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "./layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <h1>Under Construction</h1>
        <h3>
          <Link href="/newpage">new page</Link>
        </h3>
        <Footer />
      </Layout>
    </>
  );
}
