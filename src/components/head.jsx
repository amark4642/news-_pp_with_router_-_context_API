import React, { useState } from "react";
import { useContext } from "react";
import { myContext } from "./body";
import { useNavigate } from 'react-router-dom';


export default function Head() {
    const st = useContext(myContext);
    const [array, setArray] = st.a;
    const [temp, setTemp] = st.b;
    const [navState, setNavState] = st.c;
    const [mobview, setMobview] = st.d;
    let width = window.innerWidth;
    const history = useNavigate();
    const [keyword, setKeyword] = useState('');
    const fetchNewsss = () => {
        if (keyword == '') {
            alert("Please enter something !");
            return;
        }
        let search = keyword.toLowerCase();
        const apiUrl = `https://saurav.tech/NewsAPI/top-headlines/category/${search}/in.json`;
        fetch(apiUrl)
            .then(res => res.json())
            .then((data) => {
                setArray(data.articles);
                setTemp({ about: false, error: false, isLoaded: temp.isLoaded, pageNo: 1 })
                setNavState({ home: false, science: false, sports: false, entertainment: false, business: false })
            }).catch(() => {
                setTemp({ pageNo: 1, isLoaded: true, error: true, about: temp.about })
            })
        history(`/search&query=${keyword}`);
    }
    return (
        <div className="navbar">
            {width < 1000 ? <div onClick={() => setMobview(!mobview)} style={{ paddingTop: '10px', paddingBottom: '10px' }}><img style={{ borderRadius: '3px', justifyContent: 'center', height: '50px', width: '50px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3dscEUUxEzj3FzYXyuXUlf8Xom3lb19MXg&usqp=CAU" alt=":::" /></div> : null}
            <div style={{textAlign:'left'}}><h1>My News</h1></div>
            <div id='nav-search'><input
                id="input"
                class="temp"
                placeholder='REACT___________________'
                onChange={e => setKeyword(e.target.value)}
            /></div>
            <div><button id="btn" onClick={fetchNewsss} class="temp">Search</button></div>
        </div>
    )
}