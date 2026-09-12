# Deploying to GitHub Pages

The site builds and runs locally. Deployment is blocked on one thing only: **GitHub CLI is
authenticated as `eyirenkyi_microsoft`, which is an Enterprise Managed User (EMU) account.
EMU accounts cannot create public repositories, and cannot create repositories under any
other account.**

```
GraphQL: Public repositories are not permitted for Enterprise Managed Users.
GraphQL: Unauthorized: As an Enterprise Managed User, you cannot access this content.
```

The repository, the commit and the Actions workflow are all ready. Run the steps below from
this folder using your personal GitHub account.

## 1. Authenticate as your personal account

```powershell
gh auth login --hostname github.com --web
```

Sign in as `eyirenkyi-trustark` (or `eyirenkyi`). Both accounts can stay authenticated at
once; switch with:

```powershell
gh auth switch --user eyirenkyi-trustark
```

## 2. Create the repository and push

For a **user site** served from the root of the domain, the repository name must exactly
match the account name:

| Account | Repository name | URL |
|---|---|---|
| `eyirenkyi-trustark` | `eyirenkyi-trustark.github.io` | `https://eyirenkyi-trustark.github.io` |
| `eyirenkyi` | `eyirenkyi.github.io` | `https://eyirenkyi.github.io` |

```powershell
gh repo create eyirenkyi-trustark.github.io --public --source=. --remote=origin --push
```

## 3. Turn on Pages with GitHub Actions as the source

```powershell
gh api -X POST repos/eyirenkyi-trustark/eyirenkyi-trustark.github.io/pages `
  -f build_type=workflow
```

Or in the browser: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

## 4. Update the site URL

`astro.config.mjs` currently has:

```js
site: 'https://eyirenkyi.github.io',
```

If you deploy under `eyirenkyi-trustark`, change it to
`https://eyirenkyi-trustark.github.io` and commit. This only affects canonical URLs, the
sitemap and the RSS feed, so the site will still render if you forget, but the feed will
point at the wrong host.

`base` stays `/` because a user site serves from the root. Do not change it.

## 5. Watch the deploy

```powershell
gh run watch
```

The workflow is `.github/workflows/deploy.yml`. It installs with `npm ci`, runs
`npm run build`, and publishes `dist/` to Pages. Every push to `main` redeploys, which is
what makes the weekly post a one-commit operation.

## Still outstanding

| Item | Needed for |
|---|---|
| Portrait photo into `public/images/` | About and home page |
| Formspree form ID, replacing `YOUR_FORM_ID` in `src/lib/site.ts` | Working contact form |
| Analytics choice (a cookieless option avoids a cookie banner) | `/contact` and layout |
| Sign-off on `/now` content | It is AI-drafted and unverified |
| Your own Bloom screenshots, or written permission for the ones in Blessing Mikairu's article | Images in the Bloom case study |
