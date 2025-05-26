// Advanced geometric shapes for section backgrounds
import React, { useMemo } from 'react';

type GeometricShapesProps = {
  variant?: 'tech' | 'creative' | 'minimal' | 'grid';
  density?: 'low' | 'medium' | 'high';
  colorScheme?: 'teal' | 'yellow' | 'mixed';
  opacity?: number;
  className?: string;
};

export const GeometricShapes = ({
  variant = 'tech',
  density = 'medium',
  colorScheme = 'mixed',
  opacity = 0.2,
  className = '',
}: GeometricShapesProps) => {
  // Calculate number of shapes based on density
  const count = density === 'low' ? 5 : density === 'medium' ? 10 : 15;
  
  // Get color based on colorScheme
  const getColor = (index: number) => {
    if (colorScheme === 'teal') return 'border-teal-500/30';
    if (colorScheme === 'yellow') return 'border-yellow-500/30';
    return index % 2 === 0 ? 'border-teal-500/30' : 'border-yellow-500/30';
  };
  
  // Generate shapes based on variant and count
  const shapes = useMemo(() => {
    return Array.from({ length: count }, (_, index) => {
      const size = Math.random() * 80 + 30;
      const position = {
        top: `${Math.random() * 90 + 5}%`,
        left: `${Math.random() * 90 + 5}%`,
      };
      const rotation = Math.random() * 360;
      const animationDuration = Math.random() * 20 + 20;
      const animationDelay = `${Math.random() * 10}s`;
      const color = getColor(index);
      
      return { size, position, rotation, animationDuration, animationDelay, color, index };
    });
  }, [count, colorScheme]);

  // Render different shape variants
  const renderShape = (shape: typeof shapes[0]) => {
    const { size, position, rotation, animationDuration, animationDelay, color, index } = shape;
    
    switch (variant) {
      case 'tech':
        // Tech shapes: squares, diamonds, rectangles
        return (
          <div 
            key={index}
            className={`absolute border-2 ${color} backdrop-blur-[1px]`}
            style={{
              width: size,
              height: index % 3 === 0 ? size : size * 0.8,
              top: position.top,
              left: position.left,
              opacity: opacity,
              transform: `rotate(${rotation}deg)`,
              borderRadius: index % 2 === 0 ? '4px' : '0px',
              animationName: 'float',
              animationDuration: `${animationDuration}s`,
              animationDelay,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              animationDirection: 'alternate',
            }}
          />
        );
        
      case 'creative':
        // Creative shapes: triangles, blobs, circles
        if (index % 3 === 0) {
          // Triangle (made with borders)
          return (
            <div
              key={index}
              className="absolute border-transparent"
              style={{
                width: 0,
                height: 0,
                borderLeft: `${size / 2}px solid transparent`,
                borderRight: `${size / 2}px solid transparent`,
                borderBottom: `${size}px solid rgba(20, 184, 166, ${opacity / 2})`,
                top: position.top,
                left: position.left,
                transform: `rotate(${rotation}deg)`,
                animation: `float ${animationDuration}s ${animationDelay} infinite ease-in-out alternate`,
              }}
            />
          );
        } else if (index % 3 === 1) {
          // Circle
          return (
            <div
              key={index}
              className={`absolute rounded-full border-2 ${color}`}
              style={{
                width: size,
                height: size,
                top: position.top,
                left: position.left,
                opacity: opacity,
                transform: `rotate(${rotation}deg)`,
                animation: `float ${animationDuration}s ${animationDelay} infinite ease-in-out alternate`,
              }}
            />
          );
        } else {
          // Hexagon
          return (
            <div
              key={index}
              className={`absolute ${color}`}
              style={{
                width: size * 0.866, // hexagon width adjustment
                height: size,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                top: position.top,
                left: position.left,
                opacity: opacity,
                transform: `rotate(${rotation}deg)`,
                animation: `float ${animationDuration}s ${animationDelay} infinite ease-in-out alternate`,
                border: '2px solid',
                borderColor: 'inherit',
              }}
            />
          );
        }
        
      case 'grid':
        // Grid pattern shapes
        return (
          <div
            key={index}
            className={`absolute ${index % 2 === 0 ? 'border' : 'border-dashed'} ${color}`}
            style={{
              width: size,
              height: size,
              top: position.top,
              left: position.left,
              opacity: opacity,
              transform: `rotate(${rotation}deg)`,
              animation: `float ${animationDuration}s ${animationDelay} infinite ease-in-out alternate`,
              backgroundImage: index % 2 === 0 
                ? 'linear-gradient(to right, rgba(20, 184, 166, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(20, 184, 166, 0.1) 1px, transparent 1px)' 
                : 'none',
              backgroundSize: '10px 10px',
            }}
          />
        );
        
      case 'minimal':
        // Minimal shapes: dots, small lines
        if (index % 2 === 0) {
          // Dot
          return (
            <div
              key={index}
              className={`absolute rounded-full bg-gradient-to-br from-teal-500/${Math.floor(opacity * 100)} to-yellow-500/${Math.floor(opacity * 50)}`}
              style={{
                width: size / 3,
                height: size / 3,
                top: position.top,
                left: position.left,
                animation: `float ${animationDuration}s ${animationDelay} infinite ease-in-out alternate`,
              }}
            />
          );
        } else {
          // Line
          return (
            <div
              key={index}
              className={`absolute ${color}`}
              style={{
                width: size,
                height: 1,
                top: position.top,
                left: position.left,
                transform: `rotate(${rotation}deg)`,
                animation: `float ${animationDuration}s ${animationDelay} infinite ease-in-out alternate`,
              }}
            />
          );
        }
        
      default:
        return null;
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map(renderShape)}
    </div>
  );
};

// Circuit board pattern component
type CircuitPatternProps = {
  opacity?: number;
  color?: string;
  density?: 'low' | 'medium' | 'high';
  className?: string;
};

export const CircuitPattern = ({
  opacity = 0.15,
  color = 'teal',
  density = 'medium',
  className = '',
}: CircuitPatternProps) => {
  const colorClass = color === 'teal' ? 'stroke-teal-500' : 'stroke-yellow-500';
  const strokeWidth = density === 'low' ? '0.5' : density === 'medium' ? '1' : '2';
  const circuitCount = density === 'low' ? 5 : density === 'medium' ? 10 : 15;
  
  const circuits = useMemo(() => {
    return Array.from({ length: circuitCount }, (_, index) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      
      // Generate a random circuit-like path
      const generatePath = () => {
        let path = `M ${startX} ${startY} `;
        let currentX = startX;
        let currentY = startY;
        const segments = Math.floor(Math.random() * 5) + 2;
        
        for (let i = 0; i < segments; i++) {
          const newX = currentX + (Math.random() * 40) - 20;
          const newY = currentY + (Math.random() * 40) - 20;
          
          // 50% chance of horizontal then vertical line (L shape)
          if (Math.random() > 0.5) {
            path += `H ${newX} V ${newY} `;
          } else {
            path += `V ${newY} H ${newX} `;
          }
          
          currentX = newX;
          currentY = newY;
        }
        
        return path;
      };
      
      return {
        path: generatePath(),
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 8 + 5}s`,
      };
    });
  }, [circuitCount]);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        style={{ opacity }}
        className={`${colorClass} absolute inset-0`}
      >
        {circuits.map((circuit, index) => (
          <path
            key={index}
            d={circuit.path}
            fill="none"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray="8 4"
            style={{
              animation: `pulseOpacity ${circuit.duration} ${circuit.delay} infinite alternate`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// Code snippet pattern component
type CodeSnippetProps = {
  opacity?: number;
  count?: number;
  className?: string;
};

export const CodeSnippets = ({
  opacity = 0.1,
  count = 5,
  className = '',
}: CodeSnippetProps) => {
  const snippets = useMemo(() => {
    const snippetTexts = [
      '{ const data = await fetch(url); }',
      'function render() { return <App />; }',
      '<div className="container">Content</div>',
      'import React from "react";',
      '@media (max-width: 768px) {}',
      'const [state, setState] = useState();',
      'useEffect(() => { }, []);',
      'export default App;',
    ];
    
    return Array.from({ length: count }, (_, index) => ({
      text: snippetTexts[index % snippetTexts.length],
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      rotate: Math.random() * 90 - 45,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 10}s`,
      fontSize: `${Math.random() * 0.5 + 0.6}rem`,
    }));
  }, [count]);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {snippets.map((snippet, index) => (
        <div
          key={index}
          className="absolute font-mono text-teal-500 whitespace-nowrap"
          style={{
            top: snippet.top,
            left: snippet.left,
            transform: `rotate(${snippet.rotate}deg)`,
            fontSize: snippet.fontSize,
            opacity,
            animation: `float ${snippet.duration} ${snippet.delay} infinite alternate ease-in-out`,
          }}
        >
          {snippet.text}
        </div>
      ))}
    </div>
  );
};
