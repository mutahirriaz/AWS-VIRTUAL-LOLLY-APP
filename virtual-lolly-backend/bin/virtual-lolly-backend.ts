#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { VirtualLollyBackendStack } from '../lib/virtual-lolly-backend-stack';

const app = new cdk.App();
new VirtualLollyBackendStack(app, 'VirtualLollyBackendStack');
