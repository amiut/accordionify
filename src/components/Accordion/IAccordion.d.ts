export default interface IAccordion {
  children: ReactNode;
  defaultOpen?: boolean;
  className: string;
  [props]?: any;
}
