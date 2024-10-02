import './App.css';
import Header from './Component/Header';
import Slice1 from './Component/Slice';
import Slice2 from './Component/Slice 2';
import Footer from './Component/Footer';
import { Link } from 'react-router-dom';
import logohome from './Assets/Logo-Toko2.svg'
import logoproduk from './Assets/wall-bricks-svgrepo-com.svg';
import logotentangkami from './Assets/search-engineer-contructor-helmet-find-svgrepo-com.svg';

function Home() {

  return (
    <div className="App">
      
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
    <div className='Home_BG'>
  
      <Slice1 Judul='Siapa Kami?' 
               Isi='Toko Bangunan Cahaya Baru adalah perusahaan yang berdedikasi untuk menyediakan berbagai macam bahan bangunan berkualitas 
               tinggi kepada pelanggan kami. Berdiri sejak 2024, kami telah menjadi salah satu penyedia bahan bangunan terpercaya 
               di Surabaya, dikenal karena komitmen kami dalam memenuhi kebutuhan proyek konstruksi besar maupun kecil.'/>
      <br/>
      <Slice1 Judul='Komitmen' 
               Isi='Menjadi mitra terpercaya bagi para profesional dan pemilik rumah dalam memenuhi segala kebutuhan bahan bangunan, 
               dengan menyediakan produk berkualitas yang mendukung terciptanya konstruksi yang kuat dan tahan lama.'/>
      <br/>
      <Slice2
         Judul='Keunggulan' 
         Isi1='Menyediakan produk bahan bangunan yang lengkap dan berkualitas untuk memenuhi berbagai kebutuhan proyek konstruksi.'
         Isi2='Memberikan pelayanan yang terbaik kepada pelanggan, dengan mengutamakan kecepatan, kehandalan, dan kepuasan.'
         Isi3='Mengutamakan hubungan jangka panjang dengan pelanggan, dengan selalu menjaga integritas dan kejujuran dalam setiap transaksi.'
         Isi4='Terus berinovasi dalam menyediakan produk dan layanan yang sesuai dengan perkembangan teknologi dan kebutuhan pasar.'
         />
    </div>
    <Footer/>
    </div>

  );
}

export default Home;
