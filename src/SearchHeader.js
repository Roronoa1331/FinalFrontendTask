import React from 'react'
import { useState } from 'react'
import './SearchHeader.css';

export default function SearchHeader(props) {

    const [valueInput, setValue] = useState('');


    function handleFormSubmit(event) {
        event.preventDefault();
        props.search(valueInput);
    };
    function handleChange(event) {
        setValue(event.target.value);
    };
    
    return (
    <div className="searchDiv">
        <form onSubmit={handleFormSubmit}>
            <label>Your search</label>
            <input value={valueInput} onChange={handleChange} />
        </form>
    </div>
  )
}   
