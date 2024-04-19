document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscriptionForm'); // 폼 요소 가져오기

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 폼의 기본 제출 동작 방지

        // 입력 필드에서 값 가져오기
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const favorite_celebrity = document.getElementById('celebrity').value;

        // 여기에 사용자 정보를 처리하는 코드 추가 (예: 서버로 전송)
        console.log("사용자 정보:", {name, email, age, gender, favorite_celebrity});

        // 필수 입력 필드의 ID를 배열로 정의합니다.
        const requiredFields = ['name', 'email', 'age', 'gender'];
        const isFormValid = requiredFields.every(function(fieldId) {
            const input = document.getElementById(fieldId);
            return input && input.value.trim() !== '';
        });
        // 하나라도 비어 있다면 폼 제출을 방지합니다.
        if (!isFormValid) {
            alert('모든 필드를 채워주세요.');
            return; // 폼 제출을 중단합니다.
        }

        // FormData 객체를 사용하여 폼 데이터 수집
        const formData = new FormData(form);
        console.log(`formData : ${formData}`);
        fetch('/popup', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // 응답 데이터를 JSON으로 변환
            } else {
                throw new Error('서버에서 문제가 발생했습니다.');
            }
        })
        .then(data => {
            // alert(`${data.name}님 구독이 완료되었습니다! 이제부터 새로운 소식을 받아보세요.`);
            const popupContent = `
            <div class="popup-content">
                <h2>구독이 완료되었습니다!</h2>
                <p>이제부터 새로운 소식을 받아보세요.</p>
                <p>&nbsp;</p> <!-- 추가된 공백 -->
                <button id="okButton">확인</button>
            </div>
            `;
            openPopup(popupContent);
            // 여기에 성공적인 응답 처리 로직 추가
        })
        .catch(error => {
            console.error('Error:', error);
            alert('동일한 이메일이 존재합니다. 수정해주세요.');
        });
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
        // try {
        //     const response = fetch('/popup', {
        //         method: 'POST',
        //         body: formData
        //     });
        //     console.log(response);
        //     if (response.ok) {
        //         const responseData = response.json();
        //         alert(`${responseData.name}님 구독이 완료되었습니다! 이제부터 새로운 소식을 받아보세요.`);
            

        //     } else {
        //         const errorMessage = response.json();
        //         alert(errorMessage.meaage);
        //     }
        // } catch (error) {
        //     console.error('구독 요청 중 오류 발생:', error);
        //     alert('구독 요청 중 오류가 발생했습니다.');
        // }

    });
});


// 팝업 창 열기 함수
function openPopup(content) {
    const popupWidth = 400;
    const popupHeight = 200;
    const left = (screen.width - popupWidth) / 2;
    const top = (screen.height - popupHeight) / 2;
    const popupWindow = window.open('', 'Popup Page', `width=${popupWidth},height=${popupHeight},left=${left},top=${top},scrollbars=yes,status=yes`);
    popupWindow.document.write(content);

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
})
}

