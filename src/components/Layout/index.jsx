import style from "./Layout.module.css"
import {Link} from "react-router-dom"

const Layout = (props) =>{
    return <>
        <div className={style.Nav}>
        <h2 className={style.NavText}>News Api</h2>        
        </div>
        {props.children}
        <div className={style.footer}>
        <div className={style.footerLinks}>
        <Link className={style.footerText} to="/">Home</Link>
        </div>
        <p className={style.footerText}>Copyright  &copy;  2022</p>
    </div>
    </>
}

export default Layout;