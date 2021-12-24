import AccordionGroupProvider from 'contexts/AccordionGroupProvider';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { forwardRef } from 'react';

import IAccordionGroup from './IAccordionGroup';

const AccordionGroup = forwardRef<HTMLDivElement, IAccordionGroup>(
  ({ children, className, atomic = false, ...props }, ref) => {
    const [storedRef, setStoredRef] = useState<RefObject<HTMLDivElement> | undefined>();
    const refi = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (refi) {
        setStoredRef(refi);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refi.current]);

    return (
      <div ref={refi} className={`accordions-group ${atomic ? 'is-atomic' : ''} ${className}`} {...props}>
        <AccordionGroupProvider wrapper={storedRef} atomic={atomic}>
          <div ref={ref}>{children}</div>
        </AccordionGroupProvider>
      </div>
    );
  },
);

AccordionGroup.displayName = 'AccordionGroup';

export default AccordionGroup;
