import { FC } from 'react';
import { ICatalog } from './catalog.interface';
import CatalogMovies from './CatalogMovies';

const Catalog: FC<ICatalog> = ({ title, description, movies }) => {
    return (
        <CatalogMovies
            movies={movies || []}
            title={title}
            description={description}
        />
    );
};

export default Catalog;