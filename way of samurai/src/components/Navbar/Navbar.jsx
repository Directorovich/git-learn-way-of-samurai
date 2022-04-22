import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
/*console.log(s);
// let s = {
//     'nav': 'Navbar_nav__3ou9Q',
//     'item': 'Navbar_item__3qaF3',
//     'active' : 'Baksndakdn_actve'
 // }

let c1 = "item";
let c2 = "active";
// "item active"
let classes = c1 + " " + c2;
let classesNew = `${s.item} ${c2}`;*/

/*const Navbar = (props) => {
    let sideBarElements = props._state.map(l =><NavLink to={l.props._state.link} className={navData => navData.isActive ? s.active:s.item} >{l.props._state.linkName}</NavLink>);

    return <nav className={s.nav}>
        <div className={s.item}>
            {sideBarElements}
        </div>
    </nav>
}*/


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to={'/profile'} className={navData => navData.isActive ? s.active:s.item} >Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to={'/dialogs'} className={navData => navData.isActive ? s.active:s.item}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/users'} className={navData => navData.isActive ? s.active:s.item}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/news'} className={navData => navData.isActive ? s.active:s.item}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/music'} className={navData => navData.isActive ? s.active:s.item}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/setting'} className={navData => navData.isActive ? s.active:s.item}>Settings</NavLink>
        </div>

    </nav>
}

export default Navbar;