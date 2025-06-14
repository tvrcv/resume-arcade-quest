
import React, { useState } from 'react';
import VendingMachine from '../components/VendingMachine';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-800 via-stone-700 to-stone-900 overflow-hidden">
      {/* Gas Station Environment */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      
      {/* Floor reflection effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-900/80 to-transparent" />
      
      <VendingMachine />
    </div>
  );
};

export default Index;
