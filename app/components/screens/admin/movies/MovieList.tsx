import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation';
import AdminHeader from '@/components/ui/AdminHeader/AdminHeader';
import AdminTable from '@/components/ui/AdminTable/AdminTable';
import Heading from '@/components/ui/heading/Heading';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { useMovies } from './useMovies';

const MovieList: FC = () => {
    const { handleSearch, data, isLoading, searchTerm, deleteAsync, createAsync } = useMovies()
    return (
        <Meta title="Movies">
            <AdminNavigation />
            <Heading title="Movies" />
            <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync} />
            <AdminTable
                tableItems={data || []}
                isLoading={isLoading}
                headerItems={['Title', 'Genre', 'Rating']}
                removeHandler={deleteAsync}
            />
        </Meta>
    );
};

export default MovieList;