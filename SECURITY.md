# Security policy

## Reporting a vulnerability

If you find a security issue, please open a private security advisory on the
repository (GitHub → Security → Report a vulnerability) rather than a public
issue. We aim to respond within a few days.

## Handling secrets

Livia never hardcodes credentials. All secrets are provided at runtime via the
`/setup` wizard (written to `setup.json`) or environment variables, and both
`setup.json` and `.env` are git-ignored.

If you fork or deploy this project:

- **Never commit `setup.json` or `.env`.** They contain your API keys and OAuth
  refresh tokens.
- Set a `DASHBOARD_PASSWORD` — without it the dashboard API stays locked.
- Set `ALLOWED_ORIGINS` to your deployment URL to lock down CORS.
- If you ever expose a secret, **rotate it** — revoke the old key/token at the
  provider. Deleting it from a commit is not enough once it has been pushed.
