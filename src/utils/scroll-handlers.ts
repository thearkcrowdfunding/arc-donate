import { analytics } from '@/utils/analytics'

export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollHandlers = {
  handleHeroToFormClick: () => {
    analytics.trackHero('Navigate To Form');
    scrollToElement('donate-form');
  },
  handleNavbarToFormClick: () => {
    analytics.trackNavigation('Navigate To Form', 'Header');
    scrollToElement('donate-form');
  },
  handleAboutUsToFormClick: () => {
    analytics.trackAboutUs('Navigate To Form 2');
    scrollToElement('donate-form-2');
  },
  handleLearnMoreClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    analytics.trackHero('Learn More Click');
    scrollToElement('learn-more');
  }
}; 
