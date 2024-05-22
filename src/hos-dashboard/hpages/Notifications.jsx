import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Notifications() {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            const response = await axios.get('/api/notifications'); // Adjust the URL to your API endpoint
            if (Array.isArray(response.data)) {
                setNotifications(response.data);
            } else {
                setError(new Error('Invalid data format received from server'));
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading notifications: {error.message}</p>;

    return (
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-md">
            <h2 className="text-xl font-bold mb-4">Notifications</h2>
            {notifications.length === 0 ? (
                <p>No notifications available</p>
            ) : (
                <ul>
                    {notifications.map((notification) => (
                        <li key={notification.id} className="mb-4">
                            <div className="p-4 border border-gray-200 rounded-md shadow-sm">
                                <h3 className="text-lg font-semibold">{notification.title}</h3>
                                <p className="text-sm text-gray-600">{notification.message}</p>
                                <p className="text-xs text-gray-400">{new Date(notification.date).toLocaleString()}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
