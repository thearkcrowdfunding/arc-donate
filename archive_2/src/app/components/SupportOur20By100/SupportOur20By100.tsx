import bannerAsset from './SupportBg.jpg';
import './index.css';

export default function SupportOur20By100() {
    return (<div className="banner-container support-20-100-container">
        <img src={bannerAsset.src} className='banner-background-img'></img>
        <div className='banner-overlay no-fader'>
            <div className='banner-overlay-content support-20-100'>
                <div className='support-20-100-header'>«Ковчег» был и остается <br />надежным плечом  <br className='mobile-only' /> для сотен тысяч людей</div>

                <div className='support-20-100-text'>
                    Чтобы <span>помогать в самых тяжелых <br className='mobile-only' /> ситуациях</span>, каждый месяц <br className='desktop-only' />
                    <span>нужно</span><br className='mobile-only' /> всего <span>10 тысяч долларов</span>.<br className='mobile-only' /> Да, мы умеем быть эффективными</div>

                <div className='support-20-100-text'><b>Мы работаем только благодаря вашей поддержке</b><br /><br className='mobile-only' /> <b>И чтобы продолжать нужна ваша<br className='mobile-only' /> помощь!</b></div>
            </div>
        </div>
    </div >
    )
}