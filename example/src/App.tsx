import './App.css';
import { AccordionGroup, Accordion, AccordionToggle, AccordionPanel, AccordionToggleButton } from 'accordionify';

function App() {
  return (
    <div className="container">
      <AccordionGroup atomic>
        <Accordion defaultOpen>
          <AccordionToggle>
            Click me to toggle
            <AccordionToggleButton />
          </AccordionToggle>

          <AccordionPanel>Hey there, Accordion Content goes here</AccordionPanel>
        </Accordion>
        <Accordion>
          <AccordionToggle>
            Click me to toggle
            <AccordionToggleButton />
          </AccordionToggle>

          <AccordionPanel>Hey there, Accordion Content goes here</AccordionPanel>
        </Accordion>
        <Accordion>
          <AccordionToggle>
            Click me to toggle
            <AccordionToggleButton />
          </AccordionToggle>

          <AccordionPanel>Hey there, Accordion Content goes here</AccordionPanel>
        </Accordion>
      </AccordionGroup>
    </div>
  );
}

export default App;
