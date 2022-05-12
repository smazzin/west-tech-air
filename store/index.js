export const state = () => ({
	logo: {},
	footer: {}
})

export const mutations = {
	SET_LOGO(state, logo) {
		state.logo = logo
	},
	SET_FOOTER(state, footer) {
			state.footer = footer
	},
	SET_ERROR_LOGO(state, error) {
		state.logo = error
	},
	SET_ERROR_FOOTER(state, error) {
		state.footer = error
	}
}

export const actions = {
	async fetchLogo({ commit }, $prismic) {
		try {
			const logo = (await $prismic.api.getSingle('logo')).data

			commit('SET_LOGO', logo)
		} catch (e) {
			const error = 'Please add a logo document'

			commit('SET_ERROR', error);
		}
	},
	async fetchFooter({ commit }, $prismic) {
		try {
			const footer = (await $prismic.api.getSingle('footer')).data

			commit('SET_FOOTER', footer)
		} catch (e) {
			const error = 'Please create a footer document'

			commit('SET_ERROR', error);
		}
	}
}