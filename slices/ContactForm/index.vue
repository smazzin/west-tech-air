<template>
  <section class="container mb-5">
    <div class="grid-2">
      <prismic-rich-text :field="slice.primary.title" />
      <prismic-rich-text :field="slice.primary.description" />
        <form id="contact-form" name="contact" class="contact-inform form" data-netlify="true" netlify-honeypot="bot-field" target="_self">
          <div class="form-control">
            <input class="form-input" placeholder="none" type="text" name="name" required />
            <label class="form-label" for="name">Name</label>
          </div>
          <div class="form-control">
            <input class="form-input" placeholder="none" type="email" name="email" required />
            <label class="form-label" for="email">Email</label>
          </div>
          <div class="form-control">
            <textarea class="form-input" type="text" placeholder="none" name="message" rows="4" required></textarea>
            <label class="form-label" for="message">Message</label>
          </div>

            <input type="hidden" name="bot-field" />
            <input type="hidden" name="_subject" value="Contact from yourwebsite.com">
            <div class="mt-5">
              <button class="btn" type="submit" value="Send Message">
                Send Message
              </button>
            </div>
        </form>
        <div class="map">

        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>

</style>