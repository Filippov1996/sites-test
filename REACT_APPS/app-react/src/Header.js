const Header=(props)=>{
    return(
        <header class="header">
           <div class="wrapper">
               <a href="/" class="header__logo"><img src={props.logo} alt="logotype"/></a>
           </div>
       </header>
    );
}
export default Header;
