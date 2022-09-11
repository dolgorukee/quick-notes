<template>
  <q-page class="column items-center">
    <q-input
      v-model="email"
      type="text"
      :label="$t('email')"
      class="full-width q-mt-md max-width"
    />
    <q-input
      v-model="password"
      type="password"
      :label="$t('password')"
      class="full-width q-mt-md max-width"
    />
    <q-btn
      color="primary"
      class="full-width q-mt-md max-width"
      @click="signUp"
      >{{ $t('signUp') }}</q-btn
    >
  </q-page>
</template>

<script setup lang="ts">
import { useAuthStore } from 'src/stores/auth-store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const notesStore = useAuthStore();
const email = ref('');
const password = ref('');

function signUp() {
  notesStore.signUp(
    email.value,
    password.value,
    () => {
      router.push({ name: 'SignIn' });
    },
    (error: Error) => console.error(error)
  );
}
</script>
