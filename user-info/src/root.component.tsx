import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';
import { AuthProvider } from 'react-oidc-context';
import { BrowserRouter } from 'react-router';
import { App } from './components/App';
import { Layout } from './components/Layout';

type RootProps = {
    name: string;
    oidcSetting: any,
    onSigninCallback: Function
};

export default function Root({ name, oidcSetting, onSigninCallback }: RootProps) {
    console.log("app " + name + " mounted");
    return (
        <div>
            <React.StrictMode>
                <BrowserRouter basename="/">
                    <AuthProvider userManager={oidcSetting} onSigninCallback={onSigninCallback}>
                        <QueryClientProvider client={new QueryClient()}>
                            <Layout>
                                <App />
                            </Layout>
                        </QueryClientProvider>
                    </AuthProvider>
                </BrowserRouter>
            </React.StrictMode>
        </div>
    );
};

