import React from "react";
import '../App.css';
const Productleft = ({Nama,Jarakdarilokasianda,linkFoto,Keterangan}) =>{
    return(
                <div className="product_container_left">
                    <div className="foto_product">
                        <img src={linkFoto} alt={Nama}></img>
                    </div>
                    <div className="Product_isi">
                        <h2>{Nama}</h2>
                        <p>{Jarakdarilokasianda}</p>
                        <div className="Keterangan_product">
                        <p>{Keterangan}</p>  
                    </div>
                    <div className='button_product'>
                        <button>See more</button>
                    </div>
                    </div>
                </div>
    );
};

export default Productleft;