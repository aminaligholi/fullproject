export const state = () => ({
    videos: [],

})
export const getters = {

}
export const mutations = {
    allvideos(state, videos) {
        state.videos = videos
    },
}
export const actions = {
    async allvideos({ commit }, { paylo }) {
        const data = await this.$axios.get(`${paylo}`)
        const videos = data.data
        commit('allvideos', videos)
    },
}