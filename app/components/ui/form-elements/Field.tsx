import { forwardRef } from 'react';
import { IField } from './form.interface';
import styles from './form.module.scss'
import cn from 'classnames'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


const Field = forwardRef<HTMLInputElement, IField>(({
    placeholder, isShow, error, toggle, pass, isProfile, type = 'text', style, ...rest
}, ref) => {
    return (
        <div className={cn(styles.common, styles.field)} style={style}>
            <label>
                <span>{placeholder}</span>
                <input ref={ref} type={type} {...rest} autoComplete="off" />
                {
                    pass &&
                    <div className={styles.icon} onClick={toggle}>
                        {
                            !isShow ? (
                                <AiOutlineEye style={{ fill: isProfile ? '#fff' : '#000' }} />
                            ) :
                                (<AiOutlineEyeInvisible style={{ fill: isProfile ? '#fff' : '#000' }} />
                                )
                        }
                    </div>
                }
            </label>
            {error && <div className={styles.error}>{error.message}</div>}
        </div>
    );
});

export default Field;