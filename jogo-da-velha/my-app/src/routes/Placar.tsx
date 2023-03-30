import "../css/Placar.css";
const Placar = () => {
  let pontosX: string | null = localStorage.getItem("pontosJogadorX");
  let pontosO: string | null = localStorage.getItem("pontosJogadorO");
  let jogadorX: string | null = localStorage.getItem("playerX");
  let jogadorO: string | null = localStorage.getItem("playerO");
  let vencedor: string | null | undefined;

  let fraseVencedor: string;
  if (pontosX == null) {
    pontosX = "0";
  }
  if (pontosO == null) {
    pontosO = "0";
  }

  if (pontosX > pontosO) {
    vencedor = jogadorX;
    fraseVencedor = `${vencedor} ganhou!!!`

  } else if (pontosO > pontosX) {
    vencedor = jogadorO;
    fraseVencedor = `${vencedor} ganhou!!!`
  }else{
    fraseVencedor = "Está empatado"
  }

  return (
    <>
      <div className="div-placar">
        <div className="placar">
          <div className="side-x">
            <h1 className="frase">Potuação {jogadorX}:</h1>
            <span className="pontos-x">{pontosX}</span>
          </div>
          <div className="side-o">
            <h1 className="frase">Pontuação {jogadorO}:</h1>
            <span className="pontos-o">{pontosO}</span>
          </div>
        </div>
        <div id="div_vencedor" className="div-vencedor">
          <h1 className="vencedor">{fraseVencedor}</h1>
          
        </div>
      </div>
    </>
  );
};

export default Placar;
