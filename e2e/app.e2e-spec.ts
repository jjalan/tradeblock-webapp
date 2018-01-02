import { TradeblockWebappPage } from './app.po';

describe('tradeblock-webapp App', function() {
  let page: TradeblockWebappPage;

  beforeEach(() => {
    page = new TradeblockWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
