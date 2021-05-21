import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <p>Home Page</p>
            <Link to={'/countries'}>Go to Countries</Link>
        </div>
    )
}

export default Home
