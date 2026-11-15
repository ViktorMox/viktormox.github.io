document.addEventListener('DOMContentLoaded', () => {
    // ───── НАСТРОЙКА НАВИГАЦИИ ПО ВКЛАДКАМ (САЙДБАР) ─────
    const sidebarButtons = document.querySelectorAll('.sidebar-btn');
    const contentBlocks = document.querySelectorAll('.content-block');

    /**
     * Переключение активной вкладки с плавной анимацией
     * @param {string} targetId ID целевого блока контента
     * @param {Function} [callback] Функция обратного вызова после завершения анимации
     */
    function switchTab(targetId, callback) {
        if (!targetId) return;
        const targetContent = document.getElementById(targetId);
        if (!targetContent) return;

        // Обновляем активную кнопку в сайдбаре
        sidebarButtons.forEach(b => {
            if (b.dataset.target === targetId) {
                b.classList.add('active');
                // Прокручиваем сайдбар к активной кнопке, если нужно
                if (typeof b.scrollIntoView === 'function') {
                    b.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            } else {
                b.classList.remove('active');
            }
        });

        // Скрываем все неактивные блоки с анимацией затухания
        contentBlocks.forEach(block => {
            if (!block.classList.contains('hidden') && block.id !== targetId) {
                block.classList.add('fade-out');
                block.classList.remove('fade-in');
            }
        });

        // Переключаем блоки
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
            if (typeof callback === 'function') {
                callback();
            }
        }, 150);
    }

    // Слушатели кликов по кнопкам сайдбара
    sidebarButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const targetId = this.dataset.target;
            if (targetId) {
                switchTab(targetId);
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

    // ───── ВИДЖЕТ ОПИСАНИЯ ДОНАТ-ПРИВИЛЕГИЙ (РАНГОВ) ─────
    const ranks = {
        knight: {
            name: "Адепт",
            tag: "knight",
            price: "299 ₽ навсегда",
            commands: ["/hat", "/workbench (/craft)", "/suicide", "/kits (набор раз в 24ч)"],
            perks: [
                "До 2 точек дома (/sethome)",
                "Аукцион: до 4 лотов (/ah)",
                "Биржа заказов: до 4 ордеров (/orders)",
                "+10% к опыту навыков (AuraSkills)",
                "Мгновенная телепортация (0 сек.)"
            ]
        },
        duke: {
            name: "Барон",
            tag: "duke",
            price: "499 ₽ навсегда",
            commands: ["/ec (/enderchest)", "/afk", "/feed", "/ext", "/loom", "/clear (/ci)", "/ptime", "/pweather"],
            perks: [
                "До 3 точек дома (/sethome)",
                "Аукцион: до 5 лотов (/ah)",
                "Биржа заказов: до 5 ордеров (/orders)",
                "+15% к опыту навыков (AuraSkills)",
                "Набор Барона в /kits (раз в 48ч) + права Адепта"
            ]
        },
        graf: {
            name: "Паладин",
            tag: "graf",
            price: "799 ₽ навсегда",
            commands: ["/back", "/heal", "/ec [ник]", "/repair (/fix)", "/top", "/stonecutter"],
            perks: [
                "До 4 точек дома (/sethome)",
                "Аукцион: до 6 лотов (/ah)",
                "Биржа заказов: до 6 ордеров (/orders)",
                "+15% к опыту навыков (AuraSkills)",
                "Набор Паладина в /kits (раз в 48ч) + права Барона"
            ]
        },
        king: {
            name: "Маршал",
            tag: "king",
            price: "1099 ₽ навсегда",
            commands: ["/near", "/time (/day, /night)", "/ext [ник]", "/feed [ник]", "/grindstone", "/smithingtable"],
            perks: [
                "До 5 точек дома (/sethome)",
                "Аукцион: до 8 лотов (/ah)",
                "Биржа заказов: до 8 ордеров (/orders)",
                "+15% к опыту навыков (AuraSkills)",
                "Набор Маршала в /kits (раз в 72ч) + права Паладина"
            ]
        },
        emperor: {
            name: "Император",
            tag: "emperor",
            price: "1499 ₽ навсегда",
            commands: ["/anvil", "/broadcast (/bc)", "/heal [ник]", "/repair all", "/tpahere", "/mute [ник] [время] [причина]", "/tempmute", "/unmute"],
            perks: [
                "До 100 точек дома (/sethome)",
                "Аукцион: до 10 лотов (/ah)",
                "Биржа заказов: до 10 ордеров (/orders)",
                "+15% к опыту навыков (AuraSkills)",
                "Набор Императора в /kits (раз в 96ч) + права Маршала"
            ]
        }
    };

    const widget = document.querySelector(".ranks-widget");
    let showRank = null;
    if (widget) {
        const tabs = widget.querySelectorAll(".tab");
        const content = widget.querySelector("#rank-content");

        if (tabs.length && content) {
            showRank = function (key) {
                const r = ranks[key];
                if (!r) return;

                tabs.forEach(t => {
                    if (t.dataset.rank === key) {
                        t.classList.add("active");
                    } else {
                        t.classList.remove("active");
                    }
                });

                // Перезапуск CSS анимации появления
                content.style.animation = "none";
                content.offsetHeight; // триггер reflow
                content.style.animation = null;

                content.innerHTML = `
                    <div class="rank-title">
                        <span>Ранг: <span class="rank-tag ${r.tag}">${r.name}</span></span>
                        <span class="rank-price-badge">${r.price}</span>
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
            };

            tabs.forEach(tab => {
                tab.addEventListener("click", () => {
                    showRank(tab.dataset.rank);
                });
            });

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

    // ═════════════════════════════════════════════════════════════════
    // ───── ГЛОБАЛЬНАЯ СИСТЕМА ПОИСКА ПО СЛОВАМ ВСЕГО САЙТА ─────
    // ═════════════════════════════════════════════════════════════════
    const searchContainer = document.getElementById('search-container');
    const searchInputWrapper = document.getElementById('search-input-wrapper');
    const searchInput = document.getElementById('wiki-search');
    const searchClear = document.getElementById('search-clear');
    const searchDropdown = document.getElementById('search-results-dropdown');

    if (searchInput && searchDropdown) {
        // Карта названий разделов из сайдбара
        const sectionTitleMap = {};
        sidebarButtons.forEach(btn => {
            const target = btn.dataset.target;
            if (target) {
                sectionTitleMap[target] = btn.textContent.trim();
            }
        });

        // 1. Построение поискового индекса по всему сайту
        const searchIndex = [];

        function buildSearchIndex() {
            searchIndex.length = 0; // очищаем

            contentBlocks.forEach(block => {
                const sectionId = block.id;
                const sectionTitle = sectionTitleMap[sectionId] || block.querySelector('h1')?.textContent.trim() || 'Раздел';

                // ИНДЕКСИРУЕМ ТАБЛИЦЫ (Команды и их описания)
                const tables = block.querySelectorAll('.team-table');
                tables.forEach(table => {
                    let categoryTitle = '';
                    // Проверяем предыдущий заголовок перед таблицей (h2, h3)
                    let prev = table.closest('.table-wrapper')?.previousElementSibling || table.previousElementSibling;
                    if (prev && /^H[1-6]$/i.test(prev.tagName)) {
                        categoryTitle = prev.textContent.trim();
                    }

                    table.querySelectorAll('tbody tr').forEach(row => {
                        const cells = row.querySelectorAll('td');
                        if (cells.length >= 2) {
                            const cmd = cells[0].textContent.trim();
                            const desc = cells[1].textContent.trim();
                            searchIndex.push({
                                type: 'command',
                                sectionId: sectionId,
                                sectionTitle: sectionTitle,
                                subtitle: categoryTitle,
                                title: cmd,
                                text: `${cmd} ${desc}`,
                                element: row
                            });
                        }
                    });
                });

                // ИНДЕКСИРУЕМ КАСТОМНЫЕ ПРЕДМЕТЫ (Крафты)
                block.querySelectorAll('.item-card').forEach(card => {
                    const title = card.querySelector('.item-title')?.textContent.trim() || '';
                    if (title) {
                        searchIndex.push({
                            type: 'craft',
                            sectionId: sectionId,
                            sectionTitle: sectionTitle,
                            subtitle: 'Рецепт крафта',
                            title: title,
                            text: title,
                            element: card
                        });
                    }
                });

                // ИНДЕКСИРУЕМ ТЕКСТОВЫЕ БЛОКИ (Заголовки, параграфы, списки)
                // Выбираем только смысловые текстовые узлы, исключая уже проиндексированные таблицы и карточки
                const textElements = block.querySelectorAll('h2, h3, h4, p, .con2, .con3, .con4, .con5, .con7, .con16, .con17, li');
                textElements.forEach(el => {
                    // Пропускаем элементы внутри таблиц и карточек
                    if (el.closest('.team-table') || el.closest('.item-card') || el.closest('.ranks-widget')) {
                        return;
                    }

                    const rawText = el.textContent.trim();
                    if (!rawText || rawText.length < 3) return;
                    // Пропускаем служебные плашки IP
                    if (rawText.includes('IP > mc.globeland.ru') && rawText.length < 40) return;

                    // Находим ближайший заголовок раздела для контекста
                    let contextHeading = '';
                    let sibling = el.previousElementSibling;
                    while (sibling) {
                        if (/^H[1-4]$/i.test(sibling.tagName)) {
                            contextHeading = sibling.textContent.trim();
                            break;
                        }
                        sibling = sibling.previousElementSibling;
                    }

                    searchIndex.push({
                        type: 'text',
                        sectionId: sectionId,
                        sectionTitle: sectionTitle,
                        subtitle: contextHeading,
                        title: /^H[1-4]$/i.test(el.tagName) ? rawText : '',
                        text: rawText,
                        element: el
                    });
                });
            });

            // ИНДЕКСИРУЕМ ДАННЫЕ ДОНАТ-ПРИВИЛЕГИЙ (РАНГОВ)
            Object.keys(ranks).forEach(key => {
                const r = ranks[key];
                const rankText = `${r.name} ${r.price} ${r.commands.join(' ')} ${r.perks.join(' ')}`;
                searchIndex.push({
                    type: 'rank',
                    sectionId: 'donate',
                    sectionTitle: sectionTitleMap['donate'] || '📜 Донат, описание',
                    subtitle: `Привилегия [${r.name}]`,
                    title: `Ранг «${r.name}»`,
                    text: rankText,
                    rankKey: key,
                    element: document.getElementById('rank-content') || document.querySelector('.ranks-widget')
                });
            });
        }

        // Построение индекса после загрузки
        buildSearchIndex();

        // 2. Вспомогательные функции для поиска и подсветки
        function escapeHTML(str) {
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');
        }

        function escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        /**
         * Выделение найденных слов тегом <mark>
         */
        function highlightTokens(text, tokens) {
            let safeText = escapeHTML(text);
            tokens.forEach(token => {
                if (!token) return;
                const reg = new RegExp(`(${escapeRegExp(token)})`, 'gi');
                safeText = safeText.replace(reg, '<mark class="search-highlight">$1</mark>');
            });
            return safeText;
        }

        /**
         * Формирование короткой выжимки (snippet) с контекстом вокруг найденного слова
         */
        function createSnippet(text, tokens) {
            const lowerText = text.toLowerCase();
            let firstMatchIdx = -1;
            let matchedTokenLen = 0;

            for (const token of tokens) {
                const idx = lowerText.indexOf(token);
                if (idx !== -1 && (firstMatchIdx === -1 || idx < firstMatchIdx)) {
                    firstMatchIdx = idx;
                    matchedTokenLen = token.length;
                }
            }

            if (firstMatchIdx === -1) {
                const sample = text.length > 90 ? text.slice(0, 90) + '...' : text;
                return highlightTokens(sample, tokens);
            }

            const contextBefore = 35;
            const contextAfter = 65;
            const start = Math.max(0, firstMatchIdx - contextBefore);
            const end = Math.min(text.length, firstMatchIdx + matchedTokenLen + contextAfter);

            let snippet = text.slice(start, end);
            if (start > 0) snippet = '...' + snippet;
            if (end < text.length) snippet = snippet + '...';

            return highlightTokens(snippet, tokens);
        }

        let currentResults = [];
        let selectedResultIndex = -1;
        let searchDebounceTimer = null;

        /**
         * Выполнение поиска по индексу
         */
        function performSearch(query) {
            const trimmed = query.trim();

            if (trimmed.length === 0) {
                searchDropdown.style.display = 'none';
                if (searchInputWrapper) searchInputWrapper.classList.remove('has-text');
                currentResults = [];
                selectedResultIndex = -1;
                return;
            }

            if (searchInputWrapper) searchInputWrapper.classList.add('has-text');

            if (trimmed.length < 2) {
                searchDropdown.innerHTML = `
                    <div class="search-hint">
                        Введите минимум 2 символа для поиска по всем страницам...
                    </div>
                `;
                searchDropdown.style.display = 'flex';
                currentResults = [];
                selectedResultIndex = -1;
                return;
            }

            const tokens = trimmed.toLowerCase().split(/\s+/).filter(Boolean);

            const scoredMatches = [];

            searchIndex.forEach(item => {
                const lowerText = item.text.toLowerCase();
                const lowerTitle = (item.title || '').toLowerCase();

                // Все токены должны присутствовать в тексте элемента
                const matchesAll = tokens.every(token => lowerText.includes(token));
                if (!matchesAll) return;

                // Подсчёт релевантности (Score)
                let score = 10;

                // Точное совпадение полной фразы
                if (lowerText.includes(trimmed.toLowerCase())) {
                    score += 40;
                }

                // Совпадение в названии команды или заголовке
                if (lowerTitle) {
                    if (lowerTitle === trimmed.toLowerCase()) {
                        score += 100;
                    } else if (lowerTitle.startsWith(trimmed.toLowerCase())) {
                        score += 70;
                    } else if (tokens.some(t => lowerTitle.includes(t))) {
                        score += 40;
                    }
                }

                if (item.type === 'command') score += 15;
                if (item.type === 'craft') score += 10;

                scoredMatches.push({
                    ...item,
                    score: score,
                    snippet: createSnippet(item.text, tokens),
                    highlightedTitle: item.title ? highlightTokens(item.title, tokens) : ''
                });
            });

            // Сортировка по релевантности (наивысший балл первый)
            scoredMatches.sort((a, b) => b.score - a.score);

            // Ограничение выдачи (топ-25 совпадений)
            currentResults = scoredMatches.slice(0, 25);
            selectedResultIndex = -1;

            renderDropdown(trimmed, currentResults);
        }

        /**
         * Отрисовка выпадающего меню результатов
         */
        function renderDropdown(query, results) {
            if (results.length === 0) {
                searchDropdown.innerHTML = `
                    <div class="search-dropdown-header">
                        <span>Поиск по вики</span>
                        <span class="search-count">0 совпадений</span>
                    </div>
                    <div class="search-no-results">
                        <span class="search-no-results-icon">🔍</span>
                        По запросу «<strong>${escapeHTML(query)}</strong>» ничего не найдено.<br>
                        Попробуйте изменить формулировку или команду.
                    </div>
                `;
                searchDropdown.style.display = 'flex';
                return;
            }

            let html = `
                <div class="search-dropdown-header">
                    <span>Найдено в статьях</span>
                    <span class="search-count">${results.length} ${getResultsDeclension(results.length)}</span>
                </div>
                <div class="search-results-list">
            `;

            results.forEach((res, idx) => {
                const sub = res.subtitle ? `<span class="search-result-subtitle">• ${escapeHTML(res.subtitle)}</span>` : '';
                const titleHtml = res.highlightedTitle ? `<div class="search-result-title">${res.highlightedTitle}</div>` : '';

                html += `
                    <div class="search-result-item" data-index="${idx}">
                        <div class="search-result-meta">
                            <span class="search-result-badge">${escapeHTML(res.sectionTitle)}</span>
                            ${sub}
                        </div>
                        ${titleHtml}
                        <div class="search-result-snippet">${res.snippet}</div>
                    </div>
                `;
            });

            html += `
                </div>
                <div class="search-dropdown-footer">
                    <span>Навигация по результатам:</span>
                    <span class="search-footer-keys">
                        <kbd>↑</kbd><kbd>↓</kbd> выбор <kbd>Enter</kbd> перейти <kbd>Esc</kbd> закрыть
                    </span>
                </div>
            `;

            searchDropdown.innerHTML = html;
            searchDropdown.style.display = 'flex';

            // Навешиваем клики на каждый элемент результата
            searchDropdown.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const idx = parseInt(item.dataset.index, 10);
                    if (!isNaN(idx) && currentResults[idx]) {
                        activateSearchResult(currentResults[idx]);
                    }
                });
            });
        }

        function getResultsDeclension(n) {
            const rem10 = n % 10;
            const rem100 = n % 100;
            if (rem100 >= 11 && rem100 <= 19) return 'совпадений';
            if (rem10 === 1) return 'совпадение';
            if (rem10 >= 2 && rem10 <= 4) return 'совпадения';
            return 'совпадений';
        }

        /**
         * Переход к выбранному результату поиска с плавной прокруткой и подсветкой
         */
        function activateSearchResult(result) {
            if (!result) return;

            // Скрываем меню поиска
            searchDropdown.style.display = 'none';

            // Переключаемся на нужную вкладку
            switchTab(result.sectionId, () => {
                // Если это ранг из донат-виджета — активируем его вкладку
                if (result.rankKey && typeof showRank === 'function') {
                    showRank(result.rankKey);
                }

                // Плавно скроллим к целевому элементу
                if (result.element && typeof result.element.scrollIntoView === 'function') {
                    setTimeout(() => {
                        result.element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });

                        // Запускаем эффект неоновой пульсации
                        document.querySelectorAll('.search-target-flash').forEach(el => {
                            el.classList.remove('search-target-flash');
                        });

                        result.element.classList.add('search-target-flash');
                        setTimeout(() => {
                            result.element.classList.remove('search-target-flash');
                        }, 2800);
                    }, 80);
                }
            });
        }

        /**
         * Обновление визуально выбранного элемента в списке результатов (клавиатура)
         */
        function updateKeyboardSelection() {
            const items = searchDropdown.querySelectorAll('.search-result-item');
            items.forEach((item, idx) => {
                if (idx === selectedResultIndex) {
                    item.classList.add('selected');
                    if (typeof item.scrollIntoView === 'function') {
                        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                } else {
                    item.classList.remove('selected');
                }
            });
        }

        // 3. Обработчики событий поиска

        // Ввод текста с быстрым дебаунсом (70мс)
        searchInput.addEventListener('input', () => {
            clearTimeout(searchDebounceTimer);
            searchDebounceTimer = setTimeout(() => {
                performSearch(searchInput.value);
            }, 70);
        });

        // Фокус на инпуте: если уже есть запрос, открываем дропдаун
        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim().length > 0) {
                performSearch(searchInput.value);
            }
        });

        // Очистка поиска кнопкой ×
        if (searchClear) {
            searchClear.addEventListener('click', () => {
                searchInput.value = '';
                searchDropdown.style.display = 'none';
                if (searchInputWrapper) searchInputWrapper.classList.remove('has-text');
                currentResults = [];
                selectedResultIndex = -1;
                searchInput.focus();
            });
        }

        // Закрытие при клике снаружи
        document.addEventListener('click', (e) => {
            if (searchContainer && !searchContainer.contains(e.target)) {
                searchDropdown.style.display = 'none';
            }
        });

        // Навигация с клавиатуры (Стрелки, Enter, Escape)
        searchInput.addEventListener('keydown', (e) => {
            if (searchDropdown.style.display === 'none') {
                if (e.key === 'ArrowDown' && searchInput.value.trim().length >= 2) {
                    performSearch(searchInput.value);
                }
                return;
            }

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (currentResults.length > 0) {
                    selectedResultIndex = (selectedResultIndex + 1) % currentResults.length;
                    updateKeyboardSelection();
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (currentResults.length > 0) {
                    selectedResultIndex = (selectedResultIndex - 1 + currentResults.length) % currentResults.length;
                    updateKeyboardSelection();
                }
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (currentResults.length > 0) {
                    const targetIdx = selectedResultIndex >= 0 ? selectedResultIndex : 0;
                    activateSearchResult(currentResults[targetIdx]);
                }
            } else if (e.key === 'Escape') {
                searchDropdown.style.display = 'none';
                searchInput.blur();
            }
        });

        // Глобальный хоткей: Ctrl+K или клавиша "/" для мгновенного перехода в поиск
        document.addEventListener('keydown', (e) => {
            // Если фокус уже в поле ввода — не перехватываем "/"
            const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
            const isTyping = activeTag === 'input' || activeTag === 'textarea';

            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                searchInput.focus();
                searchInput.select();
            } else if (e.key === '/' && !isTyping) {
                e.preventDefault();
                searchInput.focus();
                searchInput.select();
            }
        });
    }

    // ───── ДАННЫЕ АКТУАЛЬНОГО РЕСУРС-ПАКА ─────
    const packMetaEl = document.getElementById('pack-meta-info');
    const packDownloadBtn = document.getElementById('pack-download-btn');
    if (packMetaEl || packDownloadBtn) {
        fetch(`downloads/pack-info.json?t=${Date.now()}`, { cache: 'no-store' })
            .then(res => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
            .then(info => {
                if (packDownloadBtn && info.fileName) {
                    const verQuery = info.sha1Short ? `?v=${encodeURIComponent(info.sha1Short)}` : '';
                    packDownloadBtn.href = `downloads/${encodeURIComponent(info.fileName)}${verQuery}`;
                    packDownloadBtn.setAttribute('download', String(info.fileName));
                }

                if (packMetaEl) {
                    const updatedDate = info.updatedLabel ? String(info.updatedLabel).split(' ')[0] : '';
                    const entries = [
                        updatedDate ? ['🕒 Обновлён: ', updatedDate] : null,
                        info.sizeMb ? ['📦 Размер: ', `${info.sizeMb} MB`] : null,
                    ].filter(Boolean);

                    if (entries.length > 0) {
                        packMetaEl.textContent = '';
                        entries.forEach(([label, val]) => {
                            const span = document.createElement('span');
                            span.className = 'pack-meta-pill';
                            span.appendChild(document.createTextNode(label));
                            const valEl = document.createElement('strong');
                            valEl.textContent = String(val);
                            span.appendChild(valEl);
                            packMetaEl.appendChild(span);
                        });
                    }
                }
            })
            .catch(() => {
                // При открытии локально (file://) или ошибке сети остаются встроенные fallback-данные в HTML
            });
    }
});
