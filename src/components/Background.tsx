import React from 'react';

export function Background() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 animate-gradient z-0" />
      <div 
        className="fixed bottom-0 left-0 right-0 h-[40vh] md:h-[50vh] bg-contain bg-bottom bg-no-repeat z-0"
        style={{
          backgroundImage: 'url("/silhouette.png")',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))'
        }}
      />
    </>
  );
}