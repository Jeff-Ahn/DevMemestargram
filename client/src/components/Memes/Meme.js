import { Col } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

function Meme({ imageURL, alt, path }) {
  return (
    <Col span={6}>
      <Link to={path}>
        <img style={{ width: 200, height: 'auto' }} src={imageURL} alt={alt} />
      </Link>
    </Col>
  );
}

export default Meme;
