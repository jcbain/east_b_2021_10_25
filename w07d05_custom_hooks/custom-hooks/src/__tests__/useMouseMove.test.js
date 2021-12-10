
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';
import useMouseMove from '../hooks/useMouseMove'

describe('useMouseMove tests', () => {
  test('should start with intial position of x: 0 and y: 0', () => {
    const { result } = renderHook(() => useMouseMove());
    expect(result.current.x).toBe(0);
    expect(result.current.y).toBe(0);
  })

  test('should move mouse to coordinates when mousemove event is fired', () => {
    const { result } = renderHook(() => useMouseMove());

    const coordinates = {
      clientX: 200,
      clientY: 300
    };

    fireEvent.mouseMove(
      document,
      coordinates
    );

    expect(result.current.x).toBe(coordinates.clientX);
    expect(result.current.y).toBe(coordinates.clientY);
  })
})