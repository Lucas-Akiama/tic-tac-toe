import { Dispatch, SetStateAction } from "react";

type Props = {
  valueNamePlayerX: string;
  valueNamePlayerO: string;
  setNamePlayerX: Dispatch<SetStateAction<string>>;
  setNamePlayerO: Dispatch<SetStateAction<string>>;
  handleStartGame: () => void;
};

export default function Welcome({
  valueNamePlayerX,
  valueNamePlayerO,
  setNamePlayerX,
  setNamePlayerO,
  handleStartGame,
}: Props) {
  return (
    <div className="welcome">
      <div className="welcome-text">Bem-vindo ao jogo da velha!!</div>

      <div className="cadastro-player">
        <label className="lbl-name-player">Digite o nome do jogador X: </label>
        <input
          className="input-cadastro"
          type={"text"}
          placeholder="jogador X"
          value={valueNamePlayerX}
          onChange={(e) => setNamePlayerX(e.target.value)}
        ></input>
      </div>

      <div className="cadastro-player">
        <label className="lbl-name-player">Digite o nome do jogador O: </label>
        <input
          className="input-cadastro"
          type={"text"}
          placeholder="jogador O"
          value={valueNamePlayerO}
          onChange={(e) => setNamePlayerO(e.target.value)}
        ></input>
      </div>

      <button onClick={() => handleStartGame()} className="welcome-button">
        Clique aqui para iniciar
      </button>
    </div>
  );
}
