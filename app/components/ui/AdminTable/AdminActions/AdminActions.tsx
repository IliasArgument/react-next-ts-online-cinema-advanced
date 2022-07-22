import { useRouter } from 'next/router';
import { FC } from 'react';
import Materialcon from '../../MateriaIcon';
import styles from './AdminActions.module.scss'


interface IAdminActios {
    editUrl: string
    removeHandler: () => void
}

const AdminActions: FC<IAdminActios> = ({ editUrl, removeHandler }) => {
    const { push } = useRouter()
    return (
        <div className={styles.actions}>
            <button onClick={() => push(editUrl)}>
                <Materialcon name='MdEdit' />
            </button>
            <button onClick={removeHandler}>
                <Materialcon name='MdClose' />
            </button>
        </div>
    );
};

export default AdminActions;