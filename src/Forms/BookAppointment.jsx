import React, { useState, useEffect } from 'react';

const BookAppointment = () => {
  const [donor, setDonor] = useState('');
  const [hospital, setHospital] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [hospitals, setHospitals] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch('https://blood-link-be.onrender.com/api/hospital/namesOfAllHospitals');
        const data = await response.json();
        console.log('Fetched data:', data); // Log the fetched data for debugging
        if (data && Array.isArray(data.hospitals)) {
          setHospitals(data.hospitals);
        } else {
          console.error('Fetched data is not in the expected format:', data);
        }
      } catch (error) {
        console.error('Error fetching hospital names:', error);
      }
    };

    fetchHospitals();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      donor,
      hospital,
      date,
      time,
    };

    try {
      const response = await fetch('https://blood-link-be.onrender.com/api/appointment/createAppointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Appointment created successfully:', result);
        setMessage('Appointment created successfully!');
        // Reset form fields after successful submission
        setDonor('');
        setHospital('');
        setDate('');
        setTime('');
      } else {
        console.error('Failed to create appointment:', result);
        setMessage(result.message || 'Failed to create appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error creating appointment:', error);
      setMessage('Error creating appointment. Please try again.');
    }

    console.log(`Appointment requested by ${donor} at ${hospital} on ${date} at ${time}`);
  };

  return (
    <section className=" flex flex-col w-full items-center  bg-white p-20 ">
      <div className="rounded flex flex-col  items-center my-36 justify-center mx-20 p-10 shadow-md">
        <h1 className="text-2xl text-gray-500 font-bold mb-4">Book Appointment</h1>
        <h2 className="mb-3">Please, fill out the following form</h2>
        <form className="flex flex-col gap-5 p-7 w-full" onSubmit={handleSubmit}>
          {message && <p className="text-center mb-4 text-green-500">{message}</p>}
          <div className="w-full">
            <input
              type="text"
              id="donor"
              placeholder="Enter Your Email"
              value={donor}
              onChange={(e) => setDonor(e.target.value)}
              className="px-3 py-2 rounded-md border w-full border-gray-400"
              required
            />
          </div>
          <div className="w-full">
            <select
              id="hospital"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="px-3 py-2 rounded-md border w-full border-gray-400"
              required
            >
              <option value="" disabled>Select Hospital</option>
              {hospitals.length > 0 ? (
                hospitals.map((hospital) => (
                  <option key={hospital._id} value={hospital.name}>{hospital.name}</option>
                ))
              ) : (
                <option value="" disabled>Loading hospitals...</option>
              )}
            </select>
          </div>
          <div className="w-full">
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="px-3 py-2 rounded-md border w-full border-gray-400"
              required
            />
          </div>
          <div className="w-full">
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="px-3 py-2 rounded-md border w-full border-gray-400"
              required
            />
          </div>
          <button type="submit" className="bg-red-600 py-2 rounded-md text-white w-full hover:bg-red-700">
            Request Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;
