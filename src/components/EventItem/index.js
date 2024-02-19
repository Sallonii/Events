import './index.css'

const EventItem = props => {
  const {eachEventDetails, eventClicked} = props
  const {id, imageUrl, name, location, registrationStatus} = eachEventDetails

  const onClickingEvent = () => {
    eventClicked(registrationStatus)
  }
  return (
    <li className="event-item-card">
      <button type="button" className="event-button" onClick={onClickingEvent}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
