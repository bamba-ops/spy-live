export const usePageSeo = (
  title: string,
  description: string,
  locale = 'fr'
) => {
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogLocale: locale === 'fr' ? 'fr_FR' : 'en_US',
    canonical: () => `https://spylive.shop${useRoute().path}`,
    hreflang: locale
  })
}
