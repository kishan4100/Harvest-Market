import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
function Home() {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products type={1} />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
