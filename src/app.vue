<script setup>
import DeveloperRegistration from "./greetings/presentation/components/developer-registration.vue";
import {ref} from "vue";
import DeveloperGreeting from "./greetings/presentation/components/developer-greeting.vue";

const registeredDeveloper = ref(null);
const hasRegistered = ref(false);

function updateRegisteredDeveloperInfo(payload) {
  registeredDeveloper.value = payload.developer;
  hasRegistered.value = true;
}
</script>


<template>
  <h1>Hello Vue Developer Application</h1>
  <developer-registration
      @developer-registered="updateRegisteredDeveloperInfo"
  />
  <developer-greeting v-if="hasRegistered" :developer="registeredDeveloper"/>
</template>


;<style>

</style>