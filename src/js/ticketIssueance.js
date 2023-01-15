// -new LottoTicket()
// -로또객체는 class로 정의
// -constructor에 초기화 init 정보들을 세팅
// -LottoTicket 객체 내부함수 정의
// (ex-createRandomNumber)
// -생성한 복수개의 Lottotickets 배열은 전역변수로 관리 (상태관리를 위함)
// -로또는 템플릿 리터럴로 view에 나타낸다

// new LottoTicket부분에서 어떻게 그려줘야할 지?
// => 템플릿 리터럴과 innerHTML을 사용해서 DOM 구성을 해보자!
// 1. this.lottoTickets 배열을 map으로 접근
// 2. LottoTicket.lottoNums 배열을 접근해서 랜덤숫자를 가져옴
// 3. 로또이미지 아이콘 옆에 랜덤숫자를 입력한 DOM 노드 생성
// 4. 예제에 기본 제공된 css class로 flex 속성을 주어 토글되도록함

export class LottoTicket {
  constructor() {
    this.lottoNums = [];
    this.assignAutoNums();
  }

  setLottoNums(lottoNums) {
    this.lottoNums = lottoNums;
  }

  getLottoNums() {
    return this.lottoNums;
  }

  assignAutoNums() {
    while (this.lottoNums.length < 6) {
      let lottoTicketNum = parseInt(Math.floor(Math.random() * 45) + 1);
      if (this.lottoNums.indexOf(lottoTicketNum) < 0) {
        this.lottoNums.push(lottoTicketNum);
      }
    }
  }
}
