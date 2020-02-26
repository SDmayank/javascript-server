
export default (config) => {
  return (req, res, next) => {
    console.log(':::::Validation Handler::::::');
    Object.keys(config).forEach(key => {

    console.log('config key **************' , config[key] , req.method);
      const { errorMessage } = config[key];
      const { in: reqType } = config[key];
     // console.log('config' , cofig[key])
      reqType.forEach(reqMethod => {

        if (config[key].required === true) {
          // console.log('req[reqMethod][key]', req[reqMethod][key]);
          if (req[reqMethod][key] === undefined && req[reqMethod][key] === null) {
            const keys = config[key];
            return next({ error: 'error occured', message: `please enter ${key}` });
          }
          if (config[key].regex !== undefined) {
            let { regex } = config[key];
            regex = new RegExp(regex);
            if (!regex.test(req[reqMethod][key])) {
              console.log('req[reqMethod][key]', req[reqMethod][key]);
              return next({ error: 'error occured', message: `${key}` + ' 1 is invalid' });
            }
          }
        }
        if (!config[key].required) {
          if (!req[reqMethod][key]) {
            req[reqMethod][key] = parseInt(config[key].default , 10);
            console.log('typr of' , typeof req[reqMethod][key]);
          }

        }
        if (config[key].isObject && typeof req[reqMethod][key] !== 'object') {

          return next({ error: 'error occured', message: 'please enter object type' });
        }
        if (config[key].string === true) {
          if (typeof (req[reqMethod][key]) !== 'string') {

            return next({ error: 'error occured', message: `${key}` + ' 2 is invalid' });
          }
        }
        if (config[key].number) {
         // console.log('keyva;lue , req[reqMethod][key]' , req[reqMethod][key] , req[reqMethod][key]);

          if (isNaN(req[reqMethod][key])) {
            console.log('req[reqMethod][key]####hgadsfghdf', req[reqMethod][key]);
            return next({ error: 'error occured', message: `${key}` + ' 3 is invalid' });
          }
          else {

            req[reqMethod][key] = parseInt( req[reqMethod][key], 10 );
          }
        }
        if (config[key].array) {
          if (!Array.isArray(req[reqMethod][key])) {
            return next({ error: 'error occured', message: `${key}` + '4 is invalid' });
          }
        }
        if (config[key].custom) {
          config[key].custom(req[reqMethod][key]);

        }
      });
    });

    return next();
  };
};
