document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const subscriptionForm = document.getElementById('subscriptionForm');
    const subscribeButton = document.getElementById('subscribeButton');

    // "구독" 버튼 클릭 시 토글 기능 활성화
    toggleButton.addEventListener('click', function() {
        subscriptionForm.style.display = subscriptionForm.style.display === 'none' ? 'block' : 'none';
    });

    // "구독하기" 버튼 클릭 시 폼 제출
    subscribeButton.addEventListener('click', async function() {
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const favoriteCelebrity = document.getElementById('favorite_celebrity').value;

        // 폼 데이터를 JSON 형식으로 변환
        const formData = {
            email: email,
            name: name,
            age: age,
            gender: gender,
            favorite_celebrity: favoriteCelebrity
        };

        try {
            // 서버에 POST 요청 보내기
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Subscription data submitted:', data);
            if (data.success) {
                // 성공 메시지 표시
                alert('구독이 완료되었습니다.');
            } else {
                // 오류 메시지 표시
                alert('구독을 처리하는 중 오류가 발생했습니다.');
            }

            // 토글을 닫음
            subscriptionForm.style.display = 'none';
        } catch (error) {
            console.error('Error submitting subscription data:', error);
            // 오류 메시지 표시
            alert('구독을 처리하는 중 오류가 발생했습니다.');
        }
    });
});
