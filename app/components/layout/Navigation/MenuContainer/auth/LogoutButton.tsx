import Materialcon from '@/components/ui/MateriaIcon';
import { useActions } from '@/hooks/useActions';
import { FC } from 'react';

const LogoutButton: FC = () => {
    const { logout } = useActions()

    const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        logout()
    }
    return (
        <li>
            <a onClick={handleLogout}>
                <Materialcon name='MdLogout' />
                <span>Logout</span>
            </a>
        </li>
    );
};
export default LogoutButton