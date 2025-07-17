// Component: Tip

// Import React and components
import { Button } from 'react-bootstrap'

// Import our components
import TipButtonLogic from './TipButtonLogic.jsx'

// Import stylesheets
// ...

function TipButtons() {
  return (

    <div className="tip-container d-flex flex-column align-items-center justify-content-center">
      <div className="title d-flex flex-column align-items-center justify-content-center w-100">Leave a tip?</div>
      <div className="primary-buttons d-flex flex-row align-items-center justify-content-center p-2">
        <Button onClick={handleTip} variant="primary" size="lg">18%</Button>
        <Button onClick={handleTip} variant="primary" size="lg">20%</Button>
        <Button onClick={handleTip} variant="primary" size="lg">25%</Button>
      </div>
      <div className="secondary-buttons d-flex flex-row align-items-center justify-content-center p-2">
        <Button variant="secondary" size="md">Custom Tip</Button>
        <Button onClick={handleNoTip} variant="danger" size="md">No Tip</Button>
      </div>
    </div>
  )
}
export default TipButtons