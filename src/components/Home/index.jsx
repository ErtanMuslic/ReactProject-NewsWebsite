import { useState } from "react";
import { useEffect } from "react";
import apiNews from "../../api/Api";
import Layout from "../Layout";
import style from "./home.module.css"

const Home = (props) =>{
    const [news,setnews] = useState([]);
    const [search,SetSearch] = useState('');
    const [page,setPage] = useState(20);
    const [category,setCategory] = useState('general');
    const [newcategory,SetnewCategory] = useState('popularity');
    const [drop,setdrop] = useState(false);


    const fetchNews = async (props) =>{
        try{
            let result;
            if(search!==''){
                result = await apiNews.get(`everything?sortBy=${newcategory}&q=${search}&pageSize=20&apiKey=9770eaa81d774e98881c1153166cdbd2`);
            }
            else
            {
                result = await apiNews.get(`top-headlines?country=us&category=${category}&apiKey=9770eaa81d774e98881c1153166cdbd2`);
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
    },[category,newcategory]);

    console.log(news);

    return <Layout> 
    <div className={style.main}>
        <div className={style.search}>
         <input type="text" onChange={(e) => SetSearch(e.target.value)} value={search} className={style.searchbar} />      
         <button className={style.button} onClick={()=>fetchNews(search)}>Search</button>


        <div className={style.dropdown}>
            {search!=='' ?(
            <p>Sorted By: {newcategory.replace(/^./, newcategory[0].toUpperCase())}</p>
            ):(
            <p>Sorted By: {category.replace(/^./, category[0].toUpperCase())}</p>
            )}
            <img 
            src="https://cdn-icons-png.flaticon.com/512/32/32450.png" 
            alt=""
            style={{width:"30px",height:"20px",cursor:"pointer"}}
            onClick={()=>{
                setdrop(!drop);
                console.log(drop);
            }} />
        </div>
        {drop ? (
            <div className={style.categories}>
                {search!=='' ?(
                    <div>
                    <p className={style.categoriesText} onClick={()=> {SetnewCategory('popularity')}}>Popularity</p>
                    <p className={style.categoriesText} onClick={()=> {SetnewCategory('relevancy')}}>Relevancy</p>
                    <p className={style.categoriesText} onClick={()=> {SetnewCategory('publishedAt')}}>Published At</p>
                    </div>
                ):(
                    <div>
                    <p className={style.categoriesText} onClick={()=> {setCategory('general')}}>General</p>
                    <p className={style.categoriesText} onClick={()=> {setCategory('business')}}>Business</p>
                    <p className={style.categoriesText} onClick={()=> {setCategory('sports')}}>Sports</p>
                    <p className={style.categoriesText} onClick={()=> {setCategory('science')}}>Science</p>
                    <p className={style.categoriesText} onClick={()=> {setCategory('entertainment')}}>Entertainment</p>
                    <p className={style.categoriesText} onClick={()=> {setCategory('health')}}>Health</p>
                    <p className={style.categoriesText} onClick={()=> {setCategory('technology')}}>Technology</p>
                    </div>
                )}
            </div>
        ):(
            null
        )}               
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