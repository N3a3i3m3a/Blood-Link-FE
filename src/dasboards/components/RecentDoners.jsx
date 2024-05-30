import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecentDoners = () => {
	const [confirmedAppointments, setConfirmedAppointments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchConfirmedAppointments();
	}, []);

	const fetchConfirmedAppointments = async () => {
		try {
			const response = await axios.get('https://blood-link-be.onrender.com/api/appointment/getComfirmedAppointments');
			setConfirmedAppointments(response.data.confirmedAppointments);
			console.log(response.data);
			setLoading(false);
		} catch (error) {
			setError(error);
			setLoading(false);
		}
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error loading confirmed appointments: {error.message}</p>;



	return (
		<section>
			<h1>Confirmed appointments</h1>
			<div>

				<table>
					<thead>
						<tr>
							<th>Donor</th>
							<th>Hospital</th>
							<th>Date</th>
							<th>Time</th>
							<th>Location</th>
						</tr>
					</thead>
					<tbody>
						{confirmedAppointments.map(appointment => (
							<tr key={appointment._id}>
								<td>
									<div>
										<p><strong>Name:</strong> {appointment.donor.fullName}</p>
										<p><strong>Mobile Number:</strong> {appointment.donor.mobileNumber}</p>
										<p><strong>National ID:</strong> {appointment.donor.nationalID}</p>
										<p><strong>Email:</strong> {appointment.donor.email}</p>
										<p><strong>Blood Group:</strong> {appointment.donor.bloodGroup}</p>
									</div>
								</td>
								<td>
									<div>
										<p><strong></strong> {appointment.hospital ? appointment.hospital.name : ' hospital name assigned'}</p>
										<p><strong></strong> {appointment.hospital ? appointment.hospital.email : 'No hospital email assigned'}</p>
										<p><strong></strong> {appointment.hospital ? appointment.hospital.phone : 'No hospital phone assigned'}</p>
									</div>
								</td>
								<td>{new Date(appointment.date).toLocaleDateString()}</td>
								<td>
									<div>
										<p><strong></strong> {appointment.time}</p>
									</div>
								</td>
								<td>
									<div>
										<p><strong>Sector:</strong> {appointment.hospital?.sector}</p>
									</div>
								</td>
							</tr>
						))}
					</tbody>

				</table>
			</div>
		</section>
	);
};

export default RecentDoners;
