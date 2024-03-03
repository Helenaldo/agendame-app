<template>
  <v-alert v-if="feedbackMessage" color="error" class="mb-2">{{feedbackMessage}}</v-alert>
  <v-form @submit.prevent="submit">
  <v-row class="d-flex mb-3">
      <v-col cols="12">

          <v-label class="font-weight-bold mb-1">Token</v-label>
          <v-text-field
           v-model="token"
           :error-messages="errors.token"
           variant="outlined"
           color="primary"/>

      </v-col>

      <v-col cols="12">

        <v-label class="font-weight-bold mb-1">Nova Senha</v-label>
        <v-text-field
        v-model="password"
        type="password"
        :error-messages="errors.password"
        variant="outlined"
        color="primary"/>

      </v-col>


      <v-col cols="12" class="pt-0">
          <v-btn type="submit" :loading="isSubmitting" color="primary" size="large" block   flat>Resetar Senha</v-btn>
      </v-col>
  </v-row>
</v-form>
</template>



<script setup>
import { useAuthStore } from "@/store/auth";
import { useField, useForm } from "vee-validate";
import { ref } from "vue";
import { object, string } from 'yup';

const emits = defineEmits(['after-reset'])
const authStore = useAuthStore()
const feedbackMessage = ref(null)

const schema = object({
  token: string().required().label('Token'),
  password: string().required().min(8).matches(
    /^(?=.*[a-zA-Z])(?=.*[0-9])/,
    'Pelo menos uma letra e um número'
  ).label('Senha'),
})

const { handleSubmit, isSubmitting, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    token: '',
    password: '',
  }
})

const submit = handleSubmit(async (values) => {
  feedbackMessage.value = null
  await authStore.resetPassword(values.token, values.password)
    .then(() => {
      emits('after-reset')
    })
    .catch((e) => {
    feedbackMessage.value = e.message
  })
})

const {value: token} = useField('token')
const {value: password} = useField('password')

</script>
