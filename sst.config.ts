import { type SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';

export default {
  config(_input) {
    return {
      name: 't3-app-2',
      region: 'ap-southeast-1',
    };
  },
  stacks(app: any) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, 'site');

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
