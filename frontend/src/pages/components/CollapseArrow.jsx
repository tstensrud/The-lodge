function CollapseArrow({ collapse, clickFunction }) {

    const handleClick = (e) => {
        e.preventDefault();
        clickFunction();
    }

    return (
        <>
            {
                collapse === true ? (
                    <div className="transform: rotate-180">
                        <svg className="cursor-pointer " onClick={handleClick} width="20" height="20" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path className="stroke-grey-text fill-grey-text" d="M29,19.41a1,1,0,0,1-.71-.29L18,8.83,7.71,19.12a1,1,0,0,1-1.41-1.41L18,6,29.71,17.71A1,1,0,0,1,29,19.41Z"></path>
                            <path className="stroke-grey-text fill-grey-text" d="M29,30.41a1,1,0,0,1-.71-.29L18,19.83,7.71,30.12a1,1,0,0,1-1.41-1.41L18,17,29.71,28.71A1,1,0,0,1,29,30.41Z"></path>
                            <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
                        </svg>
                    </div>
                ) : (

                    <svg className="cursor-pointer" onClick={handleClick} width="20" height="20" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path className="stroke-grey-text fill-grey-text" d="M29,19.41a1,1,0,0,1-.71-.29L18,8.83,7.71,19.12a1,1,0,0,1-1.41-1.41L18,6,29.71,17.71A1,1,0,0,1,29,19.41Z"></path>
                        <path className="stroke-grey-text fill-grey-text" d="M29,30.41a1,1,0,0,1-.71-.29L18,19.83,7.71,30.12a1,1,0,0,1-1.41-1.41L18,17,29.71,28.71A1,1,0,0,1,29,30.41Z"></path>
                        <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
                    </svg>

                )
            }
        </>
    );
}

export default CollapseArrow;