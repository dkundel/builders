import { BuilderOptions } from '@pika/types';
export declare function beforeBuild({ cwd, reporter }: BuilderOptions): Promise<void>;
export declare function beforeJob({ cwd }: BuilderOptions): Promise<void>;
export declare function afterJob({ out, reporter }: BuilderOptions): Promise<void>;
export declare function manifest(newManifest: any): any;
export declare function build({ cwd, out, reporter }: BuilderOptions): Promise<void>;
