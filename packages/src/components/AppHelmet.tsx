import Helmet from 'react-helmet';
import { APP_HELMET } from '@src/configs';
import * as React from 'react';

type IAppHelmetProps = {};
const AppHelmet = (props: IAppHelmetProps) => {
  return (
    <Helmet>
      <title>{APP_HELMET.title}</title>
      <meta name="description" content={APP_HELMET.description} />{' '}
      <meta name="keywords" content="goshopback.vn" />
      <meta property="og:site_name" content="shopback" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={APP_HELMET.image} />
      <meta property="og:title" content={APP_HELMET.title} />
      <meta property="og:description" content={APP_HELMET.description} />
    </Helmet>
  );
};
export default AppHelmet;
