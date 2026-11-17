# open-conversation-format.org

Landing page for the Open Conversation Format (OCF). Static site built with Astro and Tailwind CSS. No JavaScript in the browser, no cookies, no trackers, fonts served from the site itself.

## Develop

```bash
npm install
npm run dev
```

The site runs at http://localhost:4321.

```bash
npm run build
```

writes the finished site to `dist/`.

## Where things are

| What | Where |
| --- | --- |
| Page sections, in order | `src/pages/index.astro` |
| One component per section | `src/components/` |
| Links, site title, operator details for the legal pages | `src/config/site.ts` |
| Colors and fonts | `src/styles/global.css` |
| The format sample shown on the page | `src/data/sample.ocf.json` |
| Imprint and privacy policy | `src/pages/imprint.astro`, `src/pages/privacy.astro` |

The theme is black and white with one accent color. To change the accent, edit `--accent` and `--accent-ink` in `src/styles/global.css` (once for light, once for dark).

The format sample is real: it validates against the OCF schema. After editing it, check it with ocf-py:

```bash
python -c "import json; from ocf.core.schema import validate; print(validate(json.load(open('src/data/sample.ocf.json', encoding='utf-8'))))"
```

An empty list means valid.

## Deploy with Coolify

The repository contains a `Dockerfile` that builds the site and serves it with nginx.

1. New resource from this Git repository, build pack **Dockerfile**.
2. Port **80**.
3. Domains: `https://www.open-conversation-format.org`, plus `https://open-conversation-format.org` so the address without `www` gets a certificate too.

`www.open-conversation-format.org` is the canonical address. When a request for `open-conversation-format.org` or one of the `.com` host names reaches this server, `nginx.conf` redirects it there with a 301.

The image has its own health check: it asks nginx for `/healthz` every 10 seconds. Coolify uses it only while the health check in the Coolify dashboard is switched off. A dashboard check that is switched on replaces it; in that case set its path to `/healthz` and its port to 80.

## Before going live

- Confirm the operator and contact details in `src/config/site.ts` (used by the imprint and the privacy policy).
- Check every factual statement on the page against its source once more, vendors change their defaults.
- The page says "Apache 2.0": ocf-py needs its LICENSE file for that to be visible on GitHub.
- The install command points at the Git repository. Switch it to the PyPI name once ocf-py is published.
