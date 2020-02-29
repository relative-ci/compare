import PropTypes from 'prop-types';
import { Container } from '@bundle-stats/ui/lib-esm/ui/container';
import { BundleModules } from '@bundle-stats/ui/lib-esm/components/bundle-modules';

const Modules = (props) => {
  const { jobs } = props;

  return (
    <Container>
      <BundleModules jobs={jobs} />
    </Container>
  );
};

Modules.defaultProps = {
  jobs: [],
};

Modules.propTypes = {
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

export default Modules;
