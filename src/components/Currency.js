import React, { useState } from 'react';
//import React from 'react';
// eslint-disable-next-line
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';


const Currency = () => {
    //const {currency} = useContext(AppContext);
    const [currency, setCurrency] = useState('');
    let options_values = ['$', '£', '€', '₹'];

    let options_class = [['green','white'], ['green','white'],['green','white'], ['green','white']];
    const handleChange = event => {
        alert(event.target.value)
        for (var i=0; i < options_values.length; i++) {
            if (options_values[i]===event.target.value)
            {
                options_class[i][0] = 'white';
                options_class[i][1] = 'green';
            }
            else
            {
                options_class[i][0] = 'green';
                options_class[i][1] = 'white';
            }
        } 
        setCurrency(event.target.value)
    };

    return (
        
        <div className='alert alert-primary'>
        <select  style={{background: 'green', color: 'white'}}lass="form-control" onChange={handleChange} value={currency} id="inputGroupSelect03">
                <option style={{background: options_class[0][0], color: options_class[0][1]}} selected="selected" value="$" name="dollar">Currency $ Dollar</option>
                <option style={{background: options_class[1][0], color: options_class[0][1]}}  value="£" name="pound">Currency £ Pound</option>
                <option style={{background: options_class[2][0], color: options_class[0][1]}} value="€" name="euro">Currency € Euro</option>
                <option style={{background: options_class[3][0], color: options_class[0][1]}}  value="₹" name="rupee">Currency ₹ Ruppee</option>
                </select>
        </div>
    );
};

export default Currency;