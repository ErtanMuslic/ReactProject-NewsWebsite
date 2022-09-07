import style from "./Article.module.css";
import Layout from "../Layout";
import { useContext } from "react";
import { UserContext } from "../LandingPage";
import { Link } from "react-router-dom";

const Article = () =>{

    const {title,content,author,img,desc,date,source}= useContext(UserContext);

    return <Layout> 
    <div className={style.article}>
    <div  className={style.articleBox}>
        <img src={img} alt="error" />
        <p>By: {author}</p>
        <h2>Title: {title}</h2>
        <h3>{desc}</h3>
        <p>Published: {date} </p>
        <p>{content}</p>
        <p>Source: {source}</p>
    </div>
        <button className={style.articleButton}>
            <Link className={style.articleLink} to="/">Go Back</Link>
        </button>
    </div>
    </Layout>
}


export default Article;