// 로또 번호 1~45
export const lottoNums = [];
while (lottoNums.length < 6) {
  let lottoTicketNum = parseInt(Math.floor(Math.random() * 45) + 1);
  if (lottoNums.indexOf(lottoTicketNum) < 0) {
    lottoNums.push(lottoTicketNum);
  }
}
console.log(lottoNums);
// for (let i = 0; i < 6; i++) {
//   lottoNums.push(parseInt(Math.floor(Math.random() * 45) + 1));
// }
