 <template>
  <footer class="bg-black-base text-white-base">
		<div class="container">
			<p v-if="$store.state.footer === 'Please create a footer document'" class="logo">{{ $store.state.footer }}</p>
			<div class="grid-3 footer">
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
					<div>
						<p>
							<a class="footer-phone-number" :href="`tel:${ $prismic.asText($store.state.footer.phone) }`">{{ $prismic.asText($store.state.footer.phone) }}</a>
						</p>
					</div>
					<prismic-rich-text :field="$store.state.footer.BusinessHours" />
				</div>
			</div>
			<div class="copyright text-center">
				<span>© {{new Date().getFullYear()}} West Tech Air. All rights reserved.</span>
			</div>
		</div>
  </footer>
</template>

<script>
export default {
  name: 'footer-prismic',
}
</script>