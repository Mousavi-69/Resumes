<template>
<div>
    <headerVue class="header"></headerVue>
    <IntroductionVue class="IntroductionVue"></IntroductionVue>
    <!-- <fa :icon="['fas', 'users']"/>
    <br/>
        <fa :icon="['far', 'check-circle']"/>
         <br/>
        <fa :icon="['fab', 'telegram-plane']"/>
     -->
</div>
</template>
<script setup lang="ts">
import headerVue from '@/components/Header.vue';
import IntroductionVue from '@/components/Introduction.vue';
</script>
<style scoped lang="scss">
.header{
    position: fixed;
    width: 100%;
    z-index: 10;
}
.IntroductionVue{
    padding-top: 125px;
}
    </style>