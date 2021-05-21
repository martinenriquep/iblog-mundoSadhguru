export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Mundo Sadhguru',
  description: 'Por un planeta lleno de amor, luz y risas',
  coverImage: 'img/blog-cover.png',
  logo: 'img/ghost-logo.png',
  lang: 'en',
  siteUrl: 'https://mundosadhguru.com',
  facebook: 'https://www.facebook.com/mundosadhguru.blog',
  twitter: 'https://twitter.com/mundosadhguru',
  showSubscribe: true,
  mailchimpAction: 'https://work.us6.list-manage.com/subscribe/post?u=87100acb1ee0281e7fc657e52&amp;id=aa9a1a1e24',
  mailchimpName: 'b_87100acb1ee0281e7fc657e52_aa9a1a1e24',
  mailchimpEmailFieldName: 'EMAIL',
  googleSiteVerification: 'GoogleCode',
  footer: 'desea un planeta lleno de amor, luz y risas.',
};

export default config;

