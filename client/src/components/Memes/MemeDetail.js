import React from 'react';
import { Image, Text, Avatar, ActionIcon } from '@mantine/core';
import Tags from '../Tags';
import * as S from './styles';
import useTags from '../../hooks/useTags';
import useProfile from '../../hooks/useProfile';
import useLoader from '../../hooks/useLoader';
import { StarIcon } from '../../static/svg';

function MemeDetail({
  createdAt,
  description,
  image,
  owner,
  recommended,
  tags,
}) {
  const [userProfile, isLoading, isSuccess] = useProfile(owner);
  const [tagsInfo] = useTags(tags);
  const [Loader] = useLoader();

  if (isLoading)
    return (
      <S.MemeDetailBlock shadow="sm">
        <Loader visible={isLoading} />
      </S.MemeDetailBlock>
    );

  if (isSuccess) {
    return (
      <S.MemeDetailBlock shadow="sm">
        <S.ProfileBlock>
          <Avatar radius="xl" color="teal" />
          <Text weight={700} style={{ marginLeft: '0.4rem' }}>
            {userProfile.email}
          </Text>
        </S.ProfileBlock>
        <Image src={image} />
        <S.RecommedAndDateLayout>
          <S.RecommendedBlock>
            <ActionIcon size="md" variant="transparent" color="teal">
              <StarIcon width="200" height="​200" />
            </ActionIcon>
            <Text>{recommended}</Text>
          </S.RecommendedBlock>
          <S.CreatedAtBlock>{createdAt.slice(0, 10)}</S.CreatedAtBlock>
        </S.RecommedAndDateLayout>
        <S.TagsBlock>
          <Tags tags={tagsInfo} />
        </S.TagsBlock>
        <S.DescriptionBlock>{description}</S.DescriptionBlock>
      </S.MemeDetailBlock>
    );
  }
}

export default MemeDetail;
