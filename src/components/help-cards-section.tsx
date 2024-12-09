'use client'

import { useTranslations } from 'next-intl';
import { HelpCard } from './help-card';
import { TestimonialCard } from './testimonial-card';
import { DonationFormWithCta } from './donation-form-with-cta';

export function HelpCardsSection() {
  const t = useTranslations('helpCards');

  return (
    <div className="w-full pt-8 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 md:p-12 pb-0 md:pb-0">
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8">
            {t('title')}
          </h2>
        </div>
        
        <div className="space-y-12">
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
              quote={t('testimonials.first.quote')}
              boldParts={t.raw('testimonials.first.boldParts')}
              author={t('testimonials.first.author')}
              imageSrc="/images/testimonials/card1.jpg"
            />
            <TestimonialCard
              quote={t('testimonials.fourth.quote')}
              boldParts={t.raw('testimonials.fourth.boldParts')}
              author={t('testimonials.fourth.author')}
              imageSrc="/images/testimonials/card2.jpg"
            />
          </div>

          <HelpCard
            title={t('cards.psychology.title')}
            subtitles={t.raw('cards.psychology.subtitles')}
            imageSrc="/images/help-cards/psychology.jpg"
            stats={{
              psychology: {
                number: t('cards.psychology.stats.psychology.number'),
                text: t('cards.psychology.stats.psychology.text')
              }
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote={t('testimonials.third.quote')}
              boldParts={t.raw('testimonials.third.boldParts')}
              author={t('testimonials.third.author')}
              imageSrc="/images/help-cards/adaptation.jpg"
            />
            <TestimonialCard
              quote={t('testimonials.second.quote')}
              boldParts={t.raw('testimonials.second.boldParts')}
              author={t('testimonials.second.author')}
              imageSrc="/images/help-cards/emergency.jpg"
            />
          </div>

          <div id="donate-form-2">
            <DonationFormWithCta showCTA={false} variant="default" formId="form2" />
          </div>

          <HelpCard
            title={t('cards.adaptation.title')}
            subtitles={t.raw('cards.adaptation.subtitles')}
            imageSrc="/images/help-cards/adaptation.jpg"
            stats={{
              language: {
                number: t('cards.adaptation.stats.language.number'),
                text: t('cards.adaptation.stats.language.text')
              }
            }}
          />

          <HelpCard
            title={t('cards.support.title')}
            subtitles={[
              t.raw('cards.support.subtitles')[2], // Чаты взаимопомощи
              t.raw('cards.support.subtitles')[1], // Офлайн пространства
              t.raw('cards.support.subtitles')[0], // Профессиональные сообщества
              t.raw('cards.support.subtitles')[3]  // Ковчег Бизнес
            ]}
            imageSrc="/images/help-cards/support.jpg"
            stats={{
              chats: {
                number: t('cards.support.stats.chats.number'),
                text: t('cards.support.stats.chats.text')
              },
              events: {
                number: t('cards.support.stats.events.number'),
                text: t('cards.support.stats.events.text')
              }
            }}
          />
        </div>
      </div>
    </div>
  );
} 
