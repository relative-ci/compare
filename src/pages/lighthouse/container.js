import { compose, withProps } from 'recompose';
import { createJobs } from '@bundle-stats/utils';

import withSources from '../../hocs/with-sources';
import withRuns from '../../hocs/with-runs';

const createLighthouseJobs = (sources) => createJobs(
  sources.map(({ res }) => ({
    lighthouse: res,
  })),
);

const metaMap = {
  timestamp: 'generatedTime',
  url: 'url',
};

const enhance = compose(
  withSources(),
  withRuns(metaMap),
  withProps(({ sources }) => ({
    jobs: createLighthouseJobs(sources),
  })),
);

export default enhance;
