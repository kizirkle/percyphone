//imports
import {Accordion, useAccordionButton, Card} from 'react-bootstrap';
//react
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      className="btn"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Faq() {
  return (
    <div className="d-flex flex-column">
        <div>
            <h2 className="text-center">
                Frequently Asked Questions
            </h2>
            <p className="text-center">Some things I'd like to clear up!</p>
        </div>
        <Accordion defaultActiveKey="0">
            <Card className="d-flex flex-column justify-content-center">
                <Card.Header className="d-flex flex-column justify-content-center" style={{"background":"none"}}>
                <CustomToggle eventKey="0" >Question One</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header className="">
                <CustomToggle eventKey="1">Question Two</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header className="">
                <CustomToggle eventKey="2">Question Three</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
    </div>
    
  );
}

//export
export default Faq;