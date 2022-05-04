import { Toaster } from "react-hot-toast";
import Routes from "./Routes/index";
import GlobalStyle from "./Styles/global";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
    <Header />
      <Toaster />
      <GlobalStyle />
      <Routes />
    <Footer />
    </>
  );
};

export default App;
