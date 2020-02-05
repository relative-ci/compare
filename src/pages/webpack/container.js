import { compose, withProps } from 'recompose';
import { createJobs } from '@bundle-stats/utils';

import withSources from '../../hocs/with-sources';
import withRuns from '../../hocs/with-runs';

const enhance = compose(
  withSources(),
  withRuns({ hash: 'hash' }),
  withProps(({ sources }) => ({
    jobs: createJobs(sources.map((source) => ({ webpack: source.res }))),
  })),
);

export default enhance;
