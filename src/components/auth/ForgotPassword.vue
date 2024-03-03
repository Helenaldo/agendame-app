<template>
    <ForgotPasswordForm
      v-if="state === 'forgotPassword'"
      @after-request="state = 'resetPassword'"
      />

    <ResetPasswordForm
      v-if="state === 'resetPassword'"
      @after-reset="state = 'reset'"
      />
<template v-if="state === 'reset'" >

    <v-alert color="success" class="mb-2">Sua senha foi redefinida com sucesso.</v-alert>

<div class="text-center mt-5">
  <RouterLink class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium" :to="{ name: 'login' }" >Faça o login!</RouterLink>
</div>
</template>




</template>

<script setup>
import { ref } from 'vue';
import ForgotPasswordForm from './ForgotPasswordForm.vue';
import ResetPasswordForm from './ResetPasswordForm.vue';

const state = ref('forgotPassword')
</script>
