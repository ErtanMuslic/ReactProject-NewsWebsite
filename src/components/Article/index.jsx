import style from "./Article.module.css";
import Layout from "../Layout";
import { useContext } from "react";
import { UserContext } from "../LandingPage";
import { Link } from "react-router-dom";

const Article = () =>{

    const {title,content,author,img,desc}= useContext(UserContext);

    return <Layout> 
    <div className={style.article}>
    <div  className={style.articleBox}>
        <img 
        src={img} 
        alt="error" 
        style={{width:"100%"}}/>
        <h2 className={style.articleTitle}>Title: {title}</h2>
        <h3 className={style.articleText}>{desc}</h3>
        <p className={style.articleText}>{content}</p>
        <p className={style.articleText}>By: {author}</p>
    </div>
        <button className={style.articleButton}>
            <Link className={style.articleLink} to="/">Go Back</Link>
        </button>
    </div>
    </Layout>
}


export default Article;