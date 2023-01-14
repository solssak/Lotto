import { ALERT_UNIT_MESSAGE } from "./variables.js";
import { lottoNums } from "./lottoNumControll.js";
import { LottoTicket } from "./ticketIssueance.js";

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

let lottoTickets = new LottoTicket();
lottoTickets = [];

const updateLottoTickets = () => {
  let lottoCount = $purchaseLottoInput.value / 1000;

  for (let i = 0; i < lottoCount; i++) {
    lottoTickets.push(new LottoTicket());
  }

  $(
    "#ticket-issueance-label"
  ).textContent = `총 ${lottoCount}개를 구매하였습니다.`;
};

const handlePurchaseLottoForm = (e) => {
  e.preventDefault();
  if ($purchaseLottoInput.value == "") {
    alert("빈값을 입력하셨습니다.");
  }

  if ($purchaseLottoInput.value < 1000) {
    alert("최소 구입 금액은 1000원입니다.");
  }

  if ($purchaseLottoInput.value % 1000 == 0) {
    updateLottoTickets();

    $("#issuance-lotto-tickets").innerHTML = lottoTickets
      .map((ticket) => lottoTicketTemplate(ticket))
      .join("");
  } else {
    alert(ALERT_UNIT_MESSAGE);
  }
};

const handlePurchaseLottoBtn = (e) => {
  e.preventDefault();
  if ($purchaseLottoInput.value == "") {
    alert("빈값을 입력하셨습니다.");
  }

  if ($purchaseLottoInput.value < 1000) {
    alert("최소 구입 금액은 1000원입니다.");
  }

  if ($purchaseLottoInput.value % 1000 == 0) {
    updateLottoTickets();

    $("#issuance-lotto-tickets").innerHTML = lottoTickets
      .map((ticket) => lottoTicketTemplate(ticket))
      .join("");
  } else {
    alert(ALERT_UNIT_MESSAGE);
  }
};

const lottoTicketTemplate = (ticket) => {
  return `<li>
  <span class="mx-1 text-4xl">🎟️ ${ticket.lottoNums} </span>
</li>`;
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
