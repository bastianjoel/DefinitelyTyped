// Type definitions for @wordpress/custom-templated-path-webpack-plugin 1.4
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/custom-templated-path-webpack-plugin/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { compilation, Plugin } from "webpack";

declare class CustomTemplatedPathPlugin extends Plugin {
    constructor(
        template: Record<
            string,
            (
                path: string,
                data: {
                    basename?: string | undefined;
                    chunk?: compilation.Chunk | undefined;
                    filename?: string | undefined;
                    hash?: string | undefined;
                    query?: any;
                },
            ) => string
        >,
    );
}

export = CustomTemplatedPathPlugin;
