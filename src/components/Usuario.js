export default function Usuario() {

    return (
       <UmUsuario imagem="assets/img/catanacomics.svg" usuario="catanacomics" nome="Catana"/>
    )
}

function UmUsuario(props){
    return(
        <div class="usuario">
        <img src={props.imagem} />
        <div class="texto">
            <strong>{props.usuario}</strong>
            <span>
                {props.nome}
                <ion-icon name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    )
}