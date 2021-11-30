export default function (mainContainer) {
    return {
        mounted() {
            this.$refs[mainContainer].addEventListener('scroll',this.mainScroll)
        },
        beforeDestroy() {
            this.eventBus.$emit("mainScroll")
            this.$refs[mainContainer].removeEventListener('scroll',this.mainScroll)

        },
        methods:{
            mainScroll(){
                this.eventBus.$emit('mainScroll',this.$refs[mainContainer])
            }
        }
    }

}