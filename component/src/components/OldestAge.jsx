const OldestAge = (props) => {
    let oldest = props[0].age;
    props.map(e => {
        if (oldest < e.age) {
            oldest = e.age;
        }
    })
    return oldest;
}

export default OldestAge