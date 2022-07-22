import { FC } from 'react';
import cn from 'classnames'
import styles from './SlideArrow.module.scss';
import Materialcon from '../../MateriaIcon';

interface ISlideArrow {
    variant: 'left' | 'right'
    clickHandler: () => void
}

const SlideArrow: FC<ISlideArrow> = ({ clickHandler, variant }) => {

    const isLeft = variant === 'left'

    return (
        <button className={cn(styles.arrow, {
            [styles.left]: isLeft,
            [styles.right]: !isLeft
        })}
            onClick={clickHandler}
        >
            <Materialcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
        </button>
    );
};

export default SlideArrow;