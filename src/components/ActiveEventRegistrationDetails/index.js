import './index.css'

const getInitialDetails = () => (
  <p className="initial-text">
    Click on an event, to view its registration details
  </p>
)

const getYetToRegister = () => (
  <>
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      alt="yet to register"
      className="yet-to-register-image"
    />
    <p className="yet-to-register-para">
      A live performance brings so much to your relationship with dance. Seeing
      dance live can often make you fall totally in love with this art form.
    </p>
    <button type="button" className="yet-to-register-btn">
      Register Here
    </button>
  </>
)

const getRegisteredDetails = () => (
  <>
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      alt="registered"
    />
    <h1>You have already registered for the event</h1>
  </>
)

const getRegistrationClosedDetails = () => (
  <>
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      alt="registrations closed"
      className="yet-to-register-image"
    />
    <h1 className="registration-closed-heading">
      Registrations Are Closed Now!
    </h1>
    <p className="registration-closed-para">
      Stay tuned. We will reopen
      <br />
      the registrations soon!
    </p>
  </>
)

const eventStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}
const renderRegistrationStatus = eventStatus => {
  switch (eventStatus) {
    case eventStatusConstants.initial:
      return getInitialDetails()
    case eventStatusConstants.yetToRegister:
      return getYetToRegister()
    case eventStatusConstants.registered:
      return getRegisteredDetails()
    case eventStatusConstants.registrationClosed:
      return getRegistrationClosedDetails()
    default:
      return null
  }
}

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props
  return (
    <div className="register-status-container">
      {renderRegistrationStatus(eventStatus)}
    </div>
  )
}

export default ActiveEventRegistrationDetails
