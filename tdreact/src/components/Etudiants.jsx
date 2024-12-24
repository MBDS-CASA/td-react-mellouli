import React from 'react';
import data from '../assets/data.json';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function Etudiants() {
    return (
        <div>
            <h1>Liste des étudiants</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Prénom</TableCell>
                            <TableCell>Nom</TableCell>
                            <TableCell>Cours</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item.student.id}>
                                <TableCell>{item.student.id}</TableCell>
                                <TableCell>{item.student.firstname}</TableCell>
                                <TableCell>{item.student.lastname}</TableCell>
                                <TableCell>{item.course}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Etudiants;