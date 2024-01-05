<p align="center">
  <a href="https://react-rtk-calculator.netlify.app/" target="_blank" rel="noopener noreferrer">
  <img src="https://github.com/AndrasE/raw-readme/blob/main/calculator.png?raw=true" width="300">
  </a>
</p>
<h3 align="center">
  Calculator that built with React with Redux-Rtk mimicking
  <br>
  the Windows calculators dynamic flow and other caveats.
</h3>

<br/>

## Hello there 👋

After some study in the realm of Redux I deicided to create my own project. Its
using a combination of React useStates and Redux-Rtk for statemanagment. To spice things 
up I tried to recreate the windows calculators logic including having access to  calculation history. 
I also added theme & sound settings and able to dispatch simple api calls to this projects hero, Chuck Norris.🤠
<br/>
<div align="center">
<img src="https://github.com/AndrasE/React-redux-calculator/assets/75881631/8dedc741-8f52-43d7-bb28-bae4c91e4861" width="280">
<img src="https://github.com/AndrasE/React-redux-calculator/assets/75881631/ebb190c8-d440-4d13-8177-96a08deaf8ad" width="280">
<img src="https://github.com/AndrasE/React-redux-calculator/assets/75881631/5b27381c-f39f-4164-8e73-5ed9ef0d3c9c" width="280">
<img src="https://github.com/AndrasE/React-redux-calculator/assets/75881631/8592218e-cb65-449a-98e5-506dfa5995d7" width="280"> 
</div>

<br/>
Packages used:
<li><a
href="https://www.npmjs.com/package/use-local-storage"
target="_blank"
rel="noopener noreferrer"
>Use-local-storage</a> for keeping theme and sound settings stored locally. If you reopen the
app on the same device it will load with your last configuration. </li>
<li><a
href="https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/"
target="_blank"
rel="noopener noreferrer"
>
Use-sound</a> to not just see, but hear the calculator. I felt that especially on
mobile, it was a bit strange to not having that as a feedback. </li>
<li><a
 href="https://www.npmjs.com/package/axios"
target="_blank"
rel="noopener noreferrer"
>Axios</a> to make simple api requests to
<a
 href="https://api.chucknorris.io/"
target="_blank"
rel="noopener noreferrer"
>chucknorris.io</a>. How does it related to the calculator you may ask? 
I don`t know, regardless its fun!😉
</li>
<li><a
href="https://www.npmjs.com/package/react-textfit"
target="_blank"
rel="noopener noreferrer"
>React-textfit</a> in the displaying the numbers in the calculator screen. It will adjust fonstize 
according to the input and the output of the calculation. </li>

<br/>
There are more information shared about this project at the Apps about and moreabout section if you are interested. 
<br/>
Take care, calc safe!🧮

<br/>

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


