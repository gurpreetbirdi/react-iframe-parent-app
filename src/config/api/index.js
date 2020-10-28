const dev = {
  CHILDAPPS_URL: {
    JSURLS: ['http://localhost:3001/main.js'],
  },
};

const qa = {
  CHILDAPPS_URL: {
    JSURLS: ['http://localhost:3001/main.js'],
  },
};

const stg = {
  CHILDAPPS_URL: {
    JSURLS: ['http://localhost:3001/main.js'],
  },
};

const prod = {
  CHILDAPPS_URL: {
    JSURLS: ['http://localhost:3001/main.js'],
  },
};

console.info('env:', process.env.NODE_ENV);

let config = dev;
if (process.env.NODE_ENV === 'prod') {
  config = prod;
} else if (process.env.NODE_ENV === 'stg') {
  config = stg;
} else if (process.env.NODE_ENV === 'qa') {
  config = qa;
}

export default {
  ...config,
};
