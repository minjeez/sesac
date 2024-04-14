document.addEventListener('DOMContentLoaded', function() {
    const openPopupBtn = document.getElementById('openPopup');
    openPopupBtn.addEventListener('click', function() {
        // 팝업 창의 너비와 높이를 고정값으로 설정합니다.
        const popupWidth = 400;
        const popupHeight = 300;

        // 화면 중앙에 위치한 좌표를 계산합니다.
        const left = (screen.width - popupWidth) / 2;
        const top = (screen.height - popupHeight) / 2;

        // 팝업 창을 엽니다.
        window.open('popup.html', 'Popup Page', `width=${popupWidth},height=${popupHeight},left=${left},top=${top},scrollbars=yes,status=yes`);
    });
});

