describe("Lotto app", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/index.html");
  });

  // key event
  it("input 창에 문자열 입력 시 값이 입력되지 않는다.", () => {
    const newString = "1000원";
    cy.get(".lotto-purchase-input").type(`${newString}{enter}`);
    cy.get(".lotto-purchase-input").should("have.text", "1000");
  });

  it("input 창에 특수문자 입력 시 값이 입력되지 않는다.", () => {
    const newPercentSign = "1000%";
    cy.get(".lotto-purchase-input").type(`${newPercentSign}{enter}`);
    cy.get(".lotto-purchase-input").should("have.text", "1000");
  });

  it("엔터 키 입력 시 input 값이 없는 경우 alert 경고를 띄운다", () => {
    const alertStub = cy.stub();
    const emptyValue = "";

    cy.on("window:alert", alertStub);

    cy.get(".lotto-purchase-input")
      .type(`${emptyValue}{enter}`)
      .then(() => {
        expect(alertStub).to.be.calledWith("1000원 이상의 값을 입력해주세요.");
      });
  });

  it("엔터 키 입력 시 1000원 단위가 아닌 경우 alert창을 띄운다", () => {
    const alertStub = cy.stub();
    const newValue = "999";

    cy.on("window:alert", alertStub);

    cy.get(".lotto-purchase-input")
      .type(`${newValue}{enter}`)
      .then(() => {
        expect(alertStub).to.be.calledWith(
          "구입 금액은 1000원 단위여야합니다."
        );
      });
  });

  it("엔터 키 입력 시 로또 구입 금액이 1000원 단위가 아닌 경우 input값을 비운다", () => {
    cy.get(".lotto-purchase-input")
      .type("1100{enter")
      .then(() => {
        expect(cy.get(".lotto-purchase-input").should("have.value", ""));
      });

    // cy.get(".lotto-purchase-input").type(`${newValue}{enter}`).clear();
    // const newValue = "999";
  });

  it("엔터 키 입력 시 로또 UI의 <label>에 로또 구입 금액의 1000 단위 개수를 띄운다", () => {
    cy.get(".lotto-purchase-input").type(`10000{enter}`);
    cy.get(".label").should("have.text", "총 10개를 구매하셨습니다.");
  });

  it("로또 금액 입력 후 엔터 키 입력 시 번호보기 토글 상태를 초기화한다.", () => {
    cy.get(".lotto-purchase-input").type("10000{enter}");
    cy.get("lotto-numbers-toggle-btn").should("토글 상태 해제");
  });

  // click event
  it("확인 버튼 클릭 시 로또 구입 금액이 1000원 단위가 아닌 경우 alert 경고를 띄운다", () => {
    const alertStub = cy.stub();
    cy.on("window:alert", alertStub);

    cy.get(".lotto-purchase-input").type("999");
    cy.get(".lotto-purchase-btn")
      .click()
      .then(() => {
        expect(stub).to.be.calledWith('"구입 금액은 1000원 단위여야합니다."');
      });
  });

  it("확인버튼 클릭 시 로또 구입 금액이 1000 단위가 아닌 경우 input값을 비운다.", () => {
    cy.get(".lotto-purchase-input").type("999");
    cy.get(".lotto-purchase-btn")
      .click()
      .then(() => {
        expect(cy.get(".lotto-purchase-input").should("have.value", ""));
      });
  });

  it("확인버튼 클릭 시 로또 UI의 <label>에 로또 구입 금액의 1000 단위 개수를 띄운다.", () => {
    cy.get(".lotto-purchase-input").type("2000");
    cy.get(".lotto-purchase-btn").click();
    cy.get(".label").should("have.text", "총 2개를 구매하셨습니다.");
  });

  it("로또 금액 입력 후 확인버튼 클릭 시 번호보기 토글 상태를 초기화한다.", () => {
    cy.get(".lotto-purchase-input").type(1000);
    cy.get(".lotto-purchase-btn").click();
    cy.get("lotto-numbers-toggle-btn").should("토글 상태 해제");
  });
});

// ----------------------------------------------------------------------------------------
// - 엔터 키 입력 시 로또 <span> UI의 당첨 번호 숫자 6개가 지정되며 중복이 없다.
// - 로또 금액 입력 후 엔터 키 입력 시 번호보기 토글 상태를 초기화한다.
// - 로또 <span> UI의 당첨 번호가 띄워진 상태에서 로또 금액 입력 후 엔터 키 입력 시 번호보기 토글 상태를 초기화한다.

// - 확인버튼 클릭 시 로또 <span> UI의 당첨 번호 숫자 6개가 지정된다.
//     - 로또 <span> UI의 당첨 번호는 1부터 45 사이 값이다.
//     - 로또 <span> UI의 당첨 번호는 티켓 별 중복 숫자가 없다.
// - 로또 <span> UI의 당첨 번호가 띄워진 상태에서 로또 금액 입력 후 확인버튼 클릭 시 번호보기 토글 상태를 초기화한다.
// ----------------------------------------------------------------------------------------

// class => . id => #
// 1번쨰 테코 "1000원을 넣었는데 아예 아무것도 입력이 안됨" << 이유 알아보기
// cypress 업데이트 내역 알아보기 >> 모듈화 됐다고 하는데, 모듈화하면 뭐가 좋은거임?
// https://runebook.dev/ko/docs/cypress/api/commands/type
// ~경우, ~면 => then(()=>{})
