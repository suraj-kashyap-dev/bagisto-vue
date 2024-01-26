<template>
    <vee-field 
        v-if="['hidden', 'text', 'email', 'password', 'number', 'checkbox'].includes(type)"
        :name="name"
        v-slot="{ field, errors }"
    >
        <input 
            :type="type"
            :name="name"
            v-bind="{ ...field, ...$attrs }"
            :placeholder="placeholder"
            :class="[
                errors.length ? 'border !border-red-500 hover:border-red-500' : '',
                $attrs.class
            ]"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
    </vee-field>
</template>
  
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text',
        },
        name: {
            type: String,
            default: 'demo',
        },
        placeholder: {
            type: String,
            default: 'Enter text here',
        }
    },
};
</script>