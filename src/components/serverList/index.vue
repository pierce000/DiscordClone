<template>
<div class="container">
    <serverButton isHome/>
    <div class="separador"></div>
    <serverButton :mentions="3" />
    <serverButton hasNotification />
    <serverButton :mentions="28" hasNotification />
    <serverButton  hasNotification />
    <serverButton/>
    <serverButton hasNotification :mentions="14" />
    <serverButton hasNotification />
     <serverButton v-for="server in 18" :key="server.id" />
</div>
</template>

<script>
import serverButton from "./serverButton.vue";

export default {
    components: {
        serverButton
    }
}
</script>

<style scoped lang="scss">
.container{
    grid-area: SL;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--tertiary);
    padding: 11px 0;
    max-height: 100vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
}
.separador {
    width: 32px;
    border-bottom: solid 2px var(--quartenary);
    margin-bottom: 8px;
}
</style>