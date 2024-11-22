export default defineNuxtRouteMiddleware(async (to, from) => {
    // 防止 $fetch 執行兩次
    const { $swal, isHydrating, payload } = useNuxtApp();
    if (
        import.meta.client &&
        isHydrating &&
        payload.serverRendered
    ) {
        return;
    }

    const auth = useCookie('auth');
    if (!auth.value) return navigateTo('/login');

    try {
        const userInfo = await $fetch('/v1/user/check', {
            method: 'GET',
            baseURL: 'https://nuxr3.zeabur.app/api',
            headers: {
                Authorization: auth.value
            }
        });
        if (userInfo?.status !== undefined) {
            return;
        } else {
            return navigateTo('/login');
        }
    } catch (error) {
        return navigateTo('/login');
    }

    
})
