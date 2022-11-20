import React from "react"

export default function Usuario() {

    return (
        <UmUsuario imagem="assets/img/catanacomics.svg" usuario="catanacomics" nome="Catana" />
    )
}

function UmUsuario(props) {
    const [nome, setNome] = React.useState("")
    const [imagem, setImagem] = React.useState("")

    return (
        <div className="usuario">
            <img src={!imagem ? (props.imagem) : (imagem)} onClick={()=>setImagem(prompt("Coloque a URL da sua foto"))}/>
            <div className="texto">
                <strong>{props.usuario}</strong>
                <span>
                    {!nome ? (props.nome) : (nome)}
                    <ion-icon name="pencil" onClick={()=>setNome(prompt("Qual seu nome?"))}></ion-icon>
                </span>
            </div>
        </div>
    )
}

