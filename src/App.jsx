import './App.css';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { useNoticias } from './hoock/useNoticias';
import { Noticias } from './components/Noticias';
import{Banner} from './components/Banner'
import { Home } from './components/Home';

function App() {
  const {noticias} = useNoticias()
  return (
    <>
    <NavBar/>
    <Banner/>
    
    <main>
      <Home/>
      {false && <Noticias noticias={noticias}/>}
    </main>
    </>
  );
}


export default App;
