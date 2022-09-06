import { useState } from "react";
import { useEffect } from "react";
import apiNews from "../../api/Api";
import Layout from "../Layout";
import style from "./card.module.css"

const Home = () =>{
    const [news,setnews] = useState([]);
    const [search,SetSearch] = useState('');
    const [page,setPage] = useState(20);


    const fetchNews = async (props) =>{
        try{
            let result;

            if(props){
                result = await apiNews.get(`everything?domains=techcrunch.com,thenextweb.com&apiKey=9770eaa81d774e98881c1153166cdbd2&q=${props}&pageSize=${page}`);
            }
            else
            {
                result = await apiNews.get(`top-headlines?country=us&from=2022-09-04&to=2022-09-04&sortBy=popularity&apiKey=9770eaa81d774e98881c1153166cdbd2&pageSize=${page}`);
            }

            const data = result.data.articles;
            setnews(data);
            console.log(data);
            }
        catch (error)
        {
            console.log(error);
        }
    }

    useEffect(() =>{
         fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    console.log(news);

    return <Layout> 
    <div className={style.main}>
        <div className={style.search}>
         <input type="text" onChange={(e) => SetSearch(e.target.value)} value={search} className={style.searchbar} />      
         <button className={style.button} onClick={()=>fetchNews(search)}>Search</button>
        </div>

        <div className={style.Cards}>
            {news.map((item,index) =>{
                return (
                <div key={index} className={style.Card}>  
                    <img className={style.Card_Image} src={item.urlToImage} alt="" />

                    <div className={style.Card_Body}>
                        <h5 className={style.Card_Title}>{item.title}</h5>
                        <a href={item.url} className={style.Card_Link}>READ FULL ARTICLE</a>
                    </div>
                </div>
                ) })}
        </div>

        <div className={style.search}>
        <button className={style.button} onClick={()=>{setPage(page+20); fetchNews()}}>Load More</button>
        </div>
    </div>
    </Layout>
}

export default Home;