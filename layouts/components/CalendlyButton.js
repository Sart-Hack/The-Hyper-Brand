import { PopupButton } from 'react-calendly';
import React, { useEffect } from 'react';

export default function CalendlyButton() {
  return (
    <div>
      {typeof window !== 'undefined' && (
        <PopupButton
          url="https://calendly.com/sarthakgupta124"
          rootElement={document.getElementById('Calendly-Button')}
          text="Click here to schedule!"
        />
      )}
    </div>
  );
}


