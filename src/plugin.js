export default {
    install(app) {
        app.directive('focus3', {
            created(el) {
                el.style.backgroundColor = "orange"
            },
            inserted(el) {
                el.focus();
            }
        });

        app.mixin({
            data(){
                return {
                    aa:100
                }
            }
        })
    }
}
