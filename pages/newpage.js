import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "./layout";
const newPage = () => {
  return (
    <div>
      <Layout>
        <Header />
        <h1>Under Construction New Page</h1>
        <h3>
        <Link href="/">home page</Link>
        </h3>
        <Footer />
      </Layout>
    </div>
  );
};
export default newPage;
