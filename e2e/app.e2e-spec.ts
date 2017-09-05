import { EmployeesManagementPage } from './app.po';

describe('employees-management App', function() {
  let page: EmployeesManagementPage;

  beforeEach(() => {
    page = new EmployeesManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
