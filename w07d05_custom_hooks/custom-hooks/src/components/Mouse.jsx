import useMouseMove from '../hooks/useMouseMove';

const Mouse = () => {
  const position = useMouseMove();

  const styles = {
    position: 'absolute',
    height: '50px',
    width: '50px',
    backgroundColor: 'purple',
    left: position.x,
    top: position.y
  }

  return (
    <article>
      <h2>Mouse Component</h2>
      <p>the current mouse position is {position.x}, {position.y}</p>
      <div style={styles}></div>
    </article>
  )
};

export default Mouse;