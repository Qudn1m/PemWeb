import './App.css';
import Header from './Component/Header';
import HeaderProduct from './Component/Header_Product';
import Product from './Component/Product';
import { Link } from 'react-router-dom';
import Footer from './Component/Footer';
import logohome from './Assets/Logo-Toko2.svg';
import logoproduk from './Assets/wall-bricks-svgrepo-com.svg';
import logotentangkami from './Assets/search-engineer-contructor-helmet-find-svgrepo-com.svg';
import bricks from './Assets/Batubata1.jpg';
import cement from './Assets/Semen1.jpg';
import Wood from './Assets/Kayu1.jpg';
import Sand from './Assets/Pasir1.jpg';
function ProductPage() {
  return (
    <div className="ProductPage">
      
      
    <div className="top_nav__menu">
          <Link to="/app" title="Home">
          <img src={logohome} title='Home' alt=''></img>
            Home
          </Link>
          <Link to="/product-page" title="Our Product">
          <img src={logoproduk} title='Our Product' alt='' ></img>
          Our Product
          </Link>
          <Link to="/about-us" title="About Us">
          <img src={logotentangkami} title='About Us' alt='' ></img>
          About Us
          </Link>
    </div>
    
    <Header/>

    <HeaderProduct/>
    
    <div className='product_list'>
    <Product 
    Judul={'Batubata'}
    linkFoto={bricks}
    Harga={'RP 575,-/buah'}
    />
    <Product 
    Judul={'Semen'}
    linkFoto={cement}
    Harga={'RP 200.000,-/sak'}
    />
    <Product 
    Judul={'Kayu'} 
    linkFoto={Wood}
    Harga={'RP 300.000,-/set'} 
    Keterangan={'*1 set : 2 kayu, panjang 5m'}
    />
    <Product 
    Judul={'Pasir'} 
    linkFoto={Sand}
    Harga={'RP 100.000,-/sak'}
    Keterangan={'Diskon 5 % tiap 15 sak'} 
    />
    </div>
    
       
<Footer/>
    </div>


  );
}

export default ProductPage;
