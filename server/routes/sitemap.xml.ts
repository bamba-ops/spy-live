import { SitemapStream, streamToPromise } from 'sitemap'
import { defineEventHandler } from 'h3'
import { cities } from '~/utils/dataset'
import { guides } from '~/utils/guides'

export default defineEventHandler(async (event) => {
    const smStream = new SitemapStream({ hostname: 'https://spylive.shop' })
    smStream.write({ url: '/', changefreq: 'daily' })
    cities.forEach(c => smStream.write({ url: `/live-shopping/${c.slug}`, changefreq: 'weekly' }))
    guides.forEach(g => smStream.write({ url: `/guide/${g.slug}`, changefreq: 'monthly' }))
    smStream.end()
    const xml = await streamToPromise(smStream).then(buf => buf.toString())
    event.node.res.setHeader('Content-Type', 'application/xml')
    return xml
})
