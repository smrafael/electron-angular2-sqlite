import { ElectronAngular2SqlitePage } from './app.po';

describe('electron-angular2-sqlite App', () => {
  let page: ElectronAngular2SqlitePage;

  beforeEach(() => {
    page = new ElectronAngular2SqlitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
