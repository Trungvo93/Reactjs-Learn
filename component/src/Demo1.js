import React from "react";
import OldestAge from "./components/OldestAge";
import ShowAllName from "./components/ShowAllName";
import ArrValueBiggest from "./components/ArrValueMax";
export default function Demo1() {
    const data = [
        { id: 1, name: "dung1", age: 1, arrValue: [5, 2, 3, 1] },
        { id: 2, name: "dung2", age: 5, arrValue: [2, 2, 12, 1] },
        { id: 3, name: "dung3", age: 3, arrValue: [5, 3, 6, 1] }
    ];

    // 2 component

    // 1 component tim nguoi co tong arrValue lon nhat
    // 1 component hien thi tat ca cac ten va tong arrValue trong data

    return (
        <div>
            {/* <h1>Tuổi lớn nhất là: {OldestAge(data)}</h1>
            <h1>Danh sách: {ShowAllName(data)}</h1> */}
            {/* <ShowAllName data = {data} viewNumber = {5}/> */}

            {/* 
            <h1 style={{display:'inline-block'}}>Hình nè</h1>
            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Ftiny-white-kitten-873941684-2000.jpg"
                onError={({ currentTarget }) => {
                    if (currentTarget && currentTarget.src) {
                        currentTarget.src =
                            "https://img5.thuthuatphanmem.vn/uploads/2021/11/10/hinh-anh-chiec-meo-cute_042939175.jpg";
                    }
                }}
            style={{width:'200px'}}></img> */}
            <ArrValueBiggest data={data} />


        </div>
    )
}