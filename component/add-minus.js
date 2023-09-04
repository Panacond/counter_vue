app.component('add-minus', {
    props: {
        add: {
            required: false
        }
    },
    template:
    /*html*/
        `
            <button :id="id" @:click="action">{{typeButton}}</button>
        `,
    data() {
        return {
            text: 'minus',
            id: 'min',
            step: -1,
        }
    },
    methods: {
        action() {
            this.$emit('action-add', this.step);
        }
    },
    computed: {
        typeButton() {
            if (this.add) {
                this.text = "add";
                this.id = "add"
                this.step = 1
            }
            return this.text
        }
    }

})