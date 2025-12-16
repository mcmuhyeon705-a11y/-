let nicknameEntered = false;
let userNickname = '';

// 메시지 전송 함수
function sendMessage(event) {
    const messageInput = document.getElementById('messageInput');
    const chatBox = document.getElementById('chatBox');
    const nicknameInput = document.getElementById('nickname');

    if (event.key === 'Enter') {
        const message = messageInput.value.trim();
        
        if (message === '') return;

        // 닉네임이 입력되지 않으면 메시지 전송 불가
        if (!nicknameEntered) {
            userNickname = nicknameInput.value.trim();
            if (userNickname === '') return;
            nicknameEntered = true;
            chatBox.innerHTML += `## ${userNickname} 님이 입장하셨습니다. ##\n`;
        } else {
            chatBox.innerHTML += `${userNickname}: ${message}\n`;
        }

        // 자동으로 스크롤 아래로
        chatBox.scrollTop = chatBox.scrollHeight;

        // 입력창 비우기
        messageInput.value = '';
    }
}
