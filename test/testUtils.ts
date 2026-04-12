import Vinyl from 'vinyl';
import path from 'path';
import { Transform } from 'stream';

export function createVinylFile(options: {
    filename: string;
    contents: string | Buffer;
    cwd?: string;
    base?: string;
    path?: string;
}): Vinyl {
    const {
        filename,
        contents,
        cwd = '/test',
        base = '/test',
        path: customPath
    } = options;

    return new Vinyl({
        cwd,
        base,
        path: customPath || path.join(base, filename),
        contents: typeof contents === 'string' ? Buffer.from(contents) : contents
    } as unknown as ConstructorParameters<typeof Vinyl>[0]);
}

export function bufferToVinyl(options: {
    filename: string;
    contents: Buffer;
    cwd?: string;
    base?: string;
}): Vinyl {
    return createVinylFile({
        ...options,
        contents: options.contents
    });
}

export async function processVinylStream(
    transform: Transform,
    files: Vinyl[]
): Promise<Vinyl[]> {
    return new Promise((resolve, reject) => {
        const result: Vinyl[] = [];
        let remaining = files.length;

        transform.on('data', (file: Vinyl) => {
            result.push(file);
        });

        transform.on('end', () => {
            resolve(result);
        });

        transform.on('error', reject);

        files.forEach(file => {
            transform.write(file);
        });

        transform.end();
    });
}