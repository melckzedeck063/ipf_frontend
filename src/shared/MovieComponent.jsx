import React from 'react'

export default function MovieComponent({movie}) {
  return (
    <div>
        <div className="relative rounded-lg"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height : 280
          }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor:' black', opacity: 0.5}}></div>

          <div className="w-11/12 mx-auto">
          <div className="z-10 text-left max-w-2xl ml-4 px-4 items-center">
            <div style={{marginTop : '1rem', position: 'absolute', right: 0, bottom: 6, left: 2}}  >
               <h5 className="font-semibold mb-1 ml-4">{movie.title}</h5>
               <div className="flex items-center space-x-2 text-sm text-yellow-400 ml-4">
                  <span>⭐ {movie.vote_average}</span>
                  <span>| {movie.genre_ids.join(', ')}</span>
               </div>
            </div>
          <div className=""></div>
          </div>
        </div>
    </div>
    </div>
  )
}
