import React from 'react'

const MyAppointment = () => {
  // TODO: Fetch appointments from backend
  const appointments = [
    {
      id: 1,
      doctorName: 'Dr. John Smith',
      speciality: 'General Physician',
      date: '2024-03-20',
      time: '10:00 AM',
      status: 'Upcoming'
    },
    {
      id: 2,
      doctorName: 'Dr. Sarah Johnson',
      speciality: 'Dermatologist',
      date: '2024-03-15',
      time: '2:30 PM',
      status: 'Completed'
    }
  ]

  return (
    <div className='py-8'>
      <h1 className='text-2xl font-semibold mb-6'>My Appointments</h1>
      <div className='space-y-4'>
        {appointments.map((appointment) => (
          <div key={appointment.id} className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex justify-between items-start'>
              <div>
                <h2 className='text-lg font-medium'>{appointment.doctorName}</h2>
                <p className='text-gray-600'>{appointment.speciality}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                appointment.status === 'Upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {appointment.status}
              </span>
            </div>
            <div className='mt-4 flex gap-4 text-sm text-gray-600'>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment