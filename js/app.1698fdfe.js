(function () {
    "use strict";
    var t = {
            1109: function (t, e, o) {
                var n = o(9242),
                    s = o(3396),
                    i = o.p + "img/edit.7d7bed7c.svg";
                const a = {
                        class: "wrapper"
                    },
                    l = (0, s._)("img", {
                        src: i,
                        alt: ""
                    }, null, -1),
                    r = [l];

                function d(t, e, o, i, l, d) {
                    const c = (0, s.up)("Header"),
                        u = (0, s.up)("Notes"),
                        _ = (0, s.up)("Modal");
                    return (0, s.wg)(), (0, s.iD)("div", a, [(0, s.Wm)(c, {
                        onFilterNotes: e[0] || (e[0] = t => l.searchVal = t)
                    }), (0, s.Wm)(u, {
                        notes: d.noteFilter,
                        onDelNote: d.delNote,
                        onEditNote: d.editNote
                    }, null, 8, ["notes", "onDelNote", "onEditNote"]), (0, s.wy)((0, s.Wm)(_, {
                        onClose: e[1] || (e[1] = t => l.isModalOpen = !1),
                        onAddNote: d.addNote,
                        edit: l.edit,
                        onNewTask: d.newTask,
                        editTask: l.editTask
                    }, null, 8, ["onAddNote", "edit", "onNewTask", "editTask"]), [
                        [n.F8, l.isModalOpen]
                    ]), (0, s.wy)((0, s._)("button", {
                        class: "modal-btn",
                        onClick: e[2] || (e[2] = t => (l.isModalOpen = !0, l.edit = !1))
                    }, r, 512), [
                        [n.F8, !l.isModalOpen]
                    ])])
                }
                o(560);
                var c = o(7139),
                    u = o.p + "img/search.2c9e71ed.svg",
                    _ = o.p + "img/back.014b4ff1.svg",
                    h = o.p + "img/clear.1d4d165f.svg";
                const p = {
                        class: "header"
                    },
                    v = {
                        key: 0,
                        class: "header__nav"
                    },
                    f = {
                        class: "header__nav-title"
                    },
                    m = (0, s._)("img", {
                        src: u,
                        alt: ""
                    }, null, -1),
                    w = [m],
                    g = {
                        key: 1,
                        class: "header__search"
                    },
                    b = (0, s._)("img", {
                        src: _,
                        alt: ""
                    }, null, -1),
                    k = [b],
                    N = ["placeholder"],
                    y = (0, s._)("button", {
                        class: "header__search-clear"
                    }, [(0, s._)("img", {
                        src: h,
                        alt: ""
                    })], -1);

                function x(t, e, o, i, a, l) {
                    return (0, s.wg)(), (0, s.iD)("header", p, [a.openNav ? ((0, s.wg)(), (0, s.iD)("nav", v, [(0, s._)("button", {
                        class: "header__nav-lang",
                        onClick: e[0] || (e[0] = (...t) => l.switchLang && l.switchLang(...t))
                    }, (0, c.zw)(t.$i18n.locale), 1), (0, s._)("h1", f, (0, c.zw)(t.$t("notes")), 1), (0, s._)("button", {
                        class: "header__nav-search",
                        onClick: e[1] || (e[1] = t => a.openNav = !1)
                    }, w)])) : ((0, s.wg)(), (0, s.iD)("nav", g, [(0, s._)("button", {
                        class: "header__search-back",
                        onClick: e[2] || (e[2] = t => a.openNav = !0)
                    }, k), (0, s.wy)((0, s._)("input", {
                        type: "text",
                        placeholder: t.$t("placeholder"),
                        class: "header__search-inp",
                        "onUpdate:modelValue": e[3] || (e[3] = t => a.search = t)
                    }, null, 8, N), [
                        [n.nr, a.search]
                    ]), y]))])
                }
                var O = {
                        data() {
                            return {
                                openNav: !0,
                                search: ""
                            }
                        },
                        methods: {
                            switchLang() {
                                "ru" == this.$i18n.locale ? this.$i18n.locale = "uz" : this.$i18n.locale = "ru", localStorage.lang = this.$i18n.locale
                            }
                        },
                        watch: {
                            search(t) {
                                this.$emit("filterNotes", t)
                            }
                        }
                    },
                    C = o(89);
                const T = (0, C.Z)(O, [
                    ["render", x]
                ]);
                var $ = T,
                    D = o.p + "img/list.4ed3d4be.svg",
                    M = o.p + "img/grid.dbae4039.svg";
                const j = {
                        class: "notes"
                    },
                    z = {
                        class: "container"
                    },
                    S = {
                        class: "notes__top"
                    },
                    E = {
                        class: "notes__top-title"
                    },
                    F = {
                        src: D,
                        alt: ""
                    },
                    L = {
                        src: M,
                        alt: ""
                    };

                function V(t, e, o, i, a, l) {
                    const r = (0, s.up)("NotesItem");
                    return (0, s.wg)(), (0, s.iD)("div", j, [(0, s._)("div", z, [(0, s._)("div", S, [(0, s._)("h2", E, (0, c.zw)(o.notes.length > 0 ? t.$t("todo") : t.$t("notodo")), 1), (0, s._)("button", {
                        class: "notes__top-btn",
                        onClick: e[0] || (e[0] = t => a.view = !a.view)
                    }, [(0, s.wy)((0, s._)("img", F, null, 512), [
                        [n.F8, a.view]
                    ]), (0, s.wy)((0, s._)("img", L, null, 512), [
                        [n.F8, 0 == a.view]
                    ]), (0, s._)("span", null, (0, c.zw)(a.view ? t.$t("list") : t.$t("grid")), 1)])]), (0, s._)("div", {
                        class: (0, c.C_)(["notes__list", {
                            active: !a.view
                        }])
                    }, [((0, s.wg)(!0), (0, s.iD)(s.HY, null, (0, s.Ko)(o.notes, (e => ((0, s.wg)(), (0, s.j4)(r, {
                        key: e.id,
                        note: e,
                        view: a.view,
                        onDelNote: o => t.$emit("delNote", e.id),
                        onEditNote: o => t.$emit("editNote", e.id)
                    }, null, 8, ["note", "view", "onDelNote", "onEditNote"])))), 128))], 2)])])
                }
                var Z = o.p + "img/del.f04c87ff.svg";
                const J = {
                        class: "notes__item"
                    },
                    A = {
                        class: "notes__item-top-title"
                    },
                    B = {
                        class: "notes__item-top-date"
                    },
                    H = {
                        class: "notes__item-text"
                    },
                    I = {
                        class: "notes__item-btns"
                    },
                    U = (0, s._)("img", {
                        src: i,
                        alt: ""
                    }, null, -1),
                    W = (0, s._)("span", null, "редактировать", -1),
                    q = [U, W],
                    P = (0, s._)("img", {
                        src: Z,
                        alt: ""
                    }, null, -1),
                    Y = (0, s._)("span", null, "Удалить", -1),
                    K = [P, Y];

                function Q(t, e, o, n, i, a) {
                    return (0, s.wg)(), (0, s.iD)("div", J, [(0, s._)("div", {
                        class: (0, c.C_)(["notes__item-top", {
                            active: !o.view
                        }])
                    }, [(0, s._)("h3", A, (0, c.zw)(o.note.title), 1), (0, s._)("p", B, (0, c.zw)(o.note.date), 1)], 2), (0, s._)("p", H, (0, c.zw)(o.note.text), 1), (0, s._)("div", I, [(0, s._)("button", {
                        class: "notes__item-btn edit",
                        onClick: e[0] || (e[0] = e => t.$emit("editNote", o.note.id))
                    }, q), (0, s._)("button", {
                        class: "notes__item-btn del",
                        onClick: e[1] || (e[1] = e => t.$emit("delNote", o.note.id))
                    }, K)])])
                }
                var R = {
                    props: {
                        note: {
                            typeof: Object
                        },
                        view: {
                            typeof: Boolean
                        }
                    }
                };
                const G = (0, C.Z)(R, [
                    ["render", Q]
                ]);
                var X = G,
                    tt = {
                        props: {
                            notes: {
                                typeof: Array
                            }
                        },
                        components: {
                            NotesItem: X
                        },
                        data() {
                            return {
                                view: !0
                            }
                        }
                    };
                const et = (0, C.Z)(tt, [
                    ["render", V]
                ]);
                var ot = et;
                const nt = {
                        class: "modal__block-title"
                    },
                    st = {
                        class: "modal__block-inputs"
                    },
                    it = {
                        for: "inp"
                    },
                    at = (0, s._)("span", null, "Title", -1),
                    lt = {
                        for: "area"
                    },
                    rt = (0, s._)("span", null, "Content", -1),
                    dt = {
                        class: "modal__block-btns"
                    };

                function ct(t, e, o, i, a, l) {
                    return (0, s.wg)(), (0, s.j4)(n.uT, {
                        name: "bounce"
                    }, {
                        default: (0, s.w5)((() => [(0, s._)("div", {
                            class: "modal",
                            onClick: e[6] || (e[6] = (...t) => l.closeModal && l.closeModal(...t))
                        }, [(0, s._)("div", {
                            class: "modal__block",
                            onClick: e[5] || (e[5] = (0, n.iM)((() => {}), ["stop"]))
                        }, [(0, s._)("h2", nt, (0, c.zw)(o.edit ? "Изменить заметку" : "Добавить заметку"), 1), (0, s._)("div", st, [(0, s._)("label", it, [at, (0, s.wy)((0, s._)("input", {
                            type: "text",
                            id: "inp",
                            "onUpdate:modelValue": e[0] || (e[0] = t => a.title = t)
                        }, null, 512), [
                            [n.nr, a.title]
                        ])]), (0, s._)("label", lt, [rt, (0, s.wy)((0, s._)("textarea", {
                            id: "area",
                            "onUpdate:modelValue": e[1] || (e[1] = t => a.text = t)
                        }, null, 512), [
                            [n.nr, a.text]
                        ])])]), (0, s._)("div", dt, [(0, s._)("button", {
                            class: "modal__block-btns-btn del",
                            onClick: e[2] || (e[2] = (...t) => l.closeModal && l.closeModal(...t))
                        }, " Отмена "), o.edit ? ((0, s.wg)(), (0, s.iD)("button", {
                            key: 1,
                            class: "modal__block-btns-btn edit",
                            onClick: e[4] || (e[4] = (...t) => l.newTask && l.newTask(...t))
                        }, " Изменить ")) : ((0, s.wg)(), (0, s.iD)("button", {
                            key: 0,
                            class: "modal__block-btns-btn edit",
                            onClick: e[3] || (e[3] = (...t) => l.addNote && l.addNote(...t))
                        }, " Добавить "))])])])])),
                        _: 1
                    })
                }
                var ut = o(3029),
                    _t = {
                        props: {
                            edit: {
                                typeof: Boolean
                            },
                            editTask: {
                                typeof: Object
                            }
                        },
                        data() {
                            return {
                                title: "",
                                text: ""
                            }
                        },
                        methods: {
                            closeModal() {
                                this.$emit("close"), this.text = this.title = ""
                            },
                            addNote() {
                                if ("" != this.title && "" != this.text) {
                                    const t = {
                                        id: (0, ut.Z)(),
                                        title: this.title,
                                        text: this.text,
                                        date: (new Date).toLocaleDateString()
                                    };
                                    this.$emit("addNote", t), this.closeModal()
                                }
                            },
                            newTask() {
                                if ("" != this.title && "" != this.text) {
                                    const t = {
                                        id: this.editTask.id,
                                        title: this.title,
                                        text: this.text,
                                        date: (new Date).toLocaleDateString()
                                    };
                                    this.$emit("newTask", t), this.closeModal()
                                }
                            }
                        }
                    };
                const ht = (0, C.Z)(_t, [
                    ["render", ct]
                ]);
                var pt = ht,
                    vt = {
                        components: {
                            Header: $,
                            Notes: ot,
                            Modal: pt
                        },
                        data() {
                            return {
                                notes: [],
                                isModalOpen: !1,
                                edit: !1,
                                editTask: null,
                                searchVal: ""
                            }
                        },
                        methods: {
                            addNote(t) {
                                this.notes.push(t)
                            },
                            delNote(t) {
                                let e = this.notes.findIndex((e => e.id == t));
                                this.notes.splice(e, 1)
                            },
                            getNotes() {
                                let t = localStorage.notes;
                                t && (this.notes = JSON.parse(t))
                            },
                            editNote(t) {
                                this.isModalOpen = this.edit = !0;
                                let e = this.notes.find((e => e.id == t));
                                this.editTask = e
                            },
                            newTask(t) {
                                this.notes.forEach((e => {
                                    e.id == t.id && (e.title = t.title, e.text = t.text, e.date = t.date)
                                }))
                            }
                        },
                        mounted() {
                            this.getNotes()
                        },
                        watch: {
                            notes: {
                                handler() {
                                    localStorage.notes = JSON.stringify(this.notes)
                                },
                                deep: !0
                            }
                        },
                        computed: {
                            noteFilter() {
                                return this.searchVal ? this.notes.filter((t => t.title.toLowerCase().includes(this.searchVal.toLowerCase()))) : this.notes
                            }
                        }
                    };
                const ft = (0, C.Z)(vt, [
                    ["render", d]
                ]);
                var mt = ft,
                    wt = o(7853),
                    gt = JSON.parse('{"notes":"Eslatmalar","placeholder":"Qidirmoq","todo":"Barcha Eslatmalar","notodo":"Eslatmala Yoq","list":"Ro\'yhat","grid":"To\'r"}'),
                    bt = JSON.parse('{"notes":"Заметки","placeholder":"Поиск","todo":"Все Заметки","notodo":"Нет заметок","list":"Список","grid":"Сетка"}');
                const kt = {
                        uz: gt,
                        ru: bt
                    },
                    Nt = localStorage.lang,
                    yt = (0, wt.o)({
                        locale: Nt || "ru",
                        messages: kt
                    });
                (0, n.ri)(mt).use(yt).mount("#app")
            }
        },
        e = {};

    function o(n) {
        var s = e[n];
        if (void 0 !== s) return s.exports;
        var i = e[n] = {
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, o), i.exports
    }
    o.m = t,
        function () {
            var t = [];
            o.O = function (e, n, s, i) {
                if (!n) {
                    var a = 1 / 0;
                    for (c = 0; c < t.length; c++) {
                        n = t[c][0], s = t[c][1], i = t[c][2];
                        for (var l = !0, r = 0; r < n.length; r++)(!1 & i || a >= i) && Object.keys(o.O).every((function (t) {
                            return o.O[t](n[r])
                        })) ? n.splice(r--, 1) : (l = !1, i < a && (a = i));
                        if (l) {
                            t.splice(c--, 1);
                            var d = s();
                            void 0 !== d && (e = d)
                        }
                    }
                    return e
                }
                i = i || 0;
                for (var c = t.length; c > 0 && t[c - 1][2] > i; c--) t[c] = t[c - 1];
                t[c] = [n, s, i]
            }
        }(),
        function () {
            o.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t["default"]
                } : function () {
                    return t
                };
                return o.d(e, {
                    a: e
                }), e
            }
        }(),
        function () {
            o.d = function (t, e) {
                for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
            }
        }(),
        function () {
            o.g = function () {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (t) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function () {
            o.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
        }(),
        function () {
            o.p = "/todoList/"
        }(),
        function () {
            var t = {
                143: 0
            };
            o.O.j = function (e) {
                return 0 === t[e]
            };
            var e = function (e, n) {
                    var s, i, a = n[0],
                        l = n[1],
                        r = n[2],
                        d = 0;
                    if (a.some((function (e) {
                            return 0 !== t[e]
                        }))) {
                        for (s in l) o.o(l, s) && (o.m[s] = l[s]);
                        if (r) var c = r(o)
                    }
                    for (e && e(n); d < a.length; d++) i = a[d], o.o(t, i) && t[i] && t[i][0](), t[i] = 0;
                    return o.O(c)
                },
                n = self["webpackChunktodo"] = self["webpackChunktodo"] || [];
            n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
        }();
    var n = o.O(void 0, [998], (function () {
        return o(1109)
    }));
    n = o.O(n)
})();
//# sourceMappingURL=app.1698fdfe.js.map