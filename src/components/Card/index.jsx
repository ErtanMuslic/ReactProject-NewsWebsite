import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../LandingPage";
import style from "./card.module.css";
const Card =(props) =>{
    const{setImg,setTitle,setAuthor,setDesc,setContent} = useContext(UserContext);

    const HandleProps = () =>{
        setImg(props.img);
        setTitle(props.title);
        setAuthor(props.author);
        setDesc(props.description);
        setContent(props.content);
    };

    return <div className={style.Card}>  
    <img className={style.Card_Image} src={props.img} alt="" />

    <div className={style.Card_Body}>
        <h5>{props.title}</h5>
        <button className={style.Card_Link} onClick={HandleProps}>
        <Link className={style.Card_Link_Text} to="/article">READ FULL ARTICLE</Link>
        </button>
    </div>
</div>
}

export default Card;