import Button from "../Button/Button";
import MovieList from "../MovieList/MovieList";

import movies from '../../data/movieList.json'
console.log(movies)

const Main = () => {
  return (
    <main>
      <h2>Page subtitle</h2>
      <p>page description</p>
      <Button text="Add" type="button"></Button>

      <Button text="Delete"></Button>
      <MovieList text='Best Movies' items={movies}></MovieList>
    </main>
  );
};

export default Main;
