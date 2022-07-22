import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '@/assets/icons/logo.svg'

const Logo: FC = () => {
    return (
        <>
            <Link href='/'>
                <a className="px-layout mb-10 block">
                    <Image
                        src={LogoImage}
                        alt='Online cinema'
                        width={247}
                        height={74}
                        draggable={false}
                    />
                </a>
            </Link>
        </>
    );
};

export default Logo;