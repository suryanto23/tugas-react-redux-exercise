import './App.css';
import {Container , Row , Col} from 'react-bootstrap'
import Display from './components/Display.js'
import Heading from './components/Heading';

function App() {
  return (
    <Container className="p-5">
    


    
      <Heading/>

      <Row>
        <Col xs="6">
          <Display/>
        </Col>
      </Row>
      
    
    
    
    
    </Container>
  );
}

export default App;
