import { ReactNode } from 'react';

export default interface IAccordionPanel {
  children: ReactNode;
  className: string;
  [props]?: any;
}
