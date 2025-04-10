<template>
    <form action="" class="contact__form grid" id="contact-form">
        <div class="contact__group grid">
            <input type="text" name="name" placeholder="Names" required class="contact__input">
            <input type="email" name="email" placeholder="Email" required class="contact__input">
        </div>
        <textarea name="message" placeholder="Message" class="contact__input contact__area"></textarea>
        <button type="submit" class="button contact__button">Send Message</button>
        <p 
        class="contact__message" 
        id="contact-message">Message</p>
    </form>
</template>

<script setup lang="ts">

</script>

<style scoped>
.contact__group,
.contact__form {
  gap: 1rem;
}
.contact__group {
    grid-template-columns: 1fr 1fr;
}
.contact__input {
  padding: 1.25rem;
  background-color: var(--container-color);
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
}
.contact__input::placeholder {
  color: var(--first-color-light);
}
.contact__area {
  height: 10rem;
  resize: none;
}
.contact__button {
  margin-top: 1rem;
  cursor: pointer;
  padding: 1rem;
  background-color: var(--first-color-light);
  width: 50%;
  justify-self: center;
  transition: background-color 0.5s;
}
.contact__button:hover {
    background-color: var(--first-color);
}
</style>