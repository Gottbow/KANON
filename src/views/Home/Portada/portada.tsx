import Logo from '../../../assets/svg/LOGO A COLOR.svg'
function portada() {
  return (
    <div >

      <div className='md:flex mt-20 justify-center place-items-center lg:m-20'>

        <img style={{width: "16em",}} src={Logo} alt="Logo" />

        <div className='flex flex-col text-center md:text-left m-5 '>
          <p className='text-[#563030] text-8xl md:text-9xl font-bold mt-7 md:mt-auto md:ml-7'>KANON</p>
          <p className='text-[#FB8A70] text-2xl md:ml-7'>"Neque porro quisquam est qui dolorem 
          ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        </div>

      </div>

      <div className='justify-center center md:flex text-center mt-20'>

        <div className='flex flex-col md:mx-8 mt-10'>
          <p className='text-[#563030] text-3xl mb-4 font-bold'>Projecto 1</p>
          <div className='m-auto w-64 h-48 bg-[#FFD4A6] rounded-3xl'>Contenido</div>
        </div>

        <div className='flex flex-col md:mx-8 mt-10'>
         <div className='m-auto w-64 h-48 bg-[#FFD4A6] rounded-3xl md:order-1 order-2'>Contenido</div>
        <p className='text-[#563030] text-3xl mb-4 md:mt-10 font-bold md:order-2 order-1'>Projecto 2</p>
        </div>
        
        <div className='flex flex-col md:mx-8 mt-10'>
          <p className='text-[#563030] text-3xl mb-4 font-bold'>Projecto 3</p>
          <div className='m-auto w-64 h-48 bg-[#FFD4A6] rounded-3xl'>Contenido</div>
        </div>
      </div>

    </div>
  )
}

export default portada
