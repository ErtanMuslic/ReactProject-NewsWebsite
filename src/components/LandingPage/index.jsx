import { BrowserRouter,Route,Routes} from "react-router-dom"
import Article from "../Article";
import Home from "../Home";
import Page404 from "../Page 404";
 
  
  
  const LandingPage = () =>{
  return <div>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="*" element={<Page404/>}/>
     <Route path="/article" element={<Article/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  }

  export default LandingPage;