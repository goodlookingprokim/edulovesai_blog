---
title: Claude Code MCP Config 명령어 완벽 가이드 - 초보 개발자를 위한 생산성 극대화
created: 2025-09-30
last_modified: 2025-09-30
tags:
  - Claude-Code
  - MCP
  - 명령어
  - 생산성
  - 초보개발자
  - 파인만기법
  - 튜토리얼
status: 완료
type: 가이드
priority: high
share_link: https://share.note.sx/rzza6b6e#hDtjEqKo89IHpEs8DklRR4nvwpJwYX5XgbXjm59yFO8
share_updated: 2025-09-30T14:10:38+09:00
---

# 🚀 Claude Code MCP Config 명령어 완벽 가이드

## 📋 목차
1. [[#파인만 기법으로 이해하는 핵심 용어들]]
2. [[#이야기로 시작하는 MCP의 이해]]
3. [[#명령어 구조 쉽게 이해하기]]
4. [[#위험한 권한 스킵 옵션 이해하기]]
5. [[#MCP 설정 파일 만들기]]
6. [[#엄격한 설정 모드 활용하기]]
7. [[#실전 시나리오별 활용법]]
8. [[#문제 해결 가이드]]
9. [[#생산성 극대화 팁]]

## 파인만 기법으로 이해하는 핵심 용어들

### 🎯 MCP (Model Context Protocol)
**5살 아이 설명**: "장난감 상자에서 필요한 장난감을 꺼내 쓰는 규칙"
**일상 비유**: 레고 블록을 조립할 때, 어떤 블록을 어떻게 끼울지 정해놓은 설명서
**기술적 의미**: Claude가 외부 도구들과 소통하는 표준 방법

### 🎯 JSON (JavaScript Object Notation)
**5살 아이 설명**: "물건을 정리하는 서랍장"
**일상 비유**:
```
서랍장 = {
  첫번째서랍: "양말",
  두번째서랍: "티셔츠",
  세번째서랍: "바지"
}
```
**기술적 의미**: 데이터를 구조화해서 저장하는 텍스트 형식

### 🎯 npm/npx
**5살 아이 설명**: "장난감 가게에서 장난감 빌려오기"
**일상 비유**:
- **npm**: 장난감을 사서 집에 보관하기
- **npx**: 필요할 때만 장난감 가게에서 빌려 쓰고 반납하기
**기술적 의미**: JavaScript 패키지를 설치(npm)하거나 일시적으로 실행(npx)

### 🎯 서버 (Server)
**5살 아이 설명**: "부탁하면 일을 해주는 도우미"
**일상 비유**: 식당의 주방 - 주문(요청)을 받으면 음식(결과)를 만들어 줌
**기술적 의미**: 요청을 받아 처리하고 응답을 돌려주는 프로그램

### 🎯 환경 변수 (Environment Variables)
**5살 아이 설명**: "비밀 메모지에 적어둔 중요한 정보"
**일상 비유**: 집 열쇠를 화분 밑에 숨겨두는 것 - 아는 사람만 찾을 수 있음
**기술적 의미**: 프로그램이 실행될 때 사용하는 설정값들

### 🎯 API 키/토큰 (API Key/Token)
**5살 아이 설명**: "특별한 통행증"
**일상 비유**: 놀이공원 자유이용권 - 이것만 있으면 모든 놀이기구 탑승 가능
**기술적 의미**: 서비스를 사용할 수 있는 권한을 증명하는 암호 문자열

### 🎯 파일 시스템 (File System)
**5살 아이 설명**: "컴퓨터 속 서랍장과 서류들"
**일상 비유**: 집 안의 방들과 각 방에 있는 물건들
**기술적 의미**: 컴퓨터에 파일과 폴더를 저장하고 관리하는 시스템

### 🎯 권한 (Permissions)
**5살 아이 설명**: "할 수 있는 것과 할 수 없는 것의 규칙"
**일상 비유**:
- 읽기 권한 = 책을 볼 수는 있지만 낙서는 못함
- 쓰기 권한 = 책에 메모도 할 수 있음
- 실행 권한 = 책의 내용대로 따라 할 수 있음
**기술적 의미**: 파일이나 프로그램에 대해 할 수 있는 작업의 범위

### 🎯 디버깅 (Debugging)
**5살 아이 설명**: "고장난 장난감 고치기"
**일상 비유**: 자동차가 이상한 소리를 낼 때 원인을 찾아 수리하는 것
**기술적 의미**: 프로그램의 오류를 찾아 수정하는 과정

### 🎯 캐시 (Cache)
**5살 아이 설명**: "자주 쓰는 장난감은 가까이 두기"
**일상 비유**: 냉장고에서 자주 먹는 음식을 앞쪽에 두는 것
**기술적 의미**: 자주 사용하는 데이터를 빠르게 접근할 수 있는 곳에 임시 저장

### 🎯 포트 (Port)
**5살 아이 설명**: "집의 문 번호"
**일상 비유**: 아파트 동호수 - 101동 301호처럼 정확한 위치를 알려줌
**기술적 의미**: 네트워크 통신에서 프로그램을 구분하는 번호 (예: 3000번)

### 🎯 데이터베이스 (Database)
**5살 아이 설명**: "정보를 정리해 놓은 특별한 공책"
**일상 비유**: 전화번호부 - 이름으로 전화번호를 쉽게 찾을 수 있음
**기술적 의미**: 구조화된 데이터를 저장하고 관리하는 시스템

### 🎯 Git/GitHub
**5살 아이 설명**: "그림 그리기 과정을 모두 사진으로 찍어두기"
**일상 비유**:
- **Git**: 일기를 쓰면서 매일의 변화를 기록
- **GitHub**: 일기를 친구들과 공유할 수 있는 도서관
**기술적 의미**: 코드 버전 관리(Git)와 공유 플랫폼(GitHub)

### 🎯 Docker/컨테이너
**5살 아이 설명**: "장난감과 놀이 방법을 담은 상자"
**일상 비유**: 캠핑카 - 필요한 모든 것이 들어있어 어디서든 똑같이 사용 가능
**기술적 의미**: 프로그램과 실행 환경을 하나로 묶은 패키지

### 🎯 CI/CD
**5살 아이 설명**: "장난감 만드는 공장의 자동 조립 라인"
**일상 비유**:
- **CI**: 레고 조립 설명서대로 맞게 조립했는지 자동 검사
- **CD**: 검사 통과하면 자동으로 포장해서 배송
**기술적 의미**: 코드 통합(CI)과 배포(CD)를 자동화하는 프로세스

## 이야기로 시작하는 MCP의 이해

### 📖 커피숍 주문 시스템으로 이해하는 MCP

여러분이 커피숍의 바리스타라고 상상해보세요. 손님(Claude Code)이 들어와서 커피를 주문합니다. 그런데 이 손님은 특별해서, 커피를 만들 때 필요한 **여러 가지 도구들(MCP 서버들)**을 직접 사용할 수 있습니다:

- ☕ **에스프레소 머신** (파일시스템 MCP)
- 🥛 **우유 스티머** (GitHub MCP)
- 🍯 **시럽 디스펜서** (데이터베이스 MCP)
- 🧊 **얼음 제조기** (웹 스크래핑 MCP)

MCP 설정은 바로 이 손님에게 **"오늘은 어떤 도구들을 사용할 수 있는지"** 알려주는 메뉴판 같은 것입니다!

## 명령어 구조 쉽게 이해하기

### 🌱 초급 예제: 첫 걸음 (아기가 걷듯이)

#### 예제 1: 제일 간단한 시작
```bash
# 이것은 마치 "전원 버튼 누르기"와 같습니다
claude

# 무엇이 일어나나요?
# → Claude가 깨어나서 대화할 준비를 합니다
# → 기본 도구만 가지고 있어요 (연필과 종이 정도)
```

#### 예제 2: 도구 하나만 추가하기
```bash
# "Claude야, 오늘은 가위도 가져와!"
claude --mcp-config scissors.json

# scissors.json (가위 도구):
{
  "mcpServers": {
    "filesystem": {  # 파일을 자르고 붙이는 가위
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "."]
    }
  }
}
```

#### 예제 3: 안전 모드로 실행
```bash
# "Claude야, 조심조심 일해줘"
claude --mcp-config safe.json

# 어떻게 동작하나요?
# → 매번 "이거 해도 되나요?" 물어봅니다
# → 느리지만 안전해요
```

#### 예제 4: 특정 폴더만 접근
```bash
# "Claude야, 장난감 상자 안에서만 놀아"
claude --mcp-config toybox.json

# toybox.json:
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "./playground"]
      # playground 폴더 안에서만 놀 수 있어요
    }
  }
}
```

#### 예제 5: 시간 도구 추가
```bash
# "Claude야, 시계도 봐야 해"
claude --mcp-config clock.json

# clock.json:
{
  "mcpServers": {
    "time": {  # 시계 도구
      "command": "npx",
      "args": ["@modelcontextprotocol/server-time"]
    }
  }
}
```

#### 예제 6: 읽기만 가능한 모드
```bash
# "Claude야, 구경만 하고 건드리지 마"
claude --mcp-config readonly.json

# readonly.json:
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "."],
      "env": {
        "READ_ONLY": "true"  # 읽기만 가능, 쓰기 금지
      }
    }
  }
}
```

### 🌿 중급 예제: 일상 업무 패턴 (자전거 타기)

#### 예제 1: 프로젝트 관리 도구 세트
```bash
# "Claude야, 오늘은 프로젝트 관리 도구들 가져와"
claude --mcp-config project-manager.json

# project-manager.json (프로젝트 관리자의 가방):
{
  "mcpServers": {
    "filesystem": {  # 📁 파일 정리 도구
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "./my-project"],
      "env": {
        "AUTO_ORGANIZE": "true"  # 자동으로 정리해줌
      }
    },
    "git": {  # 🔄 버전 관리 도구 (타임머신 같은 것)
      "command": "npx",
      "args": ["@modelcontextprotocol/server-git"],
      "env": {
        "AUTO_COMMIT": "false"  # 자동 저장은 끔 (안전을 위해)
      }
    }
  }
}
```

#### 예제 2: 웹 개발자 도구 모음
```bash
# "Claude야, 웹사이트 만들 도구들 준비해"
claude --mcp-config web-dev.json --dangerous-skip-permissions

# web-dev.json (웹 개발자의 연장통):
{
  "mcpServers": {
    "filesystem": {  # 🔨 망치 (파일 다루기)
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "."]
    },
    "browser": {  # 🌐 브라우저 (미리보기 창)
      "command": "npx",
      "args": ["@modelcontextprotocol/server-puppeteer"],
      "env": {
        "SHOW_BROWSER": "true"  # 브라우저 창을 보여줌
      }
    },
    "server": {  # 🖥️ 서버 (웹사이트 실행기)
      "command": "npx",
      "args": ["@modelcontextprotocol/server-node"],
      "env": {
        "PORT": "3000"  # 3000번 문으로 들어오세요
      }
    }
  }
}
```

#### 예제 3: 데이터 분석가 도구
```bash
# "Claude야, 데이터 분석 실험실 준비해"
claude --mcp-config data-lab.json

# data-lab.json (데이터 과학자의 실험실):
{
  "mcpServers": {
    "filesystem": {  # 📊 데이터 파일 관리
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "./data"]
    },
    "database": {  # 🗄️ 데이터 창고
      "command": "npx",
      "args": ["@modelcontextprotocol/server-sqlite", "--db", "analysis.db"]
    },
    "calculator": {  # 🧮 계산기
      "command": "npx",
      "args": ["@modelcontextprotocol/server-math"]
    }
  }
}
```

#### 예제 4: 학생용 학습 환경
```bash
# "Claude야, 공부방 준비해줘"
claude --mcp-config study-room.json --strict-mcp-config

# study-room.json (학생의 공부방):
{
  "mcpServers": {
    "notes": {  # 📝 노트 필기 도구
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "./notes"],
      "env": {
        "AUTO_SAVE": "true",  # 자동 저장
        "BACKUP": "true"      # 백업도 자동
      }
    },
    "dictionary": {  # 📚 사전
      "command": "npx",
      "args": ["@modelcontextprotocol/server-dictionary"]
    },
    "timer": {  # ⏰ 공부 타이머
      "command": "npx",
      "args": ["@modelcontextprotocol/server-time"],
      "env": {
        "POMODORO": "25"  # 25분 집중 타이머
      }
    }
  }
}
```

#### 예제 5: 블로거 도구 세트
```bash
# "Claude야, 블로그 글쓰기 준비해"
claude --mcp-config blogger.json

# blogger.json (블로거의 작업실):
{
  "mcpServers": {
    "writer": {  # ✍️ 글쓰기 도구
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "./blog"]
    },
    "images": {  # 🖼️ 이미지 관리
      "command": "npx",
      "args": ["@modelcontextprotocol/server-image"],
      "env": {
        "OPTIMIZE": "true"  # 이미지 최적화
      }
    },
    "seo": {  # 🔍 검색엔진 최적화
      "command": "npx",
      "args": ["@modelcontextprotocol/server-seo"]
    }
  }
}
```

#### 예제 6: 팀 협업 환경
```bash
# "Claude야, 팀 작업 준비해"
claude --mcp-config team-work.json

# team-work.json (팀의 회의실):
{
  "mcpServers": {
    "shared": {  # 👥 공유 폴더
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "./team-shared"]
    },
    "github": {  # 🐙 GitHub (팀 저장소)
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "TEAM_REPO": "our-project"
      }
    },
    "chat": {  # 💬 팀 채팅
      "command": "npx",
      "args": ["@modelcontextprotocol/server-slack"]
    }
  }
}
```

### 🌳 고급 예제: 전문가 모드 (비행기 조종)

#### 예제 1: 풀스택 개발 환경
```bash
# "Claude야, 전체 개발 환경 가동!"
claude --dangerous-skip-permissions \
       --mcp-config fullstack.json \
       --strict-mcp-config

# fullstack.json (풀스택 개발자의 조종석):
{
  "mcpServers": {
    "frontend": {  # 🎨 프론트엔드 조종간
      "command": "npx",
      "args": ["@modelcontextprotocol/server-vite"],
      "env": {
        "HMR": "true",  # 핫 모듈 리로딩 (즉시 반영)
        "PORT": "3000"
      }
    },
    "backend": {  # ⚙️ 백엔드 엔진
      "command": "npx",
      "args": ["@modelcontextprotocol/server-express"],
      "env": {
        "PORT": "8080",
        "CORS": "*"  # 모든 출처 허용
      }
    },
    "database": {  # 🗃️ 데이터베이스 연료탱크
      "command": "npx",
      "args": ["@modelcontextprotocol/server-postgres"],
      "env": {
        "CONNECTION_POOL": "10",  # 연결 풀 크기
        "SSL": "require"
      }
    },
    "cache": {  # 💾 캐시 부스터
      "command": "npx",
      "args": ["@modelcontextprotocol/server-redis"],
      "env": {
        "MAX_MEMORY": "256mb"
      }
    },
    "monitoring": {  # 📡 모니터링 레이더
      "command": "npx",
      "args": ["@modelcontextprotocol/server-monitoring"],
      "env": {
        "ALERT_THRESHOLD": "error"
      }
    }
  }
}
```

#### 예제 2: AI/ML 연구 환경
```bash
# "Claude야, AI 연구소 가동!"
claude --dangerous-skip-permissions \
       --mcp-config ai-lab.json \
       --strict-mcp-config

# ai-lab.json (AI 연구소):
{
  "mcpServers": {
    "jupyter": {  # 🧪 실험 노트북
      "command": "npx",
      "args": ["@modelcontextprotocol/server-jupyter"],
      "env": {
        "KERNEL": "python3",
        "GPU_ENABLED": "true"  # GPU 가속 켜기
      }
    },
    "datasets": {  # 📊 데이터셋 관리
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "./datasets"],
      "env": {
        "LARGE_FILE_SUPPORT": "true",
        "STREAMING": "true"  # 스트리밍 지원
      }
    },
    "models": {  # 🤖 모델 저장소
      "command": "npx",
      "args": ["@modelcontextprotocol/server-mlflow"],
      "env": {
        "TRACKING_URI": "http://localhost:5000",
        "ARTIFACT_STORE": "./models"
      }
    },
    "tensorboard": {  # 📈 시각화 도구
      "command": "npx",
      "args": ["@modelcontextprotocol/server-tensorboard"],
      "env": {
        "LOG_DIR": "./logs",
        "RELOAD_INTERVAL": "5"
      }
    }
  }
}
```

#### 예제 3: DevOps 파이프라인
```bash
# "Claude야, DevOps 파이프라인 가동!"
claude --dangerous-skip-permissions \
       --mcp-config devops.json

# devops.json (DevOps 엔지니어의 컨트롤 타워):
{
  "mcpServers": {
    "docker": {  # 🐳 Docker 컨테이너 관리
      "command": "npx",
      "args": ["@modelcontextprotocol/server-docker"],
      "env": {
        "SOCKET": "/var/run/docker.sock",
        "AUTO_PRUNE": "true"  # 자동 정리
      }
    },
    "kubernetes": {  # ☸️ Kubernetes 오케스트레이션
      "command": "npx",
      "args": ["@modelcontextprotocol/server-k8s"],
      "env": {
        "KUBECONFIG": "~/.kube/config",
        "NAMESPACE": "production"
      }
    },
    "ci-cd": {  # 🔄 CI/CD 파이프라인
      "command": "npx",
      "args": ["@modelcontextprotocol/server-jenkins"],
      "env": {
        "PIPELINE": "Jenkinsfile",
        "AUTO_DEPLOY": "staging"
      }
    },
    "monitoring": {  # 📊 모니터링 대시보드
      "command": "npx",
      "args": ["@modelcontextprotocol/server-prometheus"],
      "env": {
        "SCRAPE_INTERVAL": "15s",
        "RETENTION": "30d"
      }
    },
    "logging": {  # 📝 로깅 시스템
      "command": "npx",
      "args": ["@modelcontextprotocol/server-elasticsearch"],
      "env": {
        "INDEX_PREFIX": "logs-",
        "RETENTION_DAYS": "7"
      }
    }
  }
}
```

#### 예제 4: 보안 감사 환경
```bash
# "Claude야, 보안 감사 모드 시작!"
claude --mcp-config security-audit.json \
       --strict-mcp-config

# security-audit.json (보안 전문가의 도구함):
{
  "mcpServers": {
    "scanner": {  # 🔍 취약점 스캐너
      "command": "npx",
      "args": ["@modelcontextprotocol/server-security-scan"],
      "env": {
        "SCAN_DEPTH": "deep",
        "CHECK_DEPENDENCIES": "true",
        "CVE_DATABASE": "latest"
      }
    },
    "penetration": {  # 🛡️ 침투 테스트
      "command": "npx",
      "args": ["@modelcontextprotocol/server-pentest"],
      "env": {
        "MODE": "safe",  # 안전 모드 (실제 공격 X)
        "REPORT_FORMAT": "json"
      }
    },
    "compliance": {  # 📋 규정 준수 체크
      "command": "npx",
      "args": ["@modelcontextprotocol/server-compliance"],
      "env": {
        "STANDARDS": "GDPR,HIPAA,SOC2",
        "AUTO_FIX": "false"
      }
    },
    "secrets": {  # 🔑 비밀 관리
      "command": "npx",
      "args": ["@modelcontextprotocol/server-vault"],
      "env": {
        "VAULT_ADDR": "http://localhost:8200",
        "AUTO_UNSEAL": "false"
      }
    }
  }
}
```

#### 예제 5: 엔터프라이즈 통합 환경
```bash
# "Claude야, 기업 시스템 전체 연결!"
claude --dangerous-skip-permissions \
       --mcp-config enterprise.json \
       --strict-mcp-config

# enterprise.json (대기업의 통합 시스템):
{
  "mcpServers": {
    "erp": {  # 💼 ERP 시스템
      "command": "npx",
      "args": ["@modelcontextprotocol/server-sap"],
      "env": {
        "SAP_HOST": "erp.company.com",
        "CLIENT": "100",
        "LANGUAGE": "KO"
      }
    },
    "crm": {  # 👥 CRM 시스템
      "command": "npx",
      "args": ["@modelcontextprotocol/server-salesforce"],
      "env": {
        "SF_USERNAME": "admin@company.com",
        "SF_INSTANCE": "na1.salesforce.com",
        "API_VERSION": "v55.0"
      }
    },
    "bi": {  # 📊 Business Intelligence
      "command": "npx",
      "args": ["@modelcontextprotocol/server-tableau"],
      "env": {
        "TABLEAU_SERVER": "bi.company.com",
        "SITE_ID": "Corporate",
        "AUTO_REFRESH": "hourly"
      }
    },
    "messaging": {  # 📧 메시징 시스템
      "command": "npx",
      "args": ["@modelcontextprotocol/server-kafka"],
      "env": {
        "BOOTSTRAP_SERVERS": "kafka1:9092,kafka2:9092",
        "CONSUMER_GROUP": "claude-consumer",
        "AUTO_COMMIT": "true"
      }
    },
    "ldap": {  # 🔐 사용자 인증
      "command": "npx",
      "args": ["@modelcontextprotocol/server-ldap"],
      "env": {
        "LDAP_URL": "ldap://directory.company.com",
        "BASE_DN": "dc=company,dc=com",
        "TLS": "true"
      }
    }
  }
}
```

#### 예제 6: 실시간 스트리밍 서비스
```bash
# "Claude야, 라이브 스트리밍 시스템 시작!"
claude --dangerous-skip-permissions \
       --mcp-config streaming.json

# streaming.json (스트리밍 서비스의 방송국):
{
  "mcpServers": {
    "media-server": {  # 📹 미디어 서버
      "command": "npx",
      "args": ["@modelcontextprotocol/server-wowza"],
      "env": {
        "STREAM_TYPE": "live",
        "TRANSCODING": "adaptive",  # 적응형 비트레이트
        "DVR": "true"  # 라이브 녹화
      }
    },
    "cdn": {  # 🌐 CDN 배포
      "command": "npx",
      "args": ["@modelcontextprotocol/server-cloudflare"],
      "env": {
        "CACHE_LEVEL": "aggressive",
        "PURGE_MODE": "selective",
        "SSL": "full"
      }
    },
    "chat": {  # 💬 실시간 채팅
      "command": "npx",
      "args": ["@modelcontextprotocol/server-websocket"],
      "env": {
        "MAX_CONNECTIONS": "10000",
        "HEARTBEAT": "30",
        "COMPRESSION": "true"
      }
    },
    "analytics": {  # 📊 실시간 분석
      "command": "npx",
      "args": ["@modelcontextprotocol/server-analytics"],
      "env": {
        "REAL_TIME": "true",
        "SAMPLING_RATE": "100",
        "DASHBOARD_URL": "http://localhost:3001"
      }
    },
    "moderation": {  # 🚨 콘텐츠 검수
      "command": "npx",
      "args": ["@modelcontextprotocol/server-moderation"],
      "env": {
        "AI_ENABLED": "true",
        "THRESHOLD": "strict",
        "AUTO_BAN": "false"
      }
    }
  }
}
```

## 위험한 권한 스킵 옵션 이해하기

### ⚠️ `--dangerous-skip-permissions`란?

**5살 아이에게 설명한다면**:
"엄마한테 허락 안 받고 장난감 가지고 놀기"와 같아요. 빠르게 놀 수 있지만, 위험한 장난감도 만질 수 있어요!

### 언제 사용하나요?

#### ✅ 사용하면 좋은 경우:
```bash
# 1. 개인 프로젝트에서 빠른 프로토타이핑
claude --dangerous-skip-permissions --mcp-config dev-tools.json

# 2. 신뢰할 수 있는 로컬 환경에서 작업
# 내 컴퓨터, 내 프로젝트, 내가 만든 MCP 설정
claude --dangerous-skip-permissions --mcp-config local-safe.json

# 3. 테스트 환경에서 빠른 실험
# Docker 컨테이너나 가상머신 안에서
claude --dangerous-skip-permissions --mcp-config test-env.json
```

#### ❌ 사용하면 안 되는 경우:
```bash
# 1. 회사 프로덕션 환경
# 절대 NO! 보안 검사를 건너뛰면 안 됩니다
claude --mcp-config production.json  # --dangerous-skip-permissions 없이!

# 2. 다른 사람이 만든 MCP 설정 사용할 때
# 믿을 수 없는 출처의 설정은 위험해요
claude --mcp-config downloaded-from-internet.json  # 권한 체크 필요!

# 3. 민감한 데이터가 있는 프로젝트
# 고객 정보, 비밀번호 등이 있다면 조심!
```

## MCP 설정 파일 만들기

### 📝 Step 1: 기본 구조 이해하기

```json
{
  "mcpServers": {
    "서버이름": {
      "command": "실행할명령어",
      "args": ["인자1", "인자2"],
      "env": {
        "환경변수": "값"
      }
    }
  }
}
```

### 🔍 JSON 필드 상세 설명

#### 각 필드가 하는 일:

```json
{
  "mcpServers": {              // 최상위 키: 모든 MCP 서버들을 담는 컨테이너
    "filesystem": {            // 서버 이름: Claude가 이 이름으로 서버를 인식
      "command": "npx",        // 실행 명령어: npx, node, python 등
      "args": [                // 명령어 인자: 실행할 때 전달할 매개변수들
        "@modelcontextprotocol/server-filesystem",  // MCP 서버 패키지명
        "/Users/jmacpro/Documents"                  // 추가 인자 (예: 접근 경로)
      ],
      "env": {                 // 환경 변수: 서버가 필요로 하는 설정값들
        "DEBUG": "true",       // 디버그 모드 활성화
        "MAX_FILES": "1000"    // 최대 파일 개수 제한
      }
    }
  }
}
```

### 🛠️ Step 2: 실제 설정 파일 만들기

#### 예제 1: 파일시스템만 사용하는 간단한 설정

```json
// simple-mcp.json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-filesystem",
        "/Users/jmacpro/Documents"
      ]
    }
  }
}
```

#### 예제 2: 여러 MCP 서버를 조합한 생산성 설정

```json
// productive-mcp.json
{
  "mcpServers": {
    // 파일 작업용
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "/Users/jmacpro/projects"]
    },

    // GitHub 연동
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_your_token_here"
      }
    },

    // 웹 스크래핑
    "puppeteer": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-puppeteer"]
    },

    // 시간 관련 작업
    "time": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-time"]
    }
  }
}
```

#### 예제 3: 초보 개발자를 위한 학습용 설정

```json
// learning-mcp.json
{
  "mcpServers": {
    // 파일 읽기/쓰기 연습용
    "filesystem": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-filesystem",
        "/Users/jmacpro/learning"
      ]
    },

    // 날짜/시간 다루기 연습
    "time": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-time"]
    },

    // 간단한 데이터베이스 연습
    "sqlite": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-sqlite",
        "--db-path", "/Users/jmacpro/learning/test.db"
      ]
    }
  }
}
```

## 엄격한 설정 모드 활용하기

### 🔒 `--strict-mcp-config`의 의미

**일상 비유**: 레고 블록을 조립할 때, "설명서에 있는 블록만 사용하기" 모드입니다.

### 왜 필요한가요?

```bash
# 엄격 모드 없이 (기본 동작)
claude --mcp-config my-tools.json
# 결과: my-tools.json + 기본 MCP 서버들도 함께 로드됨

# 엄격 모드 사용
claude --mcp-config my-tools.json --strict-mcp-config
# 결과: my-tools.json에 있는 서버들만 정확히 로드됨
```

### 🤔 생각해보기: 언제 엄격 모드를 쓸까요?

1. **보안이 중요한 프로젝트**: 정확히 허용된 도구만 사용
2. **테스트 환경**: 특정 MCP 서버만 테스트하고 싶을 때
3. **교육 목적**: 학습자가 특정 기능만 연습하도록 제한

## 실전 시나리오별 활용법

### 시나리오 1: 웹 개발 프로젝트 시작하기

#### 🎯 목표: React 프로젝트 생성부터 배포까지

**완전한 web-dev-mcp.json 파일:**

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-filesystem",
        "/Users/jmacpro/projects/my-web-app"
      ],
      "env": {
        "WATCH_MODE": "true",           // 파일 변경 감지 활성화
        "AUTO_SAVE": "true",             // 자동 저장 활성화
        "MAX_FILE_SIZE": "10485760"     // 최대 파일 크기 10MB
      }
    },
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_your_real_token_here",  // GitHub Personal Access Token
        "DEFAULT_REPO": "my-web-app",                // 기본 저장소 이름
        "DEFAULT_BRANCH": "main"                     // 기본 브랜치
      }
    },
    "browser": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-puppeteer",
        "--headless", "false"           // 브라우저 창 표시 (디버깅용)
      ],
      "env": {
        "VIEWPORT_WIDTH": "1920",       // 브라우저 너비
        "VIEWPORT_HEIGHT": "1080",      // 브라우저 높이
        "DEFAULT_TIMEOUT": "30000"      // 기본 타임아웃 30초
      }
    },
    "node": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-node"],
      "env": {
        "NODE_ENV": "development",      // 개발 환경 설정
        "PORT": "3000"                  // 개발 서버 포트
      }
    }
  }
}
```

**실행 방법:**

```bash
# 1. JSON 파일 생성
echo '위의 JSON 내용' > web-dev-mcp.json

# 2. Claude Code 실행
claude --dangerous-skip-permissions \
       --mcp-config web-dev-mcp.json \
       --strict-mcp-config

# 3. Claude에게 할 수 있는 명령 예시:
# "React 프로젝트를 TypeScript로 만들어줘"
# "라우팅과 상태 관리를 추가해줘"
# "GitHub에 레포지토리 만들고 푸시해줘"
# "Vercel에 배포할 수 있게 설정해줘"
```

### 시나리오 2: 데이터 분석 프로젝트

#### 🎯 목표: CSV 데이터 분석부터 시각화까지

**완전한 data-analysis-mcp.json 파일:**

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-filesystem",
        "/Users/jmacpro/data-projects"
      ],
      "env": {
        "ALLOWED_EXTENSIONS": ".csv,.json,.xlsx,.parquet,.db",  // 허용된 파일 확장자
        "MAX_FILE_SIZE": "104857600",                           // 최대 100MB 파일
        "ENABLE_WRITE": "true"                                  // 쓰기 권한 활성화
      }
    },
    "sqlite": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-sqlite",
        "--db-path", "/Users/jmacpro/data-projects/analysis.db"
      ],
      "env": {
        "ENABLE_FOREIGN_KEYS": "true",     // 외래키 제약 활성화
        "JOURNAL_MODE": "WAL",              // Write-Ahead Logging 모드
        "CACHE_SIZE": "10000",              // 캐시 크기 (페이지 단위)
        "SYNCHRONOUS": "NORMAL"             // 동기화 레벨
      }
    },
    "python": {
      "command": "python3",
      "args": ["-m", "mcp_python_server"],
      "env": {
        "PYTHON_PATH": "/usr/local/bin/python3",     // Python 경로
        "VIRTUAL_ENV": "/Users/jmacpro/venvs/data",  // 가상환경 경로
        "PACKAGES": "pandas,numpy,matplotlib,seaborn,scikit-learn"  // 사용 가능한 패키지들
      }
    },
    "jupyter": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-jupyter",
        "--notebook-dir", "/Users/jmacpro/data-projects/notebooks"
      ],
      "env": {
        "JUPYTER_TOKEN": "your_token_here",          // Jupyter 토큰
        "JUPYTER_PORT": "8888",                      // Jupyter 포트
        "KERNEL_NAME": "python3"                     // 기본 커널
      }
    }
  }
}
```

**실행 방법:**

```bash
# 1. 필요한 디렉토리 생성
mkdir -p ~/data-projects/notebooks
mkdir -p ~/data-projects/data
mkdir -p ~/data-projects/output

# 2. JSON 파일 생성
echo '위의 JSON 내용' > data-analysis-mcp.json

# 3. Claude Code 실행
claude --dangerous-skip-permissions \
       --mcp-config data-analysis-mcp.json

# 4. Claude에게 할 수 있는 명령 예시:
# "sales.csv 파일을 분석하고 월별 트렌드를 보여줘"
# "데이터를 SQLite에 저장하고 복잡한 쿼리를 실행해줘"
# "머신러닝 모델을 만들어서 예측해줘"
# "결과를 Jupyter 노트북으로 정리해줘"
```

### 시나리오 3: 학습 및 실험 환경

#### 🎯 목표: 초보자가 안전하게 연습할 수 있는 환경

**완전한 learning-sandbox-mcp.json 파일:**

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-filesystem",
        "/Users/jmacpro/learning-sandbox"
      ],
      "env": {
        "SANDBOX_MODE": "true",              // 샌드박스 모드 활성화
        "ALLOWED_OPERATIONS": "read,write",   // 허용된 작업 (삭제 제외)
        "MAX_DEPTH": "3",                     // 최대 폴더 깊이 제한
        "BACKUP_ENABLED": "true"              // 자동 백업 활성화
      }
    },
    "time": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-time"],
      "env": {
        "TIMEZONE": "Asia/Seoul",            // 한국 시간대
        "FORMAT": "YYYY-MM-DD HH:mm:ss"      // 날짜 형식
      }
    },
    "calculator": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-calculator"],
      "env": {
        "PRECISION": "10",                   // 소수점 정밀도
        "ENABLE_SCIENTIFIC": "true"           // 과학 계산 활성화
      }
    },
    "tutorial": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-tutorial"],
      "env": {
        "TUTORIAL_LEVEL": "beginner",        // 튜토리얼 레벨
        "LANGUAGE": "ko",                    // 한국어 설정
        "HINTS_ENABLED": "true",             // 힌트 활성화
        "STEP_BY_STEP": "true"               // 단계별 학습
      }
    }
  }
}
```

**초보자 친화적 실행 방법:**

```bash
# 1. 학습용 폴더 생성 및 기본 파일 준비
mkdir -p ~/learning-sandbox/{projects,exercises,notes}
cd ~/learning-sandbox

# 샘플 파일 생성
echo "안녕하세요! 첫 번째 파일입니다." > hello.txt
echo '{"name": "학습자", "level": "초보"}' > student.json

# 2. JSON 파일 생성 (한 줄씩 이해하면서)
cat > learning-sandbox-mcp.json << 'EOF'
# 위의 JSON 내용을 여기에 복사
EOF

# 3. Claude Code 실행 (안전 모드)
claude --mcp-config learning-sandbox-mcp.json --strict-mcp-config

# 4. 초보자가 연습할 수 있는 명령 예시:
# "hello.txt 파일을 읽어줘"
# "새로운 메모 파일을 만들어줘"
# "현재 시간을 알려줘"
# "100 + 200을 계산해줘"
# "파일 정리하는 방법을 가르쳐줘"
```

## 문제 해결 가이드

### 자주 발생하는 문제와 해결법

#### 문제 1: "MCP server failed to start"
```bash
# 원인: MCP 서버가 설치되지 않음
# 해결법:
npm install -g @modelcontextprotocol/server-filesystem
npm install -g @modelcontextprotocol/server-github

# 또는 npx를 사용 (자동 설치)
```

#### 문제 2: "Permission denied"
```bash
# 원인: 파일/폴더 접근 권한 없음
# 해결법 1: 권한 부여
chmod 755 /path/to/folder

# 해결법 2: --dangerous-skip-permissions 사용 (주의!)
claude --dangerous-skip-permissions --mcp-config config.json
```

#### 문제 3: "Invalid JSON in config file"
```json
// 잘못된 예:
{
  "mcpServers": {
    "filesystem": {
      "command": "npx"
      "args": ["server"]  // 쉼표 빠짐!
    }
  }
}

// 올바른 예:
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",  // 쉼표 추가
      "args": ["server"]
    }
  }
}
```

## 생산성 극대화 팁

### 💡 Tip 1: 별칭(Alias) 만들기

```bash
# ~/.zshrc 또는 ~/.bashrc에 추가
alias claude-dev='claude --dangerous-skip-permissions --mcp-config ~/mcp-configs/dev.json --strict-mcp-config'
alias claude-prod='claude --mcp-config ~/mcp-configs/production.json'
alias claude-learn='claude --mcp-config ~/mcp-configs/learning.json --strict-mcp-config'

# 사용법
claude-dev  # 개발 환경으로 바로 시작
```

### 💡 Tip 2: 프로젝트별 설정 관리

```bash
# 프로젝트 구조
my-project/
├── .mcp/
│   ├── dev.json      # 개발용 설정
│   ├── test.json     # 테스트용 설정
│   └── prod.json     # 프로덕션용 설정
├── src/
└── package.json

# package.json에 스크립트 추가
{
  "scripts": {
    "claude:dev": "claude --dangerous-skip-permissions --mcp-config .mcp/dev.json",
    "claude:test": "claude --mcp-config .mcp/test.json --strict-mcp-config",
    "claude:prod": "claude --mcp-config .mcp/prod.json"
  }
}
```

### 💡 Tip 3: 환경 변수 활용

```bash
# .env 파일
GITHUB_TOKEN=ghp_xxxxx
OPENAI_API_KEY=sk-xxxxx
DATABASE_URL=sqlite:///path/to/db

# MCP 설정에서 환경 변수 참조
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    }
  }
}
```

### 💡 Tip 4: 점진적 학습 경로

```bash
# Level 1: 기본 시작
claude

# Level 2: 단일 MCP 서버
claude --mcp-config simple.json

# Level 3: 여러 MCP 서버
claude --mcp-config multi.json

# Level 4: 엄격 모드 추가
claude --mcp-config multi.json --strict-mcp-config

# Level 5: 전체 옵션 활용
claude --dangerous-skip-permissions --mcp-config advanced.json --strict-mcp-config
```

## 🌟 종합 예제: 초보자를 위한 완벽한 MCP 컬렉션

### 모든 기능이 포함된 ultimate-beginner-mcp.json

```json
{
  "mcpServers": {
    // === 파일 관리 ===
    "filesystem": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-filesystem",
        "/Users/jmacpro/workspace"
      ],
      "env": {
        "WATCH_MODE": "true",
        "AUTO_BACKUP": "true",
        "MAX_FILE_SIZE": "52428800",        // 50MB 제한
        "EXCLUDED_DIRS": ".git,node_modules,dist"
      }
    },

    // === 버전 관리 ===
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_your_token",
        "DEFAULT_VISIBILITY": "private",     // 기본 비공개 저장소
        "AUTO_INIT_README": "true",          // README 자동 생성
        "DEFAULT_LICENSE": "MIT"             // MIT 라이센스
      }
    },

    // === 데이터베이스 ===
    "sqlite": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-sqlite",
        "--db-path", "/Users/jmacpro/workspace/database.db"
      ],
      "env": {
        "AUTO_CREATE_TABLES": "true",       // 테이블 자동 생성
        "ENABLE_LOGGING": "true",            // SQL 로깅 활성화
        "BACKUP_ON_CONNECT": "true"          // 연결 시 백업
      }
    },

    // === 웹 브라우저 ===
    "browser": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-puppeteer"],
      "env": {
        "HEADLESS": "false",                 // 브라우저 창 표시
        "SLOW_MO": "250",                    // 느린 실행 (디버깅용)
        "DEVTOOLS": "true",                  // 개발자 도구 열기
        "DEFAULT_VIEWPORT_WIDTH": "1280",
        "DEFAULT_VIEWPORT_HEIGHT": "720"
      }
    },

    // === 유틸리티 ===
    "time": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-time"],
      "env": {
        "TIMEZONE": "Asia/Seoul",
        "LOCALE": "ko-KR"
      }
    },

    // === API 연동 ===
    "http": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-http"],
      "env": {
        "DEFAULT_TIMEOUT": "10000",          // 10초 타임아웃
        "RETRY_COUNT": "3",                  // 3회 재시도
        "RATE_LIMIT": "10",                  // 분당 10회 제한
        "LOG_REQUESTS": "true"               // 요청 로깅
      }
    },

    // === 노트 관리 (Obsidian 연동) ===
    "obsidian": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-obsidian",
        "--vault-path", "/Users/jmacpro/Documents/Obsidian Vault"
      ],
      "env": {
        "DEFAULT_FOLDER": "00. inbox",       // 기본 저장 폴더
        "TEMPLATE_FOLDER": "90. setting/templates",  // 템플릿 폴더
        "AUTO_TAG": "true",                  // 자동 태그 추가
        "AUTO_LINK": "true"                  // 자동 링크 생성
      }
    },

    // === YouTube 분석 ===
    "youtube": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-youtube"],
      "env": {
        "YOUTUBE_API_KEY": "your_api_key",
        "DEFAULT_QUALITY": "1080p",          // 기본 화질
        "DOWNLOAD_SUBTITLES": "true",        // 자막 다운로드
        "SUBTITLE_LANGUAGES": "ko,en"        // 한국어, 영어 자막
      }
    }
  }
}
```

### 이 설정으로 할 수 있는 것들

#### 1️⃣ **파일 및 프로젝트 관리**
```bash
# "새 프로젝트 폴더 만들고 기본 구조 생성해줘"
# "모든 JavaScript 파일 찾아서 정리해줘"
# "프로젝트를 백업하고 GitHub에 업로드해줘"
```

#### 2️⃣ **데이터 작업**
```bash
# "CSV 파일을 데이터베이스로 가져와줘"
# "데이터베이스에서 분석 쿼리 실행해줘"
# "결과를 차트로 만들어줘"
```

#### 3️⃣ **웹 자동화**
```bash
# "이 웹사이트에서 데이터 수집해줘"
# "폼 자동으로 채워서 제출해줘"
# "웹페이지 스크린샷 찍어줘"
```

#### 4️⃣ **학습 콘텐츠 관리**
```bash
# "이 YouTube 영상 요약해서 옵시디언 노트로 만들어줘"
# "오늘 배운 내용 정리해서 저장해줘"
# "학습 일정 관리해줘"
```

## 구현 체크리스트

### 초보자를 위한 단계별 실행 계획

- [ ] Claude Code 설치 확인: `claude --version`
- [ ] 첫 번째 간단한 MCP 설정 파일 만들기
- [ ] 기본 명령어로 실행해보기
- [ ] --mcp-config 옵션 추가해서 실행
- [ ] --strict-mcp-config 추가해서 차이 체험
- [ ] --dangerous-skip-permissions 신중하게 테스트
- [ ] 프로젝트별 설정 파일 만들기
- [ ] 별칭(alias) 설정하기
- [ ] 팀원들과 설정 공유하기

## 🚀 초보자를 위한 0부터 시작하기 가이드

### Step 0: Claude Code 설치하기

```bash
# macOS / Linux
curl -fsSL https://github.com/anthropics/claude-code/install.sh | sh

# Windows (PowerShell 관리자 권한)
irm https://github.com/anthropics/claude-code/install.ps1 | iex

# 설치 확인
claude --version
# 출력 예시: Claude Code v1.0.0
```

### Step 1: 첫 번째 MCP 설정 만들기

```bash
# 1. 작업 폴더 생성
mkdir ~/my-first-mcp
cd ~/my-first-mcp

# 2. 가장 간단한 설정 파일 생성
cat > first.json << 'EOF'
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "."]
    }
  }
}
EOF

# 3. 실행해보기
claude --mcp-config first.json

# 4. Claude에게 물어보기
# "현재 폴더에 어떤 파일이 있어?"
```

### Step 2: 점진적으로 기능 추가하기

```bash
# 두 번째 설정: 시간 기능 추가
cat > second.json << 'EOF'
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "."]
    },
    "time": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-time"]
    }
  }
}
EOF

claude --mcp-config second.json
# "지금 시간이 몇 시야?"
```

## ❓ 자주 묻는 질문 (FAQ)

### Q1: "command not found: claude" 오류가 나와요!

**A:** Claude Code가 설치되지 않았거나 PATH에 추가되지 않았습니다.

```bash
# PATH 확인
echo $PATH | grep -q claude || echo "Claude가 PATH에 없습니다"

# PATH에 수동 추가 (zsh 사용자)
echo 'export PATH="$HOME/.claude/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# PATH에 수동 추가 (bash 사용자)
echo 'export PATH="$HOME/.claude/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### Q2: JSON 파일에서 주석을 쓸 수 있나요?

**A:** 표준 JSON은 주석을 지원하지 않습니다! 하지만 몇 가지 방법이 있습니다:

```json
// ❌ 잘못된 방법 - 이렇게 하면 에러!
{
  "mcpServers": {
    // 이것은 작동하지 않습니다
    "filesystem": { }
  }
}

// ✅ 대안 1: 별도 설명 파일 만들기
// config-explanation.txt 파일에 설명 작성

// ✅ 대안 2: 더미 필드 사용 (권장하지 않음)
{
  "_comment": "이것은 파일시스템 서버입니다",
  "mcpServers": { }
}
```

### Q3: 환경 변수를 안전하게 관리하는 방법은?

**A:** 토큰과 API 키를 직접 JSON에 넣지 마세요!

```bash
# 1. .env 파일 생성
cat > .env << 'EOF'
GITHUB_TOKEN=ghp_your_real_token
OPENAI_API_KEY=sk-your_real_key
EOF

# 2. .gitignore에 추가
echo ".env" >> .gitignore

# 3. 환경 변수 로드 후 실행
source .env && claude --mcp-config config.json
```

### Q4: MCP 서버가 시작되지 않아요!

**A:** 다음을 차례대로 확인하세요:

```bash
# 1. Node.js 설치 확인
node --version  # v16 이상 필요

# 2. npx 작동 확인
npx --version

# 3. MCP 서버 수동 테스트
npx @modelcontextprotocol/server-filesystem --help

# 4. 권한 문제 해결
chmod +x ~/.claude/bin/claude
```

### Q5: 어떤 MCP 서버들을 사용할 수 있나요?

**인기 있는 MCP 서버 목록:**

- `server-filesystem`: 파일 읽기/쓰기
- `server-github`: GitHub 연동
- `server-sqlite`: SQLite 데이터베이스
- `server-puppeteer`: 웹 브라우저 자동화
- `server-time`: 시간/날짜 유틸리티
- `server-http`: HTTP 요청
- `server-python`: Python 코드 실행
- `server-docker`: Docker 컨테이너 관리
- `server-kubernetes`: K8s 클러스터 관리

## 🔤 고급 용어 파인만 사전

### 전문가 모드에서 나오는 어려운 용어들

#### 🎯 HMR (Hot Module Replacement)
**5살 아이 설명**: "그림 그리다가 지우개로 지우고 다시 그리기"
**일상 비유**: TV 채널 돌리기 - 전원 끄지 않고 바로 다른 채널로 전환
**기술적 의미**: 웹페이지 새로고침 없이 변경사항만 즉시 반영

#### 🎯 CORS (Cross-Origin Resource Sharing)
**5살 아이 설명**: "다른 집 장난감 빌려오기 허락받기"
**일상 비유**: 다른 나라 입국 시 비자 확인 - 허가된 사람만 들어올 수 있음
**기술적 의미**: 다른 도메인의 리소스를 사용할 수 있는 권한

#### 🎯 SSL/TLS
**5살 아이 설명**: "비밀 편지를 암호로 쓰기"
**일상 비유**: 은행 금고 - 열쇠가 있어야만 열 수 있음
**기술적 의미**: 인터넷 통신을 암호화하는 보안 프로토콜

#### 🎯 WebSocket
**5살 아이 설명**: "전화기처럼 계속 연결된 통화"
**일상 비유**: 무전기 - 한 번 연결하면 계속 대화 가능
**기술적 의미**: 실시간 양방향 통신을 위한 프로토콜

#### 🎯 Kubernetes (K8s)
**5살 아이 설명**: "장난감 로봇들의 지휘관"
**일상 비유**: 오케스트라 지휘자 - 각 악기(컨테이너)를 조화롭게 연주시킴
**기술적 의미**: 컨테이너화된 애플리케이션을 자동 관리하는 시스템

#### 🎯 Redis
**5살 아이 설명**: "빠른 메모장"
**일상 비유**: 포스트잇 - 중요한 것을 빠르게 적고 찾기
**기술적 의미**: 메모리 기반의 빠른 데이터 저장소

#### 🎯 Kafka
**5살 아이 설명**: "편지를 모아서 배달하는 우체국"
**일상 비유**: 컨베이어 벨트 - 물건(메시지)을 순서대로 전달
**기술적 의미**: 대용량 실시간 데이터 스트리밍 플랫폼

#### 🎯 ERP (Enterprise Resource Planning)
**5살 아이 설명**: "회사의 모든 일을 관리하는 큰 공책"
**일상 비유**: 가계부 + 일정표 + 주소록을 합친 것
**기술적 의미**: 기업의 모든 업무를 통합 관리하는 시스템

#### 🎯 CRM (Customer Relationship Management)
**5살 아이 설명**: "친구들 정보를 적어놓은 친구 수첩"
**일상 비유**: 단골 가게 주인이 손님 취향을 기억하는 것
**기술적 의미**: 고객 정보와 상호작용을 관리하는 시스템

#### 🎯 LDAP (Lightweight Directory Access Protocol)
**5살 아이 설명**: "학교 출석부 같은 명단"
**일상 비유**: 아파트 경비실의 입주민 명부
**기술적 의미**: 사용자 정보를 중앙에서 관리하는 디렉토리 서비스

#### 🎯 CDN (Content Delivery Network)
**5살 아이 설명**: "동네마다 있는 편의점"
**일상 비유**: 프랜차이즈 - 어디서든 같은 물건을 가까운 곳에서 구매
**기술적 의미**: 콘텐츠를 여러 지역에 분산 저장하여 빠르게 제공

#### 🎯 연결 풀 (Connection Pool)
**5살 아이 설명**: "미리 준비해둔 전화선들"
**일상 비유**: 택시 승강장 - 여러 대의 택시가 대기 중
**기술적 의미**: 데이터베이스 연결을 미리 만들어 재사용

## 🎯 핵심 요약

1. **MCP 설정**은 Claude Code가 사용할 수 있는 **도구 모음**을 정의합니다
2. **--dangerous-skip-permissions**는 빠르지만 **주의해서** 사용하세요
3. **--strict-mcp-config**는 정확히 지정한 도구만 사용하도록 **제한**합니다
4. **설정 파일**을 프로젝트별로 관리하면 **생산성이 극대화**됩니다
5. **JSON 파일**의 모든 필드를 이해하고 사용하면 **더 강력한 자동화**가 가능합니다
6. **모든 용어**를 파인만 기법으로 이해하면 **초보자도 전문가처럼** 활용 가능합니다

## 연결된 노트

- [[Claude Code 기본 사용법]]
- [[MCP 서버 종류와 활용법]]
- [[Claude Code 고급 설정]]
- [[개발 환경 자동화]]
- [[보안 모범 사례]]

---

**💡 Pro Tip**: 처음에는 간단한 설정부터 시작하세요. 점차 복잡한 설정을 추가하면서 각 옵션의 효과를 직접 체험해보는 것이 가장 좋은 학습 방법입니다!

**🚀 다음 단계**: 이제 여러분만의 MCP 설정 파일을 만들어보세요. 작은 프로젝트부터 시작해서 점진적으로 확장해나가면 어느새 MCP 마스터가 되어있을 거예요!