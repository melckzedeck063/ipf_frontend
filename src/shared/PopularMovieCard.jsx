import React from 'react'

export default function PopularMovieCard({movie, index}) {
  return (
    <div>
        <div key={movie.id} className="rounded-lg">
              <div className="flex items-center space-x-4">
                <h3 className="text-4xl font-bold text-gray-200 mr-3">
                  {index + 1}
                </h3>
                <div className="">
                  <img
                  style={{height :200}}
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full object-cover rounded-md mb-3"
                  />
                </div>
                <div className="flex-1">
                  <h6 className="font-semibold">{movie.title}</h6>
                  <div className="my-1">Lang : {(movie.original_language)}</div>
                  <div className="text-gray-100">⭐ {movie.vote_average} | Movie</div>
                  <p className="text-gray-400 text-sm">PG-13 | {movie.genre_ids.join(', ')}</p>
                </div>
              </div>
            </div>
    </div>
  )
}
