import React from 'react';
import { Tabs, Tab } from '@mantine/core';
import UploadButton from '../UploadButton';
import * as S from './styles';

function Nav({ children }) {
  return (
    <S.NavBlock>
      <Tabs style={{ width: '100%' }}>
        <Tab label="Random">{children}</Tab>
        <Tab label="Recently">{children}</Tab>
      </Tabs>
      <S.UploadButtonLayout>
        <UploadButton />
      </S.UploadButtonLayout>
    </S.NavBlock>
  );
}

export default Nav;
