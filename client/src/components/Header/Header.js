import React from 'react';
import { Button, Input } from '@mantine/core';
import HeaderLogo from './HeaderLogo';
import * as S from './styles';
import { GithubIcon, SearchIcon } from '../../static/svg';
import { GITHUB_AUTH_URL } from '../../lib/constants';

function Header() {
  return (
    <S.HeaderBlock>
      <HeaderLogo />
      <S.InputBlock>
        <Input
          icon={<SearchIcon />}
          rightSectionWidth={70}
          placeholder="Search your Dev-Memes by Hashtag(#)"
        />
      </S.InputBlock>
      <S.Right>
        <Button component="a" leftIcon={<GithubIcon />} href={GITHUB_AUTH_URL}>
          Login
        </Button>
      </S.Right>
    </S.HeaderBlock>
  );
}
export default Header;
