import { Link } from 'react-router-dom';
import { Trans, withTranslation } from 'react-i18next';

const Page2 = () => (
  <div className='body'>
    <p><Trans>this-is-page2</Trans></p>
    <p>
      <Trans i18nKey='go-to-home'>
        <Link to='/'></Link>
      </Trans>
    </p>
  </div>
);

export default withTranslation()(Page2);