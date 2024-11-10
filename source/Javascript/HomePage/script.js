
////submenu//////
const subMenuItems = document.querySelectorAll('.header-menu > .bar >ul > li > .submenu-main > .menuTotal > .sub-menu > li');
const menuItem = document.querySelector('.header-menu .bar li:nth-child(2)');
function activateFirstItem() {
    const isAnyActive = Array.from(subMenuItems).some(item => item.classList.contains('active'));

    if (!isAnyActive && subMenuItems.length > 0) {
        subMenuItems[0].classList.add('active'); // Thêm lớp active cho mục đầu tiên
    }
}
menuItem.addEventListener('mouseenter', () => {
    activateFirstItem(); // Kích hoạt mục đầu tiên khi hover vào menu
});

// Khi di chuột qua các mục trong sub-menu
subMenuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // Nếu mục đang hover không có lớp active, xóa lớp active khỏi tất cả
        if (!item.classList.contains('active')) {
            subMenuItems.forEach(subItem => subItem.classList.remove('active')); // Xóa active từ tất cả
            item.classList.add('active'); // Thêm active cho mục đang hover
        }
    });

    item.addEventListener('mouseleave', () => {
        // Không làm gì ở đây
        // Giữ lớp active cho mục đang hover
    });
});

// Khi chuột rời khỏi vùng chứa của menu
menuItem.addEventListener('mouseleave', () => {
    // Không làm gì, giữ lớp active cho mục hiện tại
});

////submenu//////
let currentPosition = 0;
        let direction = 'right'; 
        const logoContainer = document.querySelector('.logo-container');
        const logos = document.querySelectorAll('.logo-container a');
        const logoWidth = 115 + 20; // Image width + margin
        const visibleLogos = 9; // Số lượng logo hiển thị cùng một lúc
        const totalLogos = logos.length;
        const maxPosition = totalLogos - visibleLogos;
        const arrowButton = document.querySelector('.containerr .arrow'); // Select the arrow button
    
        function moveCarousel() {
            if (direction === 'right') {
                currentPosition = maxPosition;
                direction = 'left';
                arrowButton.classList.remove('arrow-right');
                arrowButton.classList.add('arrow-left');
                arrowButton.innerHTML = '&#10094;'; 
            } else {
                currentPosition = 0;
                direction = 'right'; 
                arrowButton.classList.remove('arrow-left');
                arrowButton.classList.add('arrow-right');
                arrowButton.innerHTML = '&#10095;'; 
            }
            logoContainer.style.transform = `translateX(-${currentPosition * logoWidth}px)`;
        }

        ///////////////////////menu///////////////////////////////
        let amount = 0; 
        let select = 'right';

        function moveNextPage(menuId) {
            const menu = document.getElementById(menuId);
            if (!menu) return;

            // Xác định npButton và mainItems trong menu cụ thể
            let npButton = menu.querySelector('.arrow');
            let mainItems = menu.querySelectorAll('.nextpage-column');

            if (select === 'right') {
                amount = 1260;
                select = 'left';
                npButton.classList.remove('arrow-right'); 
                npButton.classList.add('arrow-left'); 
                npButton.innerHTML = '&#10094;';
            } else {
                amount = 0;
                select = 'right';
                npButton.classList.remove('arrow-left'); 
                npButton.classList.add('arrow-right'); 
                npButton.innerHTML = '&#10095;';
            }

            // Di chuyển từng mainItem trong menu cụ thể
            mainItems.forEach(mainItem => {
                mainItem.style.transform = `translateX(-${amount}px)`;
            });
        }


//////////////
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    window.scrollTo({
        behavior: 'smooth'
    });
}
showSection('denban');

function showNextMenu(menuId, sectionId) 
{
    const menu = document.getElementById(menuId);
    if (!menu) return;

    menu.querySelectorAll('.section-nextpage').forEach(section => {
        section.style.display = 'none';
    });

    menu.querySelectorAll('.menu-nextpage-header ul li').forEach(li => {
        li.classList.remove("hoverRed");
    });

    const sectionToShow = menu.querySelector(`.menu-nextpage-content #${sectionId}`);
    const hoverTitle = menu.querySelector(`.menu-nextpage-header ul li#${sectionId}`);

    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
    if (hoverTitle) {
        hoverTitle.classList.add("hoverRed");
        
    }
}
showNextMenu('menu1','item1');
showNextMenu('menu2','item1');
showNextMenu('menu3','item1');
showNextMenu('menu4','item1');
showNextMenu('menu5','item1');
showNextMenu('menu6','item1');
showNextMenu('menu7','item1');
showNextMenu('menu8','item1');
showNextMenu('menu9','item1');
showNextMenu('menu10','item1');
showNextMenu('menu11','item1');
showNextMenu('menu12','item1');
showNextMenu('menu13','item1');
showNextMenu('menu14','item1');
showNextMenu('menu15','item1');
//////////////
document.querySelectorAll('.header-menu-content ul li a').forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ liên kết
        
        // Xóa lớp 'active' khỏi tất cả các liên kết và reset màu mặc định
        document.querySelectorAll('.header-menu-content ul li a').forEach(function(link) {
            link.classList.remove('active'); // Xóa lớp active
            link.style.color = '#333333'; // Đặt lại màu chữ
            link.style.borderBottom = ''; // Ẩn gạch chân
        });

        // Thêm lớp 'active' cho liên kết được click và đổi màu thành đỏ
        this.classList.add('active'); // Thêm lớp active
        this.style.color = 'red'; // Đặt màu đỏ cho mục đang chọn
        
        // Gạch chân cho mục được chọn
        
    });
});

// Kích hoạt mục "Văn học" ban đầu
const defaultItem = document.querySelector('.header-menu-content li:first-child a');
defaultItem.classList.add('active');
defaultItem.style.color = 'red'; // Đặt màu đỏ cho mục "Văn học"

// Lắng nghe sự kiện click vào mỗi mục li
const items = document.querySelectorAll('.block-vote .multibox1 .box1 .minibox1 ul li');

items.forEach(item => {
    item.addEventListener('mouseenter', function() {
        // Loại bỏ class 'active' khỏi các mục khác
        items.forEach(i => i.classList.remove('active'));
        
        // Thêm class 'active' vào mục được hover
        this.classList.add('active');
    });
});
document.querySelectorAll('.header-menu-content a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Xóa class 'active' khỏi tất cả các phần nội dung
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';  // Ẩn tất cả nội dung
        });
        
        // Lấy giá trị category từ phần tử được click
        const category = this.getAttribute('data-category');
        
        // Hiển thị phần nội dung tương ứng với category
        document.getElementById(category).style.display = 'flex'; // Hiện nội dung tương ứng
    });
});
document.querySelector('.header-menu-content a[data-category="vanhoc"]').click();
/////////banner/////
let count = 0;
const maxCount = 6;
const itemWidth = 860;
let barHidden = document.querySelectorAll('.item-1 ul li');
function onClickButtonRight()
{
    let banner = document.querySelector('.bar-banner');
    count--;
    if (count < -maxCount) {
        count = 0;
    }
    let activeIndex = Math.abs(count);
    barHidden.forEach((li) => li.classList.remove('active'));
    if (barHidden[activeIndex]) {
        barHidden[activeIndex].classList.add('active');
    }

    banner.style.transform = `translateX(${count * itemWidth}px)`;
}

function onClickButtonLeft()
{
    let banner = document.querySelector('.bar-banner');
    count++;
    if (count > 0) {
        count = -maxCount;
    }
    let activeIndex = Math.abs(count);
    barHidden.forEach((li) => li.classList.remove('active'));
    if (barHidden[activeIndex]) {
        barHidden[activeIndex].classList.add('active');
    }

    banner.style.transform = `translateX(${count * itemWidth}px)`;
}
setInterval(onClickButtonRight, 5000);
//////////////

//////////////

//////////////