/** All configuration the API reads from the environment, in one typed place. */
export interface AppConfig {
  port: number;
  mongodbUri: string;
  /** Temporary stand-in for SAML: the user every request is made as. */
  devUsername: string;
}

export function loadConfig(): AppConfig {
  return {
    port: Number(process.env.PORT ?? 3001),
    mongodbUri: process.env.MONGODB_URI ?? 'mongodb://localhost:27017/hafifa',
    devUsername: process.env.DEV_USERNAME ?? 't_michalgo',
  };
}
