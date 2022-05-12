 <template>
  <footer class="container grid-3 footer pb-5">
    <p v-if="$store.state.footer === 'Please create a footer document'" class="logo">{{ $store.state.footer }}</p>
		<div>
			<prismic-rich-text :field="$store.state.footer.ServiceAreasTitle" />
			<prismic-rich-text :field="$store.state.footer.ServiceAreas" />
		</div>
		<div class="logo">
			<nuxt-link to="/" class="logo">
				<prismic-image :field="$store.state.footer.logo" />
			</nuxt-link>
		</div>
		<div>
			<prismic-rich-text :field="$store.state.footer.ScheduleServiceTitle" />
			<prismic-rich-text :field="$store.state.footer.phone" />
			<prismic-rich-text :field="$store.state.footer.BusinessHours" />
		</div>
		<div class="copyright">
			© {{new Date().getFullYear()}} West Tech Air. All rights reserved.
		</div>
  </footer>
</template>

<script>
export default {
  name: 'footer-prismic',
}
</script>