import React from 'react';
import App from 'next/app';
import ThemeProvider from '@/styles/ThemeProvider';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
