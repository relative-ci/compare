import PropTypes from 'prop-types';
import { Box } from '@bundle-stats/ui/lib-esm/ui/box';
import { BundleAssets } from '@bundle-stats/ui/lib-esm/components/bundle-assets';
import { Container } from '@bundle-stats/ui/lib-esm/ui/container';

const Assets = (props) => {
  const { jobs } = props;

  return (
    <Container>
      <Box>
        <BundleAssets jobs={jobs} />
      </Box>
    </Container>
  );
};

Assets.defaultProps = {
  jobs: [],
};

Assets.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    internalBuildNumber: PropTypes.number,
    rawData: PropTypes.shape({
      webpack: PropTypes.shape({
        assets: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string,
          size: PropTypes.number,
        })),
      }),
    }),
  })),
};

export default Assets;
