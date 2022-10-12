import { studentObj } from './StudentInfo';

const StudentComponent = () => {
    const styleItem = {border:'1px solid black',padding:'10px'};

    const renderInfor = studentObj.map((e,index) => {
        return (
            //tại sao phải để key 
            <tr key={index}>
                <td style={styleItem}>{e.id}</td>
                <td style={styleItem}>{e.name}</td>
                <td style={styleItem}>{e.age}</td>
                <td style={styleItem}>{e.address}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead >
                <tr>
                    <th style={styleItem}>ID</th>
                    <th style={styleItem}>NAME</th>
                    <th style={styleItem}>AGE</th>
                    <th style={styleItem}>ADDRESS</th>
                </tr>
            </thead>
            <tbody>
                {renderInfor}
            </tbody>
        </table>
    )
}

export default StudentComponent