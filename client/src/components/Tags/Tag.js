import React from 'react';
import { Badge } from '@mantine/core';
import * as S from './styles';

function Tag({ tagName }) {
  return (
    <S.TagBlock>
      <Badge component="a" href={`/search?query=#${tagName}`} variant="outline">
        {tagName}
      </Badge>
    </S.TagBlock>
  );
}

export default Tag;
