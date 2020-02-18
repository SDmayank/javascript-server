export const validation = {
  create:
  {
    password: {
      required: true,
      string: true,
      in: ['body'],
      errorMessage: 'password is required',
    },
    email: {
      required: true,
      regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/,
      in: ['body'],
      errorMessage: 'email is invalid',
    },
  }
};
