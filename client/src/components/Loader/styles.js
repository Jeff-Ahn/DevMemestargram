import styled from 'styled-components';
import { palette } from '../../lib/styles/palette';

export const LoaderBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${palette.gray2};
  opacity: 0.8;
`;
