<template>
  <v-alert v-if="feedbackMessage" color="error" class="mb-2">{{feedbackMessage}}</v-alert>
  <v-form @submit.prevent="submit">

    <v-row class="d-flex mb-3">
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Nome</v-label>
            <v-text-field
            variant="outlined"
            color="primary"
            v-model="firstName"
            :error-messages="errors.first_name"
            />
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Endereço de E-mail</v-label>
            <v-text-field
            variant="outlined"
            type="email"
            color="primary"
            v-model="email"
            :error-messages="errors.email"
            />
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Senha</v-label>
            <v-text-field
            variant="outlined"
            type="password"
            color="primary"
            v-model="password"
            :error-messages="errors.password"
            />
        </v-col>
        <v-col cols="12" >
            <v-btn
            type="submit"
            color="primary"
            size="large"
            :loading="isSubmitting"
            block
            flat
            >Cadastrar</v-btn>
        </v-col>
    </v-row>
  </v-form>
</template>


<script setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';
import { useAuthStore } from '@/store/auth';

const schema = object({
  first_name: string().required().label('Nome'),
  email: string().required().email().label('E-mail'),
  password: string().required().min(8).matches(
    /^(?=.*[a-zA-Z])(?=.*[0-9])/,
    'Pelo menos uma letra e um número'
  ).label('Senha'),
});


const { handleSubmit, errors, isSubmitting } = useForm({

  validationSchema: schema,
  initialValues: {
    first_name: 'Helenaldo',
    email: 'contato@helenaldo.com.br',
    password: '1234567h'
  }
})

const feedbackMessage = ref();

const submit = handleSubmit(async(values) => {
  const authStore = useAuthStore()
  await authStore.register(values.first_name, values.email, values.password)
  .catch((e) => {
    feedbackMessage.value = e.message
  })
})


const {value: firstName} = useField('first_name')
const {value: email} = useField('email')
const {value: password} = useField('password')


</script>
