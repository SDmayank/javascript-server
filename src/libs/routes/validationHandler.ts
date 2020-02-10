
export default (config) => {
    return (req, res, next) => {
        console.log(':::::Validation Handler::::::');
        Object.keys(config).forEach(key => {
            // console.log('++++++++++++++++++',config);
            const { errorMessage } = config[key];
            const { in: reqType } = config[key];
             reqType.forEach(reqMethod => {
                const keyValue = req[reqMethod][key];
                if (config[key].required === true) {
                    if (keyValue === undefined && keyValue === null) {
                        const keys = config[key];
                        console.log('----keys---', keys, keyValue);
                        return next({ error: 'error occured', message: `please enter ${key}` });
                    }
                    if (config[key].regex !== undefined) {
                        let { regex } = config[key];
                        regex = new RegExp(regex);
                        if (!regex.test(keyValue)) {
                            return next({ error: 'error occured', message: `${key}` + 'is invalid' });
                        }
                    }
                }
                if (config[key].isObject && typeof req[reqMethod][key] !== 'object') {
                    return next({ error: 'error occured', message: 'please enter object type' });
                }
                if (config[key].string === true) {
                    if (typeof(keyValue) !== 'string') {
                        return next({ error: 'error occured', message: `${key}` + 'is invalid' });
                    }
                }
                if (config[key].number) {

                    if (typeof keyValue !== 'number') {
                        return next({ error: 'error occured', message: `${key}` + 'is invalid' });
                    }
                }
                if (config[key].array) {

                    if (! keyValue.isArray) {
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