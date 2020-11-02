import React, { Component } from 'react';


const Card = ({name, email, id}) => {
    
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        
        
            {/* <h1 className="f1 tc blue"> RoboFriends</h1> */}
            <img alt="robofriend"  src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2 className="tc"> {name} </h2>
                <p className="tc"> {email} </p>
            </div>
        </div>
    );
}



export default Card;

