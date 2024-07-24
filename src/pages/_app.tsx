import React from 'react';
import App from 'next/app';
import ThemeProvider from '@/styles/ThemeProvider';
import Layout from '@/components/Layout';
import { storeWrapper } from '@/store/index';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default storeWrapper.withRedux(MyApp);
