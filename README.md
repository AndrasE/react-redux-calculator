<h3 align="center">
  <a href="https://react-rtk-calculator.netlify.app/" target="_blank" rel="noopener noreferrer">
  <img src="https://github.com/AndrasE/raw-readme/blob/main/calculator.png?raw=true" width="230">
  </a>
  <br/>
  React - Redux-Rtk calculator 
  <br> 
  mimicing the Windows calculators dynamic flow
</h3>

## Hello there 👋

Building upon my knowledge of Redux and Redux Toolkit (RTK), I embarked on the creation of a feature-rich calculator application. This project leverages a combination of React's useState hook and Redux-RTK for robust state management.

To elevate the user experience, I meticulously replicated the logic of the Windows calculator, encompassing functionalities such as calculation history and dynamic ongoing calculations. Moreover, the application boasts a range of customization options, including theme and sound settings.

For a distinctive touch, I designed a unique theme and visual style for the calculator. Additionally, I incorporated sound effects to enhance user interaction and integrated an API to display motivating action hero images featuring the legendary Chuck Norris, adding a touch of humor to the experience.

To learn more about this project, be sure to explore the 'Apps About' and 'Moreabout' sections.

<div align="center">
<img src="https://github.com/AndrasE/React-redux-calculator/assets/75881631/8dedc741-8f52-43d7-bb28-bae4c91e4861" width="220">
<img src="https://github.com/AndrasE/React-redux-calculator/assets/75881631/ebb190c8-d440-4d13-8177-96a08deaf8ad" width="220">
<img src="https://github.com/AndrasE/React-redux-calculator/assets/75881631/5b27381c-f39f-4164-8e73-5ed9ef0d3c9c" width="220">
</div>

### Key Features

- **Windows Calculator Logic** - Replicates the core Windows calculator functionality, including real-time calculations and history.
- **Persistent Settings** - Saves and restores theme and sound preferences using local storage.
- **Custom Themes** - Allows users to switch between light and dark themes for a personalized look.
- **Customizable Sound Effects** - Adds button sound effects via `use-sound`, with an option to turn them off.
- **Dynamic Font Resizing** - Automatically adjusts font size for long calculations using `react-textfit`.
- **API integration** - Fetches random images from **[chucknorris.io](https://api.chucknorris.io/)** for added fun.

### Packages used

- **[redux-toolkit](https://redux-toolkit.js.org/)** - Efficient state management for complex calculations.
- **[use-local-storage](https://www.npmjs.com/package/use-local-storage)** - Persists theme and sound settings for a personalized user experience across sessions.
- **[use-sound](https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/)** - Adds a nostalgic tapping sound effect to enrich user interaction.
- **[axios](https://www.npmjs.com/package/axios)** - Communication with the chucknorris.io API for fetching Chuck Norris-themed images (a fun addition!).
- **[react-textfit](https://www.npmjs.com/package/react-textfit)** - Dynamically adjusts font size based on the length of the calculation, ensuring optimal display on the calculator screen. 

## Run 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Start with cloning this repo on your local machine via cli or github-desktop:

```sh
$ git clone https://github.com/AndrasE/React-redux-calculator
$ cd PROJECTNAME
```

To install and set up the library, run:

```sh
$ npm install -S myLib
```

Serving the app:

```sh
$ npm start
```
