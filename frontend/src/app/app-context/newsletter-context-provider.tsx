import React, { PropsWithChildren, useState } from 'react';

import { NewsletterContext } from '@app/app-context/newsletter-context.ts';

export const NewsletterContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [newsletter, setNewsletter] = useState<Backend.Newsletter>();

  return (
    <NewsletterContext.Provider value={{ newsletter, setNewsletter }}>
      {children}
    </NewsletterContext.Provider>
  );
};
