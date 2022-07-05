import React from 'react'




const Checkout = ({ handleChange, data, handleSubmit }) => {

    return (

        <div className="form">
            <form onSubmit={handleSubmit}>
                

                <input
                    placeholder="Nombre"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                />
                <input
                    placeholder="Apellido"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                />


                <input
                    placeholder="DNI *"
                    type="number"
                    name="number"
                    onChange={handleChange}
                    value={data.email}
                />
               
                 <input
                    placeholder="Ciudad *"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                />
                <input
                    placeholder="Calle *"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                />

                <input
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