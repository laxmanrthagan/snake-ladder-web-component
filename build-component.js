const fs = require('fs-extra');
    const concat = require('concat');
    
    build = async () =>{
        const files = [
            './dist/snake-ladder-web-component/runtime.js',
            './dist/snake-ladder-web-component/polyfills.js',
            './dist/snake-ladder-web-component/styles.css',
            './dist/snake-ladder-web-component/main.js'
          ];
        
          await fs.ensureDir('widget');
          await concat(files, 'widget/snake-ladder-widget.js');
    }
    build();