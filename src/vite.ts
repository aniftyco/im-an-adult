import 'dotenv/config';

export default () => ({
  name: 'im-an-adult',
  config(allow = []) {
    const define = Object.keys(process.env).reduce((env, key) => {
      if (allow.includes(key)) {
        env[`import.meta.env.${key}`] = process.env[key];
      }

      return env;
    }, {});

    return { define };
  },
});
