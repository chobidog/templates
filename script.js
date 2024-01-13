
//フルカレンダー
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2023-11-07',
        locale: 'ja', // 日本語に設定
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        buttonText: {
            today: '今日',
            dayGridMonth: '月', // 月ビュー
            timeGridWeek: '週', // 週ビュー
            timeGridDay: '日'  // 日ビュー
        },
        events: [
            // サンプルイベントデータ
            { title: 'イベント1', start: '2023-11-10', end: '2023-11-12' },
            { title: 'イベント2', start: '2023-11-15', allDay: true },
            { title: 'イベント3', start: '2023-11-20T10:00:00', end: '2023-11-20T12:00:00' }
        ]
    });
    calendar.render();
});

//サイドバー
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        // サイドバーの状態をトグル
        $('#sidebar').toggleClass('active');

        // メインコンテンツの位置や幅を調整
        if ($('#sidebar').hasClass('active')) {
            $('.main').css({
                'margin-left': '0' // ここでサイドバーがアクティブな時のメインコンテンツのスタイルを設定
            });
        } else {
            $('.main').css({
                'margin-left': '250px' // サイドバーが非アクティブな時のメインコンテンツのスタイルを設定
            });
        }
    });
});
//ドロップダウン
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.getElementById('dropdownMenuButton');
    dropdown.addEventListener('click', function(event) {
        var menu = this.nextElementSibling;
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        if (!isExpanded) {
            menu.classList.add('show');
        } else {
            menu.classList.remove('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // ドロップダウントグル要素を取得
    var dropdownToggle = document.querySelector('.dropdown-toggle');

    // ドロップダウンメニュー要素を取得
    var dropdownMenu = document.querySelector('.dropdown-menu');

    // ドロップダウントグル要素のクリックイベントリスナーを設定
    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault(); // デフォルトのリンク動作を防止
        dropdownMenu.classList.toggle('show'); // メニューの表示/非表示を切り替え
    });

    // ドキュメント全体のクリックイベントリスナーを設定
    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            // ドロップダウンメニューまたはトグル要素の外側がクリックされた場合、メニューを非表示にする
            dropdownMenu.classList.remove('show');
        }
    });
});

