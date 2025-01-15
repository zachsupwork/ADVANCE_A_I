/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'AdvancedAI',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'AdvancedAI',
  },
  Meta: {
    Description: 'Launch AdvancedAI to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'AdvancedAI | Precision AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@enricoros',
  },
  URIs: {
    Home: 'https://advancedai.vercel.app',
    // App: 'https://advancedai.vercel.app',
    CardImage: 'https://advancedai.vercel.app',
    OpenRepo: 'https://advancedai.vercel.app',
    OpenProject: 'https://advancedai.vercel.app',
    SupportInvite: 'https://advancedai.vercel.app',
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: 'https://big-agi.com/privacy',
    TermsOfService: 'https://big-agi.com/terms',
  },
  Docs: {
    Public: (docPage: string) => `https://big-agi.com/docs/${docPage}`,
  }
} as const;
