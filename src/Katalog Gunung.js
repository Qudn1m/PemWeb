import './App.css';
import Footer from './Component/Footer';
import Gunung_1 from './Assets/Gunung_1.jpg';
import Gunung_2 from './Assets/Gunung_2.jpg';
import Gunung_3 from './Assets/Gunung_3.jpg';
import Gunung_4 from './Assets/Gunung_4.jpg';
import comingsoon from './Assets/coming soon jpg.jpg';
import Productleft from './Component/Product_Left';
import NavBar from './Component/NavBar';
function ProductPage() {
  return (
  <div className="ProductPage">
      
    <NavBar/>

      <div className='product_list'>

        <Productleft
        Nama='Gunung Penanggungan via Duyung'
        Jarakdarilokasianda='7,7km'
        linkFoto={Gunung_1}
        Keterangan=''
        />

        <Productleft
        Nama='gubngasd'
        linkFoto={Gunung_1}
        Jarakdarilokasianda='9,1km'
        />

        <Productleft
        Nama='Gunung Lorokan'
        Jarakdarilokasianda='3,1km'
        linkFoto={Gunung_2}
        Keterangan=''
        />

        <Productleft
        Nama='gubngasd'
        linkFoto={Gunung_1}
        Jarakdarilokasianda='9,1km'
        />

        <Productleft
        Nama='Puthuk Gragal via Cembor'
        Jarakdarilokasianda='7,2km'
        linkFoto={Gunung_3}
        Keterangan=''
        />

        <Productleft
        Nama='gubngasd'
        linkFoto={Gunung_1}
        Jarakdarilokasianda='9,1km'
        />

        <Productleft
        Nama='Puthuk Siwur'
        Jarakdarilokasianda='4,3km'
        linkFoto={Gunung_4}
        Keterangan=''
        />

        <Productleft
        Nama='New Content Coming Soon'
        linkFoto={comingsoon}
        
        />


      </div>

    
       
    <Footer/>
  </div>


  );
}

export default ProductPage;
