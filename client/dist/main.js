! function (e) {
  var t = {};

  function a(s) {
      if (t[s]) return t[s].exports;
      var i = t[s] = {
          i: s,
          l: !1,
          exports: {}
      };
      return e[s].call(i.exports, i, i.exports, a), i.l = !0, i.exports
  }
  a.m = e, a.c = t, a.d = function (e, t, s) {
      a.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: s
      })
  }, a.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }), Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }, a.t = function (e, t) {
      if (1 & t && (e = a(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (a.r(s), Object.defineProperty(s, "default", {
          enumerable: !0,
          value: e
      }), 2 & t && "string" != typeof e)
          for (var i in e) a.d(s, i, function (t) {
              return e[t]
          }.bind(null, i));
      return s
  }, a.n = function (e) {
      var t = e && e.__esModule ? function () {
          return e.default
      } : function () {
          return e
      };
      return a.d(t, "a", t), t
  }, a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }, a.p = "", a(a.s = 0)
}([
  function (e, t, a) {
      "use strict";
      var s = this && this.__awaiter || function (e, t, a, s) {
          return new(a || (a = Promise))((function (i, n) {
              function r(e) {
                  try {
                      l(s.next(e))
                  } catch (e) {
                      n(e)
                  }
              }

              function o(e) {
                  try {
                      l(s.throw(e))
                  } catch (e) {
                      n(e)
                  }
              }

              function l(e) {
                  var t;
                  e.done ? i(e.value) : (t = e.value, t instanceof a ? t : new a((function (e) {
                      e(t)
                  }))).then(r, o)
              }
              l((s = s.apply(e, t || [])).next())
          }))
      };
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      const i = a(1),
          n = a(2);
      a(3);
      let r = e => !1;
      ! function () {
          let e = 0;
          const t = ["b", "u", "w", "g", "r"],
              a = t.concat(["*"]),
              o = ["level1", "level2", "level3"];

          function l(e, t, s, n, r) {
              return a.map(a => {
                  var o = a + "chip";
                  return "*" === a && (o = "schip"), i.createElement("div", {
                      className: "gem " + o,
                      key: a + "_colors_" + r
                  }, i.createElement("div", {
                      className: "bubble"
                  }, e[a]), i.createElement("div", {
                      className: "underlay",
                      onClick: s.bind(t, a)
                  }, n))
              })
          }

          function c(e, t) {
              return e.map(e => i.createElement(m, {
                  key: e.uuid,
                  noble: e,
                  game: t
              }))
          }
          class d extends i.PureComponent {
              render() {
                  const e = this.props.card,
                      a = this.props.game;
                  var s = a.buy.bind(a, e.uuid);
                  const n = t => {
                      t.preventDefault(), a.reserve.bind(a)(e.uuid)
                  };
                  return e.color ? i.createElement("div", {
                      className: "card card-" + e.color + " card-" + e.level,
                      id: e.uuid
                  }, i.createElement("div", {
                      className: "reserve",
                      onClick: n
                  }, i.createElement("img", {
                      className: "floppy",
                      src: "client/img/floppy.png"
                  })), i.createElement("div", {
                      className: "overlay",
                      onClick: s
                  }), i.createElement("div", {
                      className: "underlay"
                  }, i.createElement("div", {
                      className: "header"
                  }, i.createElement("div", {
                      className: "color " + e.color + "gem"
                  }), i.createElement("div", {
                      className: "points"
                  }, e.points > 0 && e.points)), i.createElement("div", {
                      className: "costs"
                  }, t.map(t => {
                      if (e.cost[t] > 0) return i.createElement("div", {
                          key: e.uuid + "_cost_" + t,
                          className: "cost " + t
                      }, e.cost[t])
                  })))) : i.createElement("div", {
                      className: "deck " + e.level
                  })
              }
          }
          class m extends i.PureComponent {
              render() {
                  const e = this.props.noble,
                      a = this.props.game,
                      s = a.noble.bind(a, e.uuid);
                  return i.createElement("div", {
                      className: "noble",
                      onClick: s,
                      id: "noble" + e.id
                  }, i.createElement("div", {
                      className: "side-bar"
                  }, i.createElement("div", {
                      className: "points"
                  }, e.points > 0 && e.points), i.createElement("div", {
                      className: "requirement"
                  }, t.map(t => {
                      if (e.requirement[t] > 0) return i.createElement("div", {
                          key: e.uuid + "_req_" + t,
                          className: "requires " + t
                      }, e.requirement[t])
                  }))))
              }
          }
          class h extends i.PureComponent {
              constructor() {
                  super(...arguments), this.state = {
                      editingName: null
                  }, this.editName = e => {
                      this.setState({
                          editingName: e.target.value
                      })
                  }, this.focusName = e => {
                      e.target.select()
                  }, this.submitName = () => {
                      this.props.game.rename(this.state.editingName), this.setState({
                          editingName: null
                      })
                  }, this.keypress = e => {
                      "Enter" === e.key && this.submitName()
                  }
              }
              render() {
                  const e = this.props.game,
                      s = this.props.pid,
                      n = e.selectPlayer.bind(e, s),
                      r = {};
                  a.map(e => {
                      r[e] = {
                          cards: 0,
                          gems: this.props.gems[e]
                      }
                  });
                  const o = t.map(t => {
                          var a = this.props.cards[t].map(a => (r[t].cards += 1, i.createElement("div", {
                              key: s + "_card_" + a.uuid,
                              className: "colorSetInner"
                          }, i.createElement(d, {
                              key: a.uuid,
                              card: a,
                              game: e
                          }))));
                          return i.createElement("div", {
                              key: s + "_set_" + t,
                              className: "colorSet"
                          }, a, i.createElement("div", {
                              className: a.length > 0 ? "endcap" : "spacer"
                          }))
                      }),
                      m = a.map(e => i.createElement("div", {
                          className: "statSet",
                          key: "stat" + e
                      }, i.createElement("div", {
                          className: `stat stat${"*"===e?"y":e}`
                      }, r[e].gems + ("*" == e ? "" : " / " + r[e].cards)), "*" === e ? i.createElement(i.Fragment, null) : i.createElement("div", null, i.createElement("img", {
                          className: "labelImg",
                          src: "client/img/labels.png"
                      })))),
                      h = e.props.pid === s ? " you selected" : "",
                      u = e.props.pid === s ? " (you)" : "",
                      p = l(this.props.gems, e, e.discard, "X", s),
                      g = this.props.reserved ? this.props.reserved.map(t => i.createElement(d, {
                          key: t.uuid + "_inner",
                          card: t,
                          game: e
                      })) : [],
                      y = this.props.reserved ? g.length : this.props.nreserved,
                      f = c(this.props.nobles, e);
                  return i.createElement("div", {
                      className: "player" + h
                  }, i.createElement("div", {
                      className: "playerHeader"
                  }, i.createElement("div", {
                      className: "playerPoints"
                  }, this.props.points), null == this.state.editingName ? i.createElement(i.Fragment, null, i.createElement("div", {
                      className: "playerName",
                      onClick: n
                  }, this.props.name), e.props.pid === s && null == this.state.editingName ? i.createElement("div", {
                      className: "pencil",
                      onClick: () => this.setState({
                          editingName: this.props.name
                      })
                  }, "✏️") : i.createElement(i.Fragment, null)) : i.createElement("div", {
                      className: "playerName"
                  }, i.createElement("input", {
                      className: "nameInput",
                      type: "text",
                      value: this.state.editingName,
                      autoFocus: !0,
                      onKeyPress: this.keypress,
                      onFocus: this.focusName,
                      onBlur: this.submitName,
                      onChange: this.editName
                  })), i.createElement("div", {
                      className: "playerName2"
                  }, u), e.state.turn === s && i.createElement("div", {
                      className: "turnIndicator"
                  }, "←")), e.state.selectedPlayer === s ? i.createElement("div", {
                      className: "floater"
                  }, i.createElement("div", {
                      className: "cards"
                  }, o), i.createElement("div", {
                      className: "nobles"
                  }, f), i.createElement("div", {
                      className: "gems"
                  }, p), i.createElement("div", {
                      className: "reserveArea"
                  }, y > 0 && i.createElement("div", null, i.createElement("div", {
                      className: "reserveText"
                  }, "reserved"), i.createElement("div", {
                      className: "reserveCards"
                  }, g)))) : i.createElement("div", {
                      className: "stats"
                  }, i.createElement("div", {
                      className: "gem-stats"
                  }, m), i.createElement("div", {
                      className: "reservedStat"
                  }, g)))
              }
          }
          class u extends i.PureComponent {
              render() {
                  return i.createElement("div", null, i.createElement("div", {
                      className: "deck " + this.props.name
                  }, i.createElement("div", {
                      className: "remaining"
                  }, this.props.remaining), i.createElement("div", {
                      className: "overlay"
                  }), i.createElement("div", {
                      className: "reserve",
                      onClick: this.props.game.reserve.bind(this.props.game, this.props.name)
                  }, i.createElement("img", {
                      className: "floppy",
                      src: "client/img/floppy.png"
                  }))), i.createElement("div", {
                      className: "c_" + this.props.name + " face-up-cards"
                  }, i.createElement("div", {
                      className: "cards-inner"
                  }, this.props.cards && this.props.cards.map(e => i.createElement(d, {
                      key: e.uuid,
                      card: e,
                      game: this.props.game
                  })))))
              }
          }
          class p extends i.PureComponent {
              constructor() {
                  super(...arguments), this.state = {
                      players: [],
                      gems: {},
                      cards: {},
                      chat: [],
                      decks: {},
                      nobles: [],
                      log: [],
                      turn: -1,
                      winner: null,
                      mode: "normal",
                      error: null,
                      selectedPlayer: -1,
                      phase: "pregame",
                      showChat: !1,
                      showLog: !1,
                      chatNotify: !1
                  }, this.isMyTurn = e => e == this.props.pid, this.updateState = e => {
                      if (e.state) {
                          if (this.isMyTurn(e.state.turn) ? ("waiting" == this.state.mode && (f.badge("!"), document.getElementById("notify").play()), this.setState({
                              mode: "normal"
                          })) : this.setState({
                              mode: "waiting"
                          }), -1 == this.state.selectedPlayer && this.props.pid < 4 && this.setState({
                              selectedPlayer: this.props.pid
                          }), this.setState({
                              log: e.state.log,
                              cards: e.state.cards,
                              decks: e.state.decks,
                              players: e.state.players,
                              gems: e.state.gems,
                              nobles: e.state.nobles,
                              turn: e.state.turn
                          }), null !== e.state.winner && "postgame" != this.state.phase && (alert(e.state.players[e.state.winner].name + " wins!"), this.setState({
                              phase: "postgame"
                          })), e.chat) {
                              var t = this.state.chat;
                              if (t && t[t.length - 1] && e.chat[e.chat.length - 1]) {
                                  var a = t[t.length - 1],
                                      s = e.chat[e.chat.length - 1];
                                  a.msg != s.msg && s.pid != this.props.pid && (f.badge("."), document.getElementById("notify").play(), this.state.showChat || this.setState({
                                      chatNotify: !0
                                  }))
                              }
                              this.setState({
                                  chat: e.chat
                              })
                          }
                          for (const e of document.getElementsByClassName("scroller")) e.scrollTop = e.scrollHeight
                      }
                  }, this.loginArgs = () => "?pid=" + this.props.pid + "&uuid=" + this.props.uuid, this.take = e => {
                      this.act("take", e)
                  }, this.discard = e => {
                      confirm("Are you sure you want to discard a gem?") && this.act("discard", e)
                  }, this.selectPlayer = e => {
                      this.setState({
                          selectedPlayer: e
                      })
                  }, this.buy = e => {
                      this.act("buy", e)
                  }, this.reserve = e => {
                      this.act("reserve", e)
                  }, this.noble = e => {
                      this.act("noble_visit", e)
                  }, this.rename = e => s(this, void 0, void 0, (function * () {
                      const t = yield fetch(`/rename/${this.props.gid}/${e}${this.loginArgs()}`, {
                              method: "POST"
                          }),
                          a = yield t.json();
                      r(a)
                  })), this.act = (e, t) => s(this, void 0, void 0, (function * () {
                      const a = yield fetch("/game/" + this.props.gid + "/" + e + "/" + t + this.loginArgs(), {
                              method: "POST"
                          }),
                          s = yield a.json();
                      r(s) || this.updateState(s)
                  })), this.nextTurn = () => s(this, void 0, void 0, (function * () {
                      const e = yield fetch("/game/" + this.props.gid + "/next" + this.loginArgs(), {
                              method: "POST"
                          }),
                          t = yield e.json();
                      r(t) || this.updateState(t)
                  })), this.poll = () => s(this, void 0, void 0, (function * () {
                      const e = yield fetch("/poll/" + this.props.gid + this.loginArgs()),
                          t = yield e.json();
                      r(t) || (this.updateState(t), this.poll())
                  })), this.stat = () => s(this, void 0, void 0, (function * () {
                      const e = yield fetch(`/stat/${this.props.gid}${this.loginArgs()}`),
                          t = yield e.json();
                      r(t) || this.updateState(t)
                  })), this.chat = e => s(this, void 0, void 0, (function * () {
                      const t = document.getElementById("chat-inner");
                      if (13 == e.which) {
                          const e = yield fetch("/game/" + this.props.gid + "/chat" + this.loginArgs(), {
                              method: "POST",
                              body: JSON.stringify({
                                  msg: t.value
                              })
                          });
                          t.value = "";
                          const a = yield e.json();
                          r(a) || this.updateState(a)
                      }
                  }))
              }
              componentDidMount() {
                  this.stat(), this.poll()
              }
              render() {
                  var e = this.state.players.map(e => i.createElement(h, {
                          selectedPlayer: this.state.selectedPlayer,
                          key: e.uuid,
                          pid: e.id,
                          name: e.name,
                          points: e.score,
                          game: this,
                          cards: e.cards,
                          nobles: e.nobles,
                          gems: e.gems,
                          reserved: e.reserved,
                          nreserved: e.reserved.length
                      })),
                      t = l(this.state.gems, this, this.take, "", "game"),
                      a = c(this.state.nobles, this),
                      s = this.state.log.map((e, t) => i.createElement("div", {
                          key: "log-line-" + t,
                          className: "line"
                      }, i.createElement("span", {
                          className: "pid"
                      }, "[" + e.pid + "] "), i.createElement("span", {
                          className: "msg"
                      }, e.msg))),
                      n = this.state.chat.map((e, t) => i.createElement("div", {
                          key: "chat-line-" + t,
                          className: "line"
                      }, i.createElement("span", {
                          className: `name name${e.pid}`
                      }, e.name + ": "), i.createElement("span", {
                          className: "msg"
                      }, e.msg))),
                      r = o.map(e => i.createElement(u, {
                          key: e,
                          game: this,
                          name: e,
                          cards: this.state.cards[e],
                          remaining: this.state.decks[e]
                      }));
                  return i.createElement("div", null, i.createElement("div", {
                      id: "game-board"
                  }, i.createElement("div", {
                      id: "common-area"
                  }, i.createElement("div", {
                      id: "noble-area",
                      className: "split"
                  }, a), i.createElement("div", {
                      id: "level-area",
                      className: "split"
                  }, r), i.createElement("div", {
                      className: "reserve-info"
                  }, i.createElement("div", {
                      className: "reserve-info-inner"
                  }, i.createElement("div", null, "Click on card to buy, click on "), i.createElement("div", null, i.createElement("img", {
                      className: "floppy",
                      src: "client/img/floppy.png"
                  })), i.createElement("div", null, " to reserve."))), i.createElement("div", {
                      id: "gem-area",
                      className: "you"
                  }, t)), i.createElement("div", {
                      id: "player-area"
                  }, e)), i.createElement("div", {
                      id: "log-box",
                      style: {
                          bottom: this.state.showLog ? -4 : -514
                      }
                  }, i.createElement("div", {
                      className: "title",
                      onClick: () => this.setState({
                          showLog: !this.state.showLog
                      })
                  }, "::Log"), i.createElement("div", {
                      className: "scroller"
                  }, s)), i.createElement("div", {
                      id: "chat-box",
                      onClick: () => this.setState({
                          chatNotify: !1
                      }),
                      style: {
                          bottom: this.state.showChat ? -4 : -314
                      }
                  }, i.createElement("div", {
                      className: `title${this.state.chatNotify?" blinking":""}`,
                      onClick: () => this.setState({
                          showChat: !this.state.showChat
                      })
                  }, "::Chat"), i.createElement("div", {
                      className: "scroller"
                  }, n), i.createElement("div", {
                      id: "chat"
                  }, i.createElement("span", {
                      id: "prompt"
                  }, ">"), i.createElement("input", {
                      id: "chat-inner",
                      type: "text",
                      onKeyPress: this.chat
                  }))), this.state.turn >= 0 && this.props.pid >= 0 && this.props.pid < 4 && i.createElement("button", {
                      id: "pass-turn",
                      onClick: this.nextTurn,
                      style: {
                          opacity: this.isMyTurn(this.state.turn) ? 1 : .3
                      }
                  }, "Pass turn"))
              }
          }
          const g = e => i.createElement("div", {
              className: "error-box",
              style: {
                  opacity: e.opacity
              }
          }, i.createElement("div", {
              className: "error-box-inner"
          }, e.error));
          class y extends i.PureComponent {
              constructor() {
                  super(...arguments), this.state = {
                      startKey: null,
                      loading: !0,
                      lobby: !1,
                      joined: !1,
                      pid: -1,
                      uuid: "",
                      gid: "",
                      gameName: "",
                      errorOpacity: 0,
                      error: null
                  }, this.creating = !1, this.join = (e, t) => s(this, void 0, void 0, (function * () {
                      const a = this.readSession();
                      if (a[e] && !a[e].loading && (a[e].joined || "spectate" === t)) return this.setState(a[e]), void this.save();
                      const s = yield fetch(`/${t}/${e}`, {
                              method: "POST"
                          }),
                          i = yield s.json();
                      404 !== i.status ? this.showError(i) || (this.setState({
                          joined: "join" === t,
                          loading: !1,
                          pid: i.id,
                          uuid: i.uuid,
                          gid: e
                      }), this.save()) : this.createGame()
                  })), this.showError = t => {
                      let a = null;
                      return t ? !!(t.error || t.result && t.result.error) && (a = t.error || t.result.error, 404 === t.status ? (this.clear(), this.setState({
                          loading: !0,
                          joined: !1,
                          pid: -1,
                          uuid: ""
                      }), this.join(this.state.gid, "spectate"), !0) : (this.setState({
                          error: a,
                          errorOpacity: 1
                      }), clearTimeout(e), e = setTimeout(() => {
                          this.setState({
                              errorOpacity: 0
                          })
                      }, 4e3), !0)) : (a = "Request failed", !0)
                  }, this.createGame = () => s(this, void 0, void 0, (function * () {
                      if (this.creating) return;
                      this.creating = !0;
                      const e = "" === this.state.gid ? this.state.gameName : this.state.gid,
                          t = yield fetch(`/create/${e}`, {
                              method: "POST"
                          }),
                          a = yield t.json();
                      this.showError(a) || (history.replaceState(null, "Splendor", `/${a.game}`), this.join(a.game, "join"), this.setState({
                          startKey: a.start,
                          loading: !0,
                          lobby: !1
                      }))
                  })), this.readSession = () => {
                      var e = window.localStorage.getItem("splendor");
                      return null === e ? {} : JSON.parse(e)
                  }, this.save = () => {
                      setTimeout(() => {
                          this.saveRaw(this.state)
                      }, 100)
                  }, this.clear = () => {
                      this.saveRaw(null)
                  }, this.saveRaw = e => {
                      const t = this.readSession();
                      null === e ? delete t[this.state.gid] : t[this.state.gid] = e, window.localStorage.splendor = JSON.stringify(t)
                  }, this.startGame = () => s(this, void 0, void 0, (function * () {
                      const e = yield fetch(`/start/${this.state.gid}/${this.state.startKey}`, {
                              method: "POST"
                          }),
                          t = yield e.json();
                      this.showError(t) || (this.setState({
                          startKey: null
                      }), this.save())
                  })), this.nameChange = e => {
                      this.setState({
                          gameName: e.target.value
                      })
                  }, this.keyPress = e => {
                      "Enter" === e.key && this.createGame()
                  }
              }
              componentDidMount() {
                  if (r = this.showError, "/" === window.location.pathname) return void fetch("/suggest").then(e => s(this, void 0, void 0, (function * () {
                      const t = yield e.json();
                      this.setState({
                          lobby: !0,
                          gameName: t.result.game,
                          loading: !1
                      })
                  })));
                  const e = window.location.pathname.substring(1);
                  var t = this.readSession();
                  this.setState(Object.assign(Object.assign({}, t[e]), {
                      gid: e
                  })), this.state.loading && this.join(e, "spectate")
              }
              render() {
                  return this.state.loading ? i.createElement("div", {
                      id: "game"
                  }, i.createElement(g, {
                      error: this.state.error,
                      opacity: this.state.errorOpacity
                  })) : this.state.lobby ? i.createElement("div", {
                      className: "lobby"
                  }, i.createElement("div", {
                      className: "main-title"
                  }, "Splendor"), i.createElement("div", {
                      className: "desc"
                  }, "Play Splendor online with others. Enter a game name or use the suggested game name to start a game."), i.createElement("div", {
                      className: "name"
                  }, i.createElement("input", {
                      className: "game-name",
                      type: "text",
                      onChange: this.nameChange,
                      onKeyPress: this.keyPress,
                      value: this.state.gameName
                  }), i.createElement("button", {
                      onClick: this.createGame,
                      className: "create-game"
                  }, "Create Game")), i.createElement(g, {
                      error: this.state.error,
                      opacity: this.state.errorOpacity
                  })) : i.createElement("div", {
                      id: "game"
                  }, i.createElement("div", {
                      id: "game-title"
                  }, i.createElement("div", {
                      className: "link"
                  }, "Share this link with friends to join in or watch: ", i.createElement("a", {
                      href: "."
                  }, `${document.location.href}`)), i.createElement("div", {
                      className: "buttons"
                  }, !this.state.joined && i.createElement("button", {
                      className: "start-game",
                      onClick: () => this.join(this.state.gid, "join")
                  }, "Join Game"), this.state.startKey && 0 == this.state.pid && i.createElement("button", {
                      className: "start-game",
                      onClick: this.startGame
                  }, "Start Game"))), this.state.pid >= 0 && this.state.gid && this.state.uuid && i.createElement(p, {
                      key: this.state.pid,
                      gid: this.state.gid,
                      pid: this.state.pid,
                      uuid: this.state.uuid
                  }), i.createElement(g, {
                      error: this.state.error,
                      opacity: this.state.errorOpacity
                  }))
              }
          }
          const f = new Favico({
              position: "up"
          });
          document.onclick = () => {
              f.badge("")
          }, n.render(i.createElement("div", null, i.createElement(y, null)), document.getElementById("content"))
      }()
  },
  function (e, t) {
      e.exports = React
  },
  function (e, t) {
      e.exports = ReactDOM
  },
  function (e, t, a) {
      var s;
      /**
       * @license MIT
       * @fileOverview Favico animations
       * @author Miroslav Magda, http://blog.ejci.net
       * @version 0.3.10
       */
      ! function () {
          var a = function (e) {
              "use strict";
              e = e || {};
              var t, a, s, i, n, r, o, l, c, d, m, h, u, p, g, y, f = {
                  bgColor: "#d00",
                  textColor: "#fff",
                  fontFamily: "sans-serif",
                  fontStyle: "bold",
                  type: "circle",
                  position: "down",
                  animation: "slide",
                  elementId: !1,
                  dataUrl: !1,
                  win: window
              };
              (u = {}).ff = "undefined" != typeof InstallTrigger, u.chrome = !!window.chrome, u.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0, u.ie = /*@cc_on!@*/ !1, u.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, u.supported = u.chrome || u.ff || u.opera;
              var v = [];
              m = function () {}, l = h = !1;
              var w = {
                  ready: function () {
                      l = !0, w.reset(), m()
                  }, reset: function () {
                      l && (v = [], c = !1, d = !1, r.clearRect(0, 0, i, s), r.drawImage(o, 0, 0, i, s), N.setIcon(n), window.clearTimeout(p), window.clearTimeout(g))
                  }
              };
              w.start = function () {
                  if (l && !d) {
                      if (v.length > 0) {
                          d = !0;
                          var e = function () {
                              ["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach((function (e) {
                                  e in v[0].options && (t[e] = v[0].options[e])
                              })), k.run(v[0].options, (function () {
                                  c = v[0], d = !1, v.length > 0 && (v.shift(), w.start())
                              }), !1)
                          };
                          c ? k.run(c.options, (function () {
                              e()
                          }), !0) : e()
                      }
                  }
              };
              var E = {},
                  b = function (e) {
                      return e.n = "number" == typeof e.n ? Math.abs(0 | e.n) : e.n, e.x = i * e.x, e.y = s * e.y, e.w = i * e.w, e.h = s * e.h, e.len = ("" + e.n).length, e
                  };
              E.circle = function (e) {
                  var a = !1;
                  2 === (e = b(e)).len ? (e.x = e.x - .4 * e.w, e.w = 1.4 * e.w, a = !0) : e.len >= 3 && (e.x = e.x - .65 * e.w, e.w = 1.65 * e.w, a = !0), r.clearRect(0, 0, i, s), r.drawImage(o, 0, 0, i, s), r.beginPath(), r.font = t.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? .85 : 1)) + "px " + t.fontFamily, r.textAlign = "center", a ? (r.moveTo(e.x + e.w / 2, e.y), r.lineTo(e.x + e.w - e.h / 2, e.y), r.quadraticCurveTo(e.x + e.w, e.y, e.x + e.w, e.y + e.h / 2), r.lineTo(e.x + e.w, e.y + e.h - e.h / 2), r.quadraticCurveTo(e.x + e.w, e.y + e.h, e.x + e.w - e.h / 2, e.y + e.h), r.lineTo(e.x + e.h / 2, e.y + e.h), r.quadraticCurveTo(e.x, e.y + e.h, e.x, e.y + e.h - e.h / 2), r.lineTo(e.x, e.y + e.h / 2), r.quadraticCurveTo(e.x, e.y, e.x + e.h / 2, e.y)) : r.arc(e.x + e.w / 2, e.y + e.h / 2, e.h / 2, 0, 2 * Math.PI), r.fillStyle = "rgba(" + t.bgColor.r + "," + t.bgColor.g + "," + t.bgColor.b + "," + e.o + ")", r.fill(), r.closePath(), r.beginPath(), r.stroke(), r.fillStyle = "rgba(" + t.textColor.r + "," + t.textColor.g + "," + t.textColor.b + "," + e.o + ")", "number" == typeof e.n && e.n > 999 ? r.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+", Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .2 * e.h)) : r.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .15 * e.h)), r.closePath()
              }, E.rectangle = function (e) {
                  2 === (e = b(e)).len ? (e.x = e.x - .4 * e.w, e.w = 1.4 * e.w) : e.len >= 3 && (e.x = e.x - .65 * e.w, e.w = 1.65 * e.w), r.clearRect(0, 0, i, s), r.drawImage(o, 0, 0, i, s), r.beginPath(), r.font = t.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? .9 : 1)) + "px " + t.fontFamily, r.textAlign = "center", r.fillStyle = "rgba(" + t.bgColor.r + "," + t.bgColor.g + "," + t.bgColor.b + "," + e.o + ")", r.fillRect(e.x, e.y, e.w, e.h), r.fillStyle = "rgba(" + t.textColor.r + "," + t.textColor.g + "," + t.textColor.b + "," + e.o + ")", "number" == typeof e.n && e.n > 999 ? r.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+", Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .2 * e.h)) : r.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .15 * e.h)), r.closePath()
              };

              function x(e) {
                  if (e.paused || e.ended || h) return !1;
                  try {
                      r.clearRect(0, 0, i, s), r.drawImage(e, 0, 0, i, s)
                  } catch (e) {}
                  g = setTimeout((function () {
                      x(e)
                  }), k.duration), N.setIcon(n)
              }
              var N = {};

              function S(e) {
                  e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function (e, t, a, s) {
                      return t + t + a + a + s + s
                  }));
                  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                  return !!t && {
                      r: parseInt(t[1], 16),
                      g: parseInt(t[2], 16),
                      b: parseInt(t[3], 16)
                  }
              }

              function C(e, t) {
                  var a, s = {};
                  for (a in e) s[a] = e[a];
                  for (a in t) s[a] = t[a];
                  return s
              }
              N.getIcon = function () {
                  var e = !1;
                  return t.element ? e = t.element : t.elementId ? (e = y.getElementById(t.elementId)).setAttribute("href", e.getAttribute("src")) : !1 === (e = function () {
                      for (var e = y.getElementsByTagName("head")[0].getElementsByTagName("link"), t = e.length - 1; t >= 0; t--)
                          if (/(^|\s)icon(\s|$)/i.test(e[t].getAttribute("rel"))) return e[t];
                      return !1
                  }()) && ((e = y.createElement("link")).setAttribute("rel", "icon"), y.getElementsByTagName("head")[0].appendChild(e)), e.setAttribute("type", "image/png"), e
              }, N.setIcon = function (e) {
                  var s = e.toDataURL("image/png");
                  if (t.dataUrl && t.dataUrl(s), t.element) t.element.setAttribute("href", s), t.element.setAttribute("src", s);
                  else if (t.elementId) {
                      var i = y.getElementById(t.elementId);
                      i.setAttribute("href", s), i.setAttribute("src", s)
                  } else if (u.ff || u.opera) {
                      var n = a;
                      a = y.createElement("link"), u.opera && a.setAttribute("rel", "icon"), a.setAttribute("rel", "icon"), a.setAttribute("type", "image/png"), y.getElementsByTagName("head")[0].appendChild(a), a.setAttribute("href", s), n.parentNode && n.parentNode.removeChild(n)
                  } else a.setAttribute("href", s)
              };
              var k = {
                  duration: 40,
                  types: {}
              };
              return k.types.fade = [{
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: 0
                  }, {
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: .1
                  }, {
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: .2
                  }, {
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: .3
                  }, {
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: .4
                  }, {
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: .5
                  }, {
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: .6
                  }, {
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: .7
                  }, {
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: .8
                  }, {
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: .9
                  }, {
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: 1
                  }], k.types.none = [{
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: 1
                  }], k.types.pop = [{
                      x: 1,
                      y: 1,
                      w: 0,
                      h: 0,
                      o: 1
                  }, {
                      x: .9,
                      y: .9,
                      w: .1,
                      h: .1,
                      o: 1
                  }, {
                      x: .8,
                      y: .8,
                      w: .2,
                      h: .2,
                      o: 1
                  }, {
                      x: .7,
                      y: .7,
                      w: .3,
                      h: .3,
                      o: 1
                  }, {
                      x: .6,
                      y: .6,
                      w: .4,
                      h: .4,
                      o: 1
                  }, {
                      x: .5,
                      y: .5,
                      w: .5,
                      h: .5,
                      o: 1
                  }, {
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: 1
                  }], k.types.popFade = [{
                      x: .75,
                      y: .75,
                      w: 0,
                      h: 0,
                      o: 0
                  }, {
                      x: .65,
                      y: .65,
                      w: .1,
                      h: .1,
                      o: .2
                  }, {
                      x: .6,
                      y: .6,
                      w: .2,
                      h: .2,
                      o: .4
                  }, {
                      x: .55,
                      y: .55,
                      w: .3,
                      h: .3,
                      o: .6
                  }, {
                      x: .5,
                      y: .5,
                      w: .4,
                      h: .4,
                      o: .8
                  }, {
                      x: .45,
                      y: .45,
                      w: .5,
                      h: .5,
                      o: .9
                  }, {
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: 1
                  }], k.types.slide = [{
                      x: .4,
                      y: 1,
                      w: .6,
                      h: .6,
                      o: 1
                  }, {
                      x: .4,
                      y: .9,
                      w: .6,
                      h: .6,
                      o: 1
                  }, {
                      x: .4,
                      y: .9,
                      w: .6,
                      h: .6,
                      o: 1
                  }, {
                      x: .4,
                      y: .8,
                      w: .6,
                      h: .6,
                      o: 1
                  }, {
                      x: .4,
                      y: .7,
                      w: .6,
                      h: .6,
                      o: 1
                  }, {
                      x: .4,
                      y: .6,
                      w: .6,
                      h: .6,
                      o: 1
                  }, {
                      x: .4,
                      y: .5,
                      w: .6,
                      h: .6,
                      o: 1
                  }, {
                      x: .4,
                      y: .4,
                      w: .6,
                      h: .6,
                      o: 1
                  }], k.run = function (e, a, s, i) {
                      var r = k.types[y.hidden || y.msHidden || y.webkitHidden || y.mozHidden ? "none" : t.animation];
                      i = !0 === s ? void 0 !== i ? i : r.length - 1 : void 0 !== i ? i : 0, a = a || function () {}, i < r.length && i >= 0 ? (E[t.type](C(e, r[i])), p = setTimeout((function () {
                          s ? i -= 1 : i += 1, k.run(e, a, s, i)
                      }), k.duration), N.setIcon(n)) : a()
                  },
                  function () {
                      (t = C(f, e)).bgColor = S(t.bgColor), t.textColor = S(t.textColor), t.position = t.position.toLowerCase(), t.animation = k.types["" + t.animation] ? t.animation : f.animation, y = t.win.document;
                      var l = t.position.indexOf("up") > -1,
                          c = t.position.indexOf("left") > -1;
                      if (l || c)
                          for (var d = 0; d < k.types["" + t.animation].length; d++) {
                              var m = k.types["" + t.animation][d];
                              l && (m.y < .6 ? m.y = m.y - .4 : m.y = m.y - 2 * m.y + (1 - m.w)), c && (m.x < .6 ? m.x = m.x - .4 : m.x = m.x - 2 * m.x + (1 - m.h)), k.types["" + t.animation][d] = m
                          }
                      t.type = E["" + t.type] ? t.type : f.type, a = N.getIcon(), n = document.createElement("canvas"), o = document.createElement("img"), a.hasAttribute("href") ? (o.setAttribute("crossOrigin", "anonymous"), o.onload = function () {
                          s = o.height > 0 ? o.height : 32, i = o.width > 0 ? o.width : 32, n.height = s, n.width = i, r = n.getContext("2d"), w.ready()
                      }, o.setAttribute("src", a.getAttribute("href"))) : (o.onload = function () {
                          s = 32, i = 32, o.height = s, o.width = i, n.height = s, n.width = i, r = n.getContext("2d"), w.ready()
                      }, o.setAttribute("src", ""))
                  }(), {
                      badge: function (e, t) {
                          t = ("string" == typeof t ? {
                              animation: t
                          } : t) || {}, m = function () {
                              try {
                                  if ("number" == typeof e ? e > 0 : "" !== e) {
                                      var a = {
                                          type: "badge",
                                          options: {
                                              n: e
                                          }
                                      };
                                      if ("animation" in t && k.types["" + t.animation] && (a.options.animation = "" + t.animation), "type" in t && E["" + t.type] && (a.options.type = "" + t.type), ["bgColor", "textColor"].forEach((function (e) {
                                          e in t && (a.options[e] = S(t[e]))
                                      })), ["fontStyle", "fontFamily"].forEach((function (e) {
                                          e in t && (a.options[e] = t[e])
                                      })), v.push(a), v.length > 100) throw new Error("Too many badges requests in queue.");
                                      w.start()
                                  } else w.reset()
                              } catch (e) {
                                  throw new Error("Error setting badge. Message: " + e.message)
                              }
                          }, l && m()
                      }, video: function (e) {
                          m = function () {
                              try {
                                  if ("stop" === e) return h = !0, w.reset(), void(h = !1);
                                  e.addEventListener("play", (function () {
                                      x(this)
                                  }), !1)
                              } catch (e) {
                                  throw new Error("Error setting video. Message: " + e.message)
                              }
                          }, l && m()
                      }, image: function (e) {
                          m = function () {
                              try {
                                  var t = e.width,
                                      a = e.height,
                                      o = document.createElement("img"),
                                      l = t / i < a / s ? t / i : a / s;
                                  o.setAttribute("crossOrigin", "anonymous"), o.onload = function () {
                                      r.clearRect(0, 0, i, s), r.drawImage(o, 0, 0, i, s), N.setIcon(n)
                                  }, o.setAttribute("src", e.getAttribute("src")), o.height = a / l, o.width = t / l
                              } catch (e) {
                                  throw new Error("Error setting image. Message: " + e.message)
                              }
                          }, l && m()
                      }, webcam: function (e) {
                          if (window.URL && window.URL.createObjectURL || (window.URL = window.URL || {}, window.URL.createObjectURL = function (e) {
                              return e
                          }), u.supported) {
                              var t = !1;
                              navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia, m = function () {
                                  try {
                                      if ("stop" === e) return h = !0, w.reset(), void(h = !1);
                                      (t = document.createElement("video")).width = i, t.height = s, navigator.getUserMedia({
                                          video: !0,
                                          audio: !1
                                      }, (function (e) {
                                          t.src = URL.createObjectURL(e), t.play(), x(t)
                                      }), (function () {}))
                                  } catch (e) {
                                      throw new Error("Error setting webcam. Message: " + e.message)
                                  }
                              }, l && m()
                          }
                      }, reset: w.reset,
                      browser: {
                          supported: u.supported
                      }
                  }
          };
          void 0 === (s = function () {
              return a
          }.apply(t, [])) || (e.exports = s)
      }()
  }
]);
//# sourceMappingURL=main.js.map