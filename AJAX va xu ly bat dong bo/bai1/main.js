const url = `http://api.giphy.com/v1/gifs/search?q=`;
const api = `&api_key=D2tRjv4C2Ln9u958edPqWyhL14YDkm6f`;

let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", showGiphy);
function showGiphy() {
    let keyWord = document.getElementById("searchInput").value;
    axios.get(`${url}${keyWord}${api}`)
        .then(e => {
            //Tạo 1 node
            let item = document.createElement("iframe");
            //Thêm thuộc tính trong node
            let randomIndex = Math.floor(Math.random() * 50);
            let itemSrc = e.data.data[randomIndex].embed_url;
            item.setAttribute('src', itemSrc);
            item.setAttribute('frameborder', '0');
            console.log(e)
            //Thêm 1 node vào cuối danh sách
            let showGiphy = document.getElementById("showGiphy");
            showGiphy.appendChild(item);
            document.getElementById("searchInput").value = '';
            document.getElementById("searchInput").focus();
        })
        .catch(error => {
            console.log(`Lỗi ${error}`);
            alert(`Không có hình nào cả`);
        })
        
}

let removeBtn = document.getElementById('removeBtn');
removeBtn.addEventListener('click', () => {
    document.getElementById("showGiphy").innerHTML = "";
})