import { useAccordion } from 'contexts/AccordionProvider';
import React, { forwardRef } from 'react';

import IAccordionToggle from './IAccordionToggle';

const AccordionToggle = forwardRef<HTMLDivElement, IAccordionToggle>(({ children, ...props }, ref) => {
  const accordion = useAccordion();

  if (!accordion) throw new Error('`AccordionToggle` must be used as a child of `Accordion`');

  return (
    <div
      ref={ref}
      onClick={() => {
        if (!accordion.disabled) {
          accordion.setExpanded(!accordion.expanded);
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
});

AccordionToggle.displayName = 'AccordionToggle';

export default AccordionToggle;
