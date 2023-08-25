import s from "./Body.module.css";
import goose from "./Img/goose.png"
import gopnik from "./Img/gopnik.png"
import game from "./Img/camera_settings.png"
import room from "./Img/last.png"
import logo from "./Img/logo_640.png"

let Body = () => {
    return (
      <div className={s.AppBody}>
        <div className={s.MainImgL}></div>
        <div className={s.Text}>
            <h1>Hello World!</h1>
            <br />
            <p>Издательство DC Comics.В 1935 году Малькольм Вилер Николсон основывает свою компанию National Allied Productions, которая представляет читателям первый выпуск New Fun: 
              The Big Comic Magazine, в дальнейшем переименовано на Adventure Comics. 
              Выпуск серии продолжается до 1983 года и становится самой большой (по количеству выпусков) серией комиксов за всю историю жанра (503 выпуска).
            </p>
            <br/>
            <div className={s.FirstLine}>
              <img className={s.Goose} src={goose} alt="" />
              <img className={s.Logo} src={logo} alt="" />
              <img className={s.Gopnik} src={gopnik} alt="" />
            </div>
            <br />
            <p>Издательство DC Comics.В 1935 году Малькольм Вилер Николсон основывает свою компанию National Allied Productions, которая представляет читателям первый выпуск New Fun: 
              The Big Comic Magazine, в дальнейшем переименовано на Adventure Comics. 
              Выпуск серии продолжается до 1983 года и становится самой большой (по количеству выпусков) серией комиксов за всю историю жанра (503 выпуска). Издательство DC Comics.В 1935 году Малькольм Вилер Николсон основывает свою компанию National Allied Productions, которая представляет читателям первый выпуск New Fun: 
              The Big Comic Magazine, в дальнейшем переименовано на Adventure Comics. 
              Выпуск серии продолжается до 1983 года и становится самой большой (по количеству выпусков) серией комиксов за всю историю жанра (503 выпуска).
            </p>
            <br />
            <img className={s.Game} src={game} alt="" />
            <br />
            <p>Издательство DC Comics.В 1935 году Малькольм Вилер Николсон основывает свою компанию National Allied Productions, которая представляет читателям первый выпуск New Fun: 
              The Big Comic Magazine, в дальнейшем переименовано на Adventure Comics.
            </p>
            <br />
            <img className={s.Game} src={room} alt="" />
            <br />
            <br />
        </div>
        <div className={s.MainImgR}></div>
        {/* <div className={s.MainImg}></div> */}
        {/* <div className={s.BlackedText}></div> */}
      </div>
    );
}

export default Body;