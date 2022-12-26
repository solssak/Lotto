describe("Lotto app", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/index.html");
  });

  it("input 창에 문자열 입력 시 값이 입력되지 않는다.", () => {
    const newString = "1000원";
    cy.get(".money").type(`${newString}{enter}`);
    cy.get(".money").should("have.text", "1000");
  });

  it("input 창에 특수문자 입력 시 값이 입력되지 않는다.", () => {
    const newPercentSign = "1000%";
    cy.get(".money").type(`${newPercentSign}{enter}`);
    cy.get(".money").should("have.text", "1000");
  });

  it("엔터 키 입력 시 input 값이 없는 경우 alert 경고를 띄운다", () => {
    const alertStub = cy.stub();
    const emptyValue = "";

    cy.on("window:alert", alertStub);
    cy.get(".money")
      .type(`${emptyValue}{enter}`)
      .then(() => {
        expect(alertStub).to.be.calledWith("1000원 이상의 값을 입력해주세요.");
      });
  });
  // it("엔터 키 입력 시 1000원 단위가 아닌 경우 alert창을 띄운다", () => {});
  // it("엔터 키 입력 시 1000원 단위가 아닌 경우 input값을 비운다", () => {});
  // it("구입 금액은 1,000 단위 이상이여야한다.", () => {});
  // it("구입 금액은 100,000 단위 이하여야한다.", () => {});
});

// class => . id => #
// 1번쨰 테코 "1000월을 넣었늗네 아예 아무것도 입력이 안됨" << 이유 알아보기
// cypress 업데이트 내역 알아보기 >> 모듈화 됐다고 하는데, 모듈화하면 뭐가 좋은거임?
// https://runebook.dev/ko/docs/cypress/api/commands/type
