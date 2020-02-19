
export default (config) => {
  return (req, res, next) => {
    console.log(':::::Validation Handler::::::');
    Object.keys(config).forEach(key => {

    console.log('config key **************' , config[key]);
      const { errorMessage } = config[key];
      const { in: reqType } = config[key];
      reqType.forEach(reqMethod => {
        const keyValue = req[reqMethod][key];
        if (config[key].required === true) {
          console.log('keyvalue', keyValue);
          if (keyValue === undefined && keyValue === null) {
            const keys = config[key];
            return next({ error: 'error occured', message: `please enter ${key}` });
          }
          if (config[key].regex !== undefined) {

            console.log('keyvalue', keyValue);
            let { regex } = config[key];
            regex = new RegExp(regex);
            if (!regex.test(keyValue)) {
              console.log('keyvalue', keyValue);
              return next({ error: 'error occured', message: `${key}` + 'is invalid' });
            }
          }
        }
        if (config[key].isObject && typeof req[reqMethod][key] !== 'object') {

          return next({ error: 'error occured', message: 'please enter object type' });
        }
        if (config[key].string === true) {
          if (typeof (keyValue) !== 'string') {

            return next({ error: 'error occured', message: `${key}` + 'is invalid' });
          }
        }
        if (config[key].number) {
          console.log('keyva;lue' , keyValue);

          if (isNaN(keyValue)) {

            return next({ error: 'error occured', message: `${key}` + 'is invalid' });
          }
          else 
          {
            req[reqMethod][key] = parseInt( keyValue, 10 );
          }
        }
        if (config[key].array) {
          if (!Array.isArray(keyValue)) {
            return next({ error: 'error occured', message: `${key}` + 'is invalid' });
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
