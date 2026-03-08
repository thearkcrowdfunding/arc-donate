import './index.css'; import bannerAsset from './GovernmentPressure.jpg';

export default function GovernmentPressure() {
    return (
        <div className="banner-container government-pressure">
            <img src={bannerAsset.src} className='banner-background-img'></img>
            <div className='banner-overlay no-fader'>
                <div className='banner-overlay-content government-pressure-content'>
                    {/* <div className='tall-banner-block'> */}
                    <div className='government-pressure-header'>
                        В России продолжаются<br />
                        беспрецедентные репрессии
                    </div>
                    <div className='government-pressure-text'>
                        Более миллиона <br className='mobile-only' />антивоенных россиян уехали, <br />ещё больше остаются внутри
                    </div>
                    {/* </div> */}
                    <div className='tall-banner-block'>
                        <div className='government-pressure-text'>
                            <b></b>Они сталкиваются<br className='desktop-only' /> с <b>давлением</b>, <b>ограничениями</b>, <b>военным призывом</b>,<br className='desktop-only' /> <b>тотальной слежкой</b>, <b>преследованиями</b><br className='desktop-only' /> и <b>подавлением любого инакомыслия</b>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}