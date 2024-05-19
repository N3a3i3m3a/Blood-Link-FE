import React, { useState } from 'react';

const BookAppointment = () => {
  const [donor, setDonor] = useState('');
  const [hospital, setHospital] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Appointment requested by ${donor} at ${hospital} on ${date} at ${time}`);
  };

  return (
    <section className='h-fit flex flex-col w-full items-center ml-20 justify-center bg-white p-8 shadow-md'>
      <div className='rounded w-[80%]'>
        <h1 className="text-2xl text-gray-500 font-bold">Book appointment</h1>
        <h2 className='my-3'>Welcome to our donating page! </h2>
        <h2 className='my-3'> Please, fill out the following form</h2>
        <form className="flex flex-col gap-5 p-7 w-full items-center" onSubmit={handleSubmit}>
          <div className='w-full'>
            <input
              type="text"
              id="donor"
              placeholder="Enter Donor Name"
              value={donor}
              onChange={(e) => setDonor(e.target.value)}
              className="px-3 py-2 rounded-md border w-full border-gray-400"
              required
            />
          </div>
          <div className='w-full'>
            <input
              type="text"
              id="hospital"
              placeholder="Enter Hospital Name"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="px-3 py-2 rounded-md border w-full border-gray-400"
              required
            />
          </div>
          <div className='w-full'>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="px-3 py-2 rounded-md border w-full border-gray-400"
              required
            />
          </div>
          <div className='w-full'>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="px-3 py-2 rounded-md border w-full border-gray-400"
              required
            />
          </div>
          <button type="submit" className="ml-[10%] bg-red-600 mx-9 py-2 rounded-md text-white w-full">
            Request Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;
