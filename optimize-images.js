const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function createBackup(sourceDir) {
    const backupDir = `${sourceDir}_backup_${Date.now()}`;
    console.log(`Creating backup in: ${backupDir}`);
    
    try {
        await fs.cp(sourceDir, backupDir, { recursive: true });
        console.log('Backup created successfully');
        return true;
    } catch (error) {
        console.error('Failed to create backup:', error);
        return false;
    }
}

async function processImage(filePath) {
    try {
        const stats = await fs.stat(filePath);
        
        // Skip if file is less than 1MB
        if (stats.size < 1024 * 1024) {
            console.log(`Skipping ${filePath} (size < 1MB)`);
            return;
        }

        console.log(`Processing: ${filePath}`);
        
        await sharp(filePath)
            .jpeg({
                quality: 80,
                mozjpeg: true,
                chromaSubsampling: '4:4:4'
            })
            .toBuffer()
            .then(async (buffer) => {
                // Only save if the new size is smaller
                if (buffer.length < stats.size) {
                    await fs.writeFile(filePath, buffer);
                    const savings = ((stats.size - buffer.length) / stats.size * 100).toFixed(2);
                    console.log(`✓ Optimized ${filePath} - Saved ${savings}%`);
                } else {
                    console.log(`→ Skipped ${filePath} - No size reduction possible`);
                }
            });
    } catch (error) {
        console.error(`Failed to optimize ${filePath}:`, error);
    }
}

async function optimizeImages(dir) {
    try {
        const items = await fs.readdir(dir);
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stats = await fs.stat(fullPath);
            
            if (stats.isDirectory()) {
                // Recursively process subdirectories
                await optimizeImages(fullPath);
            } else if (item.toLowerCase().match(/\.(jpg|jpeg)$/)) {
                // Process jpg/jpeg files
                await processImage(fullPath);
            }
        }
    } catch (error) {
        console.error('Error processing directory:', error);
    }
}

async function main() {
    const sourceDir = process.argv[2];
    
    if (!sourceDir) {
        console.error('Please provide the source directory path');
        process.exit(1);
    }

    try {
        // Create backup first
        const backupSuccess = await createBackup(sourceDir);
        
        if (!backupSuccess) {
            console.error('Backup failed, aborting optimization');
            process.exit(1);
        }

        // Proceed with optimization
        console.log('\nStarting image optimization...');
        await optimizeImages(sourceDir);
        console.log('\nOptimization complete!');
        
    } catch (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }
}

main(); 
