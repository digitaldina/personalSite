'use client';

import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import Image from 'next/image';

interface DraggableItemProps {
  children?: React.ReactNode;
  imageSrc?: string;
  alt?: string;
  className?: string;
  disabled?: boolean;
}

export default function DraggableItem({ 
  children, 
  imageSrc, 
  alt, 
  className = '',
  disabled = false 
}: DraggableItemProps) {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} disabled={disabled}>
      <div ref={nodeRef} className={`cursor-move ${className}`}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={alt || 'Draggable item'}
            width={100}
            height={100}
            className="select-none"
            draggable={false}
          />
        ) : (
          children
        )}
      </div>
    </Draggable>
  );
}
