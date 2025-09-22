document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('header');

    // ハンバーガーメニューをクリックした時の処理
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('nav-open');
        navMenu.classList.toggle('nav-open');
    });

    // ナビゲーションのリンクをクリックした時にメニューを閉じる
    navMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            hamburgerMenu.classList.remove('nav-open');
            navMenu.classList.remove('nav-open');
        }
    });

    // スクロールイベントを監視してヘッダーのスタイルを変更
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // 50pxスクロールしたらクラスを追加
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
});
