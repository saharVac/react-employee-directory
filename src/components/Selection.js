import React from "react";

function Selection({innerText, options}) {

    // form selections
    const selections = []
    // populate selections
    options.forEach(option => {
                            
    })

    return (
        <fieldset>
            <label>{innerText}</label>
            <select>
                {
                    selections
                }
                <option value=""></option>
            </select>
        </fieldset>
    )
    
}

export default Selection;