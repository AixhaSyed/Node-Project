import { ImageAppPage } from './app.po';

describe('image-app App', () => {
  let page: ImageAppPage;

  beforeEach(() => {
    page = new ImageAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
