// 유틸 함수
const $ = (selector) => document.querySelector(selector);

const $showResultButton = $(".open-result-modal-button");
const $modalClose = $("modal-close");
const $modal = $(".modal");
const $lottoNumbersToggleButton = $(".lotto-numbers-toggle-button");
const $purchaseBtn = $(".lotto-purchase-btn");

const $purchaseLottoInput = $(".lotto-purchase-input");
const $purchaseLottoBtn = $(".lotto-numbers-toggle-btn");

const purchaseLotto = () => {
  console.log("확인");
  // 구입 금액 입력
  // 유효성
  // 티켓 생성
  // 티켓 생성 함수
};

$purchaseBtn.addEventListener("click", purchaseLotto);

// const onModalShow = () => {
//   $modal.classList.add("open");
// };

// const onModalClose = () => {
//   $modal.classList.remove("open");
// };

// $showResultButton.addEventListener("click", onModalShow);
// $modalClose.addEventListener("click", onModalClose);
