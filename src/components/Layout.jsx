import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="c-layout">
      <Header />
      {children}
      <Footer/>
    </div>
  );
};
