import React from 'react';
import {
  Avatar,
  Button,
  Divider,
  Input,
  Menu,
  MenuItem,
  Text,
} from '@mantine/core';
import HeaderLogo from './HeaderLogo';
import * as S from './styles';
import { GithubIcon, SearchIcon } from '../../static/svg';
import { GITHUB_AUTH_URL } from '../../lib/constants';
import useUser from '../../hooks/useUser';
import userApi from '../../lib/api/user';

function Header() {
  const [user] = useUser();

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
        {!user.isLogin ? (
          <Button
            component="a"
            leftIcon={<GithubIcon />}
            href={GITHUB_AUTH_URL}
          >
            Sign in
          </Button>
        ) : (
          <Menu control={<Avatar color="teal" radius="xl" />}>
            <MenuItem disabled>
              <Text>{user.email}</Text>
            </MenuItem>
            <Divider />
            <MenuItem onClick={userApi.logout}>Sign out</MenuItem>
            <MenuItem>My Memes</MenuItem>
          </Menu>
        )}
      </S.Right>
    </S.HeaderBlock>
  );
}
export default Header;
