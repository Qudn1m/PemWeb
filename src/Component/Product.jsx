import React from "react";
import '../App.css';
const Product = ({Judul,Harga,linkFoto,Keterangan}) =>{
    return(
                <div className="product_container">
                    <div className="foto_product">
                        <img src={linkFoto} alt={Judul}></img>
                    </div>
                    <div className="Product_isi">
                        <h2>{Judul}</h2>
                        <p>{Harga}</p>
                        <div className="Keterangan_product">
                        <p>{Keterangan}</p>  
                        </div>
                    </div>
                </div>
    );
};

export default Product;
