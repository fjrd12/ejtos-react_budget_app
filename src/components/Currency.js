import React, { useState } from 'react';
//import React from 'react';
// eslint-disable-next-line
import { AppContext } from '../context/AppContext';


const Currency = () => {
    //const {currency} = useContext(AppContext);
    const [currency, setCurrency] = useState('');
    /*const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);*/

    return (
        <div className='alert alert-primary'>
            
        <select onChange={(event) => setCurrency(event.target.value)} value={currency} class="form-select" id="inputGroupSelect03">
        <option defaultValue>Currency {currency}...</option>
                <option value="$" name="dollar">Currency $ Dollar</option>
                <option value="£" name="pound">Currency £ Pound</option>
                <option value="€" name="euro">Currency € Euro</option>
                <option value="₹" name="rupee">Currency ₹ Ruppee</option>
                </select>
        </div>
    );
};

export default Currency;