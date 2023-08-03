import { Container } from '@app/components/container/container.tsx';
import { Banner } from '@app/page/home/banner/banner.tsx';
import { NavigationDashboard } from '@app/page/home/navigation-dashboard/navigation-dashboard.tsx';

export const HomePage = () => (
  <>
    <Container />
    <Banner />
    <NavigationDashboard />
  </>
);
