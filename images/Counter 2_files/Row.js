app.component('list-row', {
    props: ['rowcell', 'index'],
    template:
    /*html*/
        `
    <p>
        M = {{ rowcell }}
        <button id="clean" @:click="clean">clean</button>
        <button id="up" @:click="upRow">up</button>
        <add-minus @action-add="actionRow"></add-minus>
        <add-minus :add='true' @action-add="actionRow"></add-minus>
    </p>
    `,
    methods: {
        clean() {
            this.$emit('clean-row', this.index)
        },
        actionRow(row) {
            this.$emit('action-row', [this.index, row]);
        },
        upRow() {
            this.$emit('row-in-base', this.index)
        }
    },

})