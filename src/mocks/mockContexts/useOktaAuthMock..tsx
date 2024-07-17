import React, { createContext, useContext } from "react";

const OktaAuthContext = createContext({
    authState: {
        isAuthenticated: false,
        idToken: {},
        accessToken: ""
    },
    oktaAuth: {
        signInWithRedirect: () => Promise.resolve(),
        signOut: () => Promise.resolve(),
        getUser: () => ({
            user: {
                name: ""
            }
        })
    }
});

const OktaAuthMockProvider = ({ children }: { children: React.ReactNode }) => {
    const mockAuthState = {
        isAuthenticated: true,
        idToken: {
            claims: {
                name: "John Doe"
            }
        },
        accessToken: "mockAccessToken"
    };

    const mockOktaAuth = {
        signInWithRedirect: () => Promise.resolve(),
        signOut: () => Promise.resolve(),
        getUser: () => ({
            user: {
                name: "John Doe"
            }
        })
    };

    return (
        <OktaAuthContext.Provider
            value={{ authState: mockAuthState, oktaAuth: mockOktaAuth }}
        >
            {children}
        </OktaAuthContext.Provider>
    );
};

const useOktaAuth = () => useContext(OktaAuthContext);

export { OktaAuthMockProvider, useOktaAuth };
