import { FC } from 'react';
import NextNProgress from "nextjs-progressbar";
import { accentColor } from '@/config/constants';
import Head from 'next/head';
import { FavIcons } from './FavIcon';

const HeadProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <NextNProgress
                color={accentColor}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Head>
                <meta charSet='UTF-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, maximum-scale=1.0'
                />
                <FavIcons />
                <meta name='theme-color' content={'#18181E'} />
                <meta name='msapplication-navbutton-color' content={'#18181E'} />
                <meta name='apple-mobile-web-app-status-bar-style' content={'#18181E'} />
            </Head>
            {children}
        </>
    );
};

export default HeadProvider;