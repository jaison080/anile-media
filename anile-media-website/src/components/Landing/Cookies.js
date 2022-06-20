import React from "react";
function Cookies()
{
    const [active, setActive] = React.useState(true);

    function closeItem() {
      setActive(false);
    }
    return(
<div className={active?"cookie_message":"close_1"}>
<img src="https://img.icons8.com/plasticine/100/000000/cookie.png"/>
<span>We use cookies to provide you the best possible experience. But don't panic - we won't share any of your data.</span>
<button class="close" onClick={closeItem}><i class="fa fa-times"></i></button>
</div>);
}
export default Cookies