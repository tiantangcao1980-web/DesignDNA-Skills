import Toast from '@vant/weapp/toast/toast';
import Dialog from '@vant/weapp/dialog/dialog';

Page({
  data: {
    currentTask: 'Finish Q2 proposal',
    displayTime: '24:57',
    completedToday: 3,
    goal: 8,
    totalTime: '1h 15m',
    streak: 5,
    tasks: [
      { id: 1, name: 'Finish Q2 proposal', active: true },
      { id: 2, name: 'Review PRs', active: false },
      { id: 3, name: 'Write retro notes', active: false },
    ],
    _remaining: 24 * 60 + 57,
    _timer: null,
  },

  onLoad() {
    this._tick();
    this.setData({ _timer: setInterval(() => this._tick(), 1000) });
  },

  onUnload() {
    if (this.data._timer) clearInterval(this.data._timer);
  },

  _tick() {
    const r = this.data._remaining;
    const m = String(Math.floor(r / 60)).padStart(2, '0');
    const s = String(r % 60).padStart(2, '0');
    this.setData({
      displayTime: `${m}:${s}`,
      _remaining: r > 0 ? r - 1 : 25 * 60,
    });
  },

  onPause() {
    Toast({ context: this, selector: '#van-toast', message: 'Paused', duration: 1000 });
  },

  onFinish() {
    Dialog.confirm({
      title: 'Finish session',
      message: 'Mark this focus session as complete?',
      confirmButtonText: 'Finish',
    }).then(() => {
      Toast.success({ context: this, selector: '#van-toast', message: 'Session saved' });
    });
  },
});
