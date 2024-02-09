import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchHeader from './SearchHeader';
import ImageList from './ImageList';


function App() {

  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);


  useEffect(() => {

    onSearch();
  }, [])

  async function onSearch(query) {
    const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}`,
    
    {headers:{
      Authorization: 'Client-ID WzsDajQ8ZCwwn9nrpWSpeRA3WuDY7-fzkzTbGRBE1s8'
    }});

    const data = response.data.results;
    setImages(data);
    console.log(data)
  };

 
  return (
    <div className="App">
      <SearchHeader search = {onSearch}/>
      <ImageList images = {images} />
    </div>
  );
}

export default App;
