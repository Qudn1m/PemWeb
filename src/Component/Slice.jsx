import React from "react";
import '../App.css';

const Slice1 = ({Judul,Isi}) =>{
    return(
            <header className="App_inner_header">
                <h1>{Judul}</h1>  
                <p>{Isi}</p>  
            </header>
    );
};

export default Slice1;
