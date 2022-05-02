import React, { useState } from 'react';
import '../main-site/style.css'

export default function Service(){

    const [count, itemcount] = useState(0);
    let decriment = () => {
        itemcount(add => add - 1)
    }

    let increment = () => {
        itemcount(add => add + 1)
    }


    return(
        <div>
            <div className="how_it_work future_proper">
                { count === 0 ? '' : <button className="buttonCls" onClick={decriment}>-</button> }
                {count}
                <button className="buttonCls" onClick={increment}>+</button>
            </div>
        </div>
    )
}