let baseURL;

switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api'
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api'
        break;
    case 'prod':
        baseURL = 'http://pre-mall-pre.springboot.cn/api'
        break;
    default:
        baseURL = 'http://pre-mall-pre.springboot.cn/api'
        break;
}


export { baseURL }