import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation';
import AdminHeader from '@/components/ui/AdminHeader/AdminHeader';
import AdminTable from '@/components/ui/AdminTable/AdminTable';
import Heading from '@/components/ui/heading/Heading';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';
import { useUsers } from './useUsers';

const UserList: FC = () => {
    const { handleSearch, data, isLoading, searchTerm, deleteAsync } = useUsers()
    return (
        <Meta title="Users">
            <AdminNavigation />
            <Heading title="Users" />
            <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
            <AdminTable
                tableItems={data || []}
                isLoading={isLoading}
                headerItems={['Email', 'Data register']}
                removeHandler={deleteAsync}
            />
        </Meta>
    );
};

export default UserList;