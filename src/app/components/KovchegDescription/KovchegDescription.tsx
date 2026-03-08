import './index.css';
import bannerAsset from './KovchegDescriptionBanner.jpg';

export default function KovchegDescription() {
    return (
        <div className="banner-container kovcheg-description">
            <img src={bannerAsset.src} className='banner-background-img'></img>
            <div className='banner-overlay no-fader'>
                <div className='banner-overlay-content kovcheg-description-content'>
                    <div className='kovcheg-description-header'>
                        «Ковчег» – самый большой проект, ПОМОГАЮЩИЙ антивоенным<br />
                        и продемократическим россиянам<br />
                        за рубежом и внутри страны
                    </div>
                    <div className='kovcheg-description-group'>
                        <div className='kovcheg-description-text'>
                            Мы рядом, когда нужна экстренная помощь<br />
                            c жильём, юристами, психологами
                        </div>
                        <div className='kovcheg-description-text'>
                            Объединяем, помогаем встать на ноги<br />
                            и найти единомышленников
                        </div>
                        <div className='kovcheg-description-text'>
                            <b>Не важно, уехали вы или остались – <br className='mobile-only' /> мы вместе</b>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}