(function () {
    const STORAGE_KEYS = {
        texts: 'ngfpmpn_texts',
        transactions: 'ngfpmpn_transactions',
        settings: 'ngfpmpn_settings'
    };

    const DEFAULTS = {
        settings: {
            foundationName: 'Nada\u010dn\u00ed garan\u010dn\u00ed fond profesora magistra Petra Novotn\u00e9ho',
            shortName: 'NGFPMPN',
            ic: '12345678',
            bank: '987654321/0800',
            paypalUrl: 'https://www.paypal.com/donate',
            logoText: 'NGFPMPN'
        },
        texts: {
            index: {
                welcomeTitle: 'V\u00edtejte',
                welcomeParagraphs: [
                    'Nada\u010dn\u00ed garan\u010dn\u00ed fond profesora magistra Petra Novotn\u00e9ho (NGFPMPN) byl zalo\u017een s jedin\u00fdm c\u00edlem \u2013 poskytovat ochranu, podporu a garanci d\u011btem a mladistv\u00fdm, kte\u0159\u00ed byli zasa\u017eeni nep\u0159\u00edzniv\u00fdmi pov\u011btrnostn\u00edmi podm\u00ednkami. A\u0165 u\u017e jde o prudk\u00fd d\u00e9\u0161\u0165, ne\u010dekan\u00e9 krupobit\u00ed, siln\u00fd v\u00edtr nebo jen dlouhodob\u011b zamra\u010deno \u2013 jsme tu pro n\u011b.',
                    'V\u011b\u0159\u00edme, \u017ee ka\u017ed\u00e9 d\u00edt\u011b m\u00e1 pr\u00e1vo vyr\u016fstat v bezpe\u010d\u00ed p\u0159ed rozmary po\u010das\u00ed. D\u00edky va\u0161im dar\u016fm m\u016f\u017eeme zajistit nepromokav\u00e9 pl\u00e1\u0161t\u011bnky, de\u0161tn\u00edky, gum\u00e1ky a v kritick\u00fdch p\u0159\u00edpadech i p\u0159\u00edst\u0159e\u0161\u00ed p\u0159ed \u017eivly.'
                ],
                whatWeDoTitle: 'Co d\u011bl\u00e1me',
                whatWeDoItems: [
                    'Distribuujeme nepromokav\u00e9 vybaven\u00ed d\u011btem v posti\u017een\u00fdch oblastech',
                    'Financujeme stavbu p\u0159\u00edst\u0159e\u0161k\u016f na zast\u00e1vk\u00e1ch a h\u0159i\u0161t\u00edch',
                    'Poskytujeme psychologickou podporu d\u011btem s traumatem z bou\u0159ky',
                    'Garantujeme n\u00e1hradu za zmokl\u00e9 dom\u00e1c\u00ed \u00fakoly',
                    'Po\u0159\u00e1d\u00e1me osv\u011btov\u00e9 kampan\u011b o bezpe\u010dnosti za nep\u0159\u00edzniv\u00e9ho po\u010das\u00ed'
                ]
            },
            prijmy: {
                description: 'Transparentn\u00ed hospoda\u0159en\u00ed nada\u010dn\u00edho garan\u010dn\u00edho fondu',
                pageText: 'D\u011bkujeme v\u0161em d\u00e1rc\u016fm za jejich \u0161t\u011b drost!'
            },
            historie: {
                subtitle: 'Jak to v\u0161echno za\u010dalo aneb p\u0159\u00edb\u011bh jednoho mokr\u00e9ho odpoledne',
                sections: [
                    {
                        title: 'Po\u010d\u00e1tek \u2013 osudn\u00e1 p\u0159eh\u00e1\u0148ka',
                        content: '14. b\u0159ezna 2023 \u2013 Profesor magistr Petr Novotn\u00fd se vracel z p\u0159edn\u00e1\u0161ky o st\u0159edov\u011bk\u00e9 meteorologii, kdy\u017e ho cestou zastihl neo\u010dek\u00e1van\u00fd lij\u00e1k. Proto\u017ee si s sebou nevzal de\u0161tn\u00edk, byl nucen se schovat pod p\u0159\u00edst\u0159e\u0161ek autobusov\u00e9 zast\u00e1vky, kde ji\u017e st\u00e1li t\u0159i promo\u010den\u00ed \u0161kol\u00e1ci. D\u011bti se t\u0159\u00e1sly zimou a zoufale se d\u00edvaly na oblohu. V tu chv\u00edli Petra Novotn\u00e9ho osv\u00edtila my\u0161lenka: \u201ePro\u010d vlastn\u011b neexistuje fond, kter\u00fd by garantoval ochranu d\u011bt\u00ed p\u0159ed nep\u0159\u00edzn\u00ed po\u010das\u00ed?\u201c B\u011bhem n\u00e1sleduj\u00edc\u00edch t\u00fddn\u016f sepsal zakl\u00e1dac\u00ed listinu a oslovil prvn\u00ed d\u00e1rce.'
                    },
                    {
                        title: 'Zalo\u017een\u00ed fondu',
                        content: '1. \u010dervna 2023 (Den d\u011bt\u00ed) \u2013 Nada\u010dn\u00ed garan\u010dn\u00ed fond profesora magistra Petra Novotn\u00e9ho pro d\u011bti a mladistv\u00e9 zasa\u017een\u00fdch nep\u0159\u00edzniv\u00fdmi pov\u011btrnostn\u00edmi podm\u00ednkami byl ofici\u00e1ln\u011b zaps\u00e1n. Prvn\u00ed kancel\u00e1\u0159 fondu s\u00eddilla v panel\u00e1kov\u00e9m byt\u011b pana Novotn\u00e9ho na s\u00eddli\u0161ti \u010c\u00e1blice. Jako logo fondu byl zvolen \u017elut\u00fd de\u0161tn\u00edk na modr\u00e9m pozad\u00ed.'
                    },
                    {
                        title: 'Prvn\u00ed \u00fasp\u011bchy',
                        content: 'Z\u00e1\u0159\u00ed 2023 \u2013 Fond distribuuje prvn\u00edch 50 pl\u00e1\u0161t\u011bnek d\u011btem v Pr\u016fhonic\u00edch po mimo\u0159\u00e1dn\u011b de\u0161tiv\u00e9m l\u00e9t\u011b. Listopad 2023 \u2013 Prvn\u00ed medi\u00e1ln\u00ed zm\u00ednka v region\u00e1ln\u00edm zpravodaji \u201e\u010c\u00e1blick\u00fd zpravodaj\u201c. Po\u010det d\u00e1rc\u016f stoup\u00e1 na 12. \u00danor 2024 \u2013 Fond z\u00edsk\u00e1v\u00e1 prvn\u00ed grant od Ministerstva \u0161kolstv\u00ed v hodnot\u011b 100 000 K\u010d. \u010cerven 2024 \u2013 Otev\u0159en\u00ed prvn\u00ed \u201esuch\u00e9 z\u00f3ny\u201c na d\u011btsk\u00e9m h\u0159i\u0161ti v Praze 8 \u2013 zast\u0159e\u0161en\u00e9 h\u0159i\u0161t\u011b s lavi\u010dkami a automatem na tepl\u00fd \u010daj.'
                    },
                    {
                        title: 'Sou\u010dasnost a v\u00fdhled do budoucna',
                        content: 'V roce 2026 fond spravuje ji\u017e t\u0159i such\u00e9 z\u00f3ny, pravideln\u011b z\u00e1sobuje pl\u00e1\u0161t\u011bnkami 12 z\u00e1kladn\u00edch \u0161kol a eviduje p\u0159es 300 pravideln\u00fdch d\u00e1rc\u016f. Pan profesor Novotn\u00fd pl\u00e1nuje roz\u0161\u00ed\u0159it p\u016fsobnost i na ochranu p\u0159ed krupobit\u00edm a sn\u011bhovou kalamitou. C\u00edlem pro rok 2027 je vybudovat prvn\u00ed \u201eGaran\u010dn\u00ed st\u0159echu\u201c \u2013 celoro\u010dn\u011b zast\u0159e\u0161en\u00fd venkovn\u00ed prostor pro d\u011bti, kde bude v\u017edy sucho a teplo.'
                    }
                ],
                timeline: [
                    { year: '2023', text: 'Zalo\u017een\u00ed fondu, prvn\u00ed distribuce pl\u00e1\u0161t\u011bnek' },
                    { year: '2024', text: 'Prvn\u00ed grant, otev\u0159en\u00ed prvn\u00ed such\u00e9 z\u00f3ny' },
                    { year: '2025', text: 'Roz\u0161\u00ed\u0159en\u00ed na 12 \u0161kol, 200 pravideln\u00fdch d\u00e1rc\u016f' },
                    { year: '2026', text: '300 d\u00e1rc\u016f, pl\u00e1n v\u00fdstavby Garan\u010dn\u00ed st\u0159echy' }
                ]
            }
        },
        transactions: [
            { id: 1, date: '15. 3. 2025', description: 'Dar od babi\u010dky Anny \u2013 dojata \u010dl\u00e1nkem v novin\u00e1ch', amount: 12000 },
            { id: 2, date: '22. 4. 2025', description: 'P\u0159\u00edsp\u011bvek z grantu "Mokr\u00e9 ale \u0161\u0165astn\u00e9 d\u011bti"', amount: 150000 },
            { id: 3, date: '7. 6. 2025', description: 'Sb\u00edrka na farm\u00e1\u0159sk\u00fdch trz\u00edch v Dejvic\u00edch', amount: 8750 },
            { id: 4, date: '14. 9. 2025', description: 'Firemn\u00ed d\u00e1rcovstv\u00ed \u2013 De\u0161tn\u00edk\u00e1rna s.r.o.', amount: 200000 },
            { id: 5, date: '2. 11. 2025', description: 'P\u0159\u00edsp\u011bvek od pana Novotn\u00e9ho (zakladatel)', amount: 50000 },
            { id: 6, date: '10. 1. 2026', description: 'PayPal dary \u2013 ve\u0159ejn\u00e1 sb\u00edrka "Dejme d\u011btem st\u0159echu"', amount: 34560 },
            { id: 7, date: '18. 3. 2026', description: 'P\u0159\u00edjem z aukce obraz\u016f "Zata\u017eeno, ale hezky"', amount: 95300 },
            { id: 8, date: '2. 5. 2026', description: 'M\u011bs\u00ed\u010dn\u00ed p\u0159\u00edsp\u011bvky pravideln\u00fdch d\u00e1rc\u016f (38 d\u00e1rc\u016f)', amount: 45600 },
            { id: 9, date: '1. 4. 2025', description: 'Provoz webov\u00fdch str\u00e1nek \u2013 hosting a dom\u00e9na (1 rok)', amount: -2990 },
            { id: 10, date: '20. 4. 2025', description: 'N\u00e1kup 200 ks d\u011btsk\u00fdch pl\u00e1\u0161t\u011bnek', amount: -32000 },
            { id: 11, date: '12. 5. 2025', description: 'Tisk let\u00e1k\u016f a informa\u010dn\u00edch materi\u00e1l\u016f', amount: -8500 },
            { id: 12, date: '28. 6. 2025', description: 'V\u00fdplata \u2013 spr\u00e1vce fondu Petr Novotn\u00fd (hrub\u00e1 mzda)', amount: -42000 },
            { id: 13, date: '5. 8. 2025', description: 'N\u00e1kup 50 ks de\u0161tn\u00edk\u016f s logem fondu', amount: -12500 },
            { id: 14, date: '15. 10. 2025', description: 'V\u00fdplata \u2013 \u00fa\u010detn\u00ed Eva Mokr\u00e1 (DPP)', amount: -15000 },
            { id: 15, date: '3. 12. 2025', description: 'V\u00e1no\u010dn\u00ed nad\u00edlka d\u011btem v zatopen\u00fdch oblastech', amount: -28000 },
            { id: 16, date: '10. 2. 2026', description: 'Oprava p\u0159\u00edst\u0159e\u0161ku na autobusov\u00e9 zast\u00e1vce (\u0160t\u011bchovice)', amount: -45000 },
            { id: 17, date: '1. 3. 2026', description: 'V\u00fdplata \u2013 hlavn\u00ed koordin\u00e1tor ter\u00e9nn\u00edch akc\u00ed (hrub\u00e1 mzda)', amount: -38000 },
            { id: 18, date: '22. 4. 2026', description: 'N\u00e1kup 100 p\u00e1r\u016f gumov\u00fdch hol\u00ednek', amount: -18000 }
        ]
    };

    function load(key) {
        try {
            const raw = localStorage.getItem(key);
            if (raw) return JSON.parse(raw);
        } catch (e) { /* ignore */ }
        return null;
    }

    function save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    function getAll() {
        const settings = load(STORAGE_KEYS.settings) || DEFAULTS.settings;
        const texts = load(STORAGE_KEYS.texts) || DEFAULTS.texts;
        const transactions = load(STORAGE_KEYS.transactions) || DEFAULTS.transactions;
        return { settings, texts, transactions };
    }

    function getSettings() { return load(STORAGE_KEYS.settings) || DEFAULTS.settings; }
    function getTexts() { return load(STORAGE_KEYS.texts) || DEFAULTS.texts; }
    function getTransactions() { return load(STORAGE_KEYS.transactions) || DEFAULTS.transactions; }

    function saveSettings(data) { save(STORAGE_KEYS.settings, data); }
    function saveTexts(data) { save(STORAGE_KEYS.texts, data); }
    function saveTransactions(data) { save(STORAGE_KEYS.transactions, data); }

    function applyToPage() {
        const data = getAll();
        const s = data.settings;
        const t = data.texts;
        const tx = data.transactions;

        document.querySelectorAll('[data-content="logo"]').forEach(function (el) {
            el.textContent = s.logoText;
        });
        document.querySelectorAll('[data-content="foundation-name"]').forEach(function (el) {
            el.textContent = s.foundationName;
        });
        document.querySelectorAll('[data-content="ic"]').forEach(function (el) {
            el.textContent = 'I\u010c: ' + s.ic;
        });
        document.querySelectorAll('[data-content="bank"]').forEach(function (el) {
            el.textContent = 'Bankovn\u00ed spojen\u00ed: ' + s.bank;
        });
        document.querySelectorAll('[data-content="paypal"]').forEach(function (el) {
            if (el.tagName === 'A') el.href = s.paypalUrl;
        });

        var path = window.location.pathname.split('/').pop() || 'index.html';

        if (path === 'index.html' || path === '') {
            var wt = document.getElementById('welcome-title');
            if (wt) wt.textContent = t.index.welcomeTitle;
            var wp = document.getElementById('welcome-paragraphs');
            if (wp) {
                wp.innerHTML = '';
                t.index.welcomeParagraphs.forEach(function (p) {
                    var para = document.createElement('p');
                    para.textContent = p;
                    wp.appendChild(para);
                });
            }
            var wd = document.getElementById('whatwedo-title');
            if (wd) wd.textContent = t.index.whatWeDoTitle;
            var wi = document.getElementById('whatwedo-items');
            if (wi) {
                wi.innerHTML = '';
                t.index.whatWeDoItems.forEach(function (item) {
                    var li = document.createElement('li');
                    li.textContent = item;
                    wi.appendChild(li);
                });
            }
        }

        if (path === 'prijmy.html') {
            var pd = document.getElementById('prijmy-description');
            if (pd) pd.textContent = t.prijmy.description;
            var pt = document.getElementById('prijmy-page-text');
            if (pt) pt.textContent = t.prijmy.pageText;
            buildTransactionsTable(tx);
            var bd = document.getElementById('balance-display');
            if (bd) {
                var totalIncome = 0, totalExpense = 0;
                tx.forEach(function (t) {
                    if (t.amount >= 0) totalIncome += t.amount;
                    else totalExpense += Math.abs(t.amount);
                });
                var bal = totalIncome - totalExpense;
                bd.textContent = (bal >= 0 ? '+' : '\u2013') + Math.abs(bal).toLocaleString() + ' K\u010d';
                bd.style.color = bal >= 0 ? '#2b6cb0' : '#e53e3e';
            }
        }

        if (path === 'historie.html') {
            var hs = document.getElementById('historie-subtitle');
            if (hs) hs.textContent = t.historie.subtitle;
            var hc = document.getElementById('historie-content');
            if (hc) {
                hc.innerHTML = '';
                t.historie.sections.forEach(function (sec) {
                    var card = document.createElement('div');
                    card.className = 'card';
                    var h2 = document.createElement('h2');
                    h2.textContent = sec.title;
                    card.appendChild(h2);
                    var p = document.createElement('p');
                    p.textContent = sec.content;
                    card.appendChild(p);
                    hc.appendChild(card);
                });
            }
            var tl = document.getElementById('timeline-body');
            if (tl) {
                tl.innerHTML = '';
                t.historie.timeline.forEach(function (row) {
                    var tr = document.createElement('tr');
                    var td1 = document.createElement('td');
                    td1.textContent = row.year;
                    var td2 = document.createElement('td');
                    td2.textContent = row.text;
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tl.appendChild(tr);
                });
            }
        }
    }

    function buildTransactionsTable(transactions) {
        var tbody = document.getElementById('transactions-body');
        var tf = document.getElementById('transactions-footer');
        if (!tbody) return;

        tbody.innerHTML = '';
        var incomeTotal = 0;
        var expenseTotal = 0;

        transactions.forEach(function (tx) {
            var isIncome = tx.amount >= 0;
            if (isIncome) incomeTotal += tx.amount;
            else expenseTotal += Math.abs(tx.amount);

            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            td1.textContent = tx.date;
            var td2 = document.createElement('td');
            td2.textContent = tx.description;
            var td3 = document.createElement('td');
            td3.className = isIncome ? 'amount-positive' : 'amount-negative';
            td3.textContent = (isIncome ? '+' : '\u2013') + Math.abs(tx.amount).toLocaleString() + ' K\u010d';
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tbody.appendChild(tr);
        });

        if (tf) {
            var balance = incomeTotal - expenseTotal;
            tf.innerHTML = '';
            var tr1 = document.createElement('tr');
            var th0 = document.createElement('th');
            var th1 = document.createElement('th');
            th1.textContent = 'P\u0159\u00edjmy celkem';
            var th2 = document.createElement('th');
            th2.className = 'amount-positive';
            th2.textContent = '+' + incomeTotal.toLocaleString() + ' K\u010d';
            tr1.appendChild(th0);
            tr1.appendChild(th1);
            tr1.appendChild(th2);
            tf.appendChild(tr1);

            var tr2 = document.createElement('tr');
            var th00 = document.createElement('th');
            var th11 = document.createElement('th');
            th11.textContent = 'V\u00fddaje celkem';
            var th22 = document.createElement('th');
            th22.className = 'amount-negative';
            th22.textContent = '\u2013' + expenseTotal.toLocaleString() + ' K\u010d';
            tr2.appendChild(th00);
            tr2.appendChild(th11);
            tr2.appendChild(th22);
            tf.appendChild(tr2);

            var tr3 = document.createElement('tr');
            var th000 = document.createElement('th');
            var th111 = document.createElement('th');
            th111.textContent = 'Z\u016fstatek';
            var th222 = document.createElement('th');
            th222.className = balance >= 0 ? 'amount-positive' : 'amount-negative';
            th222.textContent = (balance >= 0 ? '+' : '\u2013') + Math.abs(balance).toLocaleString() + ' K\u010d';
            tr3.appendChild(th000);
            tr3.appendChild(th111);
            tr3.appendChild(th222);
            tf.appendChild(tr3);
        }
    }

    window.NGFPMPN = {
        STORAGE_KEYS: STORAGE_KEYS,
        DEFAULTS: DEFAULTS,
        load: load,
        save: save,
        getAll: getAll,
        getSettings: getSettings,
        getTexts: getTexts,
        getTransactions: getTransactions,
        saveSettings: saveSettings,
        saveTexts: saveTexts,
        saveTransactions: saveTransactions,
        applyToPage: applyToPage,
        buildTransactionsTable: buildTransactionsTable
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyToPage);
    } else {
        applyToPage();
    }
})();
