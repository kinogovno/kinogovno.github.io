import s from "./Header.module.css";
import logo from "./logo.png";
import { NavLink } from "react-router-dom/dist";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { useState } from "react";

let Header = () => {
  let [nav, setNav] = useState(false)
    return (
      <header className={s.AppHeader}>
        <div className={s.HeadSize}>
          <div className={s.LogoHead}>
            <img className={s.Logo} src={logo} alt=""/>
            <p>ОНЛАЙН МИНИ КОМИКС</p>
          </div>
          <nav className={nav ? [s.NavBlock, s.active].join(' ') : s.NavBlock}>
            <NavLink onClick={() => setNav(!nav)} to='' className={({ isActive }) => isActive ? s.activeLink : ''}>Главная</NavLink>
            <NavLink onClick={() => setNav(!nav)} to='/comics' className={({ isActive }) => isActive ? s.activeLink : ''}>Выпуски</NavLink>
            <NavLink onClick={() => setNav(!nav)} to='/about' className={({ isActive }) => isActive ? s.activeLink : ''}>О проекте</NavLink>
          </nav>
          <div onClick={() => setNav(!nav)} className={s.MobileBtn}>
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
            
            
          </div>
        </div>
      </header>
    );
}

export default Header;