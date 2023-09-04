app.component('base-row', {
    props: ['base'],
    template:
    /*html*/
        `
        <p>
            Base = {{base}}
            <button id="cleanAll" @:click="clean">clean all</button>
            <add-minus @action-add="actionRow"></add-minus>
            <add-minus :add=true @action-add="actionRow"></add-minus>
        </p>
        `,
    methods: {
        clean() {
            this.$emit('clean-all')
        },
        actionRow(step) {
            this.$emit('action-base', step)
        }
    }
})