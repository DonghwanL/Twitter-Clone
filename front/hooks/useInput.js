import { useState, useCallback } from 'react';

export default (inintialValue = null) => {
  const [value, setValue] = useState(inintialValue);

  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  
  return [value, handler];
}