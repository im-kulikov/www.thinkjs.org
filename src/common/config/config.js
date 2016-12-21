export default {
  port: 7777,
  host: '0.0.0.0',
  cluster_on: true,
  

  locale: { //i18n
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