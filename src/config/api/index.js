const dev = {
  "CHILDAPPS_URL": {
    "JSURLS": ["http://localhost:3001/main.js"]
  }
};

const qa = {
  "CHILDAPPS_URL": {
    "JSURLS": ["http://localhost:3001/main.js"]
  }
};

const stage = {
  "CHILDAPPS_URL": {
    "JSURLS": ["http://localhost:3001/main.js"]
  }
};

const prod = {
  "CHILDAPPS_URL": {
    "JSURLS": ["http://localhost:3001/main.js"]
  }
};

console.log("env:", process.env.REACT_APP_ENV);

const config =
  process.env.REACT_APP_ENV === "production"
    ? prod
    : process.env.REACT_APP_ENV === "stage"
      ? stage
      : process.env.REACT_APP_ENV === "qa"
        ? qa
        : dev;

export default {
  ...config
};
