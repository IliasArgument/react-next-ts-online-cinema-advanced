import { FC } from 'react';
import { ICollection } from '@/components/screens/collections/collections.interface'
import { GetStaticProps } from 'next';
import { GenreService } from '@/services/genre.service';
import Collections from '@/components/screens/collections/Collections';
import Error404 from './404';

const GenrePage: FC<{ collections: ICollection[] }> = ({ collections }) => {
    return (
        collections ? (<Collections collections={collections || []} />) : (<Error404 />)
    );
};

export const getStaticProps: GetStaticProps = async () => {

    try {
        const { data: collections } = await GenreService.getCollections()
        return {
            props: {
                collections
            },
            revalidate: 60,
        }
    } catch (e) {
        return {
            notFound: true
        }
    }
}

export default GenrePage;