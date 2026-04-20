const ENV = import.meta.env

export const config = {
  apiUrl: ENV.VITE_API_URL,
  appName: ENV.VITE_APP_NAME,

  env: ENV.VITE_APP_ENV,

  isDev: ENV.VITE_APP_ENV === 'development',
  isProd: ENV.VITE_APP_ENV === 'production',

  enableLogs: ENV.VITE_ENABLE_LOGS === 'true'
}