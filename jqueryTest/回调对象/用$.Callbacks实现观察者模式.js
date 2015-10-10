var observer = {
    hash: {},
    subscribe: function(id, callback) {
        if (typeof id !== 'string') {
            return
        }
        if (!this.hash[id]) {
            this.hash[id] = $.Callbacks()
            this.hash[id].add(callback)
        } else {
            this.hash[id].add(callback)
        }
    },
    publish: function(id) {
        if (!this.hash[id]) {
            return
        }
        this.hash[id].fire(id)
    }
}
 
// 订阅
observer.subscribe('mailArrived', function() {
    alert('来信了')
})
observer.subscribe('mailArrived', function() {
    alert('又来信了')
})
observer.subscribe('mailSend', function() {
    alert('发信成功')
})
 
// 发布
setTimeout(function() {
    observer.publish('mailArrived')
}, 5000)
setTimeout(function() {
    observer.publish('mailSend')
}, 10000)