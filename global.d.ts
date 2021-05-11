export {};

declare global {
  namespace NodeJS {
    interface Global {
      prisma: any;
    }
    interface ProcessEnv {
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
    }
  }
}
