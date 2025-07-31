'use client';

import React, { useRef, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import Image from 'next/image';

interface DraggableContainerProps {
  backgroundImage: string;
  containerWidth?: number | 'fullscreen';
  containerHeight?: number | 'fullscreen';
  className?: string;
}

export default function DraggableContainer({ 
  backgroundImage,
  containerWidth = 'fullscreen',
  containerHeight = 'fullscreen',
  className = ''
}: DraggableContainerProps) {
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      // Use viewport dimensions with some padding to ensure full visibility
      const padding = 40; // 20px padding on each side
      setDimensions({
        width: window.innerWidth - padding,
        height: window.innerHeight - padding
      });
    };

    // Set initial dimensions
    updateDimensions();

    // Update on window resize
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Calculate actual container dimensions
  const actualWidth = containerWidth === 'fullscreen' ? dimensions.width : containerWidth;
  const actualHeight = containerHeight === 'fullscreen' ? dimensions.height : containerHeight;
  const helloKittyRef = useRef(null);
  const froggyMusicRef = useRef(null);
  const StickyNoteRef = useRef(null);
  const polaroidRef = useRef(null);

  // Calculate bounds to keep items within the container
  const getBounds = (itemWidth: number, itemHeight: number) => ({
    left: 0,
    top: 0,
    right: actualWidth - itemWidth,
    bottom: actualHeight - itemHeight,
  });

  return (
    <div 
      className={`relative ${className}`}
      style={{ width: actualWidth, height: actualHeight }}
    >
      {/* Background computer image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Computer Desktop"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Draggable items inside the container */}
      <div className="absolute inset-0">

        {/* Sticky Note */}
        <Draggable 
          nodeRef={StickyNoteRef}
          bounds={getBounds(80, 80)}
          defaultPosition={{ x: 150, y: 90 }}
        >
          <div ref={StickyNoteRef} className="absolute cursor-move">
            <Image
              src="/stickyNote.png"
              alt="Sticky Note"
              width={80}
              height={80}
              className="select-none drop-shadow-lg"
              draggable={false}
            />
          </div>
        </Draggable>

        {/* Hello Kitty */}
        <Draggable 
          nodeRef={helloKittyRef}
          bounds={getBounds(80, 80)}
          defaultPosition={{ x: 50, y: 50 }}
        >
          <div ref={helloKittyRef} className="absolute cursor-move">
            <Image
              src="/helloKitty.png"
              alt="Hello Kitty"
              width={80}
              height={80}
              className="select-none drop-shadow-lg"
              draggable={false}
            />
          </div>
        </Draggable>

        {/* Froggy Music */}
        <Draggable 
          nodeRef={froggyMusicRef}
          bounds={getBounds(70, 70)}
          defaultPosition={{ x: 200, y: 100 }}
        >
          <div ref={froggyMusicRef} className="absolute cursor-move">
            <Image
              src="/froggyMusic.png"
              alt="Froggy Music"
              width={70}
              height={70}
              className="select-none drop-shadow-lg"
              draggable={false}
            />
          </div>
        </Draggable>

       

        {/* Polaroid */}
        <Draggable 
          nodeRef={polaroidRef}
          bounds={getBounds(90, 90)}
          defaultPosition={{ x: 100, y: 250 }}
        >
          <div ref={polaroidRef} className="absolute cursor-move">
            <Image
              src="/polaroid.png"
              alt="Polaroid"
              width={90}
              height={90}
              className="select-none drop-shadow-lg"
              draggable={false}
            />
          </div>
        </Draggable>
      </div>
    </div>
  );
}
