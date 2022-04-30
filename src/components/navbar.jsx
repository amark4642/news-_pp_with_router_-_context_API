import React, { useContext, useState } from "react";
import { myContext } from "./body";
import { NavLink } from "react-router-dom";

const a = {
    hcolor: 'whitesmoke',
    scolor: 'whitesmoke',
    bcolor: 'whitesmoke',
    ecolor: 'whitesmoke',
    acolor: 'whitesmoke',
    spcolor: 'whitesmoke'
}
export default function Navbar() {
    const st = useContext(myContext);
    const [color, setColor] = useState(a);
    const [temp, setTemp] = st.b;
    const [clickState, setClickState] = st.c;
    const [mobview, setMobview] = st.d;
    let width = window.innerWidth;
    console.log(width);
    const handleAbout = () => {
        setTemp({ about: true, error: false, isLoaded: temp.isLoaded, pageNo: temp.pageNo })
        setColor({ hcolor: color.hcolor, scolor: color.scolor, bcolor: color.bcolor, ecolor: color.ecolor, acolor: 'cyan', spcolor: color.spcolor });
    }
    const handleScience = () => {
        setClickState({ home: false, science: true, sports: false, entertainment: false, business: false });
        setTemp({ about: false, error: false, isLoaded: temp.isLoaded, pageNo: 1 })
        setColor({ hcolor: color.hcolor, scolor: 'cyan', bcolor: color.bcolor, ecolor: color.ecolor, acolor: color.acolor, spcolor: color.spcolor });
    }
    const handleEntertainment = () => {
        setClickState({ home: false, science: false, sports: false, entertainment: true, business: false });
        setTemp({ about: false, error: false, isLoaded: temp.isLoaded, pageNo: 1 })
        setColor({ hcolor: color.hcolor, scolor: color.scolor, bcolor: color.bcolor, ecolor: 'cyan', acolor: color.acolor, spcolor: color.spcolor });
    }
    const handleSports = () => {
        setClickState({ home: false, science: false, sports: true, entertainment: false, business: false });
        setTemp({ about: false, error: false, isLoaded: temp.isLoaded, pageNo: 1 })
        setColor({ hcolor: color.hcolor, scolor: color.scolor, bcolor: color.bcolor, ecolor: color.ecolor, acolor: color.acolor, spcolor: 'cyan' });
    }
    const handleBusiness = () => {
        setClickState({ home: false, science: false, sports: false, entertainment: false, business: true });
        setTemp({ about: false, error: false, isLoaded: temp.isLoaded, pageNo: 1 })
        setColor({ hcolor: color.hcolor, scolor: color.scolor, bcolor: 'cyan', ecolor: color.ecolor, acolor: color.acolor, spcolor: color.spcolor });
    }
    const handleHome = () => {
        setClickState({ home: true, science: false, sports: false, entertainment: false, business: false });
        setTemp({ about: false, error: false, isLoaded: temp.isLoaded, pageNo: 1 })
        setColor({ hcolor: 'cyan', scolor: color.scolor, bcolor: color.bcolor, ecolor: color.ecolor, acolor: color.acolor, spcolor: color.spcolor });
    }
    return (
        width < 1000 && mobview ?
            < div className='category' >
                <div onClick={handleHome}><NavLink style={{ color: color.hcolor }} to="/">Home</NavLink></div>
                <div onClick={handleScience}><NavLink style={{ color: color.scolor }} to="/science">Science</NavLink></div>
                <div onClick={handleEntertainment}><NavLink style={{ color: color.ecolor }} to="/entertainment">Entertainment</NavLink></div>
                <div onClick={handleSports}><NavLink style={{ color: color.spcolor }} to="/sports">Sports</NavLink></div>
                <div onClick={handleBusiness}><NavLink style={{ color: color.bcolor }} to="/business">Business</NavLink></div>
                <div onClick={handleAbout}><NavLink style={{ color: color.acolor }} to="/about">About</NavLink></div>
            </div> :
            width >= 1000 ?
                <>
                    < div className='category' >
                        <div onClick={handleHome}><NavLink style={{ color: color.hcolor }} to="/">Home</NavLink></div>
                        <div onClick={handleScience}><NavLink style={{ color: color.scolor }} to="/science">Science</NavLink></div>
                        <div onClick={handleEntertainment}><NavLink style={{ color: color.ecolor }} to="/entertainment">Entertainment</NavLink></div>
                        <div onClick={handleSports}><NavLink style={{ color: color.spcolor }} to="/sports">Sports</NavLink></div>
                        <div onClick={handleBusiness}><NavLink style={{ color: color.bcolor }} to="/business">Business</NavLink></div>
                        <div onClick={handleAbout}><NavLink style={{ color: color.acolor }} to="/about">About</NavLink></div>
                    </div>

                </> : null

    )
}