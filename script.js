document.addEventListener('DOMContentLoaded', () => {
    // ───── НАСТРОЙКА НАВИГАЦИИ ПО ВЫБОРОЧНЫМ ВЛАДКАМ ─────
    const buttons = [
        'button1', 'button2', 'button3', 'button4', 'button6', 'button7',
        'button8', 'button9', 'button10', 'button11', 'button12', 'button13',
        'button14', 'button15', 'button16', 'button17'
    ];

    const contentIds = [
        'Content1', 'Content2', 'Content3', 'Content4', 'Content6', 'Content7',
        'Content8', 'Content9', 'Content10', 'Content11', 'Content12', 'Content13',
        'Content14', 'Content15', 'Content16'
    ];

    const buttonContentMap = {
        'button1': 'Content1',
        'button2': 'Content2',
        'button3': 'Content3',
        'button4': 'Content4',
        'button6': 'Content6',
        'button7': 'Content7',
        'button8': 'Content8',
        'button9': 'Content9',
        'button10': 'Content10',
        'button11': 'Content11',
        'button12': 'Content12',
        'button13': 'Content13',
        'button14': 'Content15',
        'button16': 'Content14',
        'button17': 'Content16'
    };

    buttons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (!btn) return;

        btn.addEventListener('click', function () {
            // Сброс активного класса для всех кнопок бокового меню
            buttons.forEach(id => {
                const b = document.getElementById(id);
                if (b) b.classList.remove('active');
            });

            // Установка активного класса на нажатую кнопку
            this.classList.add('active');

            const targetContentId = buttonContentMap[btnId];
            if (targetContentId) {
                // Плавное скрытие текущих открытых блоков
                contentIds.forEach(cId => {
                    const c = document.getElementById(cId);
                    if (c && !c.classList.contains('hidden') && cId !== targetContentId) {
                        c.classList.add('fade-out');
                        c.classList.remove('fade-in');
                    }
                });

                // Переключение отображения с задержкой под анимацию (150ms)
                setTimeout(() => {
                    contentIds.forEach(cId => {
                        const c = document.getElementById(cId);
                        if (c) {
                            if (cId === targetContentId) {
                                c.classList.remove('hidden');
                                c.classList.add('fade-in');
                                c.classList.remove('fade-out');
                            } else {
                                c.classList.add('hidden');
                            }
                        }
                    });
                }, 150);
            }
        });
    });

    // ───── ВИДЖЕТ ОПИСАНИЯ ДОНАТ-ПРИВИЛЕГИЙ (РАНГОВ) ─────
    const ranks = {
        knight: {
            name: "Негр",
            tag: "knight",
            commands: ["/kit", "/crawl", "/hat", "/workbench", "/suicide"],
            perks: ["2 дома", "Телепортация 4 секунды"]
        },
        duke: {
            name: "Негр+",
            tag: "duke",
            commands: ["/kit", "/ec", "/afk", "/feed", "/ext", "/loom", "/clear", "/ptime", "/pweather"],
            perks: ["3 дома", "Телепортация 3 секунды"]
        },
        graf: {
            name: "Мл.Пидор",
            tag: "graf",
            commands: ["/kit", "/back", "/heal", "/ec [ник]", "/repair", "/top", "/stonecutter"],
            perks: ["4 дома", "Телепортация 2 секунды"]
        },
        king: {
            name: "Пидорас",
            tag: "king",
            commands: ["/kit", "/ext [ник]", "/feed [ник]", "/jump", "/near", "/time", "/grindstone", "/smithingtable"],
            perks: ["5 домов", "Телепортация 1 секунду"]
        },
        emperor: {
            name: "Император",
            tag: "emperor",
            commands: ["/kit", "/anvil", "/broadcast", "/heal [ник]", "/repair all", "/tpahere", "/mute [ник] [время] [причина]", "/unmute"],
            perks: ["Безлимитные дома", "Телепортация без задержки"]
        }
    };

    const widget = document.querySelector(".ranks-widget");
    if (widget) {
        const tabs = widget.querySelectorAll(".tab");
        const content = widget.querySelector("#rank-content");

        if (tabs.length && content) {
            tabs.forEach(tab => {
                tab.addEventListener("click", () => {
                    tabs.forEach(t => t.classList.remove("active"));
                    tab.classList.add("active");
                    showRank(tab.dataset.rank);
                });
            });

            function showRank(key) {
                const r = ranks[key];
                if (!r) return;

                // Перезапуск CSS анимации появления
                content.style.animation = "none";
                content.offsetHeight; // триггер reflow
                content.style.animation = null;

                content.innerHTML = `
                    <div class="rank-title">
                        Ранг: <span class="rank-tag ${r.tag}">${r.name}</span>
                    </div>

                    <div class="section-title">Команды</div>
                    <ul>
                        ${r.commands.map(c => `<li><span class="command">${c}</span></li>`).join("")}
                    </ul>

                    <div class="section-title">Возможности</div>
                    <ul>
                        ${r.perks.map(p => `<li>${p}</li>`).join("")}
                    </ul>
                `;
            }

            // Инициализация отображения первого ранга
            showRank("knight");
        }
    }

    // ───── МОДАЛЬНОЕ ОКНО ДЛЯ ПРОСМОТРА КРАФТОВ (LIGHTBOX) ─────
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (lightbox && lightboxImg) {
        document.querySelectorAll('.item-image img').forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.remove('hidden');
            });
        });

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
                closeLightbox();
            }
        });

        function closeLightbox() {
            lightbox.classList.add('hidden');
            setTimeout(() => {
                if (lightbox.classList.contains('hidden')) {
                    lightboxImg.src = '';
                }
            }, 300);
        }
    }
});