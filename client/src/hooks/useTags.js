import { useState, useEffect } from 'react';
import tagApi from '../lib/api/tag';

function useTags(tags) {
  const [tagsInfo, setTagsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTagObjects = async () => {
      setIsLoading(false);
      const results = [];
      tags.forEach(tagId => {
        results.push(tagApi.getTagNameById(tagId));
      });
      const data = await Promise.all(results);
      setTagsInfo(data);
      setIsLoading(true);
    };
    getTagObjects();
  }, [tags]);

  return [tagsInfo, isLoading];
}

export default useTags;
