<script setup lang="ts">
import { DESCRIPTIONS } from "./_data";

// DEMO DATA ///////////////////////////////////////////////////////////////////////////////////////

const navs = [
  {
    title: "Services",
    links: [
      { label: "Branding" },
      { label: "Design" },
      { label: "Marketing" },
      { label: "Advertisement" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us" },
      { label: "Contact" },
      { label: "Jobs" },
      { label: "Press kit" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of use" },
      { label: "Privacy policy" },
      { label: "Cookie Policy" },
    ],
  },
];

const socialLinks = [
  { label: "Twitter", icon: "twitter" },
  { label: "Youtube", icon: "youtube" },
  { label: "Facebook", icon: "facebook" },
];

const longNavs = [
  ...navs,
  { title: "Social", links: socialLinks },
  {
    title: "Explore",
    links: [
      { label: "Features" },
      { label: "Enterprise" },
      { label: "Security" },
      { label: "Pricing" },
    ],
  },
  {
    title: "Apps",
    links: [
      { label: "Mac" },
      { label: "Windows" },
      { label: "iPhone" },
      { label: "Android" },
    ],
  },
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold mb-8">Footer</h1>

    <p>Footer can contain logo, copyright notice, and links to other pages.</p>

    <component-description v-for="desc of DESCRIPTIONS" v-bind="desc" />

    <component-preview>
      <template #title>Footer</template>

      <ui-footer class="p-10 bg-neutral text-neutral-content">
        <nav v-for="nav of navs">
          <ui-footer-title>{{ nav.title }}</ui-footer-title>
          <a v-for="link of nav.links" class="link link-hover">{{ link.label }}</a>
        </nav>
      </ui-footer>
    </component-preview>

    <component-preview>
      <template #title>Footer with a logo section</template>

      <ui-footer class="p-10 bg-base-200 text-base-content">
        <aside>
          <ui-icon name="hash" class="size-16" />
          <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
        </aside>

        <nav v-for="nav of navs">
          <ui-footer-title>{{ nav.title }}</ui-footer-title>
          <a v-for="link of nav.links" class="link link-hover">{{ link.label }}</a>
        </nav>
      </ui-footer>
    </component-preview>

    <component-preview>
      <template #title>Footer with a form</template>

      <ui-footer class="p-10 bg-base-200 text-base-content">
        <nav v-for="nav of navs">
          <ui-footer-title>{{ nav.title }}</ui-footer-title>
          <a v-for="link of nav.links" class="link link-hover">{{ link.label }}</a>
        </nav>

        <form>
          <ui-footer-title>Newsletter</ui-footer-title>
          <fieldset class="form-control w-80">
            <label class="label">
              <span class="label-text">Enter your email address</span>
            </label>
            <div class="relative">
              <input
                type="text"
                placeholder="username@site.com"
                class="input input-bordered w-full pr-16"
              />
              <ui-button color="primary" class="absolute top-0 right-0 rounded-l-none">
                Subscribe
              </ui-button>
            </div>
          </fieldset>
        </form>
      </ui-footer>
    </component-preview>

    <component-preview>
      <template #title>Footer with logo and social icons</template>

      <ui-footer class="p-10 bg-neutral text-neutral-content">
        <aside>
          <ui-icon name="hash" class="size-16" />
          <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
        </aside>

        <nav>
          <ui-footer-title>Social</ui-footer-title>
          <div class="grid grid-flow-col gap-4">
            <a v-for="link of socialLinks" class="link link-hover">
              <ui-icon :name="link.icon" size="lg" />
            </a>
          </div>
        </nav>
      </ui-footer>
    </component-preview>

    <component-preview>
      <template #title>Footer with copyright text</template>

      <ui-footer class="p-4 bg-base-300 text-base-content" center>
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </ui-footer>
    </component-preview>

    <component-preview>
      <template #title>Footer with copyright text and social icons</template>

      <ui-footer class="items-center p-4 bg-neutral text-neutral-content">
        <aside class="items-center grid-flow-col">
          <ui-icon name="hash" class="size-9" />
          <p>Copyright © 2023 - All right reserved</p>
        </aside>

        <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a v-for="link of socialLinks" class="link link-hover">
            <ui-icon :name="link.icon" size="lg" />
          </a>
        </nav>
      </ui-footer>
    </component-preview>

    <component-preview>
      <template #title>Footer with links and social icons</template>

      <ui-footer class="p-10 bg-base-300 text-base-content">
        <nav v-for="nav of navs.slice(0, 2)">
          <ui-footer-title>{{ nav.title }}</ui-footer-title>
          <a v-for="link of nav.links" class="link link-hover">{{ link.label }}</a>
        </nav>

        <nav>
          <ui-footer-title>Social</ui-footer-title>
          <div class="grid grid-flow-col gap-4">
            <a v-for="link of socialLinks" class="link link-hover">
              <ui-icon :name="link.icon" size="lg" />
            </a>
          </div>
        </nav>
      </ui-footer>
    </component-preview>

    <component-preview>
      <template #title>Footer with 2 rows</template>

      <ui-footer class="grid-rows-2 p-10 bg-neutral text-neutral-content">
        <nav v-for="nav of longNavs">
          <ui-footer-title>{{ nav.title }}</ui-footer-title>
          <a v-for="link of nav.links" class="link link-hover">{{ link.label }}</a>
        </nav>
      </ui-footer>
    </component-preview>

    <component-preview>
      <template #title>Centered footer with logo and social icons</template>

      <ui-footer class="p-10 bg-primary text-primary-content" center>
        <aside>
          <ui-icon name="hash" class="size-16" />
          <p class="font-bold">
            ACME Industries Ltd. <br />Providing reliable tech since 1992
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>

        <nav>
          <div class="grid grid-flow-col gap-4">
            <a v-for="link of socialLinks" class="link link-hover">
              <ui-icon :name="link.icon" size="lg" />
            </a>
          </div>
        </nav>
      </ui-footer>
    </component-preview>

    <component-preview>
      <template #title>Centered footer with social icons</template>

      <ui-footer class="p-10 bg-base-200 text-base-content rounded" center>
        <nav class="grid grid-flow-col gap-4">
          <a v-for="link of navs[1].links" class="link link-hover">{{ link.label }}</a>
        </nav>

        <nav>
          <div class="grid grid-flow-col gap-4">
            <a v-for="link of socialLinks" class="link link-hover">
              <ui-icon :name="link.icon" size="lg" />
            </a>
          </div>
        </nav>

        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </ui-footer>
    </component-preview>

    <component-preview>
      <template #title>Two footer</template>

      <ui-footer class="p-10 bg-base-200 text-base-content">
        <nav v-for="nav of navs">
          <ui-footer-title>{{ nav.title }}</ui-footer-title>
          <a v-for="link of nav.links" class="link link-hover">{{ link.label }}</a>
        </nav>
      </ui-footer>

      <ui-footer
        class="px-10 py-4 border-t bg-base-200 text-base-content border-base-300"
      >
        <aside class="items-center grid-flow-col">
          <ui-icon name="hash" class="size-9" />
          <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
        </aside>

        <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a v-for="link of socialLinks" class="link link-hover">
            <ui-icon :name="link.icon" size="lg" />
          </a>
        </nav>
      </ui-footer>
    </component-preview>
  </div>
</template>
