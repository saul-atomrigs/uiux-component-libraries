# React Toggle

## 구현 결과 Demo
![ezgif com-crop (1)](https://github.com/saul-atomrigs/uiux-component-libraries/assets/82362278/a0cb72fb-7a7e-43a4-91d9-6bcff585bc61)


## Use cases
![Binance iOS 11](https://github.com/saul-atomrigs/uiux-component-libraries/assets/82362278/10324780-5761-4f97-9bc8-8c3be790fceb)

## Code
``` typescript
export default function ToggleBox() {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <ToggleBoxContainer>
      <Message>I agree to receive marketing updates from XXX</Message>

      <ToggleContainer onClick={toggleHandler}>
        <div
          className={`toggle-container ${isOn ? 'toggle--checked' : null}`}
        />
        <div className={`toggle-circle ${isOn ? 'toggle--checked' : null}`} />
      </ToggleContainer>
    </ToggleBoxContainer>
  );
}
```
ToggleBox라는 컴포넌트는 메시지와 두 개의 div 요소로 구성된 토글 스위치를 렌더링합니다


```ts
  const [isOn, setisOn] = useState(false);
```
useState 훅을 사용하여 토글 스위치의 상태를 관리합니다. 초기 상태는 false로 설정됩니다

```ts
  const toggleHandler = () => {
    setisOn(!isOn);
  };
```
사용자가 토글 스위치를 클릭하면 toggleHandler 함수가 호출되며, 이 함수는 useState 훅에서 가져온 setisOn 함수를 사용하여 상태를 업데이트합니다. 논리 NOT 연산자(!)를 사용하여 isOn의 값을 토글합니다

```ts
  return (
    <ToggleBoxContainer>
      <Message>I agree to receive marketing updates from XXX</Message>

      <ToggleContainer onClick={toggleHandler}>
        <div
          className={`toggle-container ${isOn ? 'toggle--checked' : null}`}
        />
        <div className={`toggle-circle ${isOn ? 'toggle--checked' : null}`} />
      </ToggleContainer>
    </ToggleBoxContainer>
  );
```
토글 스위치 UI를 나타내는 JSX를 반환합니다. isOn 상태는 div 요소에 CSS 클래스를 조건부로 적용하여 토글 스위치의 상태에 따라 모양을 변경합니다
