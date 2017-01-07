import { SumitangPage } from './app.po';

describe('sumitang App', function() {
  let page: SumitangPage;

  beforeEach(() => {
    page = new SumitangPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
