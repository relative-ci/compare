import { compose, withProps } from 'recompose';
import { createJobs } from '@bundle-stats/utils';

import withSources from '../../hocs/with-sources';
import withRuns from '../../hocs/with-runs';

const metaMap = {
  timestamp: 'info.timestamp',
  url: 'info.url',
  connectivity: 'info.connectivity.profile',
};

const createBrowsertimeJobs = (sources) => createJobs(
  sources.map(({ res }) => ({
    browsertime: res,
  })),
);

const enhance = compose(
  withSources(),
  withRuns(metaMap),
  withProps(({ sources }) => ({
    jobs: createBrowsertimeJobs(sources),
  })),
);

export default enhance;
