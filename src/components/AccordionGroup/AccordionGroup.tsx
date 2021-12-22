import AccordionGroupProvider from 'contexts/AccordionGroupProvider';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { forwardRef } from 'react';

import IAccordionGroup from './IAccordionGroup';

const AccordionGroup = forwardRef<HTMLDivElement, IAccordionGroup>(({ children, atomic = false }, ref) => {
  const [storedRef, setStoredRef] = useState<RefObject<HTMLDivElement> | undefined>();
  const refi = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refi) {
      setStoredRef(refi);
    }
  }, [refi.current]);

  return (
    <div ref={refi}>
      <AccordionGroupProvider wrapper={storedRef} atomic={atomic}>
        {children}
      </AccordionGroupProvider>
    </div>
  );
});

AccordionGroup.displayName = 'AccordionGroup';

export default AccordionGroup;
