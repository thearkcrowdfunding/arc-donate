import bannerAsset from './KovchegUnitesBanner.jpg';
import mobileBannerAsset from './MobileKovchegUnites.jpg';
import './index.css';

export default function KovchegUnites() {
    return (
        <div className="banner-container kovcheg-unites-container">
            <img src={bannerAsset.src} className='banner-background-img desktop-only'></img>
            <img src={mobileBannerAsset.src} className='banner-background-img mobile-only'></img>
            <div className='banner-overlay no-fader'>
                <div className='banner-overlay-content kovcheg-unites-content'>
                    <div className='kovcheg-unites-header'>
                        Больше 350 000 единомышленников<br />
                        объединяет «Ковчег»<br />
                        по всему миру
                    </div>
                    <div className='kovcheg-unites-group'>
                        <div className='kovcheg-unites-text'>
                            <b>Помогает найти информацию</b><br />
                            и <b>поддержку</b> в онлайн-сообществах: <br />женском,  ученых, психологов, инженеров,<br /> врачей, cтудентов и многих других
                        </div>
                        <div className='kovcheg-unites-text'>
                            <b>Сообщества «Ковчега»</b> – это огромная<br /> <b>уникальная система взаимопомощи <br /></b>для <b>сотен тысяч людей</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}