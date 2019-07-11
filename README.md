# Group Project 3

## Structure

- `backend`: contains all backend express api and mysql related code
- `frontend`: contains all frontend react code

## Deployment process

1. ssh into amass.us server
2. start screen or attach to existing screen (google how)
3. pull latest copy of project with `git pull`
4. in frontend directory, `npm run build`, then try `npm run deploy:cp` or run its command directly
5. review live site for updated React-content
6. in backend directory...
7. if the first time or needed for reseeding, run `npm run seed` -- *important*: start mongo first
8. with screen running, start another screen window session CTRL+A + CTRL+C; then `npm run dev` because production mode is not worth it right now (easier to debug this way)
9. visit [https://amass.us/api/](https://amass.us/api/) to visit the health check - if `time` is not present or very old, review the above steps
10. OP hacks.