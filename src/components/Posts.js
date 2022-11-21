import React from "react"

export default function Posts() {
    const infosPosts = [
        { imagemUsuario: "assets/img/meowed.svg", nomeUsuario: "meowed", imagemConteudo: "assets/img/gato-telefone.svg", imgQuemCurtiu: "assets/img/respondeai.svg", quemCurtiu: "respondeai", quantasCurtidas: "101.523" },
        { imagemUsuario: "assets/img/barked.svg", nomeUsuario: "barked", imagemConteudo: "assets/img/dog.svg", imgQuemCurtiu: "assets/img/adorable_animals.svg", quemCurtiu: "adorable_animals", quantasCurtidas: "99.159" }
    ]
    return (
        <div className="posts">
            {infosPosts.map((p) => <UmPost key={p.nomeUsuario} imagemUsuario={p.imagemUsuario} nomeUsuario={p.nomeUsuario} imagemConteudo={p.imagemConteudo} imgQuemCurtiu={p.imgQuemCurtiu} quemCurtiu={p.quemCurtiu} quantasCurtidas={p.quantasCurtidas} />)}

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

    const [likes, setLikes] = React.useState("")
    const [heart, setHeart] = React.useState(<ion-icon name="heart-outline"></ion-icon>)

    function curtidaImagem(){
        setHeart(<ion-icon name="heart" class="vermelho" ></ion-icon>)
        setLikes((Number(props.quantasCurtidas)+0.001).toFixed(3))
    }

    function curtidas() {  
    if (heart.props.name ==="heart-outline"){
        setHeart(<ion-icon name="heart" class="vermelho" ></ion-icon>)
        setLikes((Number(props.quantasCurtidas)+0.001).toFixed(3))
    }else{
        setHeart(<ion-icon name="heart-outline"></ion-icon>) 
    }
    }


    return (
        <div data-test="post" className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imagemUsuario} />
                    {props.nomeUsuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img data-test="post-image" onClick={curtidaImagem} src={props.imagemConteudo} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <span data-test="like-post" onClick={curtidas}>{heart}</span>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div data-test="save-post" onClick={salvarOuNao}>
                        {salvar}
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.imgQuemCurtiu} />
                    <div className="texto">
                        Curtido por <strong>{props.quemCurtiu}</strong> e 
                     <strong>outras <span data-test="likes-number">{heart.props.name=="heart-outline"?props.quantasCurtidas:likes}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}