import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { Link } from 'react-router-dom';
import logohome from './Assets/Logo-Toko2.svg';
import logoproduk from './Assets/wall-bricks-svgrepo-com.svg';
import logotentangkami from './Assets/search-engineer-contructor-helmet-find-svgrepo-com.svg';
import AboutUsIsi from './Component/AboutUsIsi';


function AboutUs() {

  return (
    <div className="AboutUs">
      <div className="top_nav__menu">
          <Link to="/app" title="Home">
          <img src={logohome} title='Home' alt=''></img>
            Home
          </Link>
          <Link to="/product-page" title="Our Product">
          <img src={logoproduk} title='Our Product' alt=''></img>
          Our Product
          </Link>
          <Link to="/about-us" title="About Us">
          <img src={logotentangkami} title='About Us' alt=''></img>
          About Us
          </Link>
    </div>
    <Header/>

      <AboutUsIsi
      Pembuka_Contact='Jika anda memiliki pertanyaan, keluhan atau melakukan pemesanan dalam jumlah besar dapat menghubungi kami melalui:'
      Contact1='+62 5678 4567 456'
      Contact2='+62 1000 2000 300'
      Email='tokobangunancahaya@gmail.com'
      Alamat='Jl. Ngagel Jaya Barat 79, Pucang Sewu, Kec. Gubeng, Surabaya, Jawa Timur 60283'
      Icon="path/to/icon.svg"  // Update this line with your actual icon path
      />
      <Footer/>


    </div>
  );
}

export default AboutUs;
