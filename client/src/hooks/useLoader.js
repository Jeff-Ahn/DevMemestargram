import { useState } from 'react';
import { LoadingOverlay } from '@mantine/core';

function useLoader(defaultVisible = false) {
  const [visible, setVisible] = useState(defaultVisible);
  const Loader = LoadingOverlay;

  return [Loader, visible, setVisible];
}

export default useLoader;
