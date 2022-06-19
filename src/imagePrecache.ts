import Vinyl from 'vinyl';
import path from 'path';
import through2 from 'through2';

export function imagePrecacche(root: string) {
    let files: string[] = [];
    let firstFile: Vinyl;
    function collect(file: Vinyl, enc: any, next: Function) {
        if (firstFile == null) firstFile = file;
        files.push(path.relative(root, file.path).replace(/\\/g, '/'));
        next();
    }
    function write(done: Function) {
        if (firstFile == null) return done();
        files = files.sort();
        const content = `.image-precache {\n${files
            .map((filename) => `\tbackground-image: url("file://{images}/${filename}");`)
            .join('\n')}\n}`;
        const file = new Vinyl({
            cwd: firstFile.cwd,
            base: firstFile.base,
            path: path.join(firstFile.base, 'image_precache.css'),
            contents: Buffer.from(content),
        });
        //@ts-ignore
        this.push(file);
    }
    return through2.obj(collect, write);
}
