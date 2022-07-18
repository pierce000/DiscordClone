<template>
<div class="userlist">
    <div class="role">Disponível -1</div>
        <UserRow nickname="Both Discord" isBot />
     <div class="role">Offline -12</div>
     <UserRow nickname="Natali Souza" v-for="users in 4" :key="users.id" />
     <UserRow nickname="Natan bouth" isBot />
    <UserRow nickname="Junior Nobre"/>
    <UserRow nickname="Pamela santos oliveira"/>
    <UserRow nickname="Jessica Gois"/>
        <UserRow nickname="Franciele"/>
        <UserRow nickname="Pedro Amaral"/>
        <UserRow nickname="Luccas Melo"/>
        <UserRow nickname="Carol"/>
</div>
</template>

<script>
import userRow from './userRow'
import UserRow from './userRow.vue';
export default{
    userRow,
    components: { UserRow }
};
</script>

<style scoped lang="scss">
.userlist{
    grid-area: UL;
    display: flex;
    flex-direction: column;
    padding: 3px 6px 10px 16px;
    background-color: var(--secondary);
    max-height: calc(100vh - 46px);
    overflow-y: scroll;

     &::-webkit-scrollbar{
            width: 8px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: var(--tertiary);
            border-radius: 4px;
          }
        &::-webkit-scrollbar-track{
            background-color: var(--secondary);
        }
}
.role{
    margin-top: 20px;
    color: var(--grey);
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
}
</style>