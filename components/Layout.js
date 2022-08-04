import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button/button";

function Layout({ children }) {
  


  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />

      
    </>
  );
}

export default Layout;
