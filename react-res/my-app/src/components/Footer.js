import React from "react";

function Footer(){
    var styleFooter = {
        fontSize: "10px"
    };
    return (
        <footer style={{backgroundColor: "Gray"}}>
            <h2 style={styleFooter}>This was a practice session.</h2>
        </footer>
    );
}

export default Footer;

/* 
We use export default in case we don't want the function/class etc. passed to be imported by that specific name only.
In case we are only exporting a single class/function etc. we can use export default.
We can use export default only once in a file.
*/