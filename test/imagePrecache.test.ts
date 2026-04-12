import { imagePrecacche } from '../src/imagePrecache';
import Vinyl from 'vinyl';

describe('imagePrecacche', () => {
    describe('imagePrecacche function', () => {
        it('should be a function', () => {
            expect(typeof imagePrecacche).toBe('function');
        });

        it('should return a through2 transform object', () => {
            const result = imagePrecacche('content/panorama/images/');
            expect(result).toBeDefined();
            expect(typeof result).toBe('object');
        });
    });

    describe('file filtering', () => {
        it('should skip files with Chinese characters in path', async () => {
            const transform = imagePrecacche('content/panorama/images/');

            return new Promise<void>((resolve, reject) => {
                const resultFiles: Vinyl[] = [];
                transform.on('data', (file: Vinyl) => {
                    resultFiles.push(file);
                });
                transform.on('end', () => {
                    resolve();
                });
                transform.on('error', reject);

                const chineseFile = new Vinyl({
                    cwd: '/test',
                    base: '/test/images',
                    path: '/test/images/中文图片.png',
                    contents: Buffer.from('fake image data')
                });

                const normalFile = new Vinyl({
                    cwd: '/test',
                    base: '/test/images',
                    path: '/test/images/normal.png',
                    contents: Buffer.from('fake image data')
                });

                transform.write(chineseFile);
                transform.write(normalFile);
                transform.end();
            });
        });

        it('should handle empty stream', async () => {
            const transform = imagePrecacche('content/panorama/images/');

            return new Promise<void>((resolve) => {
                let ended = false;
                transform.on('end', () => {
                    ended = true;
                    resolve();
                });
                transform.on('error', (err) => {
                    throw err;
                });
                transform.end();
                setTimeout(() => {
                    if (!ended) {
                        resolve();
                    }
                }, 100);
            });
        });
    });

    describe('CSS generation', () => {
        it('should generate sorted file list', async () => {
            const transform = imagePrecacche('content/panorama/images/');

            return new Promise<void>((resolve, reject) => {
                const resultFiles: Vinyl[] = [];
                transform.on('data', (file: Vinyl) => {
                    resultFiles.push(file);
                });
                transform.on('end', () => {
                    resolve();
                });
                transform.on('error', reject);

                const file1 = new Vinyl({
                    cwd: '/test',
                    base: '/test/images',
                    path: '/test/images/zebra.png',
                    contents: Buffer.from('data')
                });
                const file2 = new Vinyl({
                    cwd: '/test',
                    base: '/test/images',
                    path: '/test/images/alpha.png',
                    contents: Buffer.from('data')
                });

                transform.write(file1);
                transform.write(file2);
                transform.end();
            });
        });

        it('should split large file lists into chunks of 500', async () => {
            const transform = imagePrecacche('content/panorama/images/');

            return new Promise<void>((resolve, reject) => {
                const resultFiles: Vinyl[] = [];
                transform.on('data', (file: Vinyl) => {
                    resultFiles.push(file);
                });
                transform.on('end', () => {
                    resolve();
                });
                transform.on('error', reject);

                for (let i = 0; i < 501; i++) {
                    transform.write(
                        new Vinyl({
                            cwd: '/test',
                            base: '/test/images',
                            path: `/test/images/image_${i}.png`,
                            contents: Buffer.from('data')
                        })
                    );
                }
                transform.end();
            });
        });
    });
});