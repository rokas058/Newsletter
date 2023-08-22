// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Dispatch, FC, SetStateAction } from 'react';
import { CheckOutlined } from '@ant-design/icons';

import {
  StyledBannerImage,
  StyledBannerSection,
  StyledPublishButton,
} from '@app/page/home/banner/banner.styled.ts';
import bannerImage from '@app/assets/banner-image/Black Minimal Motivation Quote LinkedIn Banner (3).png';
import { colorVibrantGreen, colorWhite } from '@app/styles/colors.ts';
import { newsLettersApiService } from '@app/api/service/newsletter-api-service.ts';
import { NotificationService } from '@app/services/notification-service.ts';

import Newsletter = Backend.Newsletter;

interface BannerProps {
  id: number;
  isPublished: boolean;
  setNewsLetter: Dispatch<SetStateAction<Newsletter | undefined>>;
}

export const Banner: FC<BannerProps> = (props) => {
  const { id, isPublished, setNewsLetter } = props;

  const publishNewsletter = async () => {
    const publishData = {
      isPublished: true,
    };

    try {
      await newsLettersApiService.publishNewsletter(id, publishData);
      const updatedNewsLetter = await newsLettersApiService.getSingleNewsletter(
        String(id),
      );

      setNewsLetter(updatedNewsLetter);
      NotificationService.success('Newsletter successfully published!');
    } catch (_err) {
      NotificationService.error('Newsletter was not published');
    }
  };

  return (
    <StyledBannerSection>
      <StyledBannerImage src={bannerImage} alt="banner-image" />
      <StyledPublishButton
        $backgroundColor={colorVibrantGreen}
        $color={colorWhite}
        onClick={publishNewsletter}
        $notPublished={isPublished}
      >
        {isPublished ? <CheckOutlined /> : 'Publish'}
      </StyledPublishButton>
    </StyledBannerSection>
  );
};
