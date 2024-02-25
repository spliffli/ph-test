import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ph.test',
  appName: 'ph-test',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
