// Component: TipButtonLogic

// Import React and components
import { useState } from 'react'

// Import our components
// ...

// Import stylesheets
// ...

function TipButtonLogic() {
      const [resultText, setResultText] = useState(false)
  const [userDidAThing, setUserDidAThing] = useState(false)
    const handleNoTip = () => {
    console.log('User selected "No Tip"')
    setResultText('what the hell, man? >:(')
    setUserDidAThing(true)
  }

  const handleTip = () => {
    console.log('User selected a tip')
    setResultText('thanks :D')
    setUserDidAThing(true)
  }
}
export default TipButtonLogic