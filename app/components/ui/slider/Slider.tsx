import { FC } from 'react';
import SlideArrow from './SlideArrow/SlideArrow';
import SlideItem from './SlideItem';
import { ISlide } from './slider.interface';
import { useSlider } from './useSlider';
import { CSSTransition } from 'react-transition-group';
import styles from './Slider.module.scss'

interface ISlider {
    slides: ISlide[]
    buttonTitle?: string
}

const Slider: FC<ISlider> = ({
    slides, buttonTitle = 'Watch'
}) => {
    const { handleClick, index, isNext, isPrev, slideIn } = useSlider(slides.length)
    return (
        <div className={styles.slider}>

            <CSSTransition in={slideIn} timeout={300} classNames="slide-animation" unmountOnExit>
                <SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
            </CSSTransition>


            {
                isPrev && <SlideArrow variant='left' clickHandler={() => handleClick('prev')} />
            }

            {
                isNext && <SlideArrow variant='right' clickHandler={() => handleClick('next')} />
            }
        </div>
    );
};

export default Slider;