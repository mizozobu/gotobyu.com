export const pageview = (url: string): void => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
