// 유틸 함수
const $ = (selector) => document.querySelector(selector);

const $showResultButton = $(".open-result-modal-button");
const $modalClose = $("modal-close");
const $modal = $(".modal");
const $lottoNumbersToggleButton = $(".lotto-numbers-toggle-button");

// 로또 구입 금액을 입력하면, 금액에 해당하는 로또를 발급해야 한다.
// const lottoPurchase = () => {
//   const $lottoPurchaseInput = $(".lotto-purchase-input");
//   const $lottoPurchaseBtn = $(".lotto-numbers-toggle-btn");
// };

// const onModalShow = () => {
//   $modal.classList.add("open");
// };

// const onModalClose = () => {
//   $modal.classList.remove("open");
// };

// $showResultButton.addEventListener("click", onModalShow);
// $modalClose.addEventListener("click", onModalClose);
