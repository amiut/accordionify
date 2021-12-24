import { useAccordion } from 'contexts/AccordionProvider';
import React, { forwardRef } from 'react';

import IAccordionToggleButton from './IAccordionToggleButton';

const AccordionToggleButton = forwardRef<HTMLButtonElement, IAccordionToggleButton>(
  ({ className = '', children, ...props }, ref) => {
    const accordion = useAccordion();
    return (
      <button className={`accordion-toggle-button ${className}`} ref={ref} {...props} type="button">
        {children ? (
          children
        ) : (
          <svg
            style={{ transform: accordion?.expanded ? 'scaleY(-1)' : '' }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
          </svg>
        )}
      </button>
    );
  },
);

AccordionToggleButton.displayName = 'AccordionToggleButton';

export default AccordionToggleButton;
