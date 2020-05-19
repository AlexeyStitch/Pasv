import React from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const menuItem = ['Tuda', 'Suda', 'Vperet', 'Obratno'];
const footerItem = ['Kdsds', 'FDSDds', 'DSsdd', 'dsds'];


function App() {
  return (
    <div className="App">
 <Header menuItem={menuItem}/>
 <Content />
 <Footer footerItem={footerItem}/>
    </div>
  );
}

export default App;
