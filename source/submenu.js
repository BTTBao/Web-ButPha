           // Lấy tất cả các mục li trong sub-menu
           const subMenuItems = document.querySelectorAll('.header-menu > .bar >ul > li > .submenu-main > .menuTotal > .sub-menu > li');
           const menuItem = document.querySelector('.header-menu .bar li:nth-child(2)'); // Nút mở menu

           // Hàm tự động chọn và thêm lớp active cho mục đầu tiên
           function activateFirstItem() {
               const isAnyActive = Array.from(subMenuItems).some(item => item.classList.contains('active'));

               if (!isAnyActive && subMenuItems.length > 0) {
                   subMenuItems[0].classList.add('active'); // Thêm lớp active cho mục đầu tiên
               }
           }

           // Thêm sự kiện khi menu được hiển thị
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