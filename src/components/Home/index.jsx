import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import apiNews from "../../api/Api";
import { UserContext } from "../LandingPage";
import Layout from "../Layout";
import style from "./home.module.css"

const Home = (props) =>{
    const [news,setnews] = useState([]);
    const [search,SetSearch] = useState('');
    const [page,setPage] = useState(1);
    const [category,setCategory] = useState('general');
    const [newcategory,SetnewCategory] = useState('popularity');
    const [drop,setdrop] = useState(false);
    const {setTitle,setImg,setAuthor,setContent,setDesc,setSource,setDate} = useContext(UserContext);


    const fetchNews = async (props) =>{
        try{
            let result;
            if(search!==''){
                result = await apiNews.get(`everything?sortBy=${newcategory}&q=${search}&pageSize=20&page=${page}&apiKey=9770eaa81d774e98881c1153166cdbd2`);
            }
            else
            {
                result = await apiNews.get(`top-headlines?country=us&category=${category}&page=${page}&apiKey=9770eaa81d774e98881c1153166cdbd2`);
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

    const HandleProps = () =>{
        setImg(props.img);
        setTitle(props.title);
        setContent(props.content);
        setAuthor(props.author);
        setDesc(props.description);
        setDate(props.publishedAt);
        setSource(props.source);
    };

    useEffect(() =>{
         fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[category,newcategory,page]);

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
                    <p className={style.categoriesText} onClick={()=> {SetnewCategory('popularity');setPage(1);}}>Popularity</p>
                    <p className={style.categoriesText} onClick={()=> {SetnewCategory('relevancy');setPage(1);}}>Relevancy</p>
                    <p className={style.categoriesText} onClick={()=> {SetnewCategory('publishedAt');setPage(1);}}>Published At</p>
                    </div>
                ):(
                    <div>
                    <p className={style.categoriesText} onClick={()=> {setCategory('general'); setPage(1);}}>General</p>
                    <p className={style.categoriesText} onClick={()=> {setCategory('business'); setPage(1);}}>Business</p>
                    <p className={style.categoriesText} onClick={()=> {setCategory('sports'); setPage(1);}}>Sports</p>
                    <p className={style.categoriesText} onClick={()=> {setCategory('science'); setPage(1);}}>Science</p>
                    <p className={style.categoriesText} onClick={()=> {setCategory('entertainment'); setPage(1);}}>Entertainment</p>
                    <p className={style.categoriesText} onClick={()=> {setCategory('health'); setPage(1);}}>Health</p>
                    <p className={style.categoriesText} onClick={()=> {setCategory('technology'); setPage(1);}}>Technology</p>
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
                        <button className={style.Card_Link} onClick={HandleProps()}>
                        <Link to="/article">READ FULL ARTICLE</Link>
                        </button>
                    </div>
                </div>
                ) })}
        </div>

        <div className={style.search}>
        <button className={style.button} onClick={()=>{setPage(page+1)}}>Load More</button>
        </div>
    </div>
    </Layout>
}

export default Home;