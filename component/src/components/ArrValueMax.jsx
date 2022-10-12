const sumArrValue = arr => {
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });
    return sum;
}

const ArrValueBiggest = props => {
    let max = sumArrValue(props.data[0].arrValue);
    let index = 0;
    props.data.map( (e,i )=> {
            if(max < sumArrValue(e.arrValue)) {
                max = sumArrValue(e.arrValue);
                index = i;
            } 
        })
    return <p> Tên: {props.data[index].name} - Tổng ArrValue: {max}</p>
}

export default ArrValueBiggest