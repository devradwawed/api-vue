const app = Vue.createApp({
  data() {
    return {
      title:'Mrs',
      firstName :'Radwa',
      lastName: 'Awed',
      email: 'radwa@gmail.com',
      gender : 'female',
      picture : 'img/team-bw-2.jpg',
      location : 'Maadi',
      phone : 21243578,
    }
  },
  methods: {
    async  getUser() {
      const res = await fetch('https://randomuser.me/api')
      const {results} = await res.json()
      console.log(results)
      this.title= results[0].name.title
      this.firstName= results[0].name.first
      this.lastName =  results[0].name.last
      this.email  =  results[0].email
      this.gender  = results[0].gender
      this.picture  =  results[0].picture.large
      this.location  =  results[0].location.city
      this.phone  =  results[0].phone
    },
  },
})
app.mount('#app')

