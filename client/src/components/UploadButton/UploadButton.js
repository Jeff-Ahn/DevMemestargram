import React from 'react';
import { Button } from '@mantine/core';
import { UploadIcon } from '../../static/svg';

function UploadButton() {
  return (
    <Button component="a" href="/upload" leftIcon={<UploadIcon />}>
      Upload New Meme
    </Button>
  );
}

export default UploadButton;
