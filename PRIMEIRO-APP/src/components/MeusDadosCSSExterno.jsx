import logo from './../img/logo.png'
import './../css/MeusDados.css'

function MeusDados(){

    let nome = "Lana"
    let cargo = "Estudante"
    let instituicao = "FIAP"

    const paragr = {
        color: '#FE91AB',
        background: 'black',
        fontSize:'18px',
        fontWeight:'bold'
    }

    return(
        <div>
            <h2 style={{color:'#FE91AB'}}>MEUS DADOS</h2>
            <img src={logo} alt='Logo FIAP' width='200px'/>
            <p style={paragr}>Nome: {nome}</p>
            <p>Cargo: {cargo}</p>
            <p className='teste'>Instituição: {instituicao}</p>
        </div>
    )
}

export default MeusDados