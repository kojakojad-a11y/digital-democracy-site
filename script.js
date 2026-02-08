// ハンバーガーメニューの開閉
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        // メニューの開閉を切り替え
        navMenu.classList.toggle('active');
        // ハンバーガーアイコンのアニメーション
        hamburger.classList.toggle('active');
    });

    // メニュー項目をクリックしたらメニューを閉じる
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});
