import { lazy, Suspense } from 'react';
import Container from './Components/Container';
import { Switch, Route } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';

const HomePage = lazy(() =>
  import('./Views/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./Views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetails = lazy(() =>
  import('./Views/MovieDetails' /* webpackChunkName: "MovieDetails" */),
);
const NotFoundView = lazy(() =>
  import('./Views/NotFoundView' /* webpackChunkName: "NotFoundView" */),
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies" exact component={MoviesPage} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;