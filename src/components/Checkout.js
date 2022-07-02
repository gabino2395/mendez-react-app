import React from 'react'




const Checkout = ({ handleChange,data,handleSubmit}) => {

    return (

        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                    />
                <input
                    placeholder="Nombre"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                />
                 <input
                    placeholder="Telefono"
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    value={data.phone}
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
                <button>Finalizar compra</button>
            </form>
        </div>
    );


    // return (
    //   <div>
    //     <form onSubmit={handleSubmit}>
    //       {" "}
    //       <div>
    //         {/* <input
    //               type="text"
    //               id="Nombre"
    //               placeholder="nombre.."
    //             // value={usuario.nombre}
    //             /> */}
    //         <input
    //           placeholder="Nombre"
    //           type="text"
    //           name="name"
    //           onChange={handleChange}
    //           value={data.name}


    //         />

    //       </div>
    //       <div>
    //         <input
    //            placeholder="Email"
    //            type="text"
    //            name="email"
    //            onChange={handleChange}
    //            value={data.email}

    //         />
    //       </div>
    //       <div>
    //         <input
    //              placeholder="Telefono"
    //              type="number"
    //              name="phone"
    //              onChange={handleChange}
    //              value={data.phone}

    //         />
    //       </div>
    //       <button>comprar</button>
    //     </form>
    //   </div>
    // )
}

export default Checkout