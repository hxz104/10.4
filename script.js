document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    // 模拟用户数据库（实际应用中应通过服务器验证）
    const users = [
        { username: 'admin', password: 'admin123' },
        { username: 'user', password: 'user123' },
        { username: 'test', password: 'test123' }
    ];

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // 阻止表单默认提交行为
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        // 简单验证输入
        if (!username || !password) {
            showMessage('请输入用户名和密码', 'error');
            return;
        }

        // 检查用户名和密码是否匹配
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            showMessage(`欢迎回来, ${username}! 登录成功`, 'success');
            // 实际应用中，这里会重定向到其他页面
            // window.location.href = 'dashboard.html';
        } else {
            showMessage('用户名或密码错误，请重试', 'error');
        }
    });

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = type; // 添加 'success' 或 'error' 类
        
        // 3秒后自动隐藏消息
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }
});