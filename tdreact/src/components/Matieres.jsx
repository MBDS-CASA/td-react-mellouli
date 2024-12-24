import React from 'react';
import data from '../assets/data.json';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function Matieres() {
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
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Matière</TableCell>
                            <TableCell>Nombre d'étudiants</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {courses.map((course, index) => (
                            <TableRow key={index}>
                                <TableCell>{course.name}</TableCell>
                                <TableCell>{course.students}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Matieres;
