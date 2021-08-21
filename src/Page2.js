import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Trans, withTranslation } from 'react-i18next';

const Page2 = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_API_URL}/api/posts`,
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, [])

  console.log("hossein", data);
  return (<div className='body'>
    <p><Trans>this-is-page2</Trans></p>
    <p>
      <Trans i18nKey='go-to-home'>
        <Link to='/'></Link>
      </Trans>
    </p>
  </div>)
};

export default withTranslation()(Page2);