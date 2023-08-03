import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';

import { colorRed } from '@app/styles/colors.ts';
import { spacing2 } from '@app/styles/spacing.ts';

const ICON_SIZE = '16px';

export const commonActionIconStyles = css`
  font-size: ${ICON_SIZE};

  &:not(:last-child) {
    margin-right: ${spacing2};
  }
`;

export const StyledEditIcon = styled(EditOutlined)`
  ${commonActionIconStyles};
`;

export const StyledDeleteIcon = styled(DeleteOutlined)`
  ${commonActionIconStyles};
  color: ${colorRed};
`;
