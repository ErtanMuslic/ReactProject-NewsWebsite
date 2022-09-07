import React from "react";
import { useState } from "react";
import { BrowserRouter,Route,Routes} from "react-router-dom"
import Article from "../Article";
import Home from "../Home";
import Page404 from "../Page 404";
 
  export const UserContext = React.createContext();
  
  const LandingPage = (props) =>{

    const [img,setImg] = useState("No IMG");
    const [title,setTitle] = useState("No Title");
    const [author,setAuthor] = useState("No Author");
    const [content ,setContent] = useState("No Content");
    const [desc,setDesc] = useState("No Descripiton");
    const [source,setSource] = useState("No Source");
    const [date,setDate] = useState("No date");

  return (
    <BrowserRouter>
    <UserContext.Provider 
    value={{
      title,
      setTitle,
      img,
      setImg,
      author,
      setAuthor,
      content,
      setContent,
      desc,
      setDesc,
      source,
      setSource,
      date,
      setDate
      }}>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="*" element={<Page404/>}/>
     <Route path="/article" element={<Article/>}/>
    </Routes>
    </UserContext.Provider>
    </BrowserRouter>

  )
  }

  export default LandingPage;