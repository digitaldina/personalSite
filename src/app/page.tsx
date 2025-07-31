import Image from "next/image";
import DraggableContainer from '../components/DraggableContainer';

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <DraggableContainer 
        backgroundImage="/computer.png"
        containerWidth="fullscreen"
        containerHeight="fullscreen"
      />
    </div>
  );
}
