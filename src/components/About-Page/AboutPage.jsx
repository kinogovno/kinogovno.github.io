import s from './AboutPage.module.css';
import don2 from './don2.png'

let AboutPage = () => {
    return (
        <div className={s.Content}>
            <div className={s.MainImg}></div>
            <div className={s.InfoText}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> Iure facilis illo nemo debitis blanditiis saepe ab error tempore incidunt, eius dignissimos omnis ut sit veniam cupiditate. Mollitia nobis facere accusamus.</p>
                    <br></br>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure facilis illo nemo debitis blanditiis saepe ab error tempore incidunt, eius dignissimos omnis ut sit veniam cupiditate. <br></br>Mollitia nobis facere accusamus.</p>            
            </div>
        </div>
    );
}

export default AboutPage;