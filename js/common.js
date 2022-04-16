const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 검색 아이콘 - 클릭 시 input에 focus
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// 검색 입력창 - focus 시 통합검색 힌트 표시
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// 검색 입력창 - focus 해제 시 초기화
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 올해가 몇 년도인지 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();