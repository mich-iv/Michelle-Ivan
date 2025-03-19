function Acerca() {
  return (
    <>
        <div className='titulos'>
            soy programador y wacha esta calculadora
            <br></br>
            <input type='text' id='campo1'></input> + 
            <input type='text' id='campo2'></input>

            <button onClick={() => {
            let campo1 = (document.getElementById('campo1') as HTMLInputElement)?.value || '';
            let campo2 = (document.getElementById('campo2') as HTMLInputElement)?.value || '';
            alert((campo1) + (campo2));
         }}>Sumar

        </button>
        </div>

        
    </>
  )
}

export default Acerca
