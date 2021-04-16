import React, {useState} from 'react';

function SearchBarCategory(props){
    let categories = ['Date Created', 'Only Images', 'Content Size'];
    let [current_category, set_category] = useState(0);
    return(
        <div className="search-category">
            <span>Sort By</span>
            <span onClick={(e)=>{
                set_category((current_category + 1) % 3);
            }}>{categories[current_category]}</span>
        </div>
    );
}

function SearchBar(props){
    return(
        <div className="search-bar-wrapper">
            <h1>Your Past <i>Notes</i></h1>
            <div className="search-bar">
                <input type="text" placeholder="Type in to Search ..."/>
                <span></span>
            </div>
            <SearchBarCategory/>
        </div>
    );
}


export default SearchBar;