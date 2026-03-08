import bannerAsset from './TallBanner.jpg'
import './index.css';

export default function TallBanner() {
    return (
        <div className="banner-container tall-banner-container">
            <img src={bannerAsset.src} className='banner-background-img'></img>
            <div className='banner-overlay tall-banner'>
                <div className='banner-overlay-content tall-banner'>
                    <div className='tall-banner-block'>
                        <div className='tall-banner-header-2'>
                            В России продолжаются<br />
                            беспрецедентные репрессии
                        </div>
                        <div className='tall-banner-text-36'>
                            Более миллиона <br className='mobile-only' />антивоенных россиян уехали, <br />ещё больше остаются внутри
                        </div>
                    </div>
                    <div className='tall-banner-block'>
                        <div className='tall-banner-text-36'>
                            <b></b>Они сталкиваются<br className='desktop-only' /> с <b>давлением</b>, <b>ограничениями</b>, <b>военным призывом</b>,<br className='desktop-only' /> <b>тотальной слежкой</b>, <b>преследованиями</b><br className='desktop-only' /> и <b>подавлением любого инакомыслия</b>
                        </div>
                    </div>
                    <div className='tall-banner-block'>
                        <div className='tall-banner-header-2'>
                            ДАВЛЕНИЕ ПОСТОЯННО УСИЛИВАЕТСЯ
                        </div>
                        <div className='tall-banner-text-36'>
                            <b>Посадки</b> на безумные сроки <b>за репосты</b>, <br className='desktop-only' />
                            <b>задержания</b> в разных странах, <b>депортации</b>, <br className='desktop-only' /> <b>экстрадиции</b>
                        </div>
                        <div className='tall-banner-text-36'>
                            Все это происходит каждый день
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}