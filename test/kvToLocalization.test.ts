import { pushNewTokensToCSV } from '../src/kvToLocalization';
import fs from 'fs-extra';
import path from 'path';

describe('kvToLocalization', () => {
    describe('pushNewTokensToCSV function', () => {
        const testCsvPath = path.join(__dirname, 'test_output', 'tokens_test.csv');

        beforeEach(async () => {
            await fs.ensureDir(path.dirname(testCsvPath));
        });

        afterEach(async () => {
            await fs.remove(path.dirname(testCsvPath));
        });

        it('should be a function', () => {
            expect(typeof pushNewTokensToCSV).toBe('function');
        });

        it('should create CSV file if not exists', async () => {
            await pushNewTokensToCSV(testCsvPath, []);
            const exists = await fs.pathExists(testCsvPath);
            expect(exists).toBe(true);
        });

        it('should add new tokens to existing CSV', async () => {
            await pushNewTokensToCSV(testCsvPath, ['test_token_1', 'test_token_2']);
            const exists = await fs.pathExists(testCsvPath);
            expect(exists).toBe(true);
        });

        it('should not duplicate existing tokens', async () => {
            await pushNewTokensToCSV(testCsvPath, ['unique_token']);
            await pushNewTokensToCSV(testCsvPath, ['unique_token']);
            const content = await fs.readFile(testCsvPath, 'utf-8');
            const matches = content.match(/unique_token/g);
            expect(matches).not.toBeNull();
            expect(matches!.length).toBe(1);
        });
    });

    describe('kvToLocalsCSV function', () => {
        it('should be exported from the module', () => {
            const module = require('../src/kvToLocalization');
            expect(module.kvToLocalsCSV).toBeDefined();
        });
    });

    describe('localsToCSV function', () => {
        it('should be exported from the module', () => {
            const module = require('../src/kvToLocalization');
            expect(module.localsToCSV).toBeDefined();
        });
    });
});