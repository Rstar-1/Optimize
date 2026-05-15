const ENV = import.meta.env;

export const config = {
  apiUrl: ENV.VITE_API_URL || "http://localhost:3000/api",

  appName: ENV.VITE_APP_NAME || "MyApp",

  env: ENV.VITE_APP_ENV || "development",

  isDev: (ENV.VITE_APP_ENV || "development") === "development",
  isProd: ENV.VITE_APP_ENV === "production",

  enableLogs: ENV.VITE_ENABLE_LOGS === "true",
};