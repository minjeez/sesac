// 운세 제목 목록
const fortuneTitles = [
    "🍀 오늘은 행운이 함께할 거예요.",
    "💫 매우 긍정적인 하루가 될 거예요.",
    "🍂 조심해야 할 일이 있을 수 있어요.",
    "✨ 오늘은 새로운 기회가 찾아올 거예요.",
    "💫 긍정적인 마음으로 하루를 시작해보세요.",
    "✨ 희망을 잃지 마세요.",
    "✨ 성공은 당신의 미래입니다.",
    "💪 인내는 믿음의 결실입니다.",
    "👏 지지하는 사람들이 함께합니다.",
    "🎆 도전은 성장의 길입니다.",
    "💫 꿈을 실현하는 순간입니다.",
    "🍀 작은 행운이 큰 변화를 가져옵니다.",
    "🍀 노력은 행운을 만들어냅니다.",
    "👐 오늘은 새로운 도전의 시작입니다.",
    "✨ 실패는 성공의 밑거름입니다."
];

// 운세 내용 목록
const fortuneContents = [
    "오늘은 새로운 시작의 날입니다. 어제의 걱정을 뒤로하고 새로운 가능성에 대해 열려 있는 마음을 가져보세요. 지금까지의 노력과 경험이 새로운 기회를 만들어낼 수 있습니다. 하지만 이를 위해서는 자신을 믿고 도전하는 용기가 필요합니다. 오늘은 그 용기를 발휘하여 새로운 도전에 나서보세요. 그리고 미래에 대한 긍정적인 기대를 품고 앞으로 나아가는 데 필요한 에너지를 충전해보세요.",
    "이른 아침에는 몸이 좀 피곤할 수 있습니다. 하지만 오전 중에는 에너지가 차오를 테니, 활동적인 하루를 계획해보세요. 몸과 마음을 활성화시킬 수 있는 활동을 선택하여 시작해보세요. 충분한 수면과 영양소를 섭취하면 더욱 도움될 것입니다. 그리고 긍정적인 마음가짐으로 하루를 시작하면 좋은 결과를 얻을 수 있을 것입니다.",
    "오늘은 다른 사람들과의 소통이 원활할 것입니다. 새로운 인연을 만나거나, 오래된 친구와의 연락을 유지해보세요. 상대방의 이야기를 경청하고 공감하는 자세를 갖추어보세요. 그러면 뜻밖의 도움이나 조언을 받을 수 있을 것입니다. 소통을 통해 서로를 이해하고 협력할 수 있는 기회가 많은 날입니다.",
    "주변 환경의 변화에 대한 대처가 필요한 날입니다. 유연하게 변화에 적응하며 문제를 해결할 수 있을 것입니다. 예상치 못한 일들이 발생할 수 있지만, 긍정적인 마음가짐으로 대처하면 어려움을 극복할 수 있습니다. 자신의 능력을 믿고 도전에 임하면 어떤 상황에서도 좋은 결과를 이뤄낼 수 있을 것입니다.",
    "저녁에는 자신을 위한 시간을 갖는 것이 좋겠습니다. 마음의 안정을 찾고 내적으로 회복력을 쌓아보세요. 스트레스 해소를 위한 여가 활동이나 명상 등을 통해 마음의 평화를 찾아보세요. 내일을 준비하는 데 필요한 에너지를 충전하고, 오늘의 경험을 되새겨보며 자기 성찰을 해보세요. 그렇게 하면 내일의 시작을 더욱 기대할 수 있을 것입니다.",
    "오늘은 예기치 않은 변화가 당신을 기다리고 있을 것입니다. 이러한 변화는 긍정적인 것일 수도 있고 도전적인 것일 수도 있습니다. 하지만 그 어떤 경우에도 변화는 당신에게 새로운 기회를 제공할 것입니다. 열린 마음으로 변화를 받아들이고, 새로운 가능성을 탐색해보세요.",
    "오늘은 주변 사람들과의 소통이 중요한 날입니다. 대화를 통해 새로운 아이디어를 얻고, 서로의 관점을 이해할 수 있을 것입니다. 열린 마음으로 대화에 참여하고, 다른 사람들의 의견을 존중해보세요. 이를 통해 새로운 인사이트를 얻을 수 있을 것입니다.",
    "오늘은 자기계발에 집중할 수 있는 좋은 기회일 것입니다. 새로운 취미나 기술을 배우는 것이나 자신의 감정과 마음을 탐구하는 것은 당신에게 큰 만족감을 줄 것입니다. 시간을 내어 자신에게 집중하고, 내면의 성장을 위한 노력을 기울여보세요.",
    "오늘은 조용한 시간을 갖는 것이 중요합니다. 바쁜 일상에서 벗어나서 마음의 평화를 찾는 시간을 가져보세요. 명상이나 산책과 같은 활동을 통해 내면의 안정을 찾고, 자신의 마음을 다독여주세요. 이를 통해 당신은 새로운 에너지를 얻을 수 있을 것입니다.",
    "오늘은 긍정적인 사고를 유지하는 것이 중요합니다. 어려운 상황에 직면하더라도 긍정적으로 생각하고, 해결책을 찾아보세요. 자신의 능력을 믿고 도전에 임하면, 어떤 상황에서도 성공할 수 있을 것입니다."
];

// 행운의 아이템 목록
const luckyItems = [
    "목걸이",
    "레몬사탕",
    "열쇠고리",
    "커피 메이커",
    "꽃다발",
    "선글라스",
    "텀블러",
    "케이크",
    "꽃병",
    "반지",
    "화분",
    "손목시계",
    "목제 조각품",
    "수첩",
    "다이어리"
];

// 페이지 로드 시 운세를 한 번 표시하고 이후 새로고침할 때마다 변경
document.addEventListener('DOMContentLoaded', function() {
    changeFortune();
});

// 운세를 변경하는 함수
function changeFortune() {
    const fortuneBox = document.getElementById('fortuneContent');
    const randomTitleIndex = Math.floor(Math.random() * fortuneTitles.length);
    const randomContentIndex = Math.floor(Math.random() * fortuneContents.length);
    const randomLuckyItemIndex = Math.floor(Math.random() * luckyItems.length);

    const title = fortuneTitles[randomTitleIndex];
    const content = fortuneContents[randomContentIndex];
    const luckyItem = luckyItems[randomLuckyItemIndex];

    fortuneBox.innerHTML = `
        <h2 class="fortune-title">${title}</h2>
        <p class="fortune-text">${content}</p>
        <p class="lucky-item">🔮 행운의 아이템: ${luckyItem}</p>
    `;
}

const fortuneTitle = document.querySelector('.fortune-title');

fortuneTitle.addEventListener('mouseover', function() {
    const colors = ['#ff0000', '#0000ff', '#ffff00', '#00ff00', '#800080'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    fortuneTitle.style.color = randomColor;
});

fortuneTitle.addEventListener('mouseout', function() {
    fortuneTitle.style.color = ''; // 마우스를 제거하면 원래 색으로 되돌립니다.
});
