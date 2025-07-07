import fs from 'fs';
import path from 'path';
import archiver from 'archiver';

const dashboard = process.argv[2];
const distPath = path.resolve(__dirname, `../dist/apps/${dashboard}`);
const outputPath = path.resolve(__dirname, `../dist/zips/${dashboard}.zip`);

if (!fs.existsSync(distPath)) {
    console.error(`Build folder for ${dashboard} not found.`);
    process.exit(1);
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
const output = fs.createWriteStream(outputPath);
const archive = archiver('zip', { zlib: { level: 9 } });

archive.pipe(output);
archive.directory(distPath, false);
archive.finalize();
