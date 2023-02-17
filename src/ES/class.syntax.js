// 클래스 쓰임새(용도)
// - 객체 생성 (new Set(), new Object())
// - 재사용 가능한 기능 공유 (Prototype)


// 추상화(Abstraction)
class Line {
  // 클래스 필드
  // 좌표 점: x1, y1, x2, y2
  // this.x1

  // 공개(public)

  originalX = 0; // this.originalX;

  // 클래스로부터 생성된 객체(인스턴스) : this
  x1;
  y1;
  x2;
  y2;

  // 객체가 생성될 때 처음 실행되는 메서드(함수)
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    console.log(y2);
    // this.y2 = y2;
  }

  // 그린다(draw) 기능
  draw() {}
}

const line1 = new Line(0, 0, 100, 100); // 직선 객체 생성
const line2 = new Line(100, 100, 200, 300);
line1.draw(); // 직선을 그린다.

console.log(line1.x1); // 0
console.log(line1.y1); // 100
console.log(line1.y2); // undefined

console.log(line2.x2); // 100

line1.originalX; // 0

// 단 하나의 객체 (singleton)
const line3 = {
  originalX: 0,
  x1: 20,
  y1: 0,
  x2: 129,
  y2: 300,
  draw() {}
};

const line4 = line3;



// 클래스가 하는 일: 객체를 생성하는 것
// 객체 중심의 설계 (객체 지향 프로그래밍: Java, C# 등)
// 재사용 가능한 객체를 생성하기 위해 (붕어빵 틀: 클래스, 붕어빵: 인스턴스)

// 클래스는 변수와 함수를 포함
// 포함하는 변수 = this.프로퍼티
// 포함하는 함수 = this.메서드

// 클래스를 확장하는 것
// 붕어빵(팥, 슈크림, 와사비 + 마요네즈, 민트 초코 등)
// 대형 붕어빵(붕어빵 클래스의 기능을 가진 새로운 클래스를 정의)

// 오승택 → 인간(포유류 확장) → 포유류(척추 생물 확장) → 척추 생물(생물 확장) → 생물(class)
// React 엘리먼트(React.Component 확장) → React.Component (setState, render)

// 상속
// class Headline extends React.Component {
//   render() {
//     return <h1>제목 요소</h1>;
//   }
// }

// React 엘리먼트 무에서 유를 창조하라

// 목표: React 엘리먼트(객체) 생성 
// 구현하는 방법: React API(입력, 출력 하는 방법 문서)
// const headline = React.createElement(Headline)

// const line1 = new Line(0, 0, 100, 100); 

// 전역 오염
// this === globalThis (window)

// "strict mode"; (2009)

// module, class (2015+)
// this === undefined

// constructor 메서드가 하는 역할이 new로 인스턴스 객체가 생성되면서  전달받는 인자로 property를 생성하기 위함인가요??

class Human {

  // 비공개(private)
  #zoominbunho;

  #privateMethod() {
    console.log('외부에서 접근 안됩니다.');
  }

  // class field
  // this로 접근 가능한 속성(property)
  hasBrain = true;
  legs = 2;

  constructor(name, gender, zoominbunho = 'unknown') {
    this.name = name;
    this.gender = gender;
    this.#zoominbunho = zoominbunho;
  }

  // getter function
  // this.residentRegistrationNumber
  // 읽기 전용
  get residentRegistrationNumber() {
    return this.#zoominbunho;
  }

  // 읽기/쓰기
  // setter
  get tail() {
    return 0;
  }

  set tail(newTailCount) {
    this.tail = newTailCount;
  }

  // getZoominbunho() {
  //   return this.#zoominbunho;
  // }

  eat(what) {
    console.log(`${this.name} ${what} 먹자!`);
    this.#privateMethod();
  }

  sleep(time) {
    console.log(`${this.name} ${time} 동안 자고싶다! Pz`);
  }

}

class Terminator extends Human {
  constructor(name, gender, juminbunho) {
    super(name, gender, juminbunho);
  }

  eat(what, when) {

  }

  iWillBeBack() {
    console.log('난 다시 돌아온다!!');
  }

  // 나머지 매개변수 ...args
  // constructor(...args) {
  //   // super(args /* [name, gender, juminbunho] */);

  //   전개 구문 ...args
  //   super(...args); // name, gender, juminbunho
  // }
}

const suyoung = new Human('강수영', '여성');
suyoung.name;
suyoung.eat('밥');
suyoung.sleep(24);
suyoung.hasBrain; // true
suyoung.name = '강선영';


const seungTaek = new Human('오승택', '남성', '000101-1XXXXXX');
seungTaek.gender;
seungTaek.eat('와사비 붕어빵');
seungTaek.sleep(12);
seungTaek.hasBrain; // true
console.log(seungTaek.residentRegistrationNumber);

// seungTaek.iWillBeBack(); 이건 안됨!!

globalThis.seungTaek = seungTaek;


const terminator800 = new Terminator('T-800', '남성');

terminator800.iWillBeBack();

// constructor 밖 필드에 선언된 변수는 새로운 인스턴스의 속성에는 안들어가는건가요?(이건아닌듯한데)
// constructor 안과밖에 쓰는 변수..?그거 차이를 모르겠어요 ㅠ


// 야무쌤 여기서 super를 사용안한 이유는 props 를 가져오지 않아서 인가요?!

// 더불어... super 개념도 사실 잘모르겠습니다 ㅠ

// private
// #공개하고싶지않은것들

// getter, setter

// class 정리 → React 클래스 컴포넌트