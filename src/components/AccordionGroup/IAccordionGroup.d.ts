import { ReactNode } from 'react';

export default interface IAccordionGroup {
  children: ReactNode;
  atomic?: boolean;
  [props]?: any;
}
