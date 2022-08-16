# redux-exercise
### 1. vanillaJS-redux 
 `Redux`, `HTML`, `JavaScript`를 이용해 CRUD 기능 구현
 ```js
 function render() {
        Header();
        TOC();
        Control();
        Content();
      }

      store.subscribe(render);
      render();
 ```
 각 HTML 태그를 컴포넌트로 만들고, render를 subscribe
 
 각 컴포넌트는 innerHTML과 template string을 이용해 렌더링한다.
