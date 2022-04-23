import React from "react";
import Data  from "../db/data.json"
const Search = () =>{
    return(
        Data.map((post)=>(
            <div key={post.id}>
                <p>{post.title}</p>
                <img src={post.image} alt="" />
                <p>{post.description}</p>
                <p>{post.price}</p>
                
            </div>
        ))
    );
}

export default Search;