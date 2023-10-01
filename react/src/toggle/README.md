# React Toggle

## Demo
![ezgif com-crop](https://github.com/saul-atomrigs/uiux-component-libraries/assets/82362278/571ac40c-0938-4fa1-ac24-2aed0b1053b7)

## Use cases
![Binance iOS 11](https://github.com/saul-atomrigs/uiux-component-libraries/assets/82362278/10324780-5761-4f97-9bc8-8c3be790fceb)

## Code
```
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
This code snippet exports a functional component called ToggleBox. It renders a toggle switch with a message and two div elements representing the switch itself.
ToggleBox라는 컴포넌트는 메시지와 두 개의 div 요소로 구성된 토글 스위치를 렌더링합니다


```
  const [isOn, setisOn] = useState(false);
```
The component uses the useState hook to manage the state of the toggle switch. The initial state is set to false. (이 컴포넌트는 useState 훅을 사용하여 토글 스위치의 상태를 관리합니다. 초기 상태는 false로 설정됩니다.)

```
  const toggleHandler = () => {
    setisOn(!isOn);
  };
```
When the user clicks on the toggle switch, the `toggleHandler` function is called, which updates the state using the `setisOn` function from the `useState` hook. It toggles the value of `isOn` using the logical NOT operator (`!`). (사용자가 토글 스위치를 클릭하면 toggleHandler 함수가 호출되며, 이 함수는 useState 훅에서 가져온 setisOn 함수를 사용하여 상태를 업데이트합니다. 논리 NOT 연산자(!)를 사용하여 isOn의 값을 토글합니다.)

```
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
The component returns JSX that represents the toggle switch UI. The isOn state is used to conditionally apply CSS classes to the div elements, changing their appearance based on whether the toggle switch is on or off. (컴포넌트는 토글 스위치 UI를 나타내는 JSX를 반환합니다. isOn 상태는 div 요소에 CSS 클래스를 조건부로 적용하여 토글 스위치의 상태에 따라 모양을 변경합니다.)
