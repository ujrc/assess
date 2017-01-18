import { SdmDataPage } from './app.po';

describe('sdm-data App', function() {
  let page: SdmDataPage;

  beforeEach(() => {
    page = new SdmDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
