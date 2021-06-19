import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import { UploadIcon } from '../../static/svg';

function UploadButton() {
  return (
    <Link to="/upload">
      <Button leftIcon={<UploadIcon />}>Upload New Meme</Button>
    </Link>
  );
}

export default UploadButton;
