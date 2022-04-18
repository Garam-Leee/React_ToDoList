# Getting Started with React TodoList

📁 src
├── 📁 components
├── 📄 App.js
├── 📄 index.js
├── 📄 style.css
├── 📄 TodoContext.js 
└── 📄 reset.css 


📁 components
├── 📄 Head.js          : 오늘 날짜, 남은 TodoList 갯수 반환
├── 📄 Template.js      : 최상위 레이아웃 
├── 📄 TodoCreate.js    : 하단 +버튼을 클릭하여 새로운 Todo를 등록
├── 📄 TodoItem.js      : Todo에 대한 정보 및 완료여부, 삭제여부 렌더링 컴포넌트
└── 📄 TodoList.js      : Todo에 대한 정보가 들어있는 배열을 map을 사용하여 컴포넌트 렌더링