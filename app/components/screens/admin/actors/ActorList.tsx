import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation';
import AdminHeader from '@/components/ui/AdminHeader/AdminHeader';
import AdminTable from '@/components/ui/AdminTable/AdminTable';
import Heading from '@/components/ui/heading/Heading';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { useActors } from './useActors';

const ActorList: FC = () => {
    const { handleSearch, data, isLoading, searchTerm, deleteAsync, createAsync } = useActors()
    return (
        <Meta title="Actors">
            <AdminNavigation />
            <Heading title="Actors" />
            <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync} />
            <AdminTable
                tableItems={data || []}
                isLoading={isLoading}
                headerItems={['Name', 'Count Movies']}
                removeHandler={deleteAsync}
            />
        </Meta>
    );
};

export default ActorList;