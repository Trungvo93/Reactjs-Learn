import axios from "axios";
import "../../App.css";
import { useEffect, useState } from "react";

function SearchName() {
    // thu hien luu tru data
    const [state, setState] = useState([]);
    const [names, setNames] = useState();
    const url = "https://6336968665d1e8ef266f2a30.mockapi.io/api/v1/demo/address";

    // de goi api
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                const { data } = response;
                setState(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    //gõ chữ sẽ ra mảng chứa tên đó
    const getNames = (name) => {
        if (name.trim().length > 0) {
            const arrName = state.filter(e => e.name.trim().toLowerCase().includes(name.trim().toLowerCase()));
            const showName = arrName.map(e => e.name).join(", ");
            setNames(showName);
        }
        else{
            const showName = "";
            setNames(showName);
        }

    };
    return (
        <div className="App">
            <input onChange={(e) => getNames(e.target.value)} />
            <div>{names}</div>
        </div>
    );
}

export default SearchName;