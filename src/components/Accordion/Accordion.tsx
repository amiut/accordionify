import { useAccordionGroup } from 'contexts/AccordionGroupProvider';
import AccordionProvider from 'contexts/AccordionProvider';
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

import IAccordion from './IAccordion';

const Accordion = forwardRef<HTMLDivElement, IAccordion>(({ children, defaultOpen = false, ...props }, ref) => {
  const accordionWrapper = useRef<HTMLDivElement>(null);
  const accordionGroup = useAccordionGroup();
  const [expanded, setExpanded] = useState<boolean>(defaultOpen);
  const [disabled, setDisabled] = useState<boolean>(false);

  const closeOtherAccordions = useCallback(
    (e: Event) => {
      if (!accordionGroup || !accordionGroup.wrapper || !accordionWrapper.current) return;

      if (accordionGroup.wrapper.current && accordionGroup.wrapper.current.contains(e.target as Node)) {
        if (!accordionWrapper.current.contains(e.target as Node) && expanded) {
          setExpanded(false);
        }
      }
    },
    [accordionGroup, expanded],
  );

  useEffect(() => {
    if (accordionGroup && accordionGroup.atomic && accordionGroup.wrapper) {
      document.addEventListener('click', closeOtherAccordions);

      return () => {
        document.removeEventListener('click', closeOtherAccordions);
      };
    }
  }, [accordionGroup, closeOtherAccordions]);

  return (
    <AccordionProvider expanded={expanded} setExpanded={setExpanded} disabled={disabled} setDisabled={setDisabled}>
      <div ref={accordionWrapper} {...props}>
        <div ref={ref}>{children}</div>
      </div>
    </AccordionProvider>
  );
});

Accordion.displayName = 'Accordion';

export default Accordion;
