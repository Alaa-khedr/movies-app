import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import NotMatch from "./components/error/NotMatch";
import Movies from "./components/pages/Movies";
import MovieDetails from "./components/pages/MovieDetails";
import TrendingMovies from "./components/pages/TrendingMovies";
import TrendingTvSeries from "./components/pages/TrendingTvSeries";
import TvSeriesDetails from "./components/pages/TvSeriesDetails";

function App() {
  return ( 
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotMatch/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}/>
        <Route path="/trending" element={<TrendingMovies/>}/>
        <Route path="/tvseries" element={<TrendingTvSeries/>}/>
        <Route path="/tv-series/:id" element={<TvSeriesDetails/>}/>
      </Routes>
      <Footer/>
    </>
   );
}

export default App;