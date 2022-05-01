import React, { useContext, useEffect, useState } from "react";
import { myContext } from "./body";

export default function Sports() {
    const st = useContext(myContext);
    const [isLoaded, setIsLoaded] = useState(0);
    const [array, setArray] = st.a;
    useEffect(() => {
        const apiUrl = `https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`;
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setArray(data.articles);
                setIsLoaded(1);
            })
    }, [isLoaded])
    return (
        <>
            {/* {!isLoaded ? <FlashScreen /> : null} */}
        </>)
}
