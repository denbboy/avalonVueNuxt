export default defineNuxtPlugin(() => {
    if (import.meta.client) {
        const router = useRouter();

        router.beforeEach((to, from, next) => {
            if (to.path.startsWith('/en/')) {
                const pathWithoutEn = to.path.replace(/^\/en/, '') || '/';
                return next(pathWithoutEn);
            }

            if (to.path === '/en') {
                return next('/');
            }

            next();
        });
    }
});
