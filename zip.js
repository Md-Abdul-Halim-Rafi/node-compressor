const fs = require("fs");
const zlib = require("zlib");
const { pipeline } = require("stream");

const startCompress = () => {

    const pathDir = process.argv[2];

    if (!pathDir) {
        throw new Error("No path dir");
    }

    const gzip = zlib.createGzip();
    const source = fs.createReadStream(pathDir);
    const destination = fs.createWriteStream(`${pathDir}.gz`);
    
    pipeline(source, gzip, destination, (err) => {

        if (err) {
            throw new Error(err);
        } 

        console.log("Compress success");
    });
}

startCompress();
