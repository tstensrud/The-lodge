import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

function About(props) {
    const { setSelectedIndex } = useContext(GlobalContext);
    
    useEffect(() => {
        setSelectedIndex(props.index);
    },[]);

    return (
        <>
            <h2>Welcome to The lodge</h2>
            <div className="card">
                <p>
                    This is a personal project and an attempt to make a reddit-clone. Most likely no one will ever use this
                    site, but I had a lot of fun making it. 
                </p>
                
                <p>
                    Sincerely, the Magician who longs to see.
                </p>
            </div>
        </>
    );
}

export default About;