import { analytics } from '@/utils/analytics'

export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollHandlers = {
  handleHeroToFormClick: (targetId = 'donate-form') => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
  },
  handleNavbarToFormClick: () => {
    analytics.trackNavigation('Navigate To Form', 'Header');
    scrollToElement('donate-form');
  },
  handleAboutUsToFormClick: () => {
    analytics.trackAboutUs('Navigate To Form 2');
    scrollToElement('donate-form-2');
  },
  handleLearnMoreClick: (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('learn-more');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}; 
