import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './components/Rowpost/RowPost';
import {Originals,action,horrorMovies,romance} from './urls'

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Banner/>
       <RowPost title = 'Netflix Originals' url = {Originals}/>
       <RowPost title = 'Action' isSmall url = {action}/>
       <RowPost title = 'Horror' isSmall url = {horrorMovies}/>
       <RowPost title = 'Romance' isSmall url = {romance}/>
    </div>
  );
}

export default App;
