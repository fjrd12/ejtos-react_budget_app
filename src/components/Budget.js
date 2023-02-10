import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    let {currency,budget,dispatch,expenses} = useContext(AppContext);
    // eslint-disable-next-line
    const [prevVal, setPrevVal] = React.useState(0);

    const setLogIfArrowClicked = e => {


        const currentVal = e.target.value;
        let result = parseInt(currentVal) - parseInt(budget)
        
        if(currentVal > 20000)
        {    
            alert('Budget cannot exceed of 20000')
        }

        // eslint-disable-next-line
        setPrevVal(currentVal);

        e.target.value = currentVal;
        if(result > 0 && currentVal <= 20000)
        {  
            dispatch({
                type: 'INC_BUDGET',
                payload: result,
            });
        }

        if(result < 0 && currentVal < 20000 )

        {   
            let expenses_total = 0;

            for (const expense of expenses) {
                expenses_total = expenses_total + parseInt(expense['cost']);
              }
            let result_budget = budget + result;

            if (expenses_total < result_budget)
            {
                dispatch({
                    type: 'DEC_BUDGET',
                    payload: result,
                });
            }
            else
            {
                alert(expenses_total + '-'+result)
                alert('Budget needs to be more than the expending!!')
            }
        }

    };

// eslint-disable-next-line 
    return (
        <div className='alert alert-secondary'>
            <span>{currency}
                <input type="number" input="0" min="0" max="30000" step="10" onChange={setLogIfArrowClicked} value={budget}>
                </input>
      <br />
            </span>
            
        </div>
    );
};

export default Budget;