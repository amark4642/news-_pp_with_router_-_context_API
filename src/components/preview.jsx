import React, { useContext } from "react";
import { myContext } from "./body";

export default function Preview() {
    const st = useContext(myContext);
    const [temp, setTemp] = st.b;
    const [array, setArray] = st.a;
    return (
        <>
            {array.map((i, idx) => {
                return (
                    idx < 10 * temp.pageNo && idx >= 10 * (temp.pageNo - 1) && !temp.about && !temp.error ?
                        <div className='result'>
                            <div>
                                <h3 style={{ backgroundColor: 'azure', color: 'black', width: '80%', textAlign: 'center', borderRadius: "10px" }}>Author : {i.author == null || i.author.startsWith('https:') ? "Unknown" : i.author}</h3>
                                <img src={i.urlToImage} alt="image" /></div>
                            <div className='content '>
                                <h4 style={{ backgroundColor: 'azure', color: 'black', textAlign: 'left', borderRadius: "10px" }}>Date :- {i.publishedAt.substring(0, 10)}  ||  Time :- {i.publishedAt.substring(11, 19)}</h4>
                                <h3 style={{ backgroundColor: 'azure', color: 'black', paddingLeft: '5px', paddingRight: '5px', borderRadius: "10px" }}>{i.title}</h3>
                                {i.description}<br></br>
                                <a href={i.url} target='_blank'><button style={{ color: "crimson", fontSize: "14px", borderRadius: "10px" }}>Read full article..</button></a>
                            </div>
                        </div> : null)
            })}
        </>
    )
}