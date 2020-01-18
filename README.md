# hood

This is a demo project to present Cypress testing in my office. It is a simple
[xkcd] reader using the available [JSON API][xkcd-json].

The project is bootstrapped using [Vue CLI](https://cli.vuejs.org/).

## Specification

- [ ] Show xkcd comic
  - [ ] Show the comic image
  - [ ] Show the publication date
  - [ ] Show the title
  - [ ] Show the transcript
- [ ] Has buttons to navigate throughout the comic
  - [ ] Has "Previous" button for navigating to previous comic
  - [ ] Has "Next" button for navigating to next comic
  - [ ] Has "First" button for navigating to first comic
  - [ ] Has "Last" button for navigating to last comic
  - [ ] Has "Random" button for navigating to random comic
- [ ] Can jump to specific comic number
  - [ ] Has "Jump" button
  - [ ] Show a pop-up text box to enter number of comic to jump into
- [ ] Has keyboard shortcuts to use the app
  - [ ] Left arrow = "Previous" button
  - [ ] Right arrow = "Next" button
  - [ ] F = "First" button
  - [ ] L = "Last" button
  - [ ] R = "Random" button
  - [ ] J = "Jump" button
  - [ ] Up arrow = Scrolls up
  - [ ] Down arrow = Scrolls down
- [ ] Has easter egg
  - [ ] Keyboard `H` will show an image of Hood (actual HMS Hood ship)
  - [ ] Keyboard `Ctrl-H` will show an image of Hood

## Commands

Default commands from Vue CLI:

- Install dependencies: `npm install`
- Serve in development: `npm run serve`
- Build for production: `npm run build`
- Lint: `npm run lint`

Additional commands:

- Format using Prettier: `npm run format`
- Run unit tests: `npm test`
- Run functional tests: `npm run test:func`

## License

Licensed under [MIT License][lic].

[lic]: https://github.com/tkesgar/hood/blob/master/LICENSE
[xkcd-json]: https://xkcd.com/json.html
[xkcd]: https://xkcd.com/
