#!/usr/bin/env python3
from pathlib import Path
import re, sys

ROOT = Path(__file__).resolve().parents[1]
SKILLS = ROOT / "skills"
EXPECTED_SKILL_COUNT = 33
required_sections = [
    "## Purpose","## Use when","## Required inputs","## Workflow",
    "## Output contract","## Final QA","## Operating rules"
]
errors = []
dirs = sorted(p for p in SKILLS.iterdir() if p.is_dir())

for d in dirs:
    f = d / "SKILL.md"
    if not f.exists():
        errors.append(f"{d.name}: missing SKILL.md")
        continue
    text = f.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        errors.append(f"{d.name}: missing YAML frontmatter")
        continue
    front = text.split("---", 2)[1]
    for field in ("name:", "description:", "version:"):
        if field not in front:
            errors.append(f"{d.name}: missing {field[:-1]}")
    m = re.search(r"^name:\s*(.+)$", front, re.M)
    if m and m.group(1).strip() != d.name:
        errors.append(f"{d.name}: directory/name mismatch")
    for section in required_sections:
        if section not in text:
            errors.append(f"{d.name}: missing {section}")

if len(dirs) != EXPECTED_SKILL_COUNT:
    errors.append(
        f"expected {EXPECTED_SKILL_COUNT} skill directories, found {len(dirs)}"
    )

if errors:
    print("VALIDATION FAILED")
    for e in errors:
        print("-", e)
    sys.exit(1)

print(f"OK — {len(dirs)} skills validated.")