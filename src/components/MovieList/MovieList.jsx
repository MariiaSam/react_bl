import MovieListItem from "./MovieListItem";

import "./movie-list.css"

const MovieList = ({ title, items = [] }) => {
const elements = items.map(el => <MovieListItem key={el.id} title={el.title} year={el.year} /> )

  return (
    <>        
            {title && <h3>{title}</h3>}
           <ul className="movie-list">
                {elements}
            </ul>
    </>
  );
};

export default MovieList;