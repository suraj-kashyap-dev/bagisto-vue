import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        user: null,
    }),

    actions: {
        login(params) {
            this.$axios.post('customer/login', params)
                .then((response) => {
                    this.isAuthenticated = true;
                    
                    this.user = response.data.data;

                    localStorage.setItem('token', response.data.token)
                }).catch((error) => {
                    console.log(error);
                })
        },

        logout() {
            localStorage.removeItem('user');

            this.isAuthenticated = false;

            this.user = null;
        },

        initializeAuth() {
            const token = localStorage.getItem('token');

            if (token) {
                this.isAuthenticated = true;

                this.$axios.get('customer/get', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                    .then(response => {
                        this.user = response.data.data;

                        console.log(this);
                    })
                    .catch(error => {
                        console.error('Failed to fetch user details:', error);
                    });
            }
        },
    },
});
