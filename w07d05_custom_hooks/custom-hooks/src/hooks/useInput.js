import { useState } from 'react';
const useInput = () => {
  const [ value, setValue ] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const clearValue = () => {
    setValue("");
  };

  return { value, handleChange, clearValue }

}



export default useInput;