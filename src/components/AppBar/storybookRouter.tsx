const useRouter = () => ({
    route: "/",
    pathname: "",
    query: {},
    asPath: "",
    push: () => {},
    replace: () => {},
    reload: () => {},
    back: () => {},
    prefetch: () => {},
    beforePopState: () => {},
    events: {
        on: () => {},
        off: () => {},
        emit: () => {}
    },
    isFallback: false,
    basePath: "",
    locale: undefined,
    locales: undefined,
    defaultLocale: undefined
});

export { useRouter };
