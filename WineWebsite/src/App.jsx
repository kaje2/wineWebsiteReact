import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import {Header} from './components/Header';

//Pages
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
//About
import { AboutUs } from './pages/About/AboutUs';
import { ContactUs } from './pages/About/ContactUs';
import { Shipping } from './pages/About/Shipping';
//Fim About pages

import { Account, Client, Databases, Storage } from 'appwrite';

function App() {
  const client = new Client();
  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6746c366001e61e08f2c');
    
  const database = new Databases(client);
  const storage = new Storage(client);
  const account = new Account(client);

  
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home db={database} str={storage}/>}/>
          <Route path="/about/aboutUs" element={<AboutUs/>}/>
          <Route path="/about/contactUs" element={<ContactUs/>}/>
          <Route path="/about/shipping" element={<Shipping/>}/>
          <Route path="/Blog" element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
