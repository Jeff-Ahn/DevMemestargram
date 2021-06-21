import React from 'react';
import Header from '../Header';
import * as S from './styles';

function GlobalLayout({ children }) {
  return (
    <S.GlobalLayoutBlock>
      <Header />
      {children}
    </S.GlobalLayoutBlock>
  );
}

export default GlobalLayout;
