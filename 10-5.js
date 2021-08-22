document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.menu').addEventListener('click', function(e){
   // 전체 메뉴영역을 클릭하는 이벤트 리스너 등록
   //클릭 메뉴 항목 찾기
        let target = e.target;
   //UL 리스트 아이템인 <li> 엘리먼트를 얻기 위해
        //<li> 하위에서 클릭한 태그에 따라 상위 부모를 찾는 방법을 다르게함.
        let clickli = target.tagName == 'A' ? target.parentNode: (target.tagName == 'SPAN' ? target.parent Node.parentNode : target);

        if(clickli){
            //현재 활성 메뉴 초기화
            let currentCategory = document.querySelector('.menu a.active');
            if(currentCategory){
                currentCategory.classList.remove('active');
            }
            //새 선택 메뉴 활성화
            clickli.querySelector('a').classList.add('active');
            let pageURL = "/api/page?menuid="+clickli.getAttribute('data-menuid');
			//AJAX로 새로 로딩할 새 페이지 내용을 가져옴.
        }
    });
});
