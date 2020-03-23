import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Home page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display correct page title', () => {
    expect(browser.getTitle()).toEqual('Reilly Markowitz');
  });

  it('should autoplay background video', () => {
    expect(page.isBackgroundVideoPlaying()).toBe(true);
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
