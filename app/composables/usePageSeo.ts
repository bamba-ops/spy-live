// app/composables/usePageSeo.ts
export const usePageSeo = (
    title: string,
    description: string,
    locale = 'fr'
) => {
    // 👇 call useRoute() here, inside the composable, which itself is called in setup()
    const route = useRoute()

    useSeoMeta({
        title,
        description,
        ogTitle: title,
        ogDescription: description,
        ogLocale: locale === 'fr' ? 'fr_FR' : 'en_US',
        // 👇 no longer a function, juste la string déjà calculée
        canonical: `https://spylive.shop${route.path}`,
        hreflang: locale
    })
}
