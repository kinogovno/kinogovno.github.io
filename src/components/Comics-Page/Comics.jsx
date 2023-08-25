import s from "./Comics.module.css";
import one from "./Comics/one.png"
import two from "./Comics/two.png"
import three from "./Comics/three.png"
import four from "./Comics/four.png"
import five from "./Comics/five.png"
import six from "./Comics/six.png"

let Comics = () => {
    return (
        <div className={s.MainComics}>
            <div className={s.Content}>
                <div className={s.bgL}></div>
                <div className={s.Comics}>
                    <a href="#"><div className={s.a1}></div></a>
                    <a href="#"><div className={s.b2}></div></a>
                    <a href="#"><div className={s.c3}></div></a>
                    <a href="#"><div className={s.d4}></div></a>
                    <a href="#"><div className={s.e5}></div></a>
                    <a href="#"><div className={s.f6}></div></a>

                    <a href="#"><div className={s.a1}></div></a>
                    <a href="#"><div className={s.b2}></div></a>
                    <a href="#"><div className={s.c3}></div></a>
                    <a href="#"><div className={s.d4}></div></a>
                    <a href="#"><div className={s.e5}></div></a>
                    <a href="#"><div className={s.f6}></div></a>
                </div>
                <div className={s.bgR}></div>
            </div>
            <div className={s.BlackedText}></div>
        </div>
    );
}

export default Comics