const { default: Item } = require("antd/lib/list/Item");

describe("Lotto app", () => {
  beforeEach(() => {
    cy.visit("https://next-step.github.io/js-lotto/");
  });

  it("로또 구입 금액 입력 시 1000원 단위가 아닌 경우 alert창을 띄운다", () => {});
});
