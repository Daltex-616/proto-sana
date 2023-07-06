import './App.css';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { useNoticias } from './hoock/useNoticias';
import { Noticias } from './components/Noticias';
import{Banner} from './components/Banner'

function App() {
  const {noticias} = useNoticias()
  return (
    <>
    <NavBar/>
    <Banner/>
    <div>ñ</div>
    <main>
      {true && <Noticias noticias={noticias}/>}
    </main>
    </>
  );
}


export default App;
