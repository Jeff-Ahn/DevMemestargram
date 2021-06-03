import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Input } from '@mantine/core';
import { palette } from '../../lib/styles/palette';
import media from '../../lib/styles/media';

export const HeaderBlock = styled.div`
  margin: 2rem 8rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.large} {
    max-width: ${media.medium};
  }

  ${Input} {
    width: 100%;
  }
`;

export const HeaderLogoBlock = styled.div``;

export const HeaderLogoLink = styled(Link)`
  font-size: larger;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  color: ${palette.gray7};
`;

export const Right = styled.div`
  span {
    text-transform: none;
  }
`;

export const InputBlock = styled.div`
  width: 80%;
  margin: 2rem;
`;
