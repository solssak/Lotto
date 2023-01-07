import { ALERT_UNIT_MESSAGE } from "./variables.js";

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

const handlePurchaseLottoBtn = (e) => {
  // 구입 금액 입력
  e.preventDefault();
  console.log("확인");
  // 유효성
  if ($purchaseLottoInput.value == "") {
    alert("빈값을 입력하셨습니다.");
    return;
  }

  if ($purchaseLottoInput.value % 1000 == 0) {
    // create lotto ticket
    console.log("create lottos");
  } else {
    alert(ALERT_UNIT_MESSAGE);
  }
  // 티켓 생성
  // 티켓 생성 함수
};

const handlePurchaseLottoForm = (e) => {
  // 구입 금액 입력
  console.log("확인");
  e.preventDefault();
  // 유효성
  // if ()
};

$purchaseBtn.addEventListener("click", handlePurchaseLottoBtn);
$lottoSubmitForm.addEventListener("submit", handlePurchaseLottoForm);

// const onModalShow = () => {
//   $modal.classList.add("open");
// };

// const onModalClose = () => {
//   $modal.classList.remove("open");
// };

// $showResultButton.addEventListener("click", onModalShow);
// $modalClose.addEventListener("click", onModalClose);
