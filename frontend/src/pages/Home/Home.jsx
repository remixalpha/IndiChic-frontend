import CustomNavbar from "../../components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Promo from "./components/Promos/promo";

export default function Home() {
  return (
    <div className="bg-primary flex flex-col ">
      <div>
        <CustomNavbar />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Promo />
      </div>
      <div>
        <Promo />
      </div>
    </div>
  );
}
