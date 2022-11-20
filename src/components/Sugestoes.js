export default function Sugestoes() {
    const infosSugestoes=[
        {img:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes", tipo:"Segue você"},
        {img:"assets/img/chibirdart.svg", nome:"chibirdart", tipo:"Segue você"},
        {img:"assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar", tipo:"Novo no Instagram"},
        {img:"assets/img/adorable_animals.svg", nome:"adorable_animals", tipo:"Segue você"},
        {img:"assets/img/smallcutecats.svg", nome:"smallcutecats", tipo:"Segue você"},
    ]
        return (
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
            {infosSugestoes.map((s)=> <UmaSugestao img={s.img} nome={s.nome} tipo={s.tipo} />)}
            </div>
        )
    }
    
    function UmaSugestao(props){
        return(
            <div class="sugestao">
            <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.tipo}</div>
                </div>
            </div>
    
            <div class="seguir">Seguir</div>
        </div>
        )
    }