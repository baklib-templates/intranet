# Baklib Intranet（企业内网）模板

[English readme（主文档）](./README.md)

面向组织内部知识共享的模板，适用于发布公司动态、活动通知、员工手册、FAQ 与企业文化宣传。模板内置 Channel、Notifications、Events、FAQs、Forum、Products 六个子模板，无需写代码即可搭建一个内容丰富的内网门户。

**教程**：[https://help.baklib.cn/themes/community/intranet](https://help.baklib.cn/themes/community/intranet)

**模板标识**：`theme_name` 为 `intranet`（见 `config/settings_schema.json`）。如从旧 id 升级，请在 Baklib 环境中确认站点绑定与迁移方式。

---

## 核心特性

### 内置子模板

- **Channel**（`templates/channel.liquid`）：可定制的栏目落地页，支持图标、标签、封面图片。
- **Notifications**（`templates/changelog.liquid`）：发布更新与公司公告时间线。
- **Events**（`templates/events.liquid` + `event.liquid`）：活动会议列表 + 详情页。
- **FAQs**（`templates/faqs.liquid`）：多 Tab FAQ 面板。
- **Forum**（`templates/forum.liquid` + `post.liquid`）：社区讨论与多层嵌套回复。
- **Products**（`templates/products.liquid` + `product.liquid`）：产品 / 项目 / 案例展示。

### 主要功能

- 帖子发布：标题、正文、标签、分类、封面图
- 嵌套回复 + 表情反馈
- 站内搜索（页头入口）
- 审核机制（先发后审 / 先审后发，由 `is_allow_published` 控制）
- 文章作者信息开关
- 热门标签、推荐内容、相关主题
- 响应式设计 + 暗色模式
- Turbo / Turbo Stream 局部更新

---

## 项目结构（节选）

```text
├── README.md                 # 英文主文档
├── README.zh-CN.md           # 本文件
├── assets/images/theme/
│   ├── thumb.png             # 主题缩略图（扁平）
│   └── <lang>/...            # 按语言分目录的预览截图
├── config/settings_schema.json
├── layout/
├── locales/
│   ├── zh-CN.json / zh-CN.schema.json
│   ├── en.json / en.schema.json
│   ├── de.json / de.schema.json（德语）
│   ├── fr.json / fr.schema.json（法语）
│   └── ja.json / ja.schema.json（日语）
├── seeds/
│   ├── 001_site.yml          # 站点默认语言与主题变量
│   └── 002_pages.yml         # 首页 + 六个栏目 + 示例子页面
├── snippets/
├── statics/
│   ├── feed.liquid           # /s/feed
│   ├── new.liquid            # /s/new
│   ├── edit.liquid           # /s/edit
│   ├── replies.liquid
│   ├── roadmap.liquid
│   ├── sitemap.liquid
│   └── terms.liquid          # /s/terms
└── templates/
    ├── index.liquid
    ├── channel.liquid / changelog.liquid
    ├── events.liquid / event.liquid
    ├── faqs.liquid
    ├── forum.liquid / post.liquid
    ├── products.liquid / product.liquid
    ├── page.liquid / search.liquid / tag.liquid
    └── *_turbo_stream.liquid
```

完整模板与静态路由列表见 [README.md](./README.md)。

---

## 使用说明

1. 在 Baklib 后台选择此模板（Intranet）创建站点。主题初始化时会读取 `seeds/`：`001_site.yml` 写入站点语言与外观相关变量，`002_pages.yml` 创建首页及六个顶层栏目，并为 FAQ（至少两条）、Channel、论坛等补上示例子页面，避免空栏目落到演示片段。`config/settings_schema.json` 中的 `recommendations.initial_pages` 仍可作为手动搭站时的 slug / 模板参考。
2. 在【应用设置】→【外观】中配置：站点 LOGO、默认头像、站点口号、站点描述、版权信息、Header/Footer 自定义 HTML、首选反馈表情、热门标签、`is_allow_published` 审核开关。
3. 进入【页面管理】→ 各子栏目 → 设置中，配置图标、标签、描述与栏目封面（适用项）。
4. 可选：将 `/s/feed`（最近更新）或 `/s/terms`（服务条款）链入页头/页脚菜单。

前台文案位于 `locales/`（含 zh-CN、en、de、fr、ja）；后台编辑器中的分区与模板字段标签通过 `locales/*.schema.json` 中的 `settings_schema.intranet.*`、`settings_schema.intranet_templates.*` 多语言维护。各语言预览截图位于 `assets/images/theme/<lang>/`，模板 `{% schema %}` 中通过 `images/theme/${lang}/<file>.png` 引用。`seeds/` 中的示例正文默认为**英文**（`001_site.yml` 中 `language: en`）；若希望新建站点默认中文，可自行改写 seeds 或创建站点后在后台切换语言。

---

## 技术栈

- Liquid 模板
- Tailwind CSS + Stimulus + Turbo

---

## 特色功能

- 六个内置子模板（Channel / Notifications / Events / FAQs / Forum / Products）
- 开箱五种界面语言（zh-CN / en / de / fr / ja）
- 标签、分类、反馈表情体系
- 先发后审 / 先审后发两种审核模式
- 响应式 + 暗色模式
- Turbo Stream 实时更新
