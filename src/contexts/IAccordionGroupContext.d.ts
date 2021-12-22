import { RefObject } from 'react';

export default interface IAccordionGroupContext {
  atomic?: boolean;
  wrapper: RefObject<HTMLDivElement> | undefined;
}
