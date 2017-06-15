import { WctsWebAppPage } from './app.po';

describe('wcts-web-app App', function() {
  let page: WctsWebAppPage;

  beforeEach(() => {
    page = new WctsWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
