---
layout: default
title: Another Page
permalink: /another-page/
---

# Another Page

You can add additional, arbitrary pages. Simply create a new `.md` file and modify the page title and permalink at the top of the file (example below):

```
---
layout: default
title: Another Page
permalink: /another-page/
---
```

... and modify the navigation bar in `_config.yml` accordingly (example below):

```
# ── Navigation ────────────────────────────────────────────────────
nav:
  - title: About
    url: /
  - title: CV
    url: /cv/
  - title: Publications
    url: /publications/
  - title: News
    url: /news/
  - title: Another Page
    url: /another-page/
```

The page can contain any arbitrary Markdown content.