import { Router } from 'preact-router';
import { Logo } from '@bundle-stats/ui/lib-esm/ui/logo';
import { Footer } from '@bundle-stats/ui/lib-esm/layout/footer';
import { Header } from '@bundle-stats/ui/lib-esm/layout/header';

import * as URLS from '../utils/urls';
import Webpack from '../pages/webpack';
import Lighthouse from '../pages/lighthouse';
import Browsertime from '../pages/browsertime';
import Redirect from './redirect';
import Route from './route';
import Navigation from './navigation';
import styles from './styles.css';

const App = () => (
  <div className={styles.root}>
    <Header
      className={styles.header}
      renderLeft={(sideProps) => (
        <div {...sideProps}>
          <a
            href="https://github.com/relative-ci/bundle-stats"
            title="View relative-ci/bundle-stats project on Github"
            className={styles.headerBundleStats}
          >
            <Logo className={styles.headerBundleStatsLogo} />
            <Logo kind="logotype" className={styles.headerBundleStatsLogotype} />
          </a>
        </div>
      )}
      render={(sideProps) => (
        <div {...sideProps}>
          <Navigation className={styles.headerNavigation} />
        </div>
      )}
      renderRight={(sideProps) => (
        <div {...sideProps}>
          <Logo
            className={styles.headerGithubLogo}
            kind="github"
            as="a"
            href="https://github.com/relative-ci/compare"
            title="View relative-ci/compare project on Github"
          />
        </div>
      )}
    />
    <main className={styles.main}>
      <Router>
        <Redirect path="/" to="/webpack" />
        <Route component={Webpack} path={URLS.WEBPACK_PATH} />
        <Route component={Lighthouse} path={URLS.LIGHTHOUSE_PATH} />
        <Route component={Browsertime} path={URLS.BROWSERTIME_PATH} />
      </Router>
    </main>
    <Footer
      className={styles.footer}
      source="bundle-stats-compare"
    >
      <p className={styles.footerInfo}>
        <a
          href={`https://github.com/bundle-stats/compare/releases/tag/v${__VERSION__}`}
        >
          {`Version: ${__VERSION__}`}
        </a>
      </p>
    </Footer>
  </div>
);

export default App;
