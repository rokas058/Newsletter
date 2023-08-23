import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import { appRouter } from '@app/app-router.tsx';
import { antdTheme, GlobalStyle } from '@app/styles';
import { SessionContextProvider } from '@app/app-context';
import { NewsletterContextProvider } from '@app/app-context/newsletter-context-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SessionContextProvider>
    <NewsletterContextProvider>
      <ConfigProvider theme={antdTheme}>
        <GlobalStyle />
        <RouterProvider router={appRouter} />
      </ConfigProvider>
    </NewsletterContextProvider>
  </SessionContextProvider>,
);
