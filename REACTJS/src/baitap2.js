import './index.css';
import React from 'react';
const students = [
    {
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
];

const inforStudent = (
    students.map(student => (
        <tr>
            <td>{student.company}</td>
            <td>{student.contact}</td>
            <td>{student.country}</td>
        </tr>
    ))
);

const element = () => {
    return (
        <div>
            <h1>Studens</h1>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contac</th>
                    <th>Country</th>
                </tr>
                {inforStudent}
            </table>
        </div>
    )
}

export default element;