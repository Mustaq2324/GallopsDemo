import React from "react";
import Address from "../Components/Address";
import About from "../Components/About/About";
import Gallery from "../Components/Gallery/Gallery";
import Carousel from "../Components/Caousel/Carousel";
import Reservation from "../Components/Reservation";
import Newsletter from "../Components/Newsletter/Newsletter";
import Online from "../Components/Order/order";
import Video from "../Components/Video";
import "../index.css"
import NavabarHome from "../Components/Navbar/NavbarHome";
function Home() {
  return (
    <div className="overflow-x-hidden">
      <NavabarHome/>
    <Video/>
      <Address />
      <About />
      <Gallery />
      <Online />
      <Carousel />
      <Reservation />
      <Newsletter />
    </div>
  );
}

export default Home;
