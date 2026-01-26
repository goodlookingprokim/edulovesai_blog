---
title: Terminal 실무 명령어 마스터 가이드 - 개발자를 위한 완전한 매뉴얼
created: 2025-09-19
last_modified: 2025-09-19
tags:
  - Terminal
  - CLI
  - macOS
  - 개발도구
  - 실무가이드
  - 개발자
  - 명령어
  - 매뉴얼
  - 업무효율
  - DevOps
  - Git
  - Docker
  - Node.js
  - Python
status: 완료
type: 실무가이드
priority: high
share_link: https://share.note.sx/li4f5dmk#79V1TmeQ3U7i9yajz+bLCMZ8gAadYZO9cTARIGcWlvg
share_updated: 2025-09-27T19:16:35+09:00
---

# 🚀 Terminal 실무 명령어 마스터 가이드
**개발자를 위한 완전한 CLI 매뉴얼**

> "터미널 마스터리는 개발 생산성의 핵심입니다. 이 가이드로 CLI 전문가가 되어보세요!"

## 📋 목차
1. [[#터미널 기초 마스터하기]]
2. [[#필수 네비게이션 명령어]]
3. [[#파일 시스템 조작의 달인]]
4. [[#텍스트 처리와 분석]]
5. [[#프로세스 및 시스템 관리]]
6. [[#네트워크 진단과 분석]]
7. [[#개발자 핵심 명령어]]
8. [[#Git 워크플로우 자동화]]
9. [[#Docker 컨테이너 관리]]
10. [[#Node.js 개발 환경]]
11. [[#Python 개발 환경]]
12. [[#데이터베이스 관리]]
13. [[#로그 분석과 모니터링]]
14. [[#성능 최적화와 디버깅]]
15. [[#자동화 스크립팅]]
16. [[#보안과 권한 관리]]
17. [[#실무 워크플로우 시나리오]]
18. [[#트러블슈팅 가이드]]
19. [[#고급 팁과 트릭]]
20. [[#개발팀 베스트 프랙티스]]

---

# 터미널 기초 마스터하기

## 터미널의 진정한 파워

### 🎯 왜 터미널인가?
터미널은 단순한 텍스트 인터페이스가 아닙니다. 개발자에게는:
- **속도**: GUI보다 3-5배 빠른 작업 처리
- **정확성**: 반복 작업의 완벽한 재현성
- **자동화**: 복잡한 워크플로우의 스크립트화
- **원격 작업**: SSH를 통한 서버 관리
- **배치 처리**: 대량 파일 처리 및 변환

### 💡 개발자 마인드셋
```bash
# GUI 사고방식: "마우스로 클릭해서 파일을 찾자"
# CLI 사고방식: "명령어로 원하는 결과를 정확히 얻자"

# 예시: 프로젝트에서 모든 TODO 주석 찾기
find . -name "*.js" -exec grep -l "TODO" {} \;
```

---

# 필수 네비게이션 명령어

## 🧭 디렉토리 탐색의 달인

### pwd - 현재 위치 확인
```bash
# 기본 사용법
pwd
# 출력: /Users/developer/projects/my-app

# 심볼릭 링크의 실제 경로
pwd -P

# 스크립트에서 현재 디렉토리 저장
CURRENT_DIR=$(pwd)
echo "작업 디렉토리: $CURRENT_DIR"
```

### cd - 네비게이션 마스터
```bash
# 🌱 기본 이동
cd ~/projects                    # 홈 디렉토리/projects로
cd ..                           # 상위 디렉토리로
cd -                            # 이전 위치로 돌아가기
cd                              # 홈 디렉토리로

# 🌿 실무 활용
cd ~/projects/$(ls -t | head -1)  # 가장 최근 수정된 프로젝트로
cd /opt/homebrew/bin             # Homebrew 실행파일 디렉토리

# 🌳 고급 기법
# 환경 변수 활용
export PROJECTS_DIR="$HOME/projects"
cd "$PROJECTS_DIR/my-app"

# 자동 완성 활용 (Tab 키)
cd ~/proj[Tab]                   # 자동 완성으로 경로 입력

# pushd/popd로 디렉토리 스택 관리
pushd /tmp                       # 현재 위치를 스택에 저장하고 /tmp로 이동
popd                            # 스택에서 이전 위치를 복원
```

### ls - 파일 목록의 예술
```bash
# 🌱 기본 활용
ls                              # 기본 목록
ls -la                          # 숨김파일 포함, 자세한 정보
ls -lh                          # 사람이 읽기 쉬운 파일 크기

# 🌿 개발자 특화 활용
ls -la | grep "^d"              # 디렉토리만 보기
ls -la | grep "\.js$"           # .js 파일만 보기
ls -lt | head -10               # 최근 수정된 파일 10개
ls -lS                          # 파일 크기 순으로 정렬

# 🌳 고급 필터링
ls -la --time-style='+%Y-%m-%d %H:%M'  # 사용자 정의 시간 형식
ls -la | awk '{print $5, $9}'  # 파일 크기와 이름만 출력
ls -la | sort -k5 -nr           # 파일 크기 역순 정렬

# 개발 프로젝트에서 유용한 조합
ls -la | grep -E "\.(js|ts|jsx|tsx)$"  # React/TypeScript 파일만
ls -la node_modules/ | wc -l     # node_modules 하위 패키지 개수
```

---

# 파일 시스템 조작의 달인

## 📁 프로젝트 구조 생성 자동화

### mkdir - 디렉토리 생성 마스터
```bash
# 🌱 기본 생성
mkdir my-project
mkdir -p deep/nested/structure   # 중첩 디렉토리 한번에 생성

# 🌿 실무 프로젝트 구조
# React 프로젝트 구조 생성
mkdir -p my-react-app/{src/{components,hooks,utils,styles,assets},public,tests,docs}

# Node.js API 프로젝트 구조
mkdir -p my-api/{src/{controllers,models,middlewares,routes,services,utils},tests/{unit,integration},docs}

# 🌳 고급 자동화
# 날짜별 백업 폴더 생성
mkdir -p "backups/$(date +%Y)/$(date +%m)/$(date +%d)"

# 권한과 함께 생성
mkdir -m 755 public-folder       # 읽기/쓰기/실행 권한 설정

# 여러 환경 폴더 생성
mkdir -p environments/{development,staging,production}
```

### touch - 파일 생성과 타임스탬프 관리
```bash
# 🌱 기본 파일 생성
touch README.md
touch .env .gitignore           # 여러 파일 동시 생성

# 🌿 개발 환경 초기화
# React 컴포넌트 파일들 생성
touch src/components/{Header,Footer,Sidebar}.jsx

# 설정 파일들 생성
touch {package.json,tsconfig.json,webpack.config.js}

# 🌳 고급 활용
# 현재 날짜로 로그 파일 생성
touch "logs/app-$(date +%Y%m%d).log"

# 특정 날짜로 파일 타임스탬프 설정
touch -t 202501010000 old-file.txt

# 다른 파일의 타임스탬프 복사
touch -r reference-file.txt new-file.txt
```

### cp - 파일 복사 전문가
```bash
# 🌱 기본 복사
cp file.txt backup.txt
cp -r source-folder destination-folder

# 🌿 개발 실무 활용
# 설정 파일 백업
cp .env .env.backup
cp package.json package.json.$(date +%Y%m%d)

# 프로젝트 템플릿 복사
cp -r ~/templates/react-app ./new-project

# 🌳 고급 복사 전략
# 증분 백업 (변경된 파일만)
cp -u source/* destination/

# 심볼릭 링크 보존하여 복사
cp -a source/ destination/

# 진행 상황 표시하며 복사 (대용량 파일)
rsync -ah --progress source.zip destination/

# 특정 패턴 파일만 복사
find src/ -name "*.js" -exec cp {} backup/ \;
```

### mv - 이동과 이름 변경 마스터
```bash
# 🌱 기본 이동/이름변경
mv old-name.txt new-name.txt
mv file.txt ../parent-directory/

# 🌿 대량 파일 작업
# 특정 확장자 파일들 이동
mv *.log logs/
mv *.backup archive/

# 날짜별 파일 정리
mv "log-$(date +%Y%m%d).txt" "archive/logs/"

# 🌳 고급 리팩토링
# JavaScript 파일을 TypeScript로 일괄 변환
for file in *.js; do
    mv "$file" "${file%.js}.ts"
done

# 프로젝트 구조 재정리
mv src/components/old-structure/* src/components/new-structure/

# 안전한 이동 (덮어쓰기 확인)
mv -i important-file.txt destination/
```

### rm - 안전한 삭제 전문가
```bash
# 🌱 기본 삭제
rm file.txt
rm -rf folder/                  # 폴더와 내용 모두 삭제

# 🌿 안전한 개발 환경 정리
# 확인하며 삭제
rm -i *.tmp

# node_modules 정리
rm -rf node_modules package-lock.json

# 빌드 결과물 정리
rm -rf dist/ build/ .next/

# 🌳 고급 정리 전략
# 특정 기간 이전 로그 파일 삭제
find logs/ -name "*.log" -mtime +30 -delete

# Git에서 추적되지 않는 파일 삭제
git clean -fd

# 안전한 삭제 함수 (Trash 사용)
# brew install trash 설치 후
trash obsolete-files/           # 휴지통으로 이동

# 용량 큰 파일 찾아서 삭제
find . -size +100M -exec ls -lh {} \; | awk '{print $5 ": " $9}'
```

---

# 텍스트 처리와 분석

## 📄 개발자를 위한 텍스트 도구

### cat - 파일 내용 표시와 결합
```bash
# 🌱 기본 표시
cat package.json
cat README.md

# 🌿 개발 실무 활용
# 여러 설정 파일 한번에 보기
cat .env .env.local .env.production

# 줄 번호와 함께 코드 보기
cat -n src/index.js

# 파일 합치기
cat header.html body.html footer.html > complete.html

# 🌳 고급 활용
# JSON 파일 예쁘게 보기 (jq와 조합)
cat package.json | jq '.'

# 로그 파일 실시간 모니터링과 결합
cat /var/log/app.log | tail -f

# Here Document로 설정 파일 생성
cat > .eslintrc.json << EOF
{
  "extends": ["eslint:recommended"],
  "env": {
    "browser": true,
    "node": true
  }
}
EOF
```

### grep - 패턴 검색의 대가
```bash
# 🌱 기본 검색
grep "error" app.log
grep -i "ERROR" app.log           # 대소문자 무시

# 🌿 개발 실무 활용
# 코드에서 TODO 찾기
grep -r "TODO" src/
grep -rn "FIXME" --include="*.js" .

# 의존성 분석
grep -r "import.*react" src/
grep "\"dependencies\"" -A 20 package.json

# 환경 변수 사용 확인
grep -r "process\.env" src/

# 🌳 고급 패턴 매칭
# 정규 표현식으로 이메일 찾기
grep -E "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" contacts.txt

# 함수 정의 찾기
grep -E "function\s+\w+|const\s+\w+\s*=" src/*.js

# API 엔드포인트 찾기
grep -E "(GET|POST|PUT|DELETE)\s+/\w+" routes/*.js

# 로그에서 에러 레벨 분석
grep -E "(ERROR|WARN|INFO)" app.log | sort | uniq -c

# 특정 IP 주소 접근 로그
grep "192.168.1.100" access.log | wc -l
```

### find - 파일 검색의 전문가
```bash
# 🌱 기본 검색
find . -name "*.js"
find . -type f -name "config*"

# 🌿 개발 프로젝트 분석
# TypeScript 파일 찾기
find src/ -name "*.ts" -o -name "*.tsx"

# 최근 수정된 파일 (7일 이내)
find . -name "*.js" -mtime -7

# 큰 파일 찾기 (1MB 이상)
find . -size +1M -type f

# 🌳 고급 검색과 실행
# 빈 디렉토리 찾기
find . -type d -empty

# JavaScript 파일에서 console.log 찾기
find src/ -name "*.js" -exec grep -l "console.log" {} \;

# package.json 파일들 찾아서 의존성 분석
find . -name "package.json" -exec jq '.dependencies' {} \;

# 특정 권한 파일 찾기
find . -type f -perm 755

# Git 추적되지 않는 파일 찾기
find . -name ".git" -prune -o -type f -print | head -20
```

### awk - 텍스트 처리의 마법사
```bash
# 🌱 기본 필드 추출
ls -la | awk '{print $5, $9}'    # 파일 크기와 이름
ps aux | awk '{print $1, $11}'   # 사용자와 명령어

# 🌿 로그 분석 실무
# 액세스 로그에서 IP 주소 추출
awk '{print $1}' access.log | sort | uniq -c

# CSV 파일 처리
awk -F',' '{print $2, $4}' data.csv

# 특정 조건 필터링
awk '$5 > 1000000 {print $9, $5}' # 1MB 이상 파일만

# 🌳 고급 데이터 처리
# JSON 로그에서 에러 수 계산
awk '/ERROR/ {count++} END {print "Total errors:", count}' app.log

# 메모리 사용량 상위 10개 프로세스
ps aux | awk 'NR>1 {print $4, $11}' | sort -rn | head -10

# 네트워크 연결 상태 분석
netstat -an | awk '/ESTABLISHED/ {print $5}' | cut -d: -f1 | sort | uniq -c
```

### sed - 스트림 편집의 달인
```bash
# 🌱 기본 치환
sed 's/old/new/g' file.txt       # 모든 'old'를 'new'로
sed -i 's/old/new/g' file.txt    # 파일 직접 수정

# 🌿 개발 환경 설정
# 설정 파일에서 포트 번호 변경
sed -i 's/PORT=3000/PORT=8080/g' .env

# 모든 JavaScript 파일에서 var를 const로 변경
find src/ -name "*.js" -exec sed -i 's/var /const /g' {} \;

# package.json에서 버전 업데이트
sed -i 's/"version": "1.0.0"/"version": "1.1.0"/g' package.json

# 🌳 고급 텍스트 변환
# HTML 태그 제거
sed 's/<[^>]*>//g' index.html

# 로그에서 민감한 정보 마스킹
sed 's/password=[^&]*/password=****/g' app.log

# 여러 줄 패턴 처리
sed -n '/START/,/END/p' config.txt

# 줄 번호 추가
sed '=' file.txt | sed 'N;s/\n/\t/'
```

---

# 프로세스 및 시스템 관리

## 🔧 시스템 모니터링과 제어

### ps - 프로세스 분석 전문가
```bash
# 🌱 기본 프로세스 확인
ps aux                           # 모든 프로세스
ps aux | grep node              # Node.js 프로세스만

# 🌿 개발 환경 모니터링
# 개발 서버 프로세스 확인
ps aux | grep -E "(node|npm|yarn|webpack)"

# 메모리 사용량 Top 10
ps aux --sort=-%mem | head -11

# CPU 사용량 Top 10
ps aux --sort=-%cpu | head -11

# 🌳 고급 프로세스 분석
# 특정 사용자의 프로세스
ps -u developer

# 프로세스 트리 보기
ps auxf

# 스레드 정보 포함
ps -eLf | grep app-name

# 프로세스 시작 시간 확인
ps -eo pid,lstart,cmd | grep node

# 실시간 프로세스 모니터링
watch -n 2 'ps aux | grep node | head -5'
```

### top/htop - 실시간 시스템 모니터링
```bash
# 🌱 기본 모니터링
top                             # 기본 시스템 모니터
htop                            # 향상된 인터페이스 (brew install htop)

# 🌿 개발자 중심 모니터링
# 특정 프로세스만 모니터링
top -pid $(pgrep node)

# 메모리 정렬로 시작
top -o MEM

# CPU 정렬로 시작
top -o CPU

# 🌳 고급 모니터링
# htop에서 유용한 키들
# F9: 프로세스 종료
# F6: 정렬 기준 변경
# F4: 필터 설정
# t: 트리 뷰 토글

# 배치 모드로 로그 생성
top -l 1 -n 10 > system-snapshot.txt

# 특정 간격으로 스냅샷
top -l 0 -s 5 | grep "node"
```

### kill - 프로세스 제어 마스터
```bash
# 🌱 기본 프로세스 종료
kill 1234                      # PID로 종료
kill -9 1234                   # 강제 종료

# 🌿 개발 환경 관리
# 개발 서버 종료
pkill -f "webpack-dev-server"
pkill -f "next dev"

# 포트 사용 프로세스 종료
lsof -ti:3000 | xargs kill

# Node.js 프로세스 모두 종료
pkill node

# 🌳 고급 프로세스 관리
# 우아한 종료 (SIGTERM)
kill -TERM $(pgrep app-name)

# 프로세스 그룹 종료
kill -TERM -$(ps -o pgid= $(pgrep parent-process))

# 조건부 프로세스 종료
ps aux | grep defunct | awk '{print $2}' | xargs kill -9

# 프로세스 종료 확인
kill -0 1234 && echo "Process exists" || echo "Process not found"
```

---

# 네트워크 진단과 분석

## 🌐 네트워크 도구의 달인

### curl - HTTP 클라이언트의 왕
```bash
# 🌱 기본 HTTP 요청
curl https://api.example.com
curl -X POST https://api.example.com/users

# 🌿 API 개발 필수 도구
# JSON 데이터 POST
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}' \
  https://api.example.com/users

# 인증 헤더와 함께
curl -H "Authorization: Bearer your-token" \
  https://api.example.com/protected

# 파일 업로드
curl -X POST -F "file=@image.png" https://api.example.com/upload

# 🌳 고급 API 테스팅
# 응답 시간 측정
curl -w "@curl-format.txt" -o /dev/null -s https://api.example.com

# 쿠키 저장 및 사용
curl -c cookies.txt -b cookies.txt https://example.com

# 여러 URL 동시 테스트
curl -O https://example.com/file1.zip -O https://example.com/file2.zip

# GraphQL 쿼리 실행
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"query":"{ users { id name email } }"}' \
  https://api.example.com/graphql

# 응답 상태 코드만 확인
curl -o /dev/null -s -w "%{http_code}\n" https://api.example.com
```

### netstat - 네트워크 연결 분석
```bash
# 🌱 기본 연결 상태
netstat -an                     # 모든 연결
netstat -tuln                   # TCP/UDP 리스닝 포트

# 🌿 개발 서버 포트 관리
# 특정 포트 사용 중인 프로세스
netstat -tulpn | grep :3000

# 활성 TCP 연결
netstat -nt | grep ESTABLISHED

# 포트별 연결 수 확인
netstat -an | grep :80 | wc -l

# 🌳 고급 네트워크 분석
# 포트별 연결 상태 통계
netstat -an | awk '{print $6}' | sort | uniq -c

# 외부 연결 IP 분석
netstat -nt | grep ESTABLISHED | awk '{print $5}' | cut -d: -f1 | sort | uniq -c

# 리스닝 중인 서비스 확인
netstat -tlnp | grep LISTEN
```

### lsof - 열린 파일과 네트워크 포트
```bash
# 🌱 기본 사용법
lsof -i :3000                   # 3000번 포트 사용 프로세스
lsof -i TCP:80                  # 80번 TCP 포트

# 🌿 개발 환경 디버깅
# 특정 프로세스가 열은 파일들
lsof -p $(pgrep node)

# 특정 디렉토리 사용 중인 프로세스
lsof +D /path/to/directory

# 네트워크 연결만 보기
lsof -i

# 🌳 고급 분석
# 삭제된 파일을 여전히 사용 중인 프로세스
lsof | grep "(deleted)"

# 특정 사용자가 연 파일들
lsof -u developer

# IPv4 연결만 보기
lsof -i 4

# 파일 시스템별 열린 파일
lsof -t /dev/disk1
```

### ping/traceroute - 네트워크 연결 진단
```bash
# 🌱 기본 연결 테스트
ping google.com
ping -c 4 8.8.8.8              # 4번만 ping

# 🌿 개발 환경 네트워크 테스트
# 개발 서버 연결 테스트
ping localhost
ping -c 1 127.0.0.1

# 빠른 연결 체크
ping -c 1 -W 1 example.com

# 🌳 고급 네트워크 진단
# 라우팅 경로 추적
traceroute google.com

# IPv6 ping
ping6 google.com

# 지속적인 모니터링
ping google.com | while read line; do
    echo "$(date): $line"
done
```

---

# 개발자 핵심 명령어

## 💻 일일 개발 워크플로우

### 환경 변수 관리
```bash
# 🌱 기본 환경 변수
export NODE_ENV=development
export PORT=3000
echo $NODE_ENV

# 🌿 개발 환경 설정
# .env 파일 로드
set -a; source .env; set +a

# 환경별 설정 전환
alias dev='export NODE_ENV=development && export PORT=3000'
alias prod='export NODE_ENV=production && export PORT=80'

# 🌳 고급 환경 관리
# 조건부 환경 변수
[ -f .env.local ] && source .env.local
[ "$NODE_ENV" = "production" ] && source .env.production

# 환경 변수 검증
check_env() {
    required_vars=("DATABASE_URL" "API_KEY" "SECRET_KEY")
    for var in "${required_vars[@]}"; do
        if [ -z "${!var}" ]; then
            echo "❌ Missing required environment variable: $var"
            exit 1
        fi
    done
    echo "✅ All required environment variables are set"
}
```

### 패키지 관리 자동화
```bash
# 🌱 기본 패키지 관리
npm install
npm run dev
yarn start

# 🌿 효율적인 패키지 워크플로우
# 빠른 프로젝트 초기화
npx create-react-app my-app --template typescript
npx create-next-app@latest my-next-app

# 의존성 업데이트 체크
npm outdated
npm audit

# 🌳 고급 패키지 관리
# 패키지 크기 분석
npx webpack-bundle-analyzer build/static/js/*.js

# 불필요한 패키지 정리
npm prune
npx depcheck

# 글로벌 패키지 관리
npm list -g --depth=0
npm update -g

# 패키지 보안 검사
npm audit fix
```

### 빌드 및 배포 자동화
```bash
# 🌱 기본 빌드
npm run build
yarn build

# 🌿 환경별 빌드
NODE_ENV=production npm run build
npm run build:staging

# 🌳 고급 빌드 자동화
# 빌드 전 정리
rm -rf dist/ build/
npm run lint
npm test
npm run build

# 빌드 결과 분석
ls -la build/
du -sh build/*

# 배포 스크립트
deploy() {
    echo "🚀 Starting deployment..."
    npm run build && \
    rsync -avz --delete build/ server:/var/www/html/ && \
    echo "✅ Deployment completed!"
}
```

---

# Git 워크플로우 자동화

## 🔄 Git 마스터 명령어

### 일일 Git 워크플로우
```bash
# 🌱 기본 Git 작업
git status
git add .
git commit -m "feat: add new feature"
git push origin main

# 🌿 효율적인 Git 워크플로우
# 현재 상태 한눈에 보기
alias gs='git status -s'
alias gl='git log --oneline -10'
alias gb='git branch -a'

# 빠른 커밋
gac() {
    git add . && git commit -m "$1"
}

# 🌳 고급 Git 자동화
# 브랜치 생성과 체크아웃
gnb() {
    git checkout -b "$1" && git push -u origin "$1"
}

# 안전한 브랜치 삭제
gdb() {
    git branch -d "$1" && git push origin --delete "$1"
}

# 커밋 메시지 템플릿
commit_with_template() {
    type="$1"
    scope="$2"
    message="$3"
    
    git commit -m "$type($scope): $message"
}

# 사용 예: commit_with_template "feat" "auth" "add login functionality"
```

### Git 분석 및 히스토리
```bash
# 🌱 기본 로그 분석
git log --oneline
git log --graph --pretty=format:'%h -%d %s (%cr) <%an>'

# 🌿 개발 분석 도구
# 코드 변경 통계
git log --stat
git log --author="developer-name" --since="1 week ago"

# 파일별 변경 히스토리
git log -p filename.js
git blame filename.js

# 🌳 고급 Git 분석
# 커밋 빈도 분석
git log --format='%ci' | cut -d' ' -f1 | sort | uniq -c

# 기여자별 커밋 수
git shortlog -sn

# 코드 리뷰를 위한 변경사항 요약
git diff --stat HEAD~1..HEAD
git show --stat

# 브랜치 간 차이점 분석
git diff main..feature-branch --stat
```

### Git 트러블슈팅
```bash
# 🌱 기본 되돌리기
git reset HEAD~1               # 마지막 커밋 취소
git checkout -- filename.js   # 파일 변경사항 취소

# 🌿 실무 트러블슈팅
# 잘못된 커밋 메시지 수정
git commit --amend -m "new message"

# 특정 커밋 되돌리기
git revert commit-hash

# 강제 푸시 전 백업
git branch backup-branch
git reset --hard origin/main

# 🌳 고급 복구 기법
# 삭제된 브랜치 복구
git reflog
git checkout -b recovered-branch commit-hash

# 머지 충돌 해결
git status
# 충돌 해결 후
git add .
git commit

# Stash 활용
git stash push -m "work in progress"
git stash pop
git stash list
```

---

# Docker 컨테이너 관리

## 🐳 Docker 개발 환경

### Docker 기본 워크플로우
```bash
# 🌱 기본 Docker 작업
docker build -t my-app .
docker run -p 3000:3000 my-app
docker ps

# 🌿 개발 환경 Docker
# 개발용 볼륨 마운트
docker run -v $(pwd):/app -p 3000:3000 node:16 npm start

# Docker Compose 개발
docker-compose up -d
docker-compose logs -f app

# 컨테이너 내부 접속
docker exec -it container-name bash

# 🌳 고급 Docker 관리
# 이미지 정리
docker system prune -a
docker image prune

# 볼륨 관리
docker volume ls
docker volume rm $(docker volume ls -qf dangling=true)

# 네트워크 분석
docker network ls
docker network inspect bridge
```

### Docker 개발 최적화
```bash
# 🌱 기본 최적화
# Multi-stage 빌드 확인
docker build --target development .

# 🌿 개발 효율성
# 빠른 재빌드를 위한 캐시 활용
docker build --cache-from my-app:latest .

# 개발용 오버라이드
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# 🌳 고급 최적화
# 이미지 크기 분석
docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"

# 레이어 분석
docker history my-app:latest

# 보안 스캔
docker scan my-app:latest
```

---

# Node.js 개발 환경

## 🟢 Node.js 전문 도구

### NPM/Yarn 고급 활용
```bash
# 🌱 기본 패키지 관리
npm init -y
npm install express --save
npm install --save-dev nodemon

# 🌿 개발 효율성 향상
# 패키지 정보 확인
npm view package-name
npm ls --depth=0

# 스크립트 실행
npm run dev
npm run test:watch

# 🌳 고급 패키지 관리
# 로컬 패키지 링크
npm link
npm link package-name

# 패키지 게시
npm version patch
npm publish

# 워크스페이스 관리
npm run build --workspaces
```

### Node.js 디버깅
```bash
# 🌱 기본 디버깅
node --inspect app.js
node --inspect-brk app.js      # 시작 시점에서 중단

# 🌿 개발 환경 디버깅
# 환경 변수와 함께 디버깅
DEBUG=app:* node app.js

# 메모리 사용량 모니터링
node --max-old-space-size=4096 app.js

# 🌳 고급 디버깅
# 힙 덤프 생성
node --inspect app.js &
kill -USR2 $!

# 성능 프로파일링
node --prof app.js
node --prof-process isolate-*.log
```

---

# Python 개발 환경

## 🐍 Python 개발 도구

### 가상 환경 관리
```bash
# 🌱 기본 가상 환경
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# 🌿 개발 환경 관리
# 의존성 관리
pip freeze > requirements.txt
pip install --upgrade pip

# 개발 전용 패키지
pip install -r requirements-dev.txt

# 🌳 고급 환경 관리
# Conda 환경
conda create -n myproject python=3.9
conda activate myproject
conda env export > environment.yml

# pyenv 버전 관리
pyenv install 3.9.7
pyenv local 3.9.7
```

### Python 개발 도구
```bash
# 🌱 기본 개발 도구
python -m pytest
python -m black .
python -m flake8

# 🌿 코드 품질 관리
# 타입 체킹
python -m mypy src/

# 보안 검사
pip install safety
safety check

# 🌳 고급 분석
# 코드 복잡도 분석
pip install radon
radon cc src/ -a

# 의존성 분석
pip install pipdeptree
pipdeptree
```

---

# 데이터베이스 관리

## 🗃️ 데이터베이스 CLI 도구

### MySQL/PostgreSQL 관리
```bash
# 🌱 기본 데이터베이스 연결
mysql -u root -p
psql -U username -d database

# 🌿 개발 환경 데이터베이스
# 덤프 생성
mysqldump -u root -p database > backup.sql
pg_dump -U username database > backup.sql

# 데이터베이스 복원
mysql -u root -p database < backup.sql
psql -U username -d database -f backup.sql

# 🌳 고급 데이터베이스 관리
# 테이블 크기 분석 (MySQL)
mysql -u root -p -e "
SELECT 
    table_name AS 'Table',
    ROUND((data_length + index_length) / 1024 / 1024, 2) AS 'Size (MB)'
FROM information_schema.tables 
WHERE table_schema = 'your_database'
ORDER BY (data_length + index_length) DESC;
"

# 연결 모니터링
mysql -u root -p -e "SHOW PROCESSLIST;"
```

### Redis 관리
```bash
# 🌱 기본 Redis 작업
redis-cli
redis-cli ping
redis-cli info

# 🌿 개발 환경 Redis
# 키 분석
redis-cli --scan --pattern "user:*"
redis-cli info memory

# 캐시 정리
redis-cli flushdb

# 🌳 고급 Redis 관리
# 실시간 모니터링
redis-cli monitor

# 메모리 사용량 분석
redis-cli --bigkeys

# 백업
redis-cli --rdb backup.rdb
```

---

# 로그 분석과 모니터링

## 📊 로그 분석 전문가

### 로그 파일 실시간 모니터링
```bash
# 🌱 기본 로그 모니터링
tail -f /var/log/app.log
tail -f -n 100 app.log         # 마지막 100줄부터

# 🌿 개발 환경 로그 분석
# 여러 로그 파일 동시 모니터링
tail -f app.log error.log access.log

# 패턴 필터링하며 모니터링
tail -f app.log | grep ERROR

# 🌳 고급 로그 분석
# 실시간 에러 통계
tail -f app.log | grep ERROR | while read line; do
    echo "$(date): $line"
done

# 로그 색상 하이라이팅
tail -f app.log | grep --color=always -E "ERROR|WARN|INFO"

# 로그 레벨별 분리
tail -f app.log | tee >(grep ERROR > error.log) >(grep WARN > warn.log)
```

### 로그 분석 패턴
```bash
# 🌱 기본 로그 통계
grep "ERROR" app.log | wc -l
grep "404" access.log | wc -l

# 🌿 시간대별 분석
# 시간대별 에러 수
grep "ERROR" app.log | cut -d' ' -f1-2 | sort | uniq -c

# 일별 접속자 수
awk '{print $1}' access.log | sort | uniq | wc -l

# 🌳 고급 로그 인사이트
# Top 10 에러 메시지
grep "ERROR" app.log | sort | uniq -c | sort -rn | head -10

# API 응답 시간 분석
awk '$9 ~ /^[45]/ {print $0}' access.log | head -20

# 사용자 에이전트 분석
awk -F'"' '{print $6}' access.log | sort | uniq -c | sort -rn
```

---

# 성능 최적화와 디버깅

## ⚡ 성능 분석 도구

### 시스템 성능 모니터링
```bash
# 🌱 기본 성능 확인
free -h                         # 메모리 사용량
df -h                          # 디스크 사용량
uptime                         # 시스템 로드

# 🌿 개발 환경 성능 분석
# I/O 통계
iostat -x 1

# 네트워크 대역폭
iftop
nethogs

# 🌳 고급 성능 분석
# CPU 사용률 분석
sar -u 1 5

# 메모리 누수 감지
valgrind --leak-check=full ./app

# 디스크 I/O 분석
iotop
```

### 애플리케이션 성능 프로파일링
```bash
# 🌱 기본 프로파일링
time npm run build             # 빌드 시간 측정
time curl https://api.example.com

# 🌿 Node.js 성능 분석
# V8 프로파일링
node --prof app.js
node --prof-process isolate-*.log > profile.txt

# 메모리 사용량 모니터링
node --max-old-space-size=8192 app.js

# 🌳 고급 성능 최적화
# 웹팩 번들 분석
npx webpack-bundle-analyzer build/static/js/*.js

# 로드 테스트
ab -n 1000 -c 10 http://localhost:3000/

# 메모리 프로파일링
node --inspect --max-old-space-size=8192 app.js
```

---

# 자동화 스크립팅

## 🤖 개발 작업 자동화

### 셸 스크립트 자동화
```bash
# 🌱 기본 스크립트 구조
#!/bin/bash

# 프로젝트 초기화 스크립트
init_project() {
    echo "🚀 Initializing new project..."
    
    # 디렉토리 생성
    mkdir -p src/{components,utils,styles} tests docs
    
    # 기본 파일 생성
    touch README.md .gitignore package.json
    
    echo "✅ Project initialized!"
}

# 🌿 개발 환경 스크립트
# 개발 서버 시작 스크립트
start_dev() {
    echo "🔧 Starting development environment..."
    
    # 환경 체크
    if [ ! -f "package.json" ]; then
        echo "❌ package.json not found"
        exit 1
    fi
    
    # 의존성 설치 및 서버 시작
    npm install && npm run dev
}

# 🌳 고급 자동화 스크립트
# 배포 스크립트
deploy() {
    local env=${1:-staging}
    
    echo "🚀 Deploying to $env..."
    
    # 사전 검사
    npm run lint || exit 1
    npm test || exit 1
    
    # 빌드
    NODE_ENV=$env npm run build
    
    # 배포
    case $env in
        "staging")
            rsync -avz build/ staging-server:/var/www/
            ;;
        "production")
            rsync -avz build/ prod-server:/var/www/
            ;;
    esac
    
    echo "✅ Deployment to $env completed!"
}
```

### Git 훅 자동화
```bash
# pre-commit 훅 (.git/hooks/pre-commit)
#!/bin/bash

echo "🔍 Running pre-commit checks..."

# 린트 검사
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ Lint failed"
    exit 1
fi

# 테스트 실행
npm test
if [ $? -ne 0 ]; then
    echo "❌ Tests failed"
    exit 1
fi

echo "✅ Pre-commit checks passed"

# pre-push 훅 (.git/hooks/pre-push)
#!/bin/bash

echo "🚀 Running pre-push checks..."

# 빌드 테스트
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Pre-push checks passed"
```

---

# 보안과 권한 관리

## 🔒 보안 중심 개발

### 파일 권한과 보안
```bash
# 🌱 기본 권한 관리
chmod 644 config.json          # 읽기/쓰기 (소유자), 읽기 (그룹/기타)
chmod 755 scripts/deploy.sh    # 실행 가능한 스크립트

# 🌿 개발 환경 보안
# 민감한 파일 보호
chmod 600 .env                 # 소유자만 읽기/쓰기
chmod 600 ~/.ssh/id_rsa        # SSH 키 보호

# 스크립트 실행 권한
find scripts/ -name "*.sh" -exec chmod +x {} \;

# 🌳 고급 보안 관리
# ACL을 이용한 세밀한 권한 제어
setfacl -m u:developer:rw config.json

# 파일 무결성 확인
sha256sum important-file.txt > checksums.txt
sha256sum -c checksums.txt

# 보안 감사
find . -type f -perm 777 -ls   # 모든 권한이 열린 파일 찾기
```

### 환경 보안
```bash
# 🌱 기본 환경 보안
# 민감한 정보 확인
grep -r "password\|secret\|key" . --exclude-dir=node_modules

# 🌿 개발 환경 보안 점검
# Git에서 민감한 정보 제외
echo ".env" >> .gitignore
echo "*.key" >> .gitignore

# 히스토리에서 민감한 명령어 제거
history -d $(history | grep "password" | awk '{print $1}')

# 🌳 고급 보안 점검
# 의존성 보안 검사
npm audit
npm audit fix

# 포트 스캔
nmap localhost

# SSL 인증서 확인
openssl x509 -in certificate.crt -text -noout
```

---

# 실무 워크플로우 시나리오

## 🎯 실제 개발 시나리오

### 새 프로젝트 시작
```bash
# 🚀 완전한 프로젝트 초기화 워크플로우

# 1. 프로젝트 디렉토리 생성
PROJECT_NAME="my-awesome-app"
mkdir $PROJECT_NAME && cd $PROJECT_NAME

# 2. Git 초기화
git init
git remote add origin https://github.com/username/$PROJECT_NAME.git

# 3. 프로젝트 구조 생성
mkdir -p {src/{components,hooks,utils,styles,assets},public,tests/{unit,integration,e2e},docs,scripts}

# 4. 기본 파일 생성
touch README.md .gitignore .env.example package.json

# 5. 기본 설정 파일 생성
cat > .gitignore << EOF
node_modules/
.env
.env.local
dist/
build/
.DS_Store
*.log
EOF

# 6. 개발 의존성 설치
npm init -y
npm install --save-dev eslint prettier husky lint-staged

# 7. 첫 커밋
git add .
git commit -m "feat: initial project setup"
git push -u origin main
```

### 버그 수정 워크플로우
```bash
# 🐛 체계적인 버그 수정 프로세스

# 1. 이슈 브랜치 생성
ISSUE_NUMBER="123"
git checkout -b "fix/issue-$ISSUE_NUMBER"

# 2. 로그 분석으로 문제 파악
grep -r "ERROR" logs/ | tail -20
grep -A 5 -B 5 "specific-error" app.log

# 3. 관련 파일 찾기
find src/ -name "*.js" -exec grep -l "problematic-function" {} \;

# 4. 코드 변경 이력 확인
git log -p --follow src/components/ProblemComponent.js

# 5. 테스트 작성 및 실행
npm run test:watch -- --testNamePattern="ProblemComponent"

# 6. 수정 및 커밋
git add .
git commit -m "fix: resolve issue #$ISSUE_NUMBER - component rendering problem"

# 7. 푸시 및 PR 생성
git push origin "fix/issue-$ISSUE_NUMBER"
```

### 배포 준비 워크플로우
```bash
# 🚀 프로덕션 배포 체크리스트

# 1. 브랜치 정리 및 최신화
git checkout main
git pull origin main
git branch --merged | grep -v "main" | xargs -n 1 git branch -d

# 2. 의존성 업데이트 확인
npm outdated
npm audit

# 3. 모든 테스트 실행
npm run test:ci
npm run e2e:ci

# 4. 빌드 테스트
NODE_ENV=production npm run build

# 5. 번들 크기 분석
npx bundlesize

# 6. 버전 업데이트
npm version patch  # 또는 minor, major

# 7. 태그 푸시
git push origin main --tags

# 8. 배포 실행
npm run deploy:production
```

---

# 트러블슈팅 가이드

## 🔧 일반적인 문제 해결

### 포트 충돌 해결
```bash
# 문제: "Port 3000 is already in use"

# 1. 포트 사용 프로세스 찾기
lsof -ti:3000

# 2. 프로세스 확인
ps aux | grep $(lsof -ti:3000)

# 3. 안전한 종료
kill $(lsof -ti:3000)

# 4. 강제 종료 (필요시)
kill -9 $(lsof -ti:3000)

# 5. 대안 포트 사용
PORT=3001 npm start
```

### 디스크 공간 부족
```bash
# 문제: "No space left on device"

# 1. 디스크 사용량 확인
df -h

# 2. 큰 파일/디렉토리 찾기
du -h --max-depth=1 | sort -hr

# 3. 개발 환경 정리
rm -rf node_modules/
npm cache clean --force
docker system prune -a

# 4. 로그 파일 정리
find /var/log -name "*.log" -mtime +30 -delete

# 5. 임시 파일 정리
rm -rf /tmp/*
```

### 권한 문제 해결
```bash
# 문제: "Permission denied"

# 1. 현재 권한 확인
ls -la problematic-file

# 2. 소유자 확인
stat problematic-file

# 3. 권한 수정
chmod 755 script.sh

# 4. 소유자 변경 (필요시)
sudo chown $USER:$USER problematic-file

# 5. npm 글로벌 권한 문제
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
```

### Git 문제 해결
```bash
# 문제: Git 충돌 및 브랜치 문제

# 1. 머지 충돌 해결
git status
git mergetool
git add .
git commit

# 2. 잘못된 커밋 되돌리기
git reset --soft HEAD~1  # 커밋만 취소
git reset --hard HEAD~1  # 변경사항도 취소

# 3. 브랜치 복구
git reflog
git checkout -b recovered-branch commit-hash

# 4. 대용량 파일 문제
git filter-branch --tree-filter 'rm -rf large-file' HEAD
git push origin --force-with-lease
```

---

# 고급 팁과 트릭

## 💡 생산성 극대화 팁

### 별칭(Alias) 설정
```bash
# ~/.zshrc 또는 ~/.bashrc에 추가

# Git 별칭
alias gs='git status'
alias ga='git add .'
alias gc='git commit -m'
alias gp='git push'
alias gl='git log --oneline -10'
alias gco='git checkout'

# 개발 도구 별칭
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias ..='cd ..'
alias ...='cd ../..'
alias grep='grep --color=auto'

# 프로젝트 관리 별칭
alias npm-start='npm run start'
alias npm-build='npm run build'
alias npm-test='npm run test'

# Docker 별칭
alias d='docker'
alias dc='docker-compose'
alias dps='docker ps'
alias di='docker images'

# 시스템 모니터링 별칭
alias top='htop'
alias df='df -h'
alias free='free -h'
alias ports='netstat -tulanp'
```

### 함수로 복잡한 작업 자동화
```bash
# 프로젝트 빠른 이동
proj() {
    cd ~/projects/$1
}

# Git 브랜치 생성 및 체크아웃
gnb() {
    git checkout -b "$1" && git push -u origin "$1"
}

# 프로세스 찾기 및 종료
killport() {
    kill -9 $(lsof -ti:$1)
}

# 파일 크기 순 정렬
largest() {
    du -ah ${1:-.} | sort -rh | head -20
}

# IP 주소 빠른 확인
myip() {
    curl -s ifconfig.me
}

# 디렉토리 크기 확인
dirsize() {
    du -sh ${1:-.}
}

# JSON 예쁘게 출력
prettyjson() {
    cat $1 | jq '.'
}
```

### 키보드 단축키 활용
```bash
# 터미널 단축키
# Ctrl + A: 줄 시작으로
# Ctrl + E: 줄 끝으로
# Ctrl + U: 커서 앞 모든 텍스트 삭제
# Ctrl + K: 커서 뒤 모든 텍스트 삭제
# Ctrl + W: 이전 단어 삭제
# Ctrl + R: 히스토리 검색
# Ctrl + L: 화면 정리
# Ctrl + C: 프로세스 중단
# Ctrl + Z: 프로세스 일시 정지

# 히스토리 관리
# !!: 마지막 명령어 반복
# !n: n번째 명령어 실행
# !string: string으로 시작하는 마지막 명령어 실행
```

---

# 개발팀 베스트 프랙티스

## 👥 팀 협업 가이드

### 표준 디렉토리 구조
```bash
# 프로젝트 표준 구조
project-name/
├── .github/                # GitHub 액션 및 템플릿
├── docs/                   # 프로젝트 문서
├── scripts/                # 빌드 및 배포 스크립트
├── src/
│   ├── components/         # 재사용 컴포넌트
│   ├── hooks/             # 커스텀 훅
│   ├── utils/             # 유틸리티 함수
│   ├── styles/            # 스타일 파일
│   └── assets/            # 정적 자산
├── tests/
│   ├── unit/              # 단위 테스트
│   ├── integration/       # 통합 테스트
│   └── e2e/               # E2E 테스트
├── .env.example           # 환경 변수 예시
├── .gitignore             # Git 무시 파일
├── README.md              # 프로젝트 설명
└── package.json           # 프로젝트 설정
```

### 코드 품질 관리
```bash
# 1. 린터 설정
npm install --save-dev eslint prettier
npx eslint --init

# 2. 사전 커밋 훅 설정
npm install --save-dev husky lint-staged
npx husky install
npx husky add .husky/pre-commit "lint-staged"

# 3. package.json에 설정 추가
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}

# 4. CI/CD 파이프라인 (.github/workflows/ci.yml)
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build
```

### 환경 관리 표준화
```bash
# 1. 환경별 설정 파일
.env.example           # 예시 환경 변수
.env.local            # 로컬 개발
.env.development      # 개발 환경
.env.staging          # 스테이징 환경
.env.production       # 프로덕션 환경

# 2. 환경 변수 검증 스크립트
check_env() {
    required_vars=(
        "DATABASE_URL"
        "API_KEY"
        "JWT_SECRET"
    )
    
    for var in "${required_vars[@]}"; do
        if [ -z "${!var}" ]; then
            echo "❌ Missing: $var"
            exit 1
        fi
    done
    
    echo "✅ All environment variables are set"
}

# 3. 배포 스크립트
deploy() {
    local env=$1
    
    # 환경 변수 로드
    source .env.$env
    
    # 환경 변수 검증
    check_env
    
    # 빌드 및 배포
    npm run build
    npm run deploy:$env
}
```

---

## 🎓 마스터리 체크리스트

### 초급 개발자 (필수 명령어)
- [ ] `pwd`, `cd`, `ls` - 기본 탐색
- [ ] `mkdir`, `touch`, `cp`, `mv`, `rm` - 파일 조작
- [ ] `cat`, `grep`, `find` - 파일 검색
- [ ] `git add`, `git commit`, `git push` - 기본 Git
- [ ] `npm install`, `npm run` - 패키지 관리

### 중급 개발자 (실무 필수)
- [ ] `ps`, `top`, `kill` - 프로세스 관리
- [ ] `curl`, `netstat`, `lsof` - 네트워크 진단
- [ ] `docker`, `docker-compose` - 컨테이너 관리
- [ ] `ssh`, `scp`, `rsync` - 원격 서버 관리
- [ ] 셸 스크립팅 기본 문법

### 고급 개발자 (전문가 수준)
- [ ] `awk`, `sed` - 고급 텍스트 처리
- [ ] 복잡한 파이프라인 구성
- [ ] 성능 모니터링 및 최적화
- [ ] 자동화 스크립트 작성
- [ ] 시스템 관리 및 보안

---

## 🔗 추가 학습 자료

### 공식 문서
- [Bash Manual](https://www.gnu.org/software/bash/manual/)
- [Zsh Documentation](https://zsh.sourceforge.io/Doc/)
- [Git Documentation](https://git-scm.com/doc)

### 유용한 도구
- **터미널 향상**: Oh My Zsh, Fish Shell, iTerm2
- **모니터링**: htop, btop, glances
- **파일 관리**: ranger, exa, bat
- **Git 도구**: tig, lazygit, gh

### 온라인 연습
- [Explainshell](https://explainshell.com/) - 명령어 해석
- [Command Line Challenge](https://cmdchallenge.com/) - 실습 문제
- [Linux Journey](https://linuxjourney.com/) - 체계적 학습

---

## 🏆 마무리: 터미널 마스터가 되는 길

터미널은 개발자의 가장 강력한 도구입니다. 이 가이드의 명령어들을 매일 조금씩 연습하고, 자신만의 워크플로우를 만들어가세요.

**성공을 위한 3가지 원칙:**
1. **일관성**: 매일 터미널을 사용하세요
2. **자동화**: 반복 작업은 스크립트로 만드세요
3. **공유**: 팀과 유용한 명령어를 공유하세요

**"터미널 마스터리는 하루아침에 이루어지지 않습니다. 하지만 매일의 작은 연습이 결국 전문가를 만듭니다."** 🚀

---

*이 가이드가 여러분의 개발 여정에 도움이 되기를 바랍니다. 지속적인 학습과 실습으로 터미널의 진정한 파워를 경험해보세요!*

## 연결된 노트
- [[Git 실무 워크플로우 가이드]]
- [[Docker 개발 환경 구축]]
- [[Shell 스크립팅 마스터 클래스]]
- [[macOS 개발 환경 최적화]]
- [[정규 표현식 완전 정복]]
- [[SSH 및 원격 서버 관리]]
- [[성능 모니터링 및 최적화]]
- [[개발팀 DevOps 베스트 프랙티스]]