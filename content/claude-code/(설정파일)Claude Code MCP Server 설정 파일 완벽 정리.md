---
share_link: https://share.note.sx/0v2lo8c1#mZRwTIBgUIQ6fYW1FH+ZGl3yQSQmWfwcQLMuB6UDqFU
share_updated: 2025-09-14T20:19:49+09:00
---


> **작성일**: 2025-09-14, **작성자:** 잘생김프로쌤
> **태그**: #ClaudeCode #MCP #개발도구 #설정가이드

-----

## 🎯 MCP(Model Context Protocol)란?

### 간단한 비유로 이해하기

**Claude Code = 똑똑한 조수**

- **MCP 없이**: 책상에 앉아서 생각만 할 수 있는 조수
- **MCP 있으면**: 실제 도구를 사용할 수 있는 조수

### 실제 차이점

|상황              |MCP 없이           |MCP 있으면            |
|----------------|-----------------|-------------------|
|“GitHub 이슈 확인해줘”|“미안, 볼 수 없어요”    |✅ 실제로 GitHub API 호출|
|“파일을 읽어줘”       |“접근할 수 없어요”      |✅ 파일 시스템에서 직접 읽기   |
|“최신 문서 검색해줘”    |“2025년 1월까지만 알아요”|✅ 실시간 웹 검색         |

-----

## 📁 3개의 핵심 설정 파일

### 파일 위치와 역할

#### 1. **User Config** (`~/.claude.json`)

```bash
/Users/username/.claude.json
```

- **역할**: 모든 프로젝트에서 개인적으로 사용
- **예시**: 개인 GitHub 토큰, 개인 API 키
- **비유**: 내 개인 도구함 (어디든 가져가는 도구들)

#### 2. **Project Config** (`.mcp.json`)

```bash
/프로젝트폴더/.mcp.json
```

- **역할**: 팀과 공유하는 프로젝트 설정 ⭐
- **예시**: 팀용 Slack 봇, 공통 데이터베이스 연결
- **비유**: 팀 공용 도구함 (모든 팀원이 사용)
- **특징**: Git으로 버전 관리됨

#### 3. **Local Config** (`.claude.json [project]`)

```bash
/프로젝트폴더/.claude.json
```

- **역할**: 현재 프로젝트에서만 개인적으로 사용
- **예시**: 실험용 설정, 개인 테스트 환경
- **비유**: 이 프로젝트 전용 개인 도구함

-----

## 🔄 설정 파일 우선순위

### 우선순위 규칙

```
Local Config > Project Config > User Config
```

### 실제 예시

같은 이름 “github” 서버가 3곳에 있다면:

1. ✅ **Local** (`.claude.json [project]`) ← **선택됨**
2. ❌ **Project** (`.mcp.json`) ← 무시됨
3. ❌ **User** (`~/.claude.json`) ← 무시됨

-----

## 💡 왜 이 파일들을 이해해야 할까?

### 단계 1: 기본 필요성

#### 원하는 기능별 필요한 MCP Server

|원하는 기능   |필요한 MCP Server         |
|---------|-----------------------|
|파일 읽기/쓰기 |Filesystem MCP Server  |
|GitHub 연동|GitHub MCP Server      |
|웹 검색     |Brave Search MCP Server|
|문서 검색    |Context7 MCP Server    |

### 단계 2: 설정 방법 비교

#### 방법 1: CLI 마법사 (초보자용)

```bash
claude mcp add github --scope user
```

**장점**: 쉬움
**단점**: 오타 시 처음부터 다시 시작해야 함

#### 방법 2: 직접 JSON 편집 (권장)

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token"
      }
    }
  }
}
```

**장점**: 완전한 제어, 복잡한 설정 가능
**단점**: JSON 문법을 알아야 함

-----

## 🚀 실제 활용 시나리오

### 시나리오 1: 혼자 작업하는 신입 개발자

**파일**: `~/.claude.json`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem"]
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  }
}
```

### 시나리오 2: 팀 프로젝트 리더

**파일**: `.mcp.json` (팀 공유용)

```json
{
  "mcpServers": {
    "jira": {
      "command": "npx",
      "args": ["-y", "jira-mcp-server"]
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "slack-mcp-server"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    }
  }
}
```

### 시나리오 3: DevOps 엔지니어

**파일**: `~/.claude.json` (개인 환경변수 포함)

```json
{
  "mcpServers": {
    "aws": {
      "command": "npx",
      "args": ["-y", "aws-mcp-server"],
      "env": {
        "AWS_ACCESS_KEY_ID": "${AWS_KEY}",
        "AWS_SECRET_ACCESS_KEY": "${AWS_SECRET}"
      }
    },
    "digitalocean": {
      "command": "npx",
      "args": ["-y", "@digitalocean/mcp"],
      "env": {
        "DIGITALOCEAN_API_TOKEN": "${DO_TOKEN}"
      }
    }
  }
}
```

-----

## 🚨 성능 최적화 및 문제 해결

### Claude Code 실행 속도 문제

#### 주요 원인

1. **MCP 서버 초기화 지연**: 여러 서버가 동시 시작
2. **환경변수 로딩**: 복잡한 설정 파일 읽기
3. **대용량 출력**: MCP 도구 출력이 너무 클 때

#### 해결 방법

##### 1. 출력 토큰 제한 설정

```bash
export MAX_MCP_OUTPUT_TOKENS=50000
```

##### 2. 불필요한 서버 제거

```bash
# 현재 활성화된 서버 확인
claude mcp list

# 불필요한 서버 제거
claude mcp remove unnecessary-server
```

##### 3. 설정 파일 최적화

- 자주 사용하지 않는 서버는 Local Config로 이동
- 환경변수를 미리 설정해서 로딩 시간 단축

-----

## 📚 단계별 설정 가이드

### STEP 1: 기본 파일 시스템 접근

**파일**: `~/.claude.json`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem"]
    }
  }
}
```

**테스트**:

```
Claude에게 "현재 폴더의 파일 목록을 보여줘"라고 요청
```

### STEP 2: GitHub 연동 추가

**환경변수 설정**:

```bash
export GITHUB_PERSONAL_ACCESS_TOKEN="ghp_your_token_here"
```

**설정 추가**:

```json
{
  "mcpServers": {
    "filesystem": { ... },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_PERSONAL_ACCESS_TOKEN}"
      }
    }
  }
}
```

**테스트**:

```
Claude에게 "내 GitHub 저장소 목록을 보여줘"라고 요청
```

### STEP 3: 웹 검색 기능 추가

**환경변수 설정**:

```bash
export BRAVE_API_KEY="your_brave_api_key"
```

**설정 추가**:

```json
{
  "mcpServers": {
    "filesystem": { ... },
    "github": { ... },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "${BRAVE_API_KEY}"
      }
    }
  }
}
```

-----

## ⚙️ 고급 설정 팁

### 1. 여러 계정 관리

```json
{
  "mcpServers": {
    "github-work": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_WORK_TOKEN}"
      }
    },
    "github-personal": {
      "command": "npx", 
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_PERSONAL_TOKEN}"
      }
    }
  }
}
```

### 2. 환경별 설정 분리

#### 개발 환경 (`.claude.json` - Local)

```json
{
  "mcpServers": {
    "test-server": {
      "command": "node",
      "args": ["./test-mcp-server.js"]
    }
  }
}
```

#### 프로덕션 환경 (`.mcp.json` - Project)

```json
{
  "mcpServers": {
    "production-monitor": {
      "command": "npx",
      "args": ["-y", "production-monitoring-mcp"]
    }
  }
}
```

-----

## 🔧 문제 해결 체크리스트

### ❌ 자주 발생하는 문제들

#### 1. “Command not found” 에러

- [ ] Node.js가 설치되어 있는가?
- [ ] npx가 PATH에 포함되어 있는가?
- [ ] MCP 서버 패키지가 존재하는가?

#### 2. “Permission denied” 에러

- [ ] 파일 권한이 올바른가?
- [ ] 환경변수가 설정되어 있는가?
- [ ] API 토큰이 유효한가?

#### 3. “JSON parsing error” 에러

- [ ] JSON 문법이 올바른가?
- [ ] 쉼표가 빠지지 않았나?
- [ ] 중괄호가 제대로 닫혔나?

### ✅ 디버깅 명령어

```bash
# MCP 서버 상태 확인
claude mcp list

# 특정 서버 테스트
claude mcp get server-name

# 설정 파일 위치 확인
claude config show

# 로그 확인
export MCP_CLAUDE_DEBUG=true
claude
```

-----

## 📖 참고 자료

### 공식 문서

- [Claude Code MCP 문서](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [Model Context Protocol 공식 사이트](https://modelcontextprotocol.io/)

### 인기 MCP 서버들

|서버명                |기능           |패키지명                                              |
|-------------------|-------------|--------------------------------------------------|
|Filesystem         |파일 시스템 접근    |`@modelcontextprotocol/server-filesystem`         |
|GitHub             |GitHub API 연동|`@modelcontextprotocol/server-github`             |
|Brave Search       |웹 검색         |`@modelcontextprotocol/server-brave-search`       |
|Sequential Thinking|단계별 사고       |`@modelcontextprotocol/server-sequential-thinking`|
|Context7           |최신 문서 검색     |`context7-mcp`                                    |

-----

## 🎯 핵심 요약

### 왜 이 파일들을 이해해야 하는가?

1. **문제 해결 능력** 향상
- 속도 문제 → 어떤 MCP 서버가 원인인지 파악
- 연결 실패 → 설정 파일을 직접 수정 가능
1. **팀 협업 효율성** 증대
- 개인 정보는 보호하면서 공통 설정 공유
- 프로젝트별 맞춤 설정 가능
1. **생산성 향상**
- 각 프로젝트에 최적화된 도구 연결
- 불필요한 서버 비활성화로 성능 최적화

### 기억해야 할 3가지

1. **`.mcp.json`이 팀 협업의 핵심** - 이 파일을 Git으로 공유
2. **우선순위**: Local > Project > User
3. **직접 JSON 편집이 CLI보다 강력함**

-----

*마지막 업데이트: 2025-09-14*