import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '@mantine/hooks';
import { Button, Textarea } from '@mantine/core';
import GlobalLayout from '../components/GlobalLayout';
import * as S from './styles';
import FileDragDrop from '../components/FileDragDrop';
import useUser from '../hooks/useUser';

// mantine hook useForm 활용할 것!
function UploadPage() {
  const [user] = useUser();
  const [files, setFiles] = useState([]);

  const history = useHistory();
  console.log(user);
  const form = useForm({
    initialValues: {
      files,
      content: '',
      tags: '',
      owner: user.email,
    },
  });

  const setFileFormHandler = _files => form.setFieldValue('files', _files);
  useEffect(() => {
    if (!user.isLogin) {
      alert('Please Sign in first to upload a new meme !');
      history.replace('/');
    }
  }, [user, history]);
  return (
    <GlobalLayout>
      <S.UploadPageBlock shadow="sm">
        <form onSubmit={form.onSubmit(values => console.log(values))}>
          <h1>Upload New Meme !</h1>
          <FileDragDrop
            files={files}
            setFiles={setFiles}
            setFileFormHandler={setFileFormHandler}
          />
          <S.TagsBlock>
            <h3>Tags:</h3>
            <Textarea
              value={form.values.tags}
              autosize
              minRows={2}
              onChange={event =>
                form.setFieldValue('tags', event.currentTarget.value)
              }
            />
          </S.TagsBlock>
          <S.ContentTextareaBlock>
            <h3>Content:</h3>
            <Textarea
              value={form.values.content}
              autosize
              minRows={3}
              onChange={event =>
                form.setFieldValue('content', event.currentTarget.value)
              }
            />
          </S.ContentTextareaBlock>
          <S.ButtonsLayout>
            <Button color="red" component="a" href="/">
              취소
            </Button>
            <Button color="blue" type="submit">
              추가
            </Button>
          </S.ButtonsLayout>
        </form>
      </S.UploadPageBlock>
    </GlobalLayout>
  );
}

export default UploadPage;
