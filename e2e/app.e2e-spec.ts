import { IndiegofundstartPage } from './app.po';

describe('indiegofundstart App', () => {
  let page: IndiegofundstartPage;

  beforeEach(() => {
    page = new IndiegofundstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
