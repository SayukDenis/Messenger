/**
 * Copyright (c) 2022 Expo, Inc.
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Based on https://github.com/facebook/create-react-app/blob/b172b5e/packages/react-dev-utils/ModuleNotFoundPlugin.js
 * But with Node LTS support.
 */
import webpack from 'webpack';
export declare function formatWebpackMessages(json?: webpack.StatsCompilation): {
    errors: string[] | undefined;
    warnings: string[] | undefined;
};
