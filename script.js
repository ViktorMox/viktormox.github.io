document.addEventListener('DOMContentLoaded', () => {
    // ───── НАСТРОЙКА НАВИГАЦИИ ПО ВЫБОРОЧНЫМ ВЛАДКАМ (data-target) ─────
    const sidebarButtons = document.querySelectorAll('.sidebar-btn');
    const contentBlocks = document.querySelectorAll('.content-block');

    sidebarButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const targetId = this.dataset.target;
            if (!targetId) return;

            // Сброс активного класса для всех кнопок
            sidebarButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                // Скрываем все блоки с плавной анимацией затухания
                contentBlocks.forEach(block => {
                    if (!block.classList.contains('hidden') && block.id !== targetId) {
                        block.classList.add('fade-out');
                        block.classList.remove('fade-in');
                    }
                });

                // Переключаем отображение с задержкой под анимацию (150ms)
                setTimeout(() => {
                    contentBlocks.forEach(block => {
                        if (block.id === targetId) {
                            block.classList.remove('hidden');
                            block.classList.add('fade-in');
                            block.classList.remove('fade-out');
                        } else {
                            block.classList.add('hidden');
                        }
                    });
                }, 150);
            }
        });
    });

    // ───── КОПИРОВАНИЕ IP АДРЕСА ─────
    const ipCopyBtn = document.getElementById('ip-copy-btn');
    const ipTooltip = document.getElementById('ip-tooltip');
    if (ipCopyBtn && ipTooltip) {
        ipCopyBtn.addEventListener('click', () => {
            const ip = "mc.globeland.ru";
            navigator.clipboard.writeText(ip).then(() => {
                ipTooltip.textContent = "Скопировано!";
                ipTooltip.classList.add('copied');
                setTimeout(() => {
                    ipTooltip.textContent = "Скопировать";
                    ipTooltip.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Не удалось скопировать IP: ', err);
            });
        });
    }

    // ───── ДИНАМИЧЕСКИЕ КНОПКИ КОПИРОВАНИЯ КОМАНД ─────
    document.querySelectorAll('.team-table tbody tr').forEach(row => {
        const firstCell = row.cells[0];
        if (firstCell) {
            const commandText = firstCell.textContent.trim();
            // Проверяем, является ли текст в ячейке командой
            if (commandText && (commandText.startsWith('/') || commandText.startsWith('!'))) {
                firstCell.innerHTML = `
                    <span class="cmd-text">${commandText}</span>
                    <button class="copy-cmd-btn" title="Скопировать команду" data-command="${commandText}">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    </button>
                `;
            }
        }
    });

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.copy-cmd-btn');
        if (btn) {
            const cmd = btn.dataset.command;
            navigator.clipboard.writeText(cmd).then(() => {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = `
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--primary-accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                `;
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                }, 1500);
            }).catch(err => {
                console.error('Ошибка копирования: ', err);
            });
        }
    });

    // ───── ПОИСК ПО БАЗЕ ЗНАНИЙ (WIKI SEARCH) ─────
    const searchInput = document.getElementById('wiki-search');
    const searchClear = document.getElementById('search-clear');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase().trim();
            
            if (query.length > 0) {
                if (searchClear) searchClear.style.display = 'block';
            } else {
                if (searchClear) searchClear.style.display = 'none';
            }

            let firstVisibleBtn = null;

            sidebarButtons.forEach(btn => {
                const targetId = btn.dataset.target;
                if (!targetId) return;

                const contentDiv = document.getElementById(targetId);
                if (!contentDiv) return;

                // Поиск по текстовому содержимому блока
                const textContent = contentDiv.textContent.toLowerCase();
                
                if (textContent.includes(query)) {
                    btn.style.display = '';
                    if (!firstVisibleBtn) firstVisibleBtn = btn;
                } else {
                    btn.style.display = 'none';
                }
            });

            // Если текущая вкладка скрылась, переключаем на первую доступную
            const activeBtn = document.querySelector('.sidebar-btn.active');
            if (activeBtn && activeBtn.style.display === 'none' && firstVisibleBtn) {
                firstVisibleBtn.click();
            }
        });

        if (searchClear) {
            searchClear.addEventListener('click', () => {
                searchInput.value = '';
                searchClear.style.display = 'none';
                sidebarButtons.forEach(btn => {
                    btn.style.display = '';
                });
                // Возвращаемся на первую вкладку
                if (sidebarButtons.length) {
                    sidebarButtons[0].click();
                }
                searchInput.focus();
            });
        }
    }

    // ───── ВИДЖЕТ ОПИСАНИЯ ДОНАТ-ПРИВИЛЕГИЙ (РАНГОВ) ─────
    const ranks = {
        knight: {
            name: "Адепт",
            tag: "knight",
            commands: ["/kit", "/crawl", "/hat", "/workbench", "/suicide"],
            perks: ["2 дома", "Телепортация 4 секунды"]
        },
        duke: {
            name: "Барон",
            tag: "duke",
            commands: ["/kit", "/ec", "/afk", "/feed", "/ext", "/loom", "/clear", "/ptime", "/pweather"],
            perks: ["3 дома", "Телепортация 3 секунды"]
        },
        graf: {
            name: "Паладин",
            tag: "graf",
            commands: ["/kit", "/back", "/heal", "/ec [ник]", "/repair", "/top", "/stonecutter"],
            perks: ["4 дома", "Телепортация 2 секунды"]
        },
        king: {
            name: "Маршал",
            tag: "king",
            commands: ["/kit", "/ext [ник]", "/feed [ник]", "/jump", "/near", "/time", "/grindstone", "/smithingtable"],
            perks: ["5 домов", "Телепортация 1 секунду"]
        },
        emperor: {
            name: "Император",
            tag: "emperor",
            commands: ["/kit", "/anvil", "/broadcast", "/heal [ник]", "/repair all", "/tpahere", "/mute [ник] [время] [причина]"],
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