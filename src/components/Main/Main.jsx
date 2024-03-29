import Button from "../Button/Button";
import MovieList from "../MovieList/MovieList";

import movies from '../../data/movieList.json'
console.log(movies)

const Main = () => {
  return (
    <main>
      <h2>Page subtitle</h2>
      <p>page description</p>
      <Button text="Add" type="button" active={false}></Button>

      <Button text="Delete"></Button>
      <MovieList title='Best Movies' items={movies} active={true}></MovieList>
    </main>
  );
};

export default Main;