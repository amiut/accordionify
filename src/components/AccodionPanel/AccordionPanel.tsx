import { useAccordion } from 'contexts/AccordionProvider';
import React, { forwardRef } from 'react';

import IAccordionPanel from './IAccordionPanel';

const AccordionPanel = forwardRef<HTMLDivElement, IAccordionPanel>(({ children }, ref) => {
  const accordion = useAccordion();

  if (!accordion) throw new Error('`AccordionPanel` must be used as a child of `Accordion`');

  return (
    <div ref={ref} style={{ display: accordion.expanded ? 'block' : 'none' }}>
      {children}
    </div>
  );
});

AccordionPanel.displayName = 'AccordionPanel';

export default AccordionPanel;
