import './index.css';
import KovchegLogoSvg from "../KovchegLogoSvg/KovchegLogoSvg";
import Script from 'next/script';

export default function ArcNavigationBar() {
  return (
    <>
      <div className="arc-navigation-bar">
        <div className='arc-navigation-content'>
          <KovchegLogoSvg />
          <a href="#donate" id="donate-navbar-button" className="arc-navigation-help-button">помочь</a>
        </div>
      </div>
      <Script id="ga-navbar-button-click">
        {`
                      const navbarButton = document.getElementById('donate-navbar-button');
                      if (navbarButton) {
                        navbarButton.addEventListener('click', () => {
                          
                          try{        
                            gtag('event', 'scroll_to_donate_button_click');
                            console.log("scroll_to_donate_button_click");
                          }catch(e){
                          }
                        });
                      }
                `}
      </Script>
    </>
  )
}