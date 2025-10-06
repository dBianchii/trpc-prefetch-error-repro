To reproduce the issue, run the following commands:

```bash
pnpm i
pnpm dev
```

Then go to http://localhost:3000/login and click the button to set the cookie. You will be redirected to the home page.

Then, refresh the page. You will get an error:

```txt
Error: Switched to client rendering because the server rendering errored:
You dont have FAKE_AUTH cookie
```
