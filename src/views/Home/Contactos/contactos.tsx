function contactos() {
  return (



    <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          // necesitamos nueva key del correo
          value=""
        />
        <input
          type="hidden"
          name="redirect"
          value="http://localhost:5173/Aform"
        />
        <input
          type="hidden"
          name="subject"
          value="Tienes una nueva notificación de KANON!!"
        />
        <div className="flex items-center mt-20 ">
          <div className="container mx-auto my-3 px-4 lg:px-20 ">
            <div className="w-full p-8 my-4 md:px-16 rounded-2xl drop-shadow-2xl shadow-500">
              <div className="flex">
                <h1 className="font-bold text-[#563030] m-auto uppercase md:text-6xl text-5xl">
                  Contacto
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-2 mt-10">
              <p className='text-[#563030] text-2xl mt-4 font-bold'>Nombre</p>
                <input
                  className="w-full bg-[#FC9179] text-[#563030]  p-3 rounded-lg focus:outline-none"
                  type="text"
                  name="name" 
                  placeholder=""
                />
                <p className='text-[#563030] text-2xl mt-4 font-bold'>Apellido</p>
                <input
                  className="w-full bg-[#FC9179] text-[#563030] p-3 rounded-lg focus:outline-none"
                  type="text"
                  name="lastname"
                  placeholder=""
                />
                <p className='text-[#563030] text-2xl  mt-4 font-bold'>E-mail</p>
                <input
                  className="w-full bg-[#FC9179] text-[#563030] p-3 rounded-lg focus:outline-none"
                  type="email"
                  name="email"
                  placeholder=""
                />
                <p className='text-[#563030] text-2xl  mt-4 font-bold'>Telefono</p>
                <input
                  className="w-full bg-[#FC9179] text-[#563030] p-3 rounded-lg focus:outline-none"
                  type="text"
                  name="phone"
                  placeholder=""
                />
              </div>
              <div className="my-7">
              <p className='text-[#563030] text-2xl font-bold'>Mensaje</p>
                <textarea
                  name="message"
                  placeholder=""
                  className="w-full bg-[#FC9179] text-[#563030] p-3 rounded-lg focus:outline-none"
                ></textarea>
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  type="submit"
                  className="uppercase text-lg font-bold tracking-wide bg-[#FC9983] text-[#563030] p-3 rounded-lg w-full 
                    focus:outline-none focus:shadow-outline"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
  )
}

export default contactos
