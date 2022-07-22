import Heading from '@/components/ui/heading/Heading';
import Meta from '@/utils/meta/Meta';
import { FC } from 'react';

const Error404: FC = () => {
    return (
        <Meta title='Page not Found'>
            <Heading title='404 - Page Not Found' />
        </Meta>
    );
};

export default Error404;