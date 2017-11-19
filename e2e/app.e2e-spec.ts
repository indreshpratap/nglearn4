import { Nglearn4Page } from './app.po';

describe('nglearn4 App', () => {
  let page: Nglearn4Page;

  beforeEach(() => {
    page = new Nglearn4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
