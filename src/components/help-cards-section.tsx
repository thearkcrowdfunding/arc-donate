'use client'

import { useTranslations } from 'next-intl';
import { HelpCard } from './help-card';
import { TestimonialCard } from './testimonial-card';

export function HelpCardsSection() {
  const t = useTranslations('helpCards');

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          {t('title')}
        </h2>
        
        <div className="max-w-5xl mx-auto space-y-8">
          <HelpCard
            title={t('cards.emergency.title')}
            subtitles={t.raw('cards.emergency.subtitles')}
            imageSrc="/images/help-cards/emergency.jpg"
            stats={{
              housing: {
                number: t('cards.emergency.stats.housing.number'),
                text: t('cards.emergency.stats.housing.text')
              },
              legal: {
                number: t('cards.emergency.stats.legal.number'),
                text: t('cards.emergency.stats.legal.text')
              }
            }}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote={t('testimonials.psychology.quote')}
              author={t('testimonials.psychology.author')}
            />
            <TestimonialCard
              quote={t('testimonials.legal.quote')}
              author={t('testimonials.legal.author')}
              imageSrc="/images/testimonials/legal.jpg"
            />
          </div>

          <HelpCard
            title={t('cards.adaptation.title')}
            subtitles={t.raw('cards.adaptation.subtitles')}
            imageSrc="/images/help-cards/adaptation.jpg"
            stats={{
              psychology: {
                number: t('cards.adaptation.stats.psychology.number'),
                text: t('cards.adaptation.stats.psychology.text')
              },
              language: {
                number: t('cards.adaptation.stats.language.number'),
                text: t('cards.adaptation.stats.language.text')
              }
            }}
          />

          <HelpCard
            title={t('cards.support.title')}
            subtitles={t.raw('cards.support.subtitles')}
            imageSrc="/images/help-cards/support.jpg"
            stats={{
              events: {
                number: t('cards.support.stats.events.number'),
                text: t('cards.support.stats.events.text')
              },
              chats: {
                number: t('cards.support.stats.chats.number'),
                text: t('cards.support.stats.chats.text')
              }
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote={t('testimonials.adaptation.quote')}
              author={t('testimonials.adaptation.author')}
              imageSrc="/images/testimonials/adaptation.jpg"
            />
            <TestimonialCard
              quote={t('testimonials.community.quote')}
              author={t('testimonials.community.author')}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 
