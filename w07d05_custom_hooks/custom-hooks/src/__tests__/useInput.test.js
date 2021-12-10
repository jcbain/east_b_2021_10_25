// 01 here, we want to make sure that our initial
// 01 input starts at ""
// 01 as well as if we pass a pseudo event
// 01 the event.target.value will be what is
// 01 saved as the state variable

import { renderHook, act } from '@testing-library/react-hooks';
import useInput from '../hooks/useInput';

describe('useInput tests', () => {
  test('should start with intial input of ""', () => {
    const { result } = renderHook(() => useInput());
    const { value } = result.current;

    expect(value).toBe("");
  })
  
  test('input should be equal to event.target.value when onChange is called', () => {
    const { result } = renderHook(() => useInput());
    const { onChange } = result.current;

    const event = {
      target: {
        value: "james"
      }
    }

    act(() => onChange(event));

    const { value } = result.current;
    expect(value).toBe(event.target.value);
  })
})
