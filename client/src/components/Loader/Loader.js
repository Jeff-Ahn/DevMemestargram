import React from 'react';
import { LoadingOverlay } from '@mantine/core';
import * as S from './styles';

function Loader({ visible }) {
  return (
    <S.LoaderBlock>
      <LoadingOverlay visible={visible} />
    </S.LoaderBlock>
  );
}

export default Loader;
