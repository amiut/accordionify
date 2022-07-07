<div align="center">
  <h3>Accordionify</h3>
  <h6>Simple Styleless accordion component for React</h6>

  <div>
    <a href="https://www.npmjs.com/package/accordionify" target="_blank">
      <img src="https://img.shields.io/npm/v/accordionify?color=cc3534" />
    </a>
    <a href="https://www.npmjs.com/package/accordionify" target="_blank">
    <img src="https://img.shields.io/npm/dm/accordionify?color=%2344cc10" />
    </a>
    <a href="https://bundlephobia.com/result?p=accordionify@0.1.3" target="_blank">
    <img src="https://img.shields.io/bundlephobia/minzip/accordionify/0.1.3?color=%23165be4">
    </a>
  </div>
</div>

A very simple React Accordion component without any styling

## Basic usage

Each expandable accordion can be created using `<Accordion>` component, to make each accordion opened by default simply pass a `defaultOpen` prop:

```
<Accordion defaultOpen>
  <AccordionToggle>
    Click to open
    <AccordionToggleButton />
  </AccordionToggle>

  <AccordionPanel>Accordion Content Goes here</AccordionPanel>
</Accordion>
```

as you can see in the above example we're dealing with some additional components

- `<AccordionToggle>` is responsible for toggling (open/close) the accordion once it's clicked.
- `<AccordionToggleButton>` is just a button that shows arrow up/down icon
- `<AccordionPanel>` is responsible to hold accordion content

You can also Group multiple accordions with `<AccordionGroup>` component, if you need only one opened accordion at a time, simply pass `atomic` prop to `<AccordionGroup>`

```
<AccordionGroup atomic>
  <Accordion defaultOpen>
    <AccordionToggle>
      Click to open
      <AccordionToggleButton />
    </AccordionToggle>

    <AccordionPanel>Accordion 1 Content Goes here</AccordionPanel>
  </Accordion>

  <Accordion defaultOpen>
    <AccordionToggle>
      Click to open
      <AccordionToggleButton />
    </AccordionToggle>

    <AccordionPanel>Accordion 2 Content Goes here</AccordionPanel>
  </Accordion>

  <Accordion defaultOpen>
    <AccordionToggle>
      Click to open
      <AccordionToggleButton />
    </AccordionToggle>

    <AccordionPanel>Accordion 3 Content Goes here</AccordionPanel>
  </Accordion>
</AccordionGroup>
```

# Contributing

This is a beta project, feel free to contribute
