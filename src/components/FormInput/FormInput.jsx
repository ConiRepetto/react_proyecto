import React, { useState } from "react";
import './form.css'

import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import Button from "../Button/Button";

function FormInput(props) {
    const navigate = useNavigate()
    const idOrder = useParams().idOrder
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    })

    function onInputChange(evt) {
        let nameInput = evt.target.name;
        let value = evt.target.value;

        let newData = { ...data }

        newData[nameInput] = value;
        setData(newData)
        console.log(newData)
    }

    function onSubmit(evt) {
        // if(data.name.length === 0 || data.email.length === 0 || data.phone.length === 0 || data.address.length === 0) alert("Te falta completar algun dato.")

        evt.preventDefault();
        props.onSubmit(evt, data)

        navigate(`/thankyou/${idOrder}`)
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="formContainer">
                <div className="formInput">
                    <label htmlFor="name">Nombre y Apellido</label>
                    <input required value={data.name} type="text" name="name" id="" onChange={onInputChange} />
                </div>

                <div className="formInput">
                    <label htmlFor="email">E-Mail</label>
                    <input required value={data.email} type="email" name="email" id="" onChange={onInputChange} />
                </div>

                <div className="formInput">
                    <label htmlFor="phone">Telefono</label>
                    <input required value={data.phone} type="phone" name="phone" id="" onChange={onInputChange} />
                </div>

                <div className="formInput">
                    <label htmlFor="address">Direccion</label>
                    <input required value={data.address} type="text" name="address" id="" onChange={onInputChange} />
                </div>
                <Button
                    disabled={!(data.name !== "" && data.email !== "" && data.phone !== "" && data.address !== "")}
                    type="submit"
                    onClick={(evt) => props.onSubmit(evt, data)}
                    colorBtn="red"
                >
                    Enviar Orden
                </Button>

            </form>
        </div>
    )
}

export default FormInput