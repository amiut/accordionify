export default interface IAccordionContext {
  expanded: boolean;
  disabled: boolean;
  setExpanded(boolean): void;
  setDisabled(boolean): void;
}
