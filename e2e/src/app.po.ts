import { browser } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  isBackgroundVideoPlaying(): Promise<boolean> {
    return browser.executeScript(() => {
      const videoElement = document.getElementById('videoBackground') as HTMLVideoElement;
      return !videoElement.paused;
    }) as Promise<boolean>;
  }
}
