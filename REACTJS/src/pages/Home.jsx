import SearchName from '../components/home/search';


const Home = () => {
    return (
        <div>
            <h1 style={{textAlign:'center',color:'#bfaf07'}}>Search name</h1>
            <SearchName />
            <p style={{textAlign:'center',color:'#bfaf07'}}>--------------------</p>
            <SearchName />
        </div>
    )
}

export default Home;