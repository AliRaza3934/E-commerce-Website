import { LaunchOptions, defineConfig } from '@playwright/test';

export const config:LaunchOptions = {
  
    timeout: 600000,
    slowMo: 300,
    headless: true,
  
};