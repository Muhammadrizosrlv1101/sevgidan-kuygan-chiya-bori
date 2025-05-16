import React from 'react'
import { useParams } from 'react-router-dom'

const Appointment = () => {
  const { docId } = useParams()

  return (
    <div>
      <h1>Schedule an Appointment</h1>
      <p>Doctor ID: {docId}</p>
      {/* Здесь будет форма для записи на прием */}
    </div>
  )
}

export default Appointment 