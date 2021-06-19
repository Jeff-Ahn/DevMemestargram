import React from 'react';
import { Container, Grid } from '@mantine/core';
import Meme from './Meme';

function Memes({ memes }) {
  console.log(memes);
  return (
    <Container style={{ width: '100%' }}>
      <Grid>
        {memes?.map(meme => {
          const { id, image, description } = meme;
          return (
            <Meme
              key={id}
              path={`/meme/${id}`}
              imageURL={image}
              alt={description}
            />
          );
        })}
      </Grid>
    </Container>
  );
}

export default Memes;
