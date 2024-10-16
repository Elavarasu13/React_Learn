import './Header.css';
/* styles using class */
import styles from './Header.module.css';

function Header()
{
    /* Styles using variable */
       const myStyle = {
        padding: "10px",
        color:"red", 
        backgroundColor:"lightblue"
    } 
    return <>
    {/* inline css --> given value to object */}
    {/* <h1 style={{color:"red", backgroundColor:"lightblue"}}>Hello Styling</h1>
         <h1 style={myStyle}>Hello Styling</h1> */}
    <h1 className={styles.bigBlue}>Hello Styling</h1>
         <p style={myStyle}>Add a little style</p>
    </>
}
export default Header;