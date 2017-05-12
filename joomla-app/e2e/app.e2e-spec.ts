import { JoomlaAppPage } from './app.po';

describe('joomla-app App', () => {
  let page: JoomlaAppPage;

  beforeEach(() => {
    page = new JoomlaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
