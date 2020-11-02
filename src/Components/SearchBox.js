import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input className=" tc pa3 ba b--green bg-lighnest-blue"  
            type="search"
             placeholder="Search Robots"
            onChange={searchChange}
                
            />
        </div>
    )
}

export default SearchBox;