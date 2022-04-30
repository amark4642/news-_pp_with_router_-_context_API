import React, { useContext } from "react";
import { myContext } from "./body";


export default function Footer() {
    const st = useContext(myContext);
    const [array, setArray] = st.a;
    const [temp, setTemp] = st.b;
    const handleNext = () => {
        setTemp({
            pageNo: temp.pageNo + 1,
            isLoaded: temp.isLoaded,
            error: temp.error,
            about: temp.about
        }
        );
    }
    const handlePrev = () => {
        setTemp({
            pageNo: temp.pageNo - 1,
            isLoaded: temp.isLoaded,
            error: temp.error,
            about: temp.about
        }
        );
    }
    return (
        <>
            <div className="footer">   
            <h5 style={{ color: 'black' }}>{temp.pageNo} of {temp.about ? 1 : array.length % 10 == 0 ? (Math.floor(array.length / 10)) : Math.floor(array.length / 10) + 1}</h5>
                {(temp.pageNo > 1) ?
                    <>
                        <button
                            style={{
                                marginRight: '2rem',
                                borderRadius: '5px',
                                backgroundColor: 'blackalmond',
                                color: 'red'
                            }}
                            onClick={handlePrev}><strong>Previous Page</strong></button>
                        {temp.pageNo * 10 < array.length ? <button
                            style={{
                                marginLeft: '2rem',
                                borderRadius: '5px',
                                backgroundColor: 'blackalmond',
                                color: 'red'
                            }}
                            onClick={handleNext}><strong>Next Page</strong></button> : null}
                    </> : !temp.error && !temp.about ?
                        <button
                            style={{
                                backgroundColor: 'blackalmond',
                                borderRadius: '5px',
                                color: 'red'
                            }} onClick={handleNext}><strong>Next Page</strong></button> : null
                }
            </div> 
        </>
    )
}