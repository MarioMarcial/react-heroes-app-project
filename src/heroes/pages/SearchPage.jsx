import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard, getHeroesByName } from './../';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const { q = '' } = queryString.parse(location.search);

  // Obtener heroes a partir del query parameter
  const heroes = getHeroesByName(q);

  // Banderillas
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  // Formulario
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  // Evento submit
  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;
    // console.log({ searchText });

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-success mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div
            className="alert alert-success animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </div>
          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}
          >
            No hero with <b>{q}</b>
          </div>

          {/* <HeroCard /> */}
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
