import { useRouter } from 'next/router';
import { FC } from 'react';
import { IMenuItem } from './menu.interface';
import styles from './Menu.module.scss'
import cn from 'classnames'
import Link from 'next/link';
import Materialcon from '@/components/ui/MateriaIcon';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
    const { asPath } = useRouter()
    return (
        <li className={cn({
            [styles.active]: asPath === item?.link
        })}>
            <Link href={item.link}>
                <a>
                    <Materialcon name={item?.icon || 'MdDragIndicator'} />
                    <span>{item?.title}</span>
                </a>
            </Link>
        </li>
    );
};

export default MenuItem;