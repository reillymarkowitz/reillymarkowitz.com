import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Home page', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    page = new AppPage();
    page.navigateTo();
  });

  it('should display correct page title', async () => {
    const title = await browser.getTitle();
    expect(title).toEqual('Reilly Markowitz');
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
