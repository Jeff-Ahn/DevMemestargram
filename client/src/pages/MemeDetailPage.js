import React from 'react';
import GlobalLayout from '../components/GlobalLayout';
import useLoader from '../hooks/useLoader';
import useMeme from '../hooks/useMeme';
import { MemeDetail } from '../components/Memes';

function MemeDetailPage({ match }) {
  const { id } = match.params;
  const [meme, isLoading, isSuccess, isError] = useMeme(id);
  const [Loader] = useLoader();
  if (isLoading)
    return (
      <GlobalLayout>
        <Loader visible={isLoading} />
      </GlobalLayout>
    );
  if (isError) {
    return <div>404 Error</div>;
  }
  if (isSuccess) {
    const {
      image,
      recommended,
      description,
      created_at: createdAt,
      owner,
      tags,
    } = meme;
    return (
      <GlobalLayout>
        <>
          <MemeDetail
            image={image}
            recommended={recommended}
            description={description}
            createdAt={createdAt}
            owner={owner}
            tags={tags}
          />
        </>
      </GlobalLayout>
    );
  }
}

export default MemeDetailPage;
