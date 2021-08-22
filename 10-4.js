document.addEventListener('DOMContentLoaded', function(){ //DOM 생성 후 이벤트 리스너 등록
    //더보기 버튼 이벤트 리스너
    document.querySelector('.btnopen').addEventListener('click', function(e){
        // 더보기 프레임의 클래스 정보 얻기
        let classList = document.querySelector('.detailinfo').classList;
   //컨텐츠 높이 얻기
        let contentHeight = document.querySelector('.detailinfo > .content').offsetHeight; 
        // 2단계이면 전체보기로
        if(classList.contains('showstep2')){
            classList.remove('showstep2');
        }
        // 1단계이면 2단계로
        if(classList.contains('showstep1')){
            classList.remove('showstep1');
            if(contentHeight > 600){
                classList.add('showstep2');
            }else{
                document.querySelector('.btnopen').classList.add('hide');
            }
        }
        //전체보기시 더보기 버튼 감추기 & 감추기 버튼 표시
        if(!classList.contains('showstep1') && !classList.contains('showstep2')){
            e.target.classList.add('hide');
            document.querySelector('.btnclose').classList.remove('hide');
        }
    });
});
