import Vinyl from 'vinyl';
import path from 'path';
import through2 from 'through2';

export interface ImagePrecacheOptions {
    /** 每个CSS文件包含的最大图片数量，默认为500 */
    maxFilesPerGroup?: number;
}

export function imagePrecacche(root: string, options?: ImagePrecacheOptions) {
    const { maxFilesPerGroup = 500 } = options || {};
    let files: string[] = [];
    let firstFile: Vinyl;
    function collect(file: Vinyl, enc: any, next: Function) {
        if (firstFile == null) firstFile = file;
        let relativePath = path.relative(root, file.path);
        // 如果名称包含中文，那么略过
        if (/[\u4e00-\u9fa5]+/g.test(relativePath)) {
            console.log("ignore file since it contains chinese: " + relativePath);
            next();
            return;
        }
        files.push(relativePath.replace(/\\/g, '/'));
        next();
    }
    function write(done: Function) {
        if (firstFile == null) return done();
        files = files.sort();

        let fileGroups: string[][] = [];
        for (let i = 0; i < files.length; i += maxFilesPerGroup) {
            fileGroups.push(files.slice(i, i + maxFilesPerGroup));
        }
            
        fileGroups.forEach((files, i) => {
            let content = `.image-precache {\n${files.map((filename) => `\tbackground-image: url("file://{images}/${filename}");`).join("\n")}\n}`;
            content = content.replace(/\r\n/g, '\n');
            const file = new Vinyl({
                cwd: firstFile.cwd,
                base: firstFile.base,
                path: path.join(firstFile.base, `image_precache${i}.css`),
                contents: Buffer.from(content),
            });
            //@ts-ignore
            this.push(file);
        });
        done();
    }
    return through2.obj(collect, write);
}
