import bannerAsset from './LAW.jpg';
import './index.css';

export default function LawyersBanner() {
    return (<div className="banner-container law-container">
        <img src={bannerAsset.src} className='banner-background-img'></img>
        <div className='banner-overlay no-fader'>
            <div className='banner-overlay-content law-content'>

                <div className='law-header'>Юристы «Ковчега»<br className='mobile-only' /> каждый день</div>
                <div className='law-text-group'>

                    <div className='law-text'><b>Бесплатно</b> консультируют</div>
                    <div className='law-text'><b>Помогают в экстренных ситуациях</b>,<br /> как при задержаниях в Азербайджане<br /> или попытках похищений в Армении </div>
                    <div className='law-text'><b>Отвечают</b> на самые сложные вопросы <br />через бота</div>
                    <div className='law-text'><b>Ведут базу знаний</b> с 450+ материалами</div>
                </div>
                <div className='law-number-group'>
                    <div className='gradient-number'>{'>'}160 000</div>
                    <div className='gradient-number-group-text'> человек уже получили поддержку <br />
                        в самых тяжелых ситуациях</div>
                </div>
            </div>
        </div>
    </div>
    )
}