import styled from 'styled-components';
import { Card } from '@mantine/core';

export const MemeDetailBlock = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`;

export const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

export const RecommedAndDateLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RecommendedBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.5rem;

  .text-0-2-75 {
    font-size: 1.5rem;
    padding: 0.25rem;
  }
`;

export const CreatedAtBlock = styled.div`
  width: 110px;
`;

export const TagsBlock = styled.div`
  padding: 0.25rem 1rem;
`;

export const DescriptionBlock = styled.div`
  padding: 0.5rem 1rem;
`;
