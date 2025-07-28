# [layfla.gs](https://www.layfla.gs)

![screenshot](screenshot.png "Screenshot of www.layfla.gs")

This project is a [PWA](https://developers.google.com/web/progressive-web-apps/) and works even w/o stylesheets (just the information then) and w/o JS (no offline capabilities then).

## Local development

Start a development server with e.g.:
```
$ npx live-server
```

## Deployment on [Vercel](https://vercel.com)

Deployments are handled by Vercel. Pushing to the repository's main branch
will automatically trigger a new build running `npm run build` to generate the
service worker. Manual deployments can be started with the
[`vercel` CLI](https://vercel.com/docs/cli):

```
$ npx vercel --prod
```
