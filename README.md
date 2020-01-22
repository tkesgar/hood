# hood

This is a demo project to present Cypress testing in my office. It is a simple
[xkcd] reader using the available [JSON API][xkcd-json].

The project is bootstrapped using [Vue CLI](https://cli.vuejs.org/).

## Specification

- Show xkcd comic
  - [x] Show the comic image
  - [x] Show the publication date
  - [x] Show the title
  - [x] Show the transcript
- Has buttons to navigate throughout the comic
  - [x] Has "Previous" button for navigating to previous comic
  - [x] Has "Next" button for navigating to next comic
  - [x] Has "First" button for navigating to first comic
  - [x] Has "Last" button for navigating to last comic
  - [x] Has "Random" button for navigating to random comic
- Can jump to specific comic number
  - [ ] Has "Jump" button
  - [ ] Show a pop-up text box to enter number of comic to jump into
- Has keyboard shortcuts to use the app
  - [x] Left arrow = "Previous" button
  - [x] Right arrow = "Next" button
  - [x] F = "First" button
  - [x] L = "Last" button
  - [x] R = "Random" button
  - [ ] J = "Jump" button
  - [ ] Up arrow = Scrolls up
  - [ ] Down arrow = Scrolls down
- Has easter egg
  - [x] Keyboard `H` will show an image of Hood
  - [x] Keyboard `Ctrl-Shift-H` will show an image of _the_ Hood

## Commands

Default commands from Vue CLI:

- Install dependencies: `npm install`
- Serve in development: `npm run serve`
- Build for production: `npm run build`
- Lint: `npm run lint`

Additional commands:

- Format using Prettier: `npm run format`
- Open Cypress: `npm run cypress`

## License

Licensed under [MIT License][lic].

[lic]: https://github.com/tkesgar/hood/blob/master/LICENSE
[xkcd-json]: https://xkcd.com/json.html
[xkcd]: https://xkcd.com/
