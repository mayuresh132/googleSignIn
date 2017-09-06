import { GooglesigninPage } from './app.po';

describe('googlesignin App', () => {
  let page: GooglesigninPage;

  beforeEach(() => {
    page = new GooglesigninPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
