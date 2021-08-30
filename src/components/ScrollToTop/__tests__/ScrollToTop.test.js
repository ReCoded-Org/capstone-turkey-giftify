it("Smooth Scrolling rendered correctly", () => {
  window.scrollTo = jest.fn();
  afterEach(() => {
    jest.resetAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
});
