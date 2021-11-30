export default function (fetchDataType = null) {
    return {
        data() {
            return {
                isLoading: true,
                dataArr: fetchDataType
            }
        },
        created() {
            this.getData()
        },
        methods:{
            async getData(){
                const resp = await this.fetchData()
                this.dataArr = resp;
                this.isLoading = false;
            }
        }
    }
}