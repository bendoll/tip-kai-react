// Component: Tip

// Import React and components
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

// Import our components
// ...

// Import stylesheets
// ...

function Tip() {

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

  const handleReset = () => {
    console.log('App reset')
    setUserDidAThing(false)
  }

  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleFullscreen = () => {
    console.log('User requested fullscreen mode')
    const el = document.documentElement
    if (el.requestFullscreen) {
      el.requestFullscreen()
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen() // Safari
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen() // Firefox
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen() // IE11
    }
}

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleChange);
    };
  }, []);

  return (
    <div className="tip-component d-flex flex-column align-items-center justify-content-center">
      {userDidAThing ? (
        <div className="result-text d-flex align-items-center justify-content-center w-100 h-100">{resultText}</div>
      ) : (
        <div className="tip-container d-flex flex-column align-items-center justify-content-center">
          <div className="title d-flex flex-column align-items-center justify-content-center w-100">Leave a tip?</div>
          <div className="primary-buttons d-flex flex-row align-items-center justify-content-center p-2 w-100 h-100">
            <Button onClick={handleTip} variant="primary" size="lg">18%</Button>
            <Button onClick={handleTip} variant="primary" size="lg">20%</Button>
            <Button onClick={handleTip} variant="primary" size="lg">25%</Button>
          </div>
          <div className="secondary-buttons d-flex flex-row align-items-center justify-content-center p-2">
            <Button variant="secondary" size="md">Custom</Button>
            <Button onClick={handleNoTip} variant="danger" size="md">No Tip</Button>
          </div>
        </div>
      )}
      <div className="control-buttons d-flex flex-row align-items-center justify-content-between w-100 position-absolute">
        <Button onClick={handleReset} variant="warning" size="md" className="opacity-0">Reset</Button>
      {!isFullscreen && (
        <Button onClick={handleFullscreen} variant="info" size="lg">
          <i className="bi bi-fullscreen"></i>
        </Button>
      )}
      </div>
    </div>
  )
}
export default Tip