/**
* We are defining all the global rules here and configuring
* all the `vee-validate` settings.
*/
import { configure, defineRule, Field, Form, ErrorMessage } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json";
import * as AllRules from '@vee-validate/rules';

window.defineRule = defineRule;

export default {
    install: (app) => {
        /**
         * Global components registration;
         */
        app.component("VeeForm", Form);
        app.component("VeeField", Field);
        app.component("VeeErrorMessage", ErrorMessage);

        /**
         * Registration of all global validators.
         */
        Object.keys(AllRules).forEach(rule => {
            defineRule(rule, AllRules[rule]);
        });

        /**
         * This regular expression allows phone numbers with the following conditions:
         * - The phone number can start with an optional "+" sign.
         * - After the "+" sign, there should be one or more digits.
         *
         * This validation is sufficient for global-level phone number validation. If
         * someone wants to customize it, they can override this rule.
         */
        defineRule("phone", (value) => {
            if (!value || !value.length) {
                return true;
            }

            if (! /^\+?\d+$/.test(value)) {
                return false;
            }

            return true;
        });

        configure({
            /**
             * Built-in error messages and custom error messages are available. Multiple
             * locales can be added in the same way.
             */
            generateMessage: localize({
                en: {
                    ...en,
                    messages: {
                        ...en.messages,
                        phone: "This {field} must be a valid phone number",
                    },
                },
            }),

            validateOnBlur: true,
            validateOnInput: true,
            validateOnChange: true,
        });
    },
};
