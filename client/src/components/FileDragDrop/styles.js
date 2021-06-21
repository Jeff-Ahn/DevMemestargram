import styled from 'styled-components';
import { palette } from '../../lib/styles/palette';

export const FileDropBlock = styled.div`
  width: 60%;
  height: 100%;
  border: 1px solid black;

  .file-drop-target {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;

    &.file-drop-dragging-over-target {
      color: ${palette.teal5};
      box-shadow: 0 0 13px 3px #45af7a;
    }
  }

  .hidden {
    display: none;
  }

  svg {
    width: 150px;
    height: auto;
  }
`;
