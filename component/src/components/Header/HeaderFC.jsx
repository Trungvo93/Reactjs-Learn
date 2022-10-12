const HeaderFC = (props) => {
    //gõ chữ sẽ ra mảng chứa tên đó
    const getNames = (name = "", state) => {
        const data = state || [];
        const newNames = data
            .filter((e) =>
                e.name.trim().toLowerCase().includes(name.trim().toLowerCase())
            )
            .map((i) => i.name);
        const newName = newNames.join(", ");
        return newName;
    };

    return <h1>HeaderFC:{getNames(props.names, props.data)}</h1>
}

export default HeaderFC;