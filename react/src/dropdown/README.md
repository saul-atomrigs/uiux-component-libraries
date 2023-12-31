# Dropdown
## 💡 구현 결과
![ezgif com-video-to-gif](https://github.com/saul-atomrigs/uiux-component-libraries/assets/82362278/f5fd90ba-04fb-4a63-9b3f-a0ad22771790)


## 💡 개발 포인트

### [이슈] 자식 엘리먼트인 <Content> 를 클릭하면 '이벤트 전파 (event propagation)' 때문에 부모 컴포넌트인 <Layer> 도 영향을 받음
- [해결1] stopPropagation()을 사용해 이벤트 전파를 제어할 수 있다
- [해결2] 부모-자식 구조에서 형제 구조로 변경하여 이벤트 전파를 없앨 수 있다. <Content> 컴포넌트에 또 클릭 이벤트 핸들러를 추가할 필요없이 useState를 화용하여 동일한 기능을 구현 가능

### [기능] 바깥 배경 클릭 시 닫힘
- [구현1] addEventListener와 contains를 활용해 useRef로 내부영역 지정. 클릭하는 영역이 내부인지 외부인지 체크 가능하다.
- [구현2] focus, blur. 드롭다운이 활성 상태일 때 <Content>에 focus 이벤트를 주고, 해당 요소가 blur 이벤트를 받을 때 비활성화 하는 방식이다. 만약 동작하지 않는다면 tabIndex 어트리뷰트를 추가해주어야 한다.

### [이슈] 브라우저 내에서 외부 영역 클릭만 감지되기 때문에, 브라우저 창 크기 조정이나 브라우저 외부를 클릭하는 경우에는 콘텐츠가 자동으로 닫히지 않는다. 따라서 콘텐츠가 활성화된 상태에서 브라우저 창 크기를 조정하면 콘텐츠의 위치가 고정되어 레이아웃이 적절하게 조정되지 않는다
- [해결] resize 이벤트 사용 (window.addEventListener('resize', ...)) 하여, 브라우저 창 크기가 변경될 때마다 콘텐츠의 위치 값을 동적으로 조정함.

---
[참조] https://velog.io/@kh8640/DropDown-3
