describe("Lotto app", () => {
  beforeEach(() => {
    cy.visit("https://next-step.github.io/js-lotto/");
  });

  it("input 창에 문자열 입력 시 값이 입력되지 않는다.", () => {});
  it("input 창에 특수문자 입력 시 값이 입력되지 않는다.", () => {});
  it("엔터 키 입력 시 1000원 단위가 아닌 경우 alert창을 띄운다", () => {});
  it("엔터 키 입력 시 1000원 단위가 아닌 경우 input값을 비운다", () => {});
  it("구입 금액은 1,000이상 100,000 이하여야한다.", () => {});
});
