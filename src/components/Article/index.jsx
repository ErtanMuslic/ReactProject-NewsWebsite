import style from "./Article.module.css";
import Layout from "../Layout";

const Article = () =>{
    return <Layout> 
        <div className={style.article}>
        <div  className={style.articleBox}>
        <img src="" alt="" />
        <p>By:Author</p>
        <h2>Title:Title</h2>
        <p>Description</p>
        <p>publishdate</p>
        <p>source:source</p>
    </div>
    </div>
    </Layout>
}


export default Article;