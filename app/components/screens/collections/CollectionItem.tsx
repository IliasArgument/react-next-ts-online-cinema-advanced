import Link from 'next/link';
import { FC } from 'react';
import CollectionImage from './CollectionImage';
import { ICollection } from './collections.interface';
import cn from 'classnames'
import styles from './Collections.module.scss'

const CollectionItem: FC<{ collection: ICollection }> = ({ collection }) => {
    return (
        <Link href={collection.slug}>
            <a className={styles.collection}>
                <CollectionImage collection={collection} />

                <div className={styles.content}>
                    <div className={styles.title}>
                        {collection.title}
                    </div>
                </div>

                <div className={cn(styles.behind, styles.second)}>
                    <div className={styles.title}>
                        {collection.title}
                    </div>
                </div>

                <div className={cn(styles.behind, styles.third)}>
                    <div className={styles.title}>
                        {collection.title}
                    </div>
                </div>

            </a>
        </Link>
    );
};

export default CollectionItem;