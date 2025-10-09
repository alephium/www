# Alephium's website

## Development

Clone `.env.example` into `.env`.

```shell
npm run start
```

The site is now running at http://localhost:8000

### CMS

Uncomment the first line in `./static/admin/config.yml`

```yml
local_backend: true
```

In a new terminal, run:

```shell
npx decap-server
```

The CMS is now running at http://localhost:8000/admin/
