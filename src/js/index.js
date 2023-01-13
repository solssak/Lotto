import { ALERT_UNIT_MESSAGE } from "./variables.js";
import { lottoNums } from "./lottoNumControll.js";

// 유틸 함수
const $ = (selector) => document.querySelector(selector);

const $showResultButton = $(".open-result-modal-button");
const $modalClose = $("modal-close");
const $modal = $(".modal");
const $lottoNumbersToggleButton = $(".lotto-numbers-toggle-button");
const $purchaseBtn = $(".lotto-purchase-btn");

const $purchaseLottoInput = $(".lotto-purchase-input");
const $purchaseLottoBtn = $(".lotto-numbers-toggle-btn");
const $lottoSubmitForm = $(".lotto-submit-form");

const updateLottoTickets = () => {
  let lottoCount = $purchaseLottoInput.value / 1000;

  $(
    "#ticket-issueance-label"
  ).textContent = `총 ${lottoCount}개를 구매하였습니다.`;
};

const handlePurchaseLottoForm = (e) => {
  // 구입 금액 입력
  e.preventDefault();
  console.log("확인");

  // 유효성
  if ($purchaseLottoInput.value == "") {
    alert("빈값을 입력하셨습니다.");
  }

  if ($purchaseLottoInput.value < 1000) {
    alert("최소 구입 금액은 1000원입니다.");
  }

  if ($purchaseLottoInput.value % 1000 == 0) {
    console.log(lottoNums);
    // 로또 티켓 생성
    updateLottoTickets();
    // 입력 금액을 단위 금액으로 나누고

    // 그 수에 맞게 로또를 발급한다.
  } else {
    alert(ALERT_UNIT_MESSAGE);
  }
  //
  // 티켓 생성 함수
};

const handlePurchaseLottoBtn = (e) => {
  // 구입 금액 입력
  e.preventDefault();
  console.log("확인");

  // 유효성
  if ($purchaseLottoInput.value == "") {
    alert("빈값을 입력하셨습니다.");
  }

  if ($purchaseLottoInput.value < 1000) {
    alert("최소 구입 금액은 1000원입니다.");
  }

  if ($purchaseLottoInput.value % 1000 == 0) {
    // 로또 티켓 생성
    console.log("create lottos");
    // 입력 금액을 단위 금액으로 나누고
    // 그 수에 맞게 로또를 발급한다.
  } else {
    alert(ALERT_UNIT_MESSAGE);
  }
  //
  // 티켓 생성 함수
};

$lottoSubmitForm.addEventListener("submit", handlePurchaseLottoForm);
$purchaseBtn.addEventListener("click", handlePurchaseLottoBtn);

// const onModalShow = () => {
//   $modal.classList.add("open");
// };

// const onModalClose = () => {
//   $modal.classList.remove("open");
// };

// $showResultButton.addEventListener("click", onModalShow);
// $modalClose.addEventListener("click", onModalClose);
