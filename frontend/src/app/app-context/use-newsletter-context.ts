import { useContext } from 'react';

import { NewsletterContext } from '@app/app-context/newsletter-context.ts';

export const useNewsletterContext = () => {
  const context = useContext(NewsletterContext);

  if (!context) {
    throw new Error('"useNewsletterContext" hook used outside provider.');
  }

  return context;
};
