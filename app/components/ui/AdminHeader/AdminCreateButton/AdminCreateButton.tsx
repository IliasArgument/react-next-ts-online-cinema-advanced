import { FC } from 'react';
import Button from '../../form-elements/Button';
import styles from './AdminCreateButton.module.scss'


const AdminCreateButton: FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <Button onClick={onClick}>
            Create me
        </Button>
    );
};

export default AdminCreateButton;