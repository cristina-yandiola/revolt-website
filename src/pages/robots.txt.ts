import type { APIRoute } from 'astro'
import { env } from 'cloudflare:workers'

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', env.SITE).href}
`.trim()

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	})
}
