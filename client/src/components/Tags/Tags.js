import React from 'react';
import { Group } from '@mantine/core';
import Tag from './Tag';

function Tags({ tags }) {
  return (
    <Group position="left">
      {tags.map(tag => {
        const { id, tag_name: tagName } = tag;
        return <Tag key={id} tagName={tagName} />;
      })}
    </Group>
  );
}

export default Tags;
