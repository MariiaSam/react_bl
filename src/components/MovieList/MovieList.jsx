import "./movie-list.css"

const MovieList = ({ text, items }) => {
const elements = items.map(el => <li key={el.id}>{el.title}, {el.year}</li> )

  return (
    <>        
      <h3>{text}</h3>
            <ul className="movie-list">
                {elements}
            </ul>
    </>
  );
};

export default MovieList;