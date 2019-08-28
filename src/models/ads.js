export default {
    state: {
        ads: [{
                title: "Squirrel",
                description: "Squirrel on tree",
                promo: false,
                imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
                id: "1"
            },
            {
                title: "Sky",
                description: "Ski is on",
                promo: true,
                imageSrc: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
                id: "2"
            },
            {
                title: "Bird",
                description: "Funny bird",
                promo: true,
                imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
                id: "3"
            },
            {
                title: "Planet",
                description: "Planet Earth",
                promo: false,
                imageSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
                id: "4"
            }
        ]
    },
    mutations: {
        setNewAd(state, payload){
            state.ads.push(payload)
        }
    },
    actions: {
        createAd({commit},payload){
            payload.id = "7hh28"
            commit('setNewAd',payload)
        }

    },
    getters: {
        ALL_ADS(state) {
            return state.ads
        },
        PROMO_ADS(state){
            return state.ads.filter(ad=>{return ad.promo===true})
        },
        MY_ADS(state){
            return state.ads
        },
        GetAdById(state){
            return adById => {
                return state.ads.find(ad=>ad.id===adById)
            }
        }
    }
}