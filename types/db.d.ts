// 모듈의 타입 선언(Ambient module declaration)
declare module 'db' {
  // 1. 타입(인터페이스) 선언
  interface Pool {
    pool(str?: string): object
  }

  // 2. 타입(인터페이스)을 가지는 변수 선언
  const db: Pool;

  // 3. 내보내기(CommonJS)
  export = db;
}