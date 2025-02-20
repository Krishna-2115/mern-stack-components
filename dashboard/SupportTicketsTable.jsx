import React from 'react';

const SupportTicketsTable = () => {
    const tickets = [
        { id: 101, subject: 'Payment Issue', status: 'Open', priority: 'High' },
        { id: 102, subject: 'Login Error', status: 'Closed', priority: 'Low' },
    ];

    return (
        <div className="bg-white rounded-2xl shadow p-6 w-full">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Support Tickets</h3>
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th className="py-2">ID</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket) => (
                        <tr key={ticket.id} className="border-t">
                            <td className="py-2">{ticket.id}</td>
                            <td>{ticket.subject}</td>
                            <td>{ticket.status}</td>
                            <td>{ticket.priority}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SupportTicketsTable;
