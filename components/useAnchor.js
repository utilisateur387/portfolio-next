import { useState, useEffect } from 'react';

const useAnchor = () => {
  const [anchor, setAnchor] = useState(null);
  useEffect(() => {
    setAnchor(document.getElementById('projects'))
  }, [])
  return anchor;
}

export default useAnchor;
