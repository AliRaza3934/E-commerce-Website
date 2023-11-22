import { LaunchOptions } from '@playwright/test';
import { on } from 'events';

export const config:LaunchOptions = {

    timeout: 600000,
    slowMo: 300,
    headless: true,

};