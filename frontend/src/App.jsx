// import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import { BounceLoader } from "react-spinners";

import Home from "./pages/Home/Home";
import SignIn from "./pages/Signin/SignIn";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(null);
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (token) {
  //       setIsLoggedIn(true);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //   }, 2000);
  // }, []);

  // if (isLoggedIn === null) {
  //   return (
  //     <div className="loading-container flex flex-row items-center justify-center relative top-[25rem] ">
  //       <BounceLoader color={"#f87171"} loading={true} size={100} />
  //     </div>
  //   );
  // }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
