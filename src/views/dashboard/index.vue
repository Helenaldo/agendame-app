<script setup>
import { useMeStore } from '@/store/me';
const meStore = useMeStore();

</script>
<template>
<div>
  Dashboard
  <br><br>
  <pre>
  {{ meStore.user }}
</pre>
<br><br>
Tá logado {{ meStore.isLoggedIn }}
</div>
</template>
