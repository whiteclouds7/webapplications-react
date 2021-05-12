import React, {useState} from "react";
import { FormattedMessage} from "react-intl";

type Gender = "female" | "male" | "other"



const Text = (): JSX.Element=> {
    const [value, setValue] = useState(0);
    const [gender, setGender] = useState<Gender>("female");

    return(
        <>
        <h1>Text</h1>
            <input type="number" value={value} onChange={event => setValue(parseInt(event.target.value))}/>
            <select name="gender" id="gender" onChange={(event) => setGender(event.target.value as Gender)}>
                <option value={"female"}>Female</option>
                <option value={"male"}>Male</option>
                <option value={"other"}>Other</option>
            </select>
                <ul>
                    <li>
                        <FormattedMessage
                            id="cake_eaten"
                            description="Telling you how many cakes I ate today"
                            values={{
                                itemCount: value.toString(),
                            }}
                        />
                    </li>
                    <li>
                        <FormattedMessage
                            id="cake_baked"
                            description="Telling who baked a cake today"
                            values={{
                                gender: gender,
                            }}
                        />
                    </li>
                </ul>
        </>
    )
}

export default Text;
