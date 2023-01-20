import { ALERT_UNIT_MESSAGE } from "./variables.js";
import { LottoTicket } from "./ticketIssueance.js";

// 유틸 함수
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $modal = $(".modal");
const $showResultButton = $(".open-result-modal-button");
// const $modalClose = $("modal-close");

const $lottoNumbersToggleButton = $(".lotto-numbers-toggle-button");
const $purchaseBtn = $(".lotto-purchase-btn");
const $purchaseLottoInput = $(".lotto-purchase-input");
const $lottoSubmitForm = $(".lotto-submit-form");
const $passInputForm = $(".pass-input-form");
const $switch = $(".switch1");
const $winningNumber2 = $(".winning-number2");

let lottoTickets = new LottoTicket();
lottoTickets = [];

const updateLottoTickets = () => {
  // lottoTickets 초기화
  if (lottoTickets.length > 0) {
    lottoTickets = [];
  }

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

    $passInputForm.style.display = "block";
    $switch.style.display = "block";
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

    $passInputForm.style.display = "block";
    $switch.style.display = "block";
  } else {
    alert(ALERT_UNIT_MESSAGE);
  }
};

const lottoTicketTemplate = (ticket) => {
  return `<li class="mx-1 text-4xl">
  <span id="lotto-icon">🎟️</span>
  <span id="lotto-detail" style="display:none">${ticket.lottoNums}</span>
</li>`;
};

const handleLottoToggleBtn = (e) => {
  $("#issuance-lotto-tickets").classList.toggle("flex-col");
  [...$$("#lotto-detail")].forEach((item) =>
    item.style.display == "none"
      ? (item.style.display = "inline")
      : (item.style.display = "none")
  );
};

const onModalShow = (e) => {
  e.preventDefault();
  const winningNumbers = [...$$(".winning-number")].map((node) => {
    return +node.value;
  });
  const bonusNumber = +$(".bonus-number").value;
  const winningInputNumbers = [...winningNumbers, bonusNumber];

  const isValidWinningNumbers = (winningInputNumbers) => {
    return new Set(winningInputNumbers).size == 7 ? true : false;
  };

  if (!isValidWinningNumbers(winningInputNumbers)) {
    alert("중복");
  } else {
    $modal.classList.add("open");
  }
};

// const onModalClose = () => {
//   $modal.classList.remove("open");
// };

const handleWinningNumber2 = (e) => {
  if (e.target.value.length == 2) {
    if (e.target.nextElementSibling == null) {
      $(".bonus-number").focus();
    } else {
      e.target.nextElementSibling.focus();
    }
  }
};

$lottoSubmitForm.addEventListener("submit", handlePurchaseLottoForm);
$purchaseBtn.addEventListener("click", handlePurchaseLottoBtn);
$lottoNumbersToggleButton.addEventListener("click", handleLottoToggleBtn);
$showResultButton.addEventListener("click", onModalShow);
// $modalClose.addEventListener("click", onModalClose);
$winningNumber2.addEventListener("input", handleWinningNumber2);
