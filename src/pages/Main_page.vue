<template>
<div>
    <headerVue></headerVue>
    <IntroductionVue></IntroductionVue>
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