import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import Currency from './components/Currency';
import {useState} from 'react';

const App = () => {

    const [value, setValue] = useState('');
    const [errormess, setErrorMess] = useState('');

    const handleChange = event => {

        if(!event.target.value.match(/^\d+/))
        {
            
            alert('Please entry a numeric value');  
        
        }
        const result = event.target.value.replace(/\D/g, '');
        setValue(result);
    };

    console.log(value);
    console.log(errormess);
    //console.log(setErrorMess);
    console.log(typeof value);
    console.log(Number(value));

    return (
        <AppProvider>
            <div className='container'>
                 <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <Currency />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>
            </div>
                <div>
            <div>!Hello 123 World 456?___</div>
            <input
                type="text"
                placeholder={errormess}
                value={value}
                onChange={handleChange}
            />
            {errormess}
            </div>
        </AppProvider>
    );
};
export default App;
