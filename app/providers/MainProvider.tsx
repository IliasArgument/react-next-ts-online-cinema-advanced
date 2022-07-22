import Layout from '@/components/layout/Layout';
import { store } from '@/store/store';
import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ReduxToast from './ReduxToast';
import { Provider } from 'react-redux';
import HeadProvider from './HeadProvider/HeadProvider';
import AuthProvider from './AuthProvider/AuthProvider';
import { TypeComponentAuthFields } from '@/shared/types/auth';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

interface IProps {
    children: React.ReactNode
}

const MainProvider: FC<TypeComponentAuthFields & IProps> = ({ children, Component }) => {

    return (
        <HeadProvider>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider Component={Component}>
                        <ReduxToast />
                        <Layout>
                            {children}
                        </Layout>
                    </AuthProvider>
                </QueryClientProvider>
            </Provider>
        </HeadProvider>
    );
};

export default MainProvider;