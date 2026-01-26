---
title: Claude Code CLI만으로 YouTube MCP 붙이기
created: 2025-07-05
last_modified: 2025-07-05
tags:
  - Claude-Code
  - MCP
  - YouTube
  - 설치가이드
  - 자동화
status: 완료
type: 가이드
priority: high
share_link: https://share.note.sx/xgrkb7uq#Tf8hbfMc5zC5ZVpUyul76Cyg+qBrH8RAKIxrXoO472o
share_updated: 2025-07-05T17:08:27+09:00
---

# Claude Code CLI만으로 YouTube MCP 붙이기

## 💡 핵심 차이
데스크톱 앱은 claude_desktop_config.json을 고치지만, CLI는 `claude mcp add …` 한 줄이면 끝입니다. 설정 범위(scope)만 지정해 주면 별도 JSON 수정이 필요 없습니다.

---

## 1단계: 선행 조건 확인

| 필수              | 설치 예시                                           |
| --------------- | ----------------------------------------------- |
| Node ≥ 18 + npx | `brew install node` / `choco install nodejs`    |
| uv(Python MCP용) | `pip install uv`                                |
| yt-dlp(자막 다운로드) | `brew install yt-dlp` / `pip install -U yt-dlp` |

mcp-installer가 "npx · uv 필수"라고 명시합니다.

---

## 2단계: mcp-installer 서버 등록

```bash
# 전역(user) 범위로 등록 ─ 모든 프로젝트에서 재사용
claude mcp add mcp-installer -s user -- npx -y @anaisbetts/mcp-installer
```

- `-s user`: 내 계정 전역 (프로젝트마다 따로 쓰려면 `-s local`, 팀 공유는 `-s project`)
- `--` 뒤에는 실제 실행 커맨드를 그대로 적습니다.

**확인**: `claude mcp list` → mcp-installer가 떠 있으면 성공.

---

## 3단계: CLI 안에서 YouTube MCP 설치시키기

이제 Claude REPL 프롬프트에 자연어로 한 마디면 됩니다.

```
Hey Claude, install the server @anaisbetts/mcp-youtube
```

mcp-installer가 npm/PyPI에서 받아 CLI에 자동 등록합니다.

첫 실행 뒤 `/mcp` 명령으로 연결 상태를 확인해 보세요.

---

## (선택) 직접 수동 설치하는 법

mcp-installer 없이 바로 붙이고 싶다면:

```bash
# 1) 서버 패키지 설치
uv tool install git+https://github.com/anaisbetts/mcp-youtube   # 또는 다른 포크

# 2) Claude에 등록
claude mcp add mcp-youtube -s user -- mcp-youtube
```

uv tool … 방식은 공식 README가 안내합니다.

---

## 4단계: 동작 테스트

```bash
# Claude REPL 예시
Summarize the YouTube video https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

- 처음 요청 시 yt-dlp가 자막을 내려받고 Claude가 요약을 반환하면 성공입니다.

---

## 자주 걸리는 오류 & 해결

| 증상 | 대응 |
|------|------|
| `npx: command not found` | Node PATH 누락 → 터미널 재시작 or 재설치 |
| `uv: command not found` | `pip install uv` 후 다시 시도 |
| `yt-dlp … not found` | yt-dlp 설치 또는 PATH 확인 |
| `Could not connect to MCP server …` | `claude mcp list`로 상태 확인 → 포트 충돌·방화벽 체크 |
| CLI 응답이 "Unknown MCP server" | 이름 오타, mcp add 스코프 확인, REPL 재시작 |

---

## 한 줄 정리

1. `claude mcp add mcp-installer …` 로 CLI에 설치기 등록
2. REPL에서 "install @anaisbetts/mcp-youtube" 라고 말한다
3. yt-dlp만 깔려 있으면 바로 YouTube 요약 프롬프트 사용 가능!

---

## 연결된 노트
- [[MCP 및 자동화]]
- [[Claude Code를 활용한 Obsidian Vault 자동화 및 제어]]
- [[인기있는 MCP 서버 및 활용사례]]

## 구현 체크리스트
- [x] 선행 조건 확인 (Node.js, uv, yt-dlp)
- [x] mcp-installer 서버 등록
- [x] YouTube MCP 설치 과정 정리
- [x] 동작 테스트 방법 설명
- [x] 트러블슈팅 가이드 제공