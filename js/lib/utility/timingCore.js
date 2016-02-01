define(["require", "exports"], function (require, exports) {
    ;
    var Interval = (function () {
        function Interval(action, time) {
            this.active = false;
            this.interval = null;
            this.timeTrigged = 0;
            this.action = action;
            this.time = time;
        }
        Interval.prototype.getTime = function () {
            return this.time;
        };
        Interval.prototype.setTime = function (newTime) {
            if (!this.active) {
                this.time = newTime;
            }
            else {
                this.stop();
                this.time = newTime;
                this.run();
            }
        };
        Interval.prototype.switchState = function () {
            this.active = !this.active;
        };
        Interval.prototype.stop = function () {
            if (!this.interval) {
                return;
            }
            clearInterval(this.interval);
            this.interval = null;
            this.switchState();
            this.timeTrigged = 0;
        };
        Interval.prototype.run = function (callback) {
            if (!this.active) {
                var self = this;
                var interval = setInterval(function () {
                    self.timeTrigged++;
                    self.action();
                    if (callback) {
                        callback();
                    }
                }, this.time);
                this.interval = interval;
                this.switchState();
            }
        };
        Interval.prototype.autoStop = function (time, callback) {
            if (!this.active) {
                var self = this;
                this.run();
                setTimeout(function () {
                    self.stop();
                    if (callback) {
                        callback();
                    }
                }, time);
            }
        };
        Interval.prototype.autoOn = function (time, callback) {
            var self = this;
            if (this.active) {
                this.stop();
            }
            ;
            var interval = setTimeout(function () {
                self.run();
                if (callback) {
                    callback();
                }
            }, time);
            this.interval = interval;
        };
        Interval.prototype.getTimeTrigged = function () {
            return this.timeTrigged;
        };
        return Interval;
    })();
    exports.Interval = Interval;
});
//# sourceMappingURL=timingCore.js.map