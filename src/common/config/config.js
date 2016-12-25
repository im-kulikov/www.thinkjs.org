export default {
  port: 7777,
  host: '0.0.0.0',
  cluster_on: true,

  cache: {
    type: 'redis',
    timeout: 24 * 3600,
    adapter: { redis: { prefix: 'thinkjs:cache:' } }
  },

  redis: {
    host: 'cache',
    on: true,
    port: 6379,
    timeout: 24 * 3600,
    db: 1,
    options: { prefix: 'thinkjs:' },
    log_connect: true
  },

  gc: {
    on: true,
    interval: 24 * 3600,
    filter: true
  },

  // i18n
  locale: {
    name: 'think_locale',
    // default: 'zh-CN'
    default: 'en'
  },
  view: {
    content_type: 'text/html',
    file_ext: '.html',
    file_depr: '_',
    root_path: think.ROOT_PATH + '/view',
    theme: '',
    type: 'ejs'
  }
}
