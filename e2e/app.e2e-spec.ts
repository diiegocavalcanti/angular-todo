import { MoobTodoPage } from './app.po';

describe('moob-todo App', () => {
  let page: MoobTodoPage;

  beforeEach(() => {
    page = new MoobTodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
