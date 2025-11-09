'use client';

import { useEffect, useRef, useState } from 'react';

interface SplineViewerProps {
  url: string;
  className?: string;
}

export default function SplineViewer({ url, className }: SplineViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined') {
      // Check if spline-viewer is defined
      if (customElements.get('spline-viewer')) {
        const viewer = document.createElement('spline-viewer');
        viewer.setAttribute('url', url);
        viewer.setAttribute('loading-anim', 'true');
        
        viewer.addEventListener('load', () => {
          setIsLoaded(true);
        });

        containerRef.current.appendChild(viewer);

        return () => {
          if (containerRef.current) {
            containerRef.current.innerHTML = '';
          }
        };
      }
    }
  }, [url]);

  return (
    <div ref={containerRef} className={className} style={{ width: '100%', height: '100%' }}>
      {!isLoaded && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.875rem'
        }}>
          Loading 3D Model...
        </div>
      )}
    </div>
  );
}

