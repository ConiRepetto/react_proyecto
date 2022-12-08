import React from 'react'

function Input() {

    return (
        <div>
            <label htmlFor="name" style={{ width: "100px", marginRight: 4 }}>
                Nombre
            </label>
            <input
                required
                value={data.name}
                name="name"
                type="text"
                onChange={onInputChange} />
        </div>

        // <div style={{ display: "flex", marginBottom: 8 }}>
        //         <label htmlFor="email" style={{ width: "100px", marginRight: 4 }}>
        //             Email
        //         </label>
        //         <input
        //             required
        //             value={data.email}
        //             name="email"
        //             type="email"
        //             onChange={onInputChange} />
        //     </div><div style={{ display: "flex", marginBottom: 8 }}>
        //         <label htmlFor="phone" style={{ width: "100px", marginRight: 4 }}>
        //             Teléfono
        //         </label>
        //         <input
        //             required
        //             value={data.phone}
        //             name="phone"
        //             type="phone"
        //             onChange={onInputChange} />
        //     </div>
        //     <button
        //         disabled={data.name === "" || data.phone === "" || data.email === ""}
        //         type="submit" >
        //         Finalizar Compra
        //     </button>
        // </div>
    )
}

export default Input