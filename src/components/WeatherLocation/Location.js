import React from 'react';

//parámetro con object destrcting
const Location = ({city}) => (
    <div className="locationCont">
        <h1>
            {city}
        </h1>
    </div>
);
    //const {city} = props;
    
export default Location;