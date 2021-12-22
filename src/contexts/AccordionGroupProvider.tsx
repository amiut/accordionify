import React, { createContext, useContext, useMemo } from 'react';

import IAccordionGroupContext from './IAccordionGroupContext';
import IAccordionGroupProvider from './IAccordionGroupProvider';

const AccordionGroupContext = createContext<IAccordionGroupContext | undefined>(undefined);

if (process.env.NODE_ENV !== 'production') {
  AccordionGroupContext.displayName = 'AccordionGroupContext';
}

const AccordionGroupProvider = ({ children, atomic = false, wrapper }: IAccordionGroupProvider) => {
  const memorizedValue = useMemo<IAccordionGroupContext>(
    () => ({
      atomic,
      wrapper,
    }),
    [atomic, wrapper],
  );

  return <AccordionGroupContext.Provider value={memorizedValue}>{children}</AccordionGroupContext.Provider>;
};

export const useAccordionGroup = () => useContext(AccordionGroupContext);

export default AccordionGroupProvider;
