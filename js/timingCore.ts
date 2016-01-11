
interface IAction {
    (): void;
};
type milisecond = number;


export class Interval {
    private action:IAction;
    private time: milisecond;
    private active: boolean = false;
    private interval = null;
    private timeTrigged: number =0;


    constructor(action, time) {
        this.action = action;
        this.time = time;
    }

    getTime(): milisecond {
        return this.time;
    }

    setTime(newTime: milisecond):void {
        if (!this.active) {
            this.time = newTime;
        } else {
            this.stop();
            this.time = newTime;
            this.run();
        }
    }

    private switchState():void {
        this.active = !this.active;
    }

    stop():void {
        if (!this.interval) {
            return;
        }

        clearInterval(this.interval);

        this.interval = null;
        this.switchState();
        this.timeTrigged = 0;
    }

    run(callback?):void {
        if (!this.active) {
            var self = this;
            var interval = setInterval(function() {
                self.timeTrigged++;
                self.action()
                if (callback){
                    callback();
                }
            }, this.time);
            this.interval = interval;
            this.switchState();
        }
    }

    autoStop(time: milisecond, callback?):void {
        if (!this.active) {
            var self = this;
            this.run();
            setTimeout(function() {
                self.stop()
                if (callback) {
                    callback();
                }
            }, time);
        }
    }

    autoOn(time: milisecond, callback?):void {

        var self = this;
        if (this.active) {
            this.stop();
        };

       var interval = setTimeout(function(){
            self.run();
            if (callback) {
                callback();
            }
        }, time);

        this.interval = interval;

    }

    getTimeTrigged() {
        return this.timeTrigged;
    }

}
