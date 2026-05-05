# Baklib Intranet Theme

An internal knowledge sharing template designed for company news, event announcements, employee handbooks, FAQs and corporate culture broadcasts. The theme bundles six purpose-built sub-templates (Channel, Notifications, Events, FAQs, Forum, Products) so an organisation can stand up a content-rich intranet portal without writing code.

**Docs (ZH):** See [README.zh-CN.md](README.zh-CN.md) for the Chinese readme.

**Tutorial:** [https://help.baklib.cn/themes/community/intranet](https://help.baklib.cn/themes/community/intranet)

**Theme id:** `intranet` (`theme_name` in `config/settings_schema.json`). Renaming from a previous id may affect existing site bindings—confirm migration with your Baklib environment before deploying.

---

## Features

### Built-in sub-templates

- **Channel** (`templates/channel.liquid`): customizable channel landing page with cover image, icon, and tags.
- **Notifications** (`templates/changelog.liquid`): release notes / company announcements timeline.
- **Events** (`templates/events.liquid` + `event.liquid`): activity & meeting listings with detail pages.
- **FAQs** (`templates/faqs.liquid`): multi-tab FAQ hub.
- **Forum** (`templates/forum.liquid` + `post.liquid`): community discussions with nested replies.
- **Products** (`templates/products.liquid` + `product.liquid`): products / projects / case studies showcase.

### Capabilities

- Submit posts with title, body, tags, categories, and cover images
- Nested replies with feedback / reaction emoji
- Site search (header)
- Optional moderation: publish-first vs review-first (`is_allow_published`)
- Author info on posts (toggle)
- Hot tags, recommended posts, related topics
- Responsive UI and dark mode
- Turbo / Turbo Stream for partial updates

---

## Repository layout

```text
├── README.md
├── README.zh-CN.md
├── assets/
│   └── images/theme/
│       ├── thumb.png         # theme thumbnail (flat)
│       ├── zh-CN/ ...        # per-language preview screenshots
│       ├── en/ ...
│       ├── de/ ...
│       ├── fr/ ...
│       └── ja/ ...
├── config/settings_schema.json
├── layout/
│   ├── theme.liquid
│   └── error.liquid
├── locales/
│   ├── zh-CN.json
│   ├── zh-CN.schema.json
│   ├── en.json
│   ├── en.schema.json
│   ├── de.json
│   ├── de.schema.json
│   ├── fr.json
│   ├── fr.schema.json
│   ├── ja.json
│   └── ja.schema.json
├── snippets/
├── statics/
│   ├── edit.liquid
│   ├── feed.liquid
│   ├── new.liquid
│   ├── replies.liquid
│   ├── roadmap.liquid
│   ├── sitemap.liquid
│   └── terms.liquid
├── templates/
├── package.json
├── tailwind.config.js
└── yarn.lock
```

---

## Templates & static routes

| Resource                          | Role                                          |
| --------------------------------- | --------------------------------------------- |
| `templates/index.liquid`          | Home page (hero + sub-channel grid)           |
| `templates/channel.liquid`        | Channel landing                               |
| `templates/changelog.liquid`      | Release notes / announcements                 |
| `templates/events.liquid`         | Events listing                                |
| `templates/event.liquid`          | Event detail                                  |
| `templates/faqs.liquid`           | FAQ hub                                       |
| `templates/forum.liquid`          | Forum index                                   |
| `templates/post.liquid`           | Forum post detail                             |
| `templates/products.liquid`       | Products listing                              |
| `templates/product.liquid`        | Product detail                                |
| `templates/page.liquid`           | Generic page detail                           |
| `templates/search.liquid`         | Site search results                           |
| `templates/tag.liquid`            | Tag landing                                   |
| `statics/feed.liquid`             | Recent updates feed at `/s/feed`              |
| `statics/new.liquid`              | New post submission at `/s/new`               |
| `statics/edit.liquid`             | Edit post page at `/s/edit`                   |
| `statics/replies.liquid`          | Comment pagination partial                    |
| `statics/terms.liquid`            | Service agreement at `/s/terms`               |
| `statics/sitemap.liquid`          | Sitemap                                       |
| `statics/roadmap.liquid`          | Roadmap page                                  |

Notable snippets: `_aside.liquid`, `_breadcrumb.liquid`, `_card.liquid`, `_event.liquid`, `_feedback_form.liquid`, `_footer.liquid`, `_header.liquid`, `_news_letter.liquid`, `_page_form.liquid`, `_page.liquid`, `_product.liquid`, `_reply.liquid`, `_reply_page_form.liquid`.

---

## Stack

- Liquid templates
- Tailwind CSS + Stimulus + Turbo

---

## Getting started

1. Install the theme in Baklib and create a site. The `recommendations.initial_pages` block of `config/settings_schema.json` will scaffold Channel / Notifications / Events / FAQs / Forum / Products pages on first run.
2. Configure appearance under **App settings → Appearance**: site logo, default avatar, slogan, description, copyright line, header/footer HTML, primary feedback emoji, hot tags, and the `is_allow_published` moderation switch.
3. Customise each sub-channel from **Pages → <channel> → Settings**: icon, tags, description and the cover image where applicable.
4. Optional: link `/s/feed` (recent updates) or `/s/terms` (service agreement) from your **header / footer menu**.

User-visible strings are centralized under `locales/` (`zh-CN`, `en`, `de`, `fr`, `ja`); editor labels for this theme use `t:settings_schema.intranet.*` and `t:settings_schema.intranet_templates.*` keys in the matching `*.schema.json` files. Per-language preview screenshots live in `assets/images/theme/<lang>/` and are referenced as `images/theme/${lang}/<file>.png` in template `{% schema %}` blocks.

---

## Highlights checklist

- Six built-in sub-templates (Channel / Notifications / Events / FAQs / Forum / Products)
- Five UI languages out of the box (zh-CN / en / de / fr / ja)
- Tag, category and feedback emoji systems
- Publish-first or review-first moderation
- Responsive + dark mode
- Turbo Stream updates
