import React, {useState} from "react";
import {FormattedDate} from "react-intl";

const Date = (): JSX.Element => {
    const [date, setDate] = useState("")

    return(
        <>
        <h1>Date</h1>
            <input type="date" value={date} onChange={event => setDate(event.target.value)}/>
            {date.length > 0 && (
                <ul>
                <li>
                    <FormattedDate value={date} />
                </li>
            </ul>
            )}
        </>
    )
};

export default Date;
