import React from 'react';
import '../App.css';

function AboutUsIsi({Pembuka_Contact, Contact1, Contact2, Email, Alamat, Icon}) {
  return (
    <div className='AboutUsContainer'>
    <div className='AboutUsContent'>
      <p>
        {Pembuka_Contact}
        <img src={Icon} alt='' className='about-us-icon' /> {/* Icon next to the text */}
      </p>
      <br/>
      <p>Telp</p>
      <p>{Contact1}</p>
      <p>{Contact2}</p>
      <br/>
      <p>Email</p>
      <p>{Email}</p>
      <br/>
      <p>Alamat Toko Kami</p>
      <p>{Alamat}</p>
    </div>
    
    <iframe 
      className='PetaToko'
      title='Lokasi Toko' 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.3860291271924!2d112.7514935!3d-7.2925939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbb0a3791c9d%3A0x27ee4885032277aa!2sJl.%20Ngagel%20Jaya%20Barat%2079%2C%20Pucang%20Sewu%2C%20Kec.%20Gubeng%2C%20Surabaya%2C%20Jawa%20Timur%2060283!5e0!3m2!1sen!2sid!4v1725023665874!5m2!1sen!2sid" 
      allowFullScreen 
      loading="fast" 
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

  );
}

export default AboutUsIsi;
