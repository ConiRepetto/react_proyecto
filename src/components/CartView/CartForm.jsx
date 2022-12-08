import { useState } from "react";
import Button from "../Button/Button";
import Input from "./Input";

export default function CartForm(props) {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    function onInputChange(evt) {
        let nameInput = evt.target.name;
        let value = evt.target.value;

        // dynamic properties
        let newData = { ...data };
        newData[nameInput] = value;
        setData(newData);
    }

    function onSubmit(evt) {
        if (data.name.length === 0) return;

        evt.preventDefault();
        props.onSubmit(evt, data);
    }

    return (
        <form onSubmit={onSubmit}>
            
            
                <Input></Input>
                
        </form>
    );
}