module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  generateRobotsTxt: true,
  transform: async (config, path) => {
    const defaultConfig = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };

    if (/(^\/$|^\/schools)/.test(path)) {
      return {
        ...defaultConfig,
        priority: 1.0,
      };
    }

    return defaultConfig;
  },
};
