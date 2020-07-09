<script lang="ts">
    import Vue from "vue";
    import EventBus from "../../assets/support/EventBus";

    export default Vue.extend({
        name: 'BaseModal',
        data() {
            return {
                isOpen: false as boolean,
            };
        },
        created(): void {
            EventBus.$on('open-base-modal', () => {
                this.open();
            });

            EventBus.$on('hide-base-modal', () => {
                this.hide();
            });
        },
        methods: {
            open(): void {
                this.isOpen = true;
            },
            hide(): void {
                this.isOpen = false;
            },
        },
    });
</script>

<template>
  <div :class="['modal', isOpen ? 'is-active' : '']">
    <div class="modal-background"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
    <button @click="hide" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>
