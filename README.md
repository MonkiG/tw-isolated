# tw-isolated

> Tailwind CSS isolated inside Shadow DOM using Web Components.

`tw-isolated` is a lightweight custom element that encapsulates **Tailwind CSS** (CDN-based for now) inside a **Shadow DOM**, preventing external styles from affecting Tailwind and vice versa.

This project is designed for **legacy environments**, **mixed CSS stacks**, and **incremental migrations**, where global CSS conflicts make Tailwind hard to use safely.

---

## 🚧 Status

**Version:** `0.1.0`  
**Status:** Experimental / Early development

- API is unstable
- Breaking changes may happen at any time
- Not recommended for production yet

---

## ✨ Features (v0.1.0)

- [ ] Tailwind CSS loaded via CDN
- [ ] Full style isolation using Shadow DOM
- [ ] No CSS leakage in or out
- [ ] Framework-agnostic (Vanilla JS, React, Vue, etc.)
- [ ] Multiple instances supported

---

> **Note**
>
> This component was created to solve a very specific real-world use case.
> In one project, Tailwind CSS was already part of the stack, but it was gradually misused:
> extensive custom CSS, heavy configuration overrides, and frequent use of `!important` rules
> caused many Tailwind utility classes to break or behave inconsistently.
>
> `tw-isolated` isolates Tailwind inside a Shadow DOM to prevent those conflicts and restore predictable utility behavior without requiring a full refactor of the existing codebase.