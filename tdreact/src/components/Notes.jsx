import React from 'react';
import data from '../assets/data.json';

const Notes = () => {
    return (
        <div>
            <h1>Notes des étudiants</h1>
            <table border="1" align={"center"}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Cours</th>
                    <th>Étudiant</th>
                    <th>Date</th>
                    <th>Note</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.unique_id}>
                        <td>{item.student.id}</td>
                        <td>{item.course}</td>
                        <td>
                            {item.student.firstname} {item.student.lastname}
                        </td>
                        <td>{item.date}</td>
                        <td>{item.grade}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Notes;
