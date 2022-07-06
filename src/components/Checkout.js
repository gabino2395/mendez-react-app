import React from 'react'




const Checkout = ({ handleChange, data, handleSubmit }) => {

    return (

        <div className="form">
            <form onSubmit={handleSubmit}>


                <input
                    required

                    placeholder="Nombre"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                />
                <input
                    placeholder="Apellido"
                    type="text"
                    name="apellido"
                    onChange={handleChange}
                    value={data.apellido}
                />


                <input
                    placeholder="DNI *"
                    type="number"
                    name="dni"
                    onChange={handleChange}
                    value={data.dni}
                />

                <input
                    placeholder="Ciudad *"
                    type="text"  
                    name="ciudad"
                    onChange={handleChange}


                    value={data.ciudad}
                />
                <input
                    placeholder="Calle *"
                    type="text"
                    name="calle"
                    onChange={handleChange}
                    value={data.calle}
                />

                <input
                    required
                    placeholder="Email"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                />
                <input
                    placeholder="Telefono"
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    value={data.phone}
                />


                <button className='confirm-btn btn-continuar '>Finalizar compra</button>

            </form>
        </div>
    );


}

export default Checkout