import { useState } from 'react';
import Loader from '../components/Loader/Loader';

function useLoader(defaultVisible = false) {
  const [visible, setVisible] = useState(defaultVisible);

  return [Loader, visible, setVisible];
}

export default useLoader;
