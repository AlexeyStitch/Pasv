import React from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const menuItem = ['Tuda', 'Suda', 'Vperet', 'Obratno'];
const footerItem = ['Obratno', 'Vperet', 'Suda', 'Tuda'];

const rybak = (fish) => {
    console.log('Chyka ' + fish);
}

const menu = ['One', 'Two', 'Three', 'Four'];

const onClicked = (menu) => {
    console.log('Clicked' + menu)
}


function App() {
  return (
    <div className="App">
 <Header menuItem={menuItem} leska={rybak} menu={menu} onClicked={onClicked}/>
 <Content />
 <Footer footerItem={footerItem} leska={rybak}/>
    </div>
  );
}

export default App;
