const fs = require('fs');

const filePath = 'C:\\Users\\Dell\\Desktop\\BZ_1.pwn';
const searchPattern = /pjnivel2/i;

try {
    const content = fs.readFileSync(filePath, 'utf16le'); // Intentamos UTF-16 LE
    const lines = content.split(/\r?\n/);
    console.log(`Buscando en ${filePath}...`);
    let matches = 0;
    lines.forEach((line, index) => {
        if (searchPattern.test(line)) {
            console.log(`Línea ${index + 1}: ${line.trim()}`);
            matches++;
            if (matches >= 40) {
                console.log('Se alcanzó el límite de 40 coincidencias.');
                process.exit(0);
            }
        }
    });
    if (matches === 0) {
        console.log('No se encontraron coincidencias con UTF-16 LE. Probando UTF-8...');
        const contentUtf8 = fs.readFileSync(filePath, 'utf8');
        const linesUtf8 = contentUtf8.split(/\r?\n/);
        linesUtf8.forEach((line, index) => {
            if (searchPattern.test(line)) {
                console.log(`Línea ${index + 1}: ${line.trim()}`);
                matches++;
                if (matches >= 40) {
                    process.exit(0);
                }
            }
        });
    }
} catch (err) {
    console.error('Error:', err);
}
