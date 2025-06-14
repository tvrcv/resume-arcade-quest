
import React, { useState } from 'react';
import VendingMachine from '../components/VendingMachine';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-200 to-amber-100 flex items-center justify-center p-4">
      <VendingMachine />
    </div>
  );
};

export default Index;
