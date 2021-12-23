import { useAccordion } from 'contexts/AccordionProvider';
import React, { forwardRef } from 'react';

import IAccordionPanel from './IAccordionPanel';

const AccordionPanel = forwardRef<HTMLDivElement, IAccordionPanel>(({ children, ...props }, ref) => {
  const accordion = useAccordion();

  if (!accordion) throw new Error('`AccordionPanel` must be used as a child of `Accordion`');

  return (
    <div ref={ref} {...props} style={{ display: accordion.expanded ? 'block' : 'none' }}>
      {children}
    </div>
  );
});

AccordionPanel.displayName = 'AccordionPanel';

export default AccordionPanel;
