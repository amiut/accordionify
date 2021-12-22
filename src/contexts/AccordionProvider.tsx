import React, { createContext, ReactNode, useContext, useMemo } from 'react';

import IAccordionContext from './IAccordionContext';

const AccordionContext = createContext<IAccordionContext | undefined>(undefined);

if (process.env.NODE_ENV !== 'production') {
  AccordionContext.displayName = 'AccordionContext';
}

export type AccordionProviderProps = {
  children: ReactNode;
  expanded: boolean;
  disabled: boolean;
  setExpanded(expanded: boolean): void;
  setDisabled(expanded: boolean): void;
};

const AccordionProvider = ({ children, expanded, setExpanded, disabled, setDisabled }: AccordionProviderProps) => {
  const memorizedValue = useMemo<IAccordionContext>(
    () => ({
      expanded,
      disabled,
      setExpanded,
      setDisabled,
    }),
    [disabled, expanded, setDisabled, setExpanded],
  );

  return <AccordionContext.Provider value={memorizedValue}>{children}</AccordionContext.Provider>;
};

export const useAccordion = () => useContext(AccordionContext);

export default AccordionProvider;
