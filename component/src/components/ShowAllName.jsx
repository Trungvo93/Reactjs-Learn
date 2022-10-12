

const ShowAllName = props => {
    const result = props.data.map(e => e.name).join(', ');
    return (
        <h1>Danh sách: {result}</h1>
    )
    // return result
}

export default ShowAllName