import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { AuthProvider } from 'react-oidc-context';
import { BrowserRouter } from 'react-router';
import { App } from './components/App';
import { Layout } from './components/Layout';
import { ProtectedApp } from './components/ProtectedApp';
import { onSigninCallback, queryClient, userManager } from './config';

type RootProps = {
    name: string;
};

export default function Root({ name }: RootProps) {
    console.log("app " + name + " mounted");
    return (
        <div>
            <React.StrictMode>
                <BrowserRouter basename="/">
                    <AuthProvider userManager={userManager} onSigninCallback={onSigninCallback}>
                        <QueryClientProvider client={queryClient}>
                            <Layout>
                                <ProtectedApp>
                                    <App />
                                </ProtectedApp>
                            </Layout>
                        </QueryClientProvider>
                    </AuthProvider>
                </BrowserRouter>
            </React.StrictMode>
        </div>
    );
};

