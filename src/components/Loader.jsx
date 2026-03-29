import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span>{progress.toFixed(2)}%</span>
    </Html>
  )
}

export default CanvasLoader;