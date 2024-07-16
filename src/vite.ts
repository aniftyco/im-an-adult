import 'dotenv/config';

export default () => ({
  name: 'im-an-adult',
  config() {
    const define = Object.keys(process.env).reduce((env, key) => {
      env[`import.meta.env.${key}`] = JSON.stringify(process.env[key]);

      return env;
    }, {});

    return { define };
  },
});
