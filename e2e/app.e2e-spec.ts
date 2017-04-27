import { AppWebMoviePage } from './app.po';

describe('app-web-movie App', function() {
  let page: AppWebMoviePage;

  beforeEach(() => {
    page = new AppWebMoviePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
