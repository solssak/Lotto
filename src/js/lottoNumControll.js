export const lottoNums = [];
while (lottoNums.length < 6) {
  let lottoTicketNum = parseInt(Math.floor(Math.random() * 45) + 1);
  if (lottoNums.indexOf(lottoTicketNum) < 0) {
    lottoNums.push(lottoTicketNum);
  }
}
console.log(lottoNums);
