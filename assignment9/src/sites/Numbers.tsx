import React, {useState} from "react";
import {FormattedNumber} from "react-intl";

const Numbers = (): JSX.Element => {
    const [number, setNumber] = useState("0");

    return(
        <>
        <h1>Numbers</h1>
            <input type="number" value={number} onChange={(event => setNumber(event.target.value))}></input>
            <ul>
                <li>
                    <FormattedNumber value={parseFloat(number)}/>
                </li>
                <li>
                    <FormattedNumber style="unit" unit="gigabyte" value={parseFloat(number)} />
                </li>
                <li>
                    <FormattedNumber currency="EUR" style="currency" value={parseFloat(number)} />
                </li>
                <li>
                    <FormattedNumber
                        currency="USD"
                        minimumFractionDigits={5}
                        style="currency"
                        value={parseFloat(number)}
                    />
                </li>
            </ul>
        </>
    )
}

export default Numbers;
