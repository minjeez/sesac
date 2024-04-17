document.addEventListener('DOMContentLoaded', function() {
    const openPopupBtn = document.getElementById('openPopup');
    openPopupBtn.addEventListener('click', function() {
        // 팝업 창의 너비와 높이를 고정값으로 설정합니다.
        const popupWidth = 600;
        const popupHeight = 800;

        // 화면 중앙에 위치한 좌표를 계산합니다.
        const left = (screen.width - popupWidth) / 2;
        const top = (screen.height - popupHeight) / 2;

        // 팝업 창을 엽니다.
        window.open('popup', 'Popup Page', `width=${popupWidth},height=${popupHeight},left=${left},top=${top},scrollbars=yes,status=yes`);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const confirmButton = document.getElementById('subscribeButton'); // 확인 버튼 요소 가져오기
    
    confirmButton.addEventListener('click', function() {
        // 팝업 창에 사용자 정보 입력 후 확인 버튼 클릭 시 동작
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // 팝업 내용 작성
        const popupContent = `
            <div class="popup-content">
                <h2>구독이 완료되었습니다!</h2>
                <p>이제부터 새로운 소식을 받아보세요.</p>
                <p>&nbsp;</p> <!-- 추가된 공백 -->
                <button id="okButton">확인</button>
            </div>
        `;

        // 팝업 창 열기
        const popupWidth = 400;
        const popupHeight = 200;
        const left = (screen.width - popupWidth) / 2;
        const top = (screen.height - popupHeight) / 2;
        const popupWindow = window.open('', 'Popup Page', `width=${popupWidth},height=${popupHeight},left=${left},top=${top},scrollbars=yes,status=yes`);
        popupWindow.document.write(popupContent);

        // 팝업 창에 CSS 스타일 적용
        const styleElement = popupWindow.document.createElement('style');
        styleElement.textContent = `
            body {
                font-family: Arial, sans-serif;
                background-color: #f5f5f5;
                text-align: center;
            }
            .popup-content {
                margin-top: 50px;
            }
            h2 {
                color: #737aa5;
            }
            p {
                margin-bottom: 20px;
            }
            button {
                padding: 10px 20px;
                background-color: #737aa5;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s;
            }
            button:hover {
                background-color: #0056b3;
            }
        `;
        popupWindow.document.head.appendChild(styleElement);

        // OK 버튼 클릭 시 팝업 닫고 메인 페이지로 이동
        const okButton = popupWindow.document.getElementById('okButton');
        okButton.addEventListener('click', function() {
            popupWindow.close();
            window.location.href = '/';
        });
    });
});
