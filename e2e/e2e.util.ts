import { TestInfo } from '@playwright/test';
import { getEnvVar } from '@l/env';

/**
 * resolve a given path to an absolute URL
 * @param path path
 * @returns absolute URL
 */
export const toAbsUrl = (path: string): string =>
  new URL(path, getEnvVar('NEXT_PUBLIC_BASE_URL')).href;

/**
 * Return a relativep path to screenshot file
 * @param name screenshot file name
 * @param testInfo testInfo
 * @returns screenshot file path
 */
export const toSnapshotPath = (name: string, testInfo: TestInfo): string =>
  `.reg/actual/${testInfo.titlePath[0].split('.')[0]}/${name}.${
    testInfo.project.name
  }.png`;
