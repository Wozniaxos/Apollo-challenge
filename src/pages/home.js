import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <p data-testid="pageName">Home Page</p>
            <Link data-testid="countriesLink" to={'/countries'}>Go to Countries</Link>
        </div>
    )
}

export default Home
