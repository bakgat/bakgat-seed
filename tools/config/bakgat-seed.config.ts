import { SeedAdvancedConfig } from './seed-advanced.config';
import { ExtendPackages } from './seed.config.interfaces';

export class BakgatSeedConfig extends SeedAdvancedConfig {
    constructor() {
        super();
        let additionalPackages: ExtendPackages[] = [{
            name: '@angular/material',
            path: 'node_modules/@angular/material/bundles/material.umd.js'
        }, {
            name: 'hammerjs',
            path: 'node_modules/hammerjs/hammer.min.js'
        }, {
            name: '@angular/flex-layout',
            path: 'node_modules/@angular/flex-layout/bundles/flex-layout.umd.js'
        }, {
            name: 'md2',
            path: 'node_modules/md2/bundles/md2.umd.js'
        }];
        this.addPackagesBundles(additionalPackages);
    }
}
