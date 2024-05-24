import logo from '../img/logo.png'

function MeusDados(){

    let nome = "Lana"
    let cargo = "Estudante"
    let instituicao = "FIAP"

    return(
        <div>
            <h2>MEUS DADOS</h2>
            <img src={logo} alt='Logo FIAP' width='100px'/>
            <p>Nome: {nome}</p>
            <p>Cargo: {cargo}</p>
            <p>Instituição: {instituicao}</p>
        </div>
    )
}

export default MeusDados