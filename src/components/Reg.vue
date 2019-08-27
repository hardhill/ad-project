<template>
  <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Registration</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field
                    label="E-mail"
                    name="email"
                    :rules="emailRules"
                    prepend-icon="mdi-face"
                    type="email"
                    v-model="email"
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    :counter="6"
                    :rules="passwordRules"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                  <v-text-field
                    label="Confirm password"
                    name="confirm-password"
                    prepend-icon="mdi-lock"
                    :counter="6"
                    :rules="confirmPasswordRules"
                    type="password"
                    v-model="confirmPassword"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" @click="onSubmit" :disabled="!valid">Create account</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
  data(){
    return {
        email:'',
        password:'',
        confirmPassword:'',
        valid:false,
        emailRules:[
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules:[
            v => !!v || 'Password is required',
            v => (v && v.length >= 6) || 'Password must be more than 6 characters'
        ],
        confirmPasswordRules:[
            v => !!v || 'Password is required',
            v => (v === this.password) || 'Password should match'
        ]
    }
  },
  methods:{
      onSubmit(){
        if(this.$refs.form.validate()){
            const user = {
                email:this.email,
                password:this.password
            }
            console.log(user)
        }
      }
  }
}
</script>

<style>

</style>