export const state = () => ({
    videos: [],

})
export const getters = {

}
export const mutations = {
    allvideos(state, videos) {
        state.videos = videos
    },
    cat_videos(state, videos) {
        state.videos = videos
    },
    get_one(state, video) {
        state.videos = video
    }

}
export const actions = {
    async allvideos({ commit }) {
        const data = await this.$axios.get()
        const videos = data.data

        commit('allvideos', videos)

    },
    async get_cat({ commit }, { cat }) {
        const data = await this.$axios.get(`?userId=${cat}`)
        const videos = data.data
        console.log(videos)
        commit('cat_videos', videos)
    },
    async get_one({ commit }, { id }) {
        const data = await this.$axios.get(`${id}`)
        const video = data.data
        commit('get_one', video)
    }
}