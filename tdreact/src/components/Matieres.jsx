import React from 'react';
import data from '../assets/data.json';

const Matieres = () => {
    // Regrouper les matières uniques avec les informations pertinentes
    const courses = data.reduce((acc, item) => {
        const course = acc.find((c) => c.name === item.course);
        if (!course) {
            acc.push({ name: item.course, students: 1 });
        } else {
            course.students += 1;
        }
        return acc;
    }, []);

    return (
        <div>
            <h1>Liste des matières</h1>
            <table border="1" align={"center"}>
                <thead>
                <tr>
                    <th>Matière</th>
                    <th>Nombre d'étudiants</th>
                </tr>
                </thead>
                <tbody>
                {courses.map((course, index) => (
                    <tr key={index}>
                        <td>{course.name}</td>
                        <td>{course.students}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Matieres;

