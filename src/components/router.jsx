import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home"
import Footer from "./Footer";
import SinglePage from "./Single-page";



const routes= createBrowserRouter([
    {
      path:'/',
      element:
      <>
        <Navbar/>
      <Home/>
      <Footer/>
      </>
    },
    {
path:"/Single/:productId",
element:
<>
<Navbar/>
<SinglePage/>
<Footer/>
</>
    }
])

export default routes;