const app = Vue.createApp({
    data() {
        return {
            base: 0,
            list: [0, 0, 0, 0]
        }
    },
    methods: {
        action(cell) {
            this.list[cell[0]] += cell[1]
        },
        actionBase(cell) {
            this.base += cell
        },
        cleanRow(index) {
            this.list[index] = 0
        },
        cleanBase() {
            this.base = 0;
            this.list = [0, 0, 0, 0]

        },
        rowInBase(index) {
            this.base += this.list[index];
            this.list[index] = 0
        }
    },
    computed: {
        sum() {
            return this.list.reduce((a, b) => a + b, this.base)
        }
    }
})