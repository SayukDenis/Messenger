/// <reference types="expo__bunyan" />
import type Log from '@expo/bunyan';
import { MessageSocket } from '@expo/dev-server';
import WebpackDevServer from 'webpack-dev-server';
interface WebpackSettings {
    url: string;
    server: WebpackDevServer;
    port: number;
    protocol: 'http' | 'https';
    host?: string;
}
declare type CLIWebOptions = {
    dev?: boolean;
    clear?: boolean;
    pwa?: boolean;
    nonInteractive?: boolean;
    port?: number;
    onWebpackFinished?: (error?: Error) => void;
    forceManifestType?: 'classic' | 'expo-updates';
};
declare type BundlingOptions = {
    dev?: boolean;
    clear?: boolean;
    port?: number;
    pwa?: boolean;
    isImageEditingEnabled?: boolean;
    entryFile?: string;
    platform?: string;
    webpackEnv?: object;
    mode?: 'development' | 'production' | 'test' | 'none';
    https?: boolean;
    nonInteractive?: boolean;
    onWebpackFinished?: (error?: Error) => void;
};
export declare type WebEnvironment = {
    projectRoot: string;
    isImageEditingEnabled: boolean;
    pwa: boolean;
    mode: 'development' | 'production' | 'test' | 'none';
    https: boolean;
    logger: Log;
    port?: number;
    platform?: string;
};
export declare type WebpackDevServerResults = {
    server: WebpackDevServer;
    location: Omit<WebpackSettings, 'server'>;
    messageSocket: MessageSocket;
};
export declare function broadcastMessage(message: 'reload' | string, data?: any): Promise<void>;
export declare function startAsync(projectRoot: string, options?: CLIWebOptions): Promise<WebpackDevServerResults | null>;
export declare function stopAsync(projectRoot: string): Promise<void>;
export declare function bundleAsync(projectRoot: string, options?: BundlingOptions): Promise<void>;
/**
 * Get the URL for the running instance of Webpack dev server.
 *
 * @param projectRoot
 */
export declare function getUrlAsync(projectRoot: string): Promise<string | null>;
export declare function openAsync(projectRoot: string): Promise<{
    success: true;
    url: string;
} | {
    success: false;
    error: Error;
}>;
export {};
