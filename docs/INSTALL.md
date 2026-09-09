# Installation / usage

Keep this Git repository as the source of truth.

Each folder under `skills/` is an individual skill bundle centered on `SKILL.md`. Import/copy those folders using the skills manager or supported skills location of the compatible product you are using.

## Recommended behavior

For broad jobs, start with `workflow-router`.

For recurring projects, maintain canonical volatile data inside the project repository. Avoid hard-coding changing dates, prices, event facts, model versions, or campaign state inside universal skills.

## Example project structure

```text
bangyai-english-village/
├── PROJECT_BIBLE.md
├── CONTENT_DEDUP_LOG.md
├── events/
├── assets/
└── ...
```

The exact import UI can change over time; the repository itself should remain the durable source-of-truth.
