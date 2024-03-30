import './Header.css'
import Styles from './Header.module.css'
function Header(){
    const myStyle = {
        color:"red",
        backgroundColor:"grey",
        padding: "12px",
        fontFamily:"Sans-Serif"
    }
    return(
         <>
         <h1 style={myStyle}>Hello Css in React</h1>
         <h2 className={Styles.bigBang}>Hello Module Css</h2>
         </>
    );
}
export default Header;