import React from 'react';
import './Couintry.css'
const Country = (props) => {

    console.log(props.country);
    const {area,population,region,name,flags} = props.country;

    return (
        <div className='country'>
            <h1>Name : {name.common}</h1>
            <img src={flags.png} alt="" srcset="" />
            <p>Area :{area}</p>
            <p><small>Region :{region}</small></p>
            <h3>Populatoion : {population}</h3>
        </div>
    );
};

export default Country;