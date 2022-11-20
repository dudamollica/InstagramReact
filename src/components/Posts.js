import React from "react"

export default function Posts() {
    const infosPosts = [
        { imagemUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", imagemConteudo: "assets/img/gato-telefone.svg", imgQuemCurtiu: "assets/img/respondeai.svg", quemCurtiu: "respondeai", quantasCurtidas: "101.523" },
        { imagemUsuario: "assets/img/barked.svg", nomeUsuario: "barked", imagemConteudo: "assets/img/dog.svg", imgQuemCurtiu: "assets/img/adorable_animals.svg", quemCurtiu: "adorable_animals", quantasCurtidas: "99.159" }
    ]
    return (
        <div class="posts">
            {infosPosts.map((p) => <UmPost imagemUsuario={p.imagemUsuario} nomeUsuario={p.nomeUsuario} imagemConteudo={p.imagemConteudo} imgQuemCurtiu={p.imgQuemCurtiu} quemCurtiu={p.quemCurtiu} quantasCurtidas={p.quantasCurtidas} />)}

        </div>
    )
}

function UmPost(props) {
    const [salvar, setSalvar] = React.useState(<ion-icon name="bookmark-outline"></ion-icon>)

    function salvarOuNao() {
        if (salvar.props.name == 'bookmark-outline') {
            setSalvar(<ion-icon name="bookmark"></ion-icon>)
        } else {
            setSalvar(<ion-icon name="bookmark-outline"></ion-icon>)
        }
    }
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagemUsuario} />
                    {props.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imagemConteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div onClick={salvarOuNao}>
                        {salvar}
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgQuemCurtiu} />
                    <div class="texto">
                        Curtido por <strong>{props.quemCurtiu}</strong> e <strong>outras {props.quantasCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}