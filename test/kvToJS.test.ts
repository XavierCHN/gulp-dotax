import { kvToJS } from '../src/kvToJS';
import Vinyl from 'vinyl';
import path from 'path';

describe('kvToJS', () => {
    describe('kvToJS function', () => {
        it('should be a function', () => {
            expect(typeof kvToJS).toBe('function');
        });

        it('should return a through2 transform object', () => {
            const result = kvToJS({});
            expect(result).toBeDefined();
            expect(typeof result).toBe('object');
        });

        it('should accept empty options', () => {
            const result = kvToJS();
            expect(result).toBeDefined();
        });
    });

    describe('KV parsing options', () => {
        it('should respect AutoConvertToArray option', () => {
            const transform = kvToJS({ AutoConvertToArray: false });
            expect(transform).toBeDefined();
        });

        it('should respect custom ArraySeperator', () => {
            const transform = kvToJS({ ArraySeperator: '|' });
            expect(transform).toBeDefined();
        });
    });

    describe('null file handling', () => {
        it('should pass through null files without error', async () => {
            const transform = kvToJS({});
            const nullFile = new Vinyl({
                cwd: '/test',
                base: '/test',
                path: '/test/null.txt',
                contents: null
            });

            return new Promise<void>((resolve, reject) => {
                let resultFile: Vinyl | null = null;
                transform.on('data', (file: Vinyl) => {
                    resultFile = file;
                });
                transform.on('end', () => {
                    expect(resultFile).not.toBeNull();
                    expect(resultFile!.isNull()).toBe(true);
                    resolve();
                });
                transform.on('error', reject);
                transform.write(nullFile);
                transform.end();
            });
        });
    });

    describe('error handling', () => {
        it('should handle stream files with error', async () => {
            const transform = kvToJS({});
            const { Readable } = require('stream');
            const streamContents = new Readable({
                read() {
                    this.push('test data');
                    this.push(null);
                }
            });

            const streamFile = new Vinyl({
                cwd: '/test',
                base: '/test',
                path: '/test/stream.txt',
                contents: streamContents as any
            });

            return new Promise<void>((resolve, reject) => {
                transform.on('error', (err) => {
                    expect(err).toBeDefined();
                    resolve();
                });
                transform.on('end', reject);
                transform.write(streamFile);
                transform.end();
            });
        });
    });
});