import { Link } from 'react-router-dom';
import '/src/styles/Home.css'
import Contact from './Contact';
import TrendingMovies from './TrendingMovies';
import TrendingTvSeries from './TrendingTvSeries';
function Home() {
    return ( 
        <>
            <section className="video-banner mb-5">
                <video autoPlay muted loop className="video-player w-100">
                    <source src="/src/assets/bg-video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="title mx-5 py-5">
                    <h1 className="pt-5">Welcome to Shahid Movies</h1>
                    <p>Your ultimate destination for discovering and enjoying movies</p>
                    <Link className="btn btn-light px-5 py-3 fs-4 start-btn ">Start Now</Link>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-us container my-5 pt-5">
                <h2>About Us</h2>
                <p>
                    Welcome to Shahid Movies, your ultimate destination for discovering and enjoying movies. At Shahid Movies, we
                    believe in the power of films to inspire, entertain, and bring people together. Our platform provides
                    comprehensive information about a wide variety of movies, from the latest blockbusters to timeless classics.
                    Whether you are a casual viewer or a passionate cinephile, Shahid Movies is here to enhance your movie-watching
                    experience. Dive into our extensive library, explore detailed movie information, and stay updated with the
                    latest trends in the film industry.
                </p>
            </section>
            <TrendingMovies/>
            <TrendingTvSeries/>
            <Contact/>
        </>
     );
}



export default Home;