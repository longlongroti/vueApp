<template>
    <!--template 下只能有一个子元素-->
    <div class="about">
        <h1>过滤器</h1>
        毫秒：{{date}}<br>
        <!--计算类实现-->
        计算类格式化：{{dateFmt}}<br>
        <!--方法实现-->
        方法格式化：{{getFmtTime()}}<br>
        <!--过滤器实现 v3 不在支持-->
        过滤器格式化：{{date | dateFilters}}
    </div>
</template>

<script>
    import dayjs from '@/assets/js/dayjs.js'

    export default {
        name: "test2",
        data() {
            return {
                date: Date.now()
            }
        },
        methods: {
            getFmtTime() {
                return dayjs(this.date).format('YYYY年MM月DD日 HH时mm分ss秒')
            }
        },
        computed: {
            dateFmt() {
                return dayjs(this.date).format('YYYY年MM月DD日 HH时mm分ss秒')
            }
        },
        filters: {
            dateFilters(value) {
                return dayjs(this.date).format('YYYY年MM月DD日 HH时mm分ss秒')
            }
        }
    }


</script>
<style>
    .img-responsive {
        display: inline-block;
        height: auto;
        max-width: 100%;
    }
</style>
