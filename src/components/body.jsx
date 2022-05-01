import React, { createContext, useState } from 'react';
import About from './about';
import { useEffect } from 'react';
import Head from './head';
import Navbar from './navbar';
import Preview from './preview';
import Error from './error';
import FlashScreen from './loadingScreen';
import Business from "./business";
import Science from "./science";
import Entertainment from "./entertainment";
import Sports from "./sports";
import Home from './home';
import Error404 from './404page';
import { Routes, Route } from 'react-router-dom';
import Footer from './footer';

const bodyState = {
    isLoaded: false,
    pageNo: 0,
    error: false,
    about: false
}
const navbarState = {
    science: false,
    sports: false,
    entertainment: false,
    business: false,
    home: false
}
export const myContext = createContext();
export default function Body() {
    // console.log("context state = "+st);
    const [items, setItems] = useState([]);
    const [tempState, setTempState] = useState(bodyState);
    const [navState, setNavState] = useState(navbarState);
    const [mobview, setMobview] = useState(false);
    console.log(items);

    useEffect(() => {
        const apiUrl = `https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json`;
        fetch(apiUrl)
            .then(res => res.json())
            .then((data) => {
                setItems(data.articles);
                setTempState({ pageNo: 1, isLoaded: true, error: false, about: tempState.about });
            })
    }, [])
    console.log("navstate = " + navState.science);
    return (
        <>
            <myContext.Provider value={{
                a: [items, setItems],
                b: [tempState, setTempState],
                c: [navState, setNavState],
                d: [mobview, setMobview]
            }}>
                {
                    !tempState.isLoaded ? <FlashScreen /> : <>
                        <Head />
                        <Navbar />
                        {tempState.error ? <Error /> : tempState.about ? <About /> : <><Preview /><Footer /></>}</>}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/science" element={<Science />} />
                    <Route path="/sports" element={<Sports />} />
                    <Route path="/entertainment" element={<Entertainment />} />
                    <Route path="/about" element={<Science />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="*" element={<Error404 />} />
                    {/* {navState.science ? <Science /> : null}
                    {navState.sports ? <Sports /> : null}
                    {navState.entertainment ? <Entertainment /> : null}
                    {navState.business ? <Business /> : null}
                    {navState.home ? <Home /> : null} */}
                </Routes>
            </myContext.Provider>
        </>
    )
}


//         super(props);
//         this.state = {
//             isLoaded: false,
//             items: [],
//             pageNo: 0,
//             error: false,
//             about: false
//         }
//     }

//     fetchNewsss = () => {
//         let keyword = document.getElementById("input").value;
//         keyword=keyword.toLowerCase();
//         let keywordd = null;
//         if (keywordd === keyword) return;
//         keywordd = keyword;
//         if (keyword == null) keyword = "technology";
//         const apiUrl = `https://saurav.tech/NewsAPI/top-headlines/category/${keyword}/in.json`;
//         fetch(apiUrl)
//             .then(res => {
//                 // console.log("status "+res.status);
//                 if (res.status!== 200) {
//                     this.setState({ error: true });
//                     return;
//                 }
//                 return res.json()
//             })
//             .then((data) => {
//                 this.setState({ items: data.articles, isLoaded: true, pageNo: 1, error: false, about: false });
//             });
//     }

//     fetchNews = (potato) => {
//         console.log(potato);
//         // let keywordd = document.getElementById("input").value;
//         const apiUrl = `https://saurav.tech/NewsAPI/top-headlines/category/${potato}/in.json`;
//         console.log(apiUrl);
//         fetch(apiUrl)
//             .then(res => res.json())
//             .then((data) => {
//                 this.setState({ items: data.articles, isLoaded: true, pageNo: 1, error: false, about: false });
//             });
//     }

//     componentDidMount() {
//         const apiUrl = `https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json`;
//         // console.log(apiUrl);
//         fetch(apiUrl)
//             .then(res => res.json())
//             .then((data) => {
//                 console.log(data.articles);
//                 this.setState({
//                     items: data.articles,
//                     isLoaded: true,
//                     pageNo: this.state.pageNo + 1,
//                 });
//                 // console.log(this.state.items);
//             });
//     }

//     handleNext = () => { this.setState({ pageNo: this.state.pageNo + 1 }) }
//     handlePrev = () => { this.setState({ pageNo: this.state.pageNo - 1 }) }
//     handleAbout = () => { this.setState({ about: true, error:false }) }

//     render() {
//         const { items, isLoaded, pageNo, error, about } = this.state;
//         if (isLoaded) {
//             console.log(isLoaded);
//             console.log(items);
//             return (
//                 <>
//                     <div className="navbar">
//                         <div><h1>My News</h1></div>
//                         <div id='nav-search'><input id="input" class="temp" placeholder='REACT___________________' /></div>
//                         <div><button id="btn" onClick={this.fetchNewsss} class="temp">Search</button></div>
//                     </div>
//                     <div className='category'>
//                         <div onClick={() => { this.fetchNews("technology") }}><strong>Home</strong></div>
//                         <div onClick={() => { this.fetchNews("science") }}><strong>Science</strong></div>
//                         <div onClick={() => { this.fetchNews("entertainment") }}><strong>Entertainment</strong></div>
//                         <div onClick={() => { this.fetchNews("sports") }}><strong>Sports</strong></div>
//                         <div onClick={() => { this.fetchNews("business") }}><strong>Business</strong></div>
//                         <div onClick={this.handleAbout}><strong>About</strong></div>

//                     </div>
//                     <div className='body'>

//                         {about ? null : error ? <h2>No Data Found !!</h2> : <h2 style={{ color: 'aliceblue' }}><strong>Top Headlines of the Day</strong></h2>}
//                         <ul>
//                             {about && !error ? <About /> : null}
//                             {
//                                 items.map((i, idx) => {
//                                     return (
//                                         idx < 10 * pageNo && idx >= 10 * (pageNo - 1) && !about && !error ?
//                                             <div className='result'>
//                                                 <div>
//                                                     <h3 style={{ backgroundColor: 'azure', color: 'black', width: '80%', textAlign: 'center', borderRadius: "10px" }}>Author : {i.author == null || i.author.startsWith('https:')? "Unknown" : i.author}</h3>
//                                                     <img src={i.urlToImage} alt ="image" /></div>
//                                                 <div className='content '>
//                                                     <h4 style={{ backgroundColor: 'azure', color: 'black', textAlign: 'left', borderRadius: "10px" }}>Date _ Time:- {i.publishedAt}</h4>
//                                                     <h3 style={{ backgroundColor: 'azure', color: 'black', paddingLeft: '5px',paddingRight:'5px', borderRadius: "10px" }}>{i.title}</h3>
//                                                     {i.description}<br></br>
//                                                     <a href={i.url} target='_blank'><button style={{ color: "crimson", fontSize: "14px", borderRadius: "10px" }}>Read full article..</button></a>
//                                                 </div>
//                                             </div> : null
//                                     )
//                                 })
//                             }
//                         </ul>
//                         <h3 style={{ color: 'whitesmoke' }}>{pageNo} of {about?1:items.length % 10 == 0 ? (Math.floor(items.length / 10)) : Math.floor(items.length / 10)+1}</h3>
//                         {(pageNo > 1) ?
//                             <>
//                                 <button
//                                     style={{
//                                         marginRight: '2rem',
//                                         borderRadius: '5px',
//                                         backgroundColor: 'blackalmond',
//                                         color: 'red'
//                                     }}
//                                     onClick={this.handlePrev}><strong>Previous Page</strong></button>
//                                 {pageNo * 10 < items.length ? <button
//                                     style={{
//                                         marginLeft: '2rem',
//                                         borderRadius: '5px',
//                                         backgroundColor: 'blackalmond',
//                                         color: 'red'
//                                     }}
//                                     onClick={this.handleNext}><strong>Next Page</strong></button> : null}
//                             </> : !error && !about ?
//                                 <button
//                                     style={{
//                                         backgroundColor: 'blackalmond',
//                                         borderRadius: '5px',
//                                         color: 'red'
//                                     }} onClick={this.handleNext}><strong>Next Page</strong></button> : null
//                         }
//                     </div>

//                 </>
//             );
//         }
//         else {
//             return (
//                 <div className='flashScreen'>
//                     <h1><strong>Please wait , News bulletin is loading...</strong></h1>
//                 </div>
//             );
//         }
//     }
// }


// export  {Body1};