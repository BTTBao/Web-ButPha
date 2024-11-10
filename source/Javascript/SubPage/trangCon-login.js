document.querySelectorAll('.tabs a').forEach(tab => {
    tab.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
            this.style.color = 'red'; // Đổi màu chữ khi hover
            this.style.borderBottom = '2px solid red'; // Gạch đỏ dưới tab khi hover
        }
    });

    tab.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.color = ''; // Trở về màu chữ ban đầu
            this.style.borderBottom = ''; // Ẩn gạch đỏ
        }
    });
});

document.getElementById('login-tab').addEventListener('click', function(e) {
    e.preventDefault(); // Ngăn không cho chuyển hướng
    document.getElementById('login-form').style.display = 'block'; // Hiện form đăng nhập
    document.getElementById('register-form').style.display = 'none'; // Ẩn form đăng ký
    this.classList.add('active'); // Đánh dấu tab đăng nhập là active
    document.getElementById('register-tab').classList.remove('active'); // Bỏ dấu active khỏi tab đăng ký
    resetTabStyles(); // Reset styles cho tab không active
});

document.getElementById('register-tab').addEventListener('click', function(e) {
    e.preventDefault(); // Ngăn không cho chuyển hướng
    document.getElementById('register-form').style.display = 'block'; // Hiện form đăng ký
    document.getElementById('login-form').style.display = 'none'; // Ẩn form đăng nhập
    this.classList.add('active'); // Đánh dấu tab đăng ký là active
    document.getElementById('login-tab').classList.remove('active'); // Bỏ dấu active khỏi tab đăng nhập
    resetTabStyles(); // Reset styles cho tab không active
});

// Hàm reset style cho các tab không active
function resetTabStyles() {
    document.querySelectorAll('.tabs a').forEach(tab => {
        if (!tab.classList.contains('active')) {
            tab.style.color = ''; // Trở về màu chữ ban đầu
            tab.style.borderBottom = ''; // Ẩn gạch đỏ
        }
    });
}

