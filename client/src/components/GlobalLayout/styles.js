import styled from 'styled-components';
import media from '../../lib/styles/media';

export const GlobalLayoutBlock = styled.div`
  width: 1728px;
  margin-left: auto;
  margin-right: auto;

  ${media.xxlarge} {
    width: 1200px;
  }

  ${media.xlarge} {
    width: 1024px;
  }

  ${media.medium} {
    width: calc(100% - 2rem);
  }
`;
