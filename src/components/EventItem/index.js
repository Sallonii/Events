import './index.css'

const EventItem = props => {
  const {eachEventDetails, eventClicked, isActive} = props
  const {id, imageUrl, name, location, registrationStatus} = eachEventDetails

  const eventImageClassName = isActive ? 'event-img active' : 'event-img'

  const onClickingEvent = () => {
    eventClicked(registrationStatus, id)
  }
  return (
    <li className="event-item-card">
      <button type="button" className="event-button" onClick={onClickingEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
