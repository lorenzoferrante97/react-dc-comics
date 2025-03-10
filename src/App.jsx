
// import components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

//import data
import linksMain from "./data/linksMain";
import linksShop from "./data/linksShop";
import linksDc from "./data/linksDc";
import linksSites from "./data/linksSites";

function App() {

  // const linksMain = [
  //   { id: 1, content: "Characters", url: "#", isActive: false },
  //   { id: 2, content: "Comics", url: "#", isActive: true },
  //   { id: 3, content: "Movies", url: "#", isActive: false },
  //   { id: 4, content: "TV", url: "#", isActive: false },
  //   { id: 5, content: "Games", url: "#", isActive: false },
  //   { id: 6, content: "Collectibles", url: "#", isActive: false },
  //   { id: 7, content: "Videos", url: "#", isActive: false },
  //   { id: 8, content: "Fans", url: "#", isActive: false },
  //   { id: 9, content: "News", url: "#", isActive: false },
  //   { id: 10, content: "Shop", url: "#", isActive: false }
  // ];


  return (
    <>
      <Header links={linksMain} />
      <Main />
      <Footer linksMain={linksMain} linksShop={linksShop} linksDc={linksDc} linksSites={linksSites} />
    </>
  );
}

export default App;
