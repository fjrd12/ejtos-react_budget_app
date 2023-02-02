import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';



const Budget = () => {
    
    const {budget, currency} = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input type="number" min="0" max="5000" step="10" value={budget} >
                </input>
            </span>
            
        </div>
    );
};

export default Budget;