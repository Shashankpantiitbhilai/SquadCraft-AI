import React, { useState } from 'react';
import { HelperButton } from './components/HelperButton';
import { InfoPanel } from './components/InfoPanel';
import './corner-help.css';
function Helper() {
  const [isHelperOpen, setIsHelperOpen] = useState(false);

  const toggleHelper = () => {
    setIsHelperOpen(!isHelperOpen);
  };

  return (
    <div className="corner-help">
      <HelperButton isOpen={isHelperOpen} onClick={toggleHelper} />
      <InfoPanel isVisible={true} />
    </div>
  );
}

export default Helper;