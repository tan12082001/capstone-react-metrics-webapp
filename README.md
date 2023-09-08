<div align="center">  
  <h2><b> Earthquake Metrics Webapp </b></h2>
</div>

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents
- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
  - [🎥 Video Presentation](#video-presentation)
- [💻 Getting Started with Create React App](#getting-started-with-create-react-app)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 EarthQuake Metrics Webapp <a name="about-project"></a>

**EarthQuake Metrics Webapp** A Single Page App with React having two sub-pages where the main page is a home page that renders inital render with API data and there is the details page that shows more information about the selected item.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://react.dev/">React</a></li>
    <li><a href="https://www.w3schools.com/html/">HTML</a></li>
    <li><a href="https://www.w3schools.com/css/default.asp">CSS</a></li>
    <li><a href="https://www.w3schools.com/javascript/default.asp">JavaScript</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **In the initial version of the project using the `create-react-app` a test react webpage is created**

- **JavaScript and Stylelint linters are installed for code implementation improvement**

- **Responsive Webpage**

- **Uses React Redux middleware to work with async functions for API interactions"**

- **Has an Initial fetch of API data that renders**

- **Can Fetch new Data based on the selected Magnitude from the drop-down**

- **Can search the present cards based on the magnitude.**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo

 <a name="live-demo"></a>

- [EarthQuake Metrics](https://earthquake-metrics-v1.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- VIDEO PRESENTATION -->

## 🎥 Video Presentation

 <a name="video-presentation"></a>

- [EarthQuake Metrics video Demo](https://www.loom.com/share/11a9de53542d4b0283c3c9eba26238f7?sid=39b7a815-2901-4b57-8dc5-3f5ec966e8e2)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Getting started with Create-react-app -->

## Getting Started with Create React App <a name="getting-started-with-create-react-app"></a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<details>
  <summary>More Information</summary>
  
  ### Available Scripts

  In the project directory, you can run:

  ### `npm start`

  Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  The page will reload when you make changes.\
  You may also see any lint errors in the console.

  ### `npm test`

  Launches the test runner in the interactive watch mode.\
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  ### `npm run build`

  Builds the app for production to the `build` folder.\
  It correctly bundles React in production mode and optimizes the build for the best performance.

  The build is minified and the filenames include the hashes.\
  Your app is ready to be deployed!

  See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  ### `npm run eject`

  **Note: this is a one-way operation. Once you `eject`, you can't go back!**

  If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

  You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

  ## Learn More

  You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  To learn React, check out the [React documentation](https://reactjs.org/).

  ### Code Splitting

  This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

  ### Analyzing the Bundle Size

  This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

  ### Making a Progressive Web App

  This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

  ### Advanced Configuration

  This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

  ### Deployment

  This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

  ### `npm run build` fails to minify

  This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

EarthQuake metrics webapp is created with React-Redux. In the Home page along with the initial render of Item cards, based on the selected option from the drop-down you can fetch new data using the React hooks. And After the fetching you can search the cards based on the magnitude values (only valid with numbers). We can select the card and see more details about the card. The initial render consists of API data with Min Magnitude - 8.0.

### Prerequisites

In order to run this project you need:

 Linters (anything that has been setup will be installed)

```sh
 cd capstone-react-metrics-webapp
 npm install
```

### Setup

Clone this repository to your desired folder:
```sh
  cd my-folder
  git clone git@github.com:tan12082001/capstone-react-metrics-webapp.git
```

### Usage

To run the project, if you are using a Code Editor make use of a live server.
If you are working with webpack you can run the local host with the following command.

```sh
  npm start
```

### Deployment

You can deploy this project using:

```sh
  gh-pages
```
This Projects live demo will be deployed using [Render](https://render.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Tanmayi Manku**

- GitHub: [@tan12082001](https://github.com/tan12082001)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/tanmayi-manku-99195720a/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Apply more styles for the Home page and Details page**

- [ ] **Construct the About page and reference page**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!
Feel free to check the GitHub page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project give it a star.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for providing the required lessons and tutorials for successfully completing the project.

United States Geological Survey - [USGS](https://earthquake.usgs.gov/fdsnws/event/1/)

EarthQuakes data API(Initial) - [API](https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2001-01-01&endtime=2023-01-02&minmagnitude=8)

[Nelson Sakwa on Behance](https://www.behance.net/sakwadesignstudio) - [Behance Version Template](https://www.behance.net/gallery/31579789/Ballhead-App-(Free-PSDs))

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
