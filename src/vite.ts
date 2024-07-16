import 'dotenv/config';

export default (allow = []) => ({
  name: 'im-an-adult',
  config() {
    const define = Object.keys(process.env).reduce((env, key) => {
      if (allow.includes(key)) {
        env[`import.meta.env.${key}`] = process.env[key];
      }

      return env;
    }, {});

    return { define };
  },
});
