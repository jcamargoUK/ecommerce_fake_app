import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";


export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
