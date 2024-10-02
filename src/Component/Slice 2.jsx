import React from "react";
import '../App.css';

const Slice2 = ({Judul,Isi1,Isi2,Isi3,Isi4}) =>{
    return(
            <header className="App_inner_header">
                <h1>{Judul}</h1>  
                <p>{Isi1}</p>  
                <p>{Isi2}</p>  
                <p>{Isi3}</p>  
                <p>{Isi4}</p>  
            </header>
    );
};

export default Slice2;
