import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Play } from 'lucide-react'

const Moviepage = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  }
};

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(res => res.json())
        .then(res => setMovie(res))
        .catch(err => console.error(err));
}, [id])

  if(!movie){
    return <div className='flex items-center justify-center h-screen'><span className='text-xl text-red-500'>Loading...</span>
    </div>
  }
  return (
    <div className="min-h-screen bg-[#181818] text-white">
        <div className='relative h-[68vh] flex items-end' style={
            {backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, 
            backgroundSize: "cover", 
            backgroundPosition: "center"}
        }>
            {/* gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent'></div>
            
            <div className='relative z-10 flex items-end p-8 gap-8'>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='rounded-lg shadow-lg w-48 max-h-[58vh] object-cover hidden md:block' />
                <div>
                    <h1 className='text-4xl font-bold mb-2'>{movie.title}</h1>
                    <div className='flex items-center gap-4 mb-2'>
                        <span>⭐ {movie.vote_average?.toFixed(1)} </span>
                        <span>{movie.release_date}</span>
                        <span>{movie.runtime} min</span>
                    </div>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {movie.genres.map((genre) => (
                            <span className='bg-gray-800 px-3 py-1 rounded-full text-sm'>{genre.name}</span>
                        ))}  
                    </div>
                    <p className='max-w-2xl text-gray-200'>{movie.overview}</p>
                    <button className='flex justify-center items-center bg-[#e50914] hover:bg-gray-200 hover:text-black text-white py-3 px-4 rounded-full cursor-pointer text-sm md:text-base mt-2 md:4'>
                        <Play className='mr-2 w-4 h-5 md:w-5 md:h-5' />Watch Now
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Moviepage