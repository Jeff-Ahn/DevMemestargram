import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '@mantine/hooks';
import { Button, Textarea } from '@mantine/core';
import GlobalLayout from '../components/GlobalLayout';
import * as S from './styles';
import FileDragDrop from '../components/FileDragDrop';
import useUser from '../hooks/useUser';
import memeApi from '../lib/api/meme';
import tagApi from '../lib/api/tag';

function UploadPage() {
  const [user] = useUser();
  const [files, setFiles] = useState([]);

  const history = useHistory();

  const form = useForm({
    initialValues: {
      files,
      content: '',
      tags: '',
    },
  });

  const postNewMeme = values => {
    const { content, files: _files, tags } = values;
    const file = _files[0];
    const tagNames = tags.replace(/(\s*)/g, '').split('#').slice(1);

    const getTagsId = async tagNames => {
      const requests = tagNames.map(tagName => tagApi.getTagByTagName(tagName));
      const data = await Promise.all(requests);

      return data;
    };

    const tagArr = getTagsId(tagNames);
    tagArr.then(res => {
      const result = res.map(tag => tag.id);
      const data = new FormData();
      data.append('image', file);
      data.append('description', content);
      data.append('tags', [result]);
      data.append('recommended', 0);

      memeApi
        .postNewMeme(data)
        .then(res => {
          alert('Success to add a new Meme !');
          console.log(res);
          history.push(`/meme/${res}`);
        })
        .catch(e => console.error(e));
    });
  };

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
        <form onSubmit={form.onSubmit(postNewMeme)}>
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
