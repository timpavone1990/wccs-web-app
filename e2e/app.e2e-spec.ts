import { WctsWebAppPage } from './app.po';

describe('wcts-web-app App', () => {
  let page: WctsWebAppPage;

  beforeEach(() => {
    page = new WctsWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
