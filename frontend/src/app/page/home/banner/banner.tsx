// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FC } from 'react';

import {
  StyledBannerSection,
  StyledPublishButton,
} from '@app/page/home/banner/banner.styled.ts';
import { colorVibrantGreen, colorWhite } from '@app/styles/colors.ts';
import { newsLettersApiService } from '@app/api/service/newsletter-api-service.ts';
import { NotificationService } from '@app/services/notification-service.ts';

interface BannerProps {
  id: number;
}

export const Banner: FC<BannerProps> = (props) => {
  const { id } = props;
  const publishNewsletter = async () => {
    const publishData = {
      isPublished: true,
    };

    try {
      await newsLettersApiService.publishNewsletter(id, publishData);
    } catch (_err) {
      NotificationService.error('Newsletter was not published');
    }
  };

  return (
    <StyledBannerSection>
      <StyledPublishButton
        $backgroundColor={colorVibrantGreen}
        $color={colorWhite}
        onClick={publishNewsletter}
      >
        Publish
      </StyledPublishButton>
    </StyledBannerSection>
  );
};
