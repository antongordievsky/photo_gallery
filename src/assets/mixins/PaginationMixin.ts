import Vue from "vue";

const PaginationMixin = Vue.extend({
    data() {
        return {
            pagination: {
                page: 1,
                loading: false,
                finished: false,
            },
            timerId: 0,
        };
    },
    methods: {
        setOnScrollCallback(callback: Function): void {
            window.onscroll = () => {
                if (this.timerId) {
                    clearTimeout(this.timerId);
                }

                this.timerId = setTimeout(() => {
                    const clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
                    const documentHeight = document.documentElement.scrollHeight ? document.documentElement.scrollHeight : document.body.scrollHeight;
                    const scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

                    if (
                        ((documentHeight - clientHeight) <= scrollTop + 50)
                        && !this.pagination.loading
                        && !this.pagination.finished
                    ) {

                        this.pagination.page++;
                        callback();
                    }
                }, 100)
            };
        },
        refreshPagination(): void {
            this.pagination.page = 1;
            this.pagination.finished = false;
        },
    },
});

export default PaginationMixin;
