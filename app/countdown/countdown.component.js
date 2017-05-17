import template from './countdown.component.html'
import './countdown.component.css'

class controller {
    constructor ($interval) {
        this.$interval=$interval
        this.remain = 0
    }

    $onChanges (changes) {
        if (changes.time && changes.time.currentValue || changes.flag) {
            if (this.timer) this.$interval.cancel(this.timer)
            this.onStart({ $event: this.remain })
            this.remain = this.time.value
            this.timer = this.$interval(() => {
                this.remain--
                if (this.remain === 0) {
                    this.$interval.cancel(this.timer)
                    this.onEnd()
                }
            }, 1000)
        }
    }

    $onDestroy () {
        if (this.timer) this.$interval.cancel(this.timer)
    }


}


export let CountdownComponent = {
    template,
    controller,
    bindings: {
        onStart: '&',
        onEnd: '&',
        time: '<'
    }
}
