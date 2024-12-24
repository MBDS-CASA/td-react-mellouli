import React from 'react';
import data from '../assets/data.json';

const Etudiants = () => {
    return (
        <div>
            <h1>Liste des étudiants</h1>
            <table border="1" align={"center"}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Cours</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.student.id}>
                        <td>{item.student.id}</td>
                        <td>{item.student.firstname}</td>
                        <td>{item.student.lastname}</td>
                        <td>{item.course}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Etudiants;
