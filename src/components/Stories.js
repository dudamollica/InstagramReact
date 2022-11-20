export default function Stories() {
    const infosStories= [
      {imagem:"assets/img/9gag.svg", nomeUsuario:"9gag"},
      {imagem:"assets/img/meowed.svg", nomeUsuario:"meowed"},
      {imagem:"assets/img/barked.svg", nomeUsuario:"barked"},
      {imagem:"assets/img/nathanwpylestrangeplanet.svg", nomeUsuario:"nathanwpylestrangeplanet"},
      {imagem:"assets/img/wawawicomics.svg", nomeUsuario:"wawawicomics"},
      {imagem:"assets/img/respondeai.svg", nomeUsuario:"respondeai"},
      {imagem:"assets/img/filomoderna.svg", nomeUsuario:"filomoderna"},
      {imagem:"assets/img/memeriagourmet.svg", nomeUsuario:"memeriagourmet"},
  ]
    return (
      <div class="stories">
        {infosStories.map((s)=><UmStory imagem={s.imagem} usuario={s.nomeUsuario} />)}
  
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    )
  }
  
  function UmStory(props) {
    return (
      <div class="story">
        <div class="imagem">
          <img src={props.imagem} />
        </div>
        <div class="usuario">
          {props.usuario}
        </div>
      </div>
    )
  }