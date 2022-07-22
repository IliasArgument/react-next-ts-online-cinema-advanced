import { FC } from 'react';
import ReduxToastr from 'react-redux-toastr'

const ReduxToast: FC = () => {
    return (
        <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
        />
    );
};

export default ReduxToast;