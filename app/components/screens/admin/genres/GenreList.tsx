import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation';
import AdminHeader from '@/components/ui/AdminHeader/AdminHeader';
import AdminTable from '@/components/ui/AdminTable/AdminTable';
import Heading from '@/components/ui/heading/Heading';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { useGenres } from './useGenres';

const GenreList: FC = () => {
    const { handleSearch, data, isLoading, searchTerm, deleteAsync, createAsync } = useGenres()
    return (
        <Meta title="Genres">
            <AdminNavigation />
            <Heading title="Genres" />
            <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync} />
            <AdminTable
                tableItems={data || []}
                isLoading={isLoading}
                headerItems={['Name', 'Slug']}
                removeHandler={deleteAsync}
            />
        </Meta>
    );
};

export default GenreList;