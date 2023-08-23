import React, { createContext } from 'react';

interface NewsletterContextProps {
  newsletter?: Backend.Newsletter;
  setNewsletter: (newsletter: Backend.Newsletter) => void;
}

const INITIAL_STATE: NewsletterContextProps = {
  newsletter: undefined,
  setNewsletter: () => {},
};

export const NewsletterContext: React.Context<NewsletterContextProps> =
  createContext(INITIAL_STATE);
