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
status: 완료
type: 실무가이드
priority: high
share_link: https://share.note.sx/qdp929cw#IJxbABqaxJWQv/WkZm45viODhB+Byivla4DZSdAF6Rs
share_updated: 2025-11-07T23:14:01+09:00
---

# 🖥️ Terminal 기본 명령어 - 맥에서 컴퓨터와 대화하는 법

## 📋 목차
1. [[#터미널이란 무엇인가]]
2. [[#기본 탐색 명령어]]
3. [[#파일과 폴더 다루기]]
4. [[#파일 내용 살펴보기]]
5. [[#시스템 정보와 프로세스]]
6. [[#권한과 소유권]]
7. [[#검색과 필터링]]
8. [[#개발자 필수 명령어]]
9. [[#Git 워크플로우 명령어]]
10. [[#프로세스 관리와 모니터링]]
11. [[#네트워크 도구]]
12. [[#개발 환경 관리]]
13. [[#실무 업무별 명령어 모음]]
14. [[#개발 도구별 명령어 가이드]]
15. [[#트러블슈팅 및 문제 해결]]
16. [[#자동화와 스크립팅]]
17. [[#실전 활용 예제]]

---

## 터미널이란 무엇인가

### 🌱 이야기로 시작하기
터미널을 상상해보세요. 여러분이 집에서 스마트 홈 시스템과 대화하는 것처럼, 터미널은 컴퓨터와 직접 대화할 수 있는 창구입니다. 

마우스로 클릭하는 것은 마치 손짓으로 가리키는 것과 같다면, 터미널 명령어는 정확한 언어로 "부엌 불을 켜줘"라고 말하는 것과 같습니다. 더 정확하고, 더 빠르고, 더 강력하죠!

### 💡 핵심 개념
**Terminal(터미널)**: 컴퓨터와 텍스트로 소통하는 프로그램
**CLI(Command Line Interface)**: 명령줄 인터페이스 - 타이핑으로 명령하는 방식
**Shell(셸)**: 사용자 명령을 해석하는 프로그램 (macOS는 기본적으로 zsh 사용)

---

## 기본 탐색 명령어

### 🏠 pwd - "나 지금 어디 있어?"
> **Print Working Directory** - 현재 위치를 알려주는 명령어

#### 🌱 기초 예제
```bash
# 현재 위치 확인하기
pwd
# 출력 예: /Users/yourname/Desktop
```
**비유**: GPS가 "현재 위치는 서울시 강남구입니다"라고 알려주는 것과 같아요!

#### 🌿 실무 예제
```bash
# 스크립트에서 현재 위치 저장하고 활용하기
current_dir=$(pwd)
echo "작업 시작 위치: $current_dir"
```

#### 🌳 고급 예제
```bash
# 심볼릭 링크의 실제 경로 확인
pwd -P  # Physical path (실제 물리적 경로)
pwd -L  # Logical path (논리적 경로, 기본값)
```

### 🚶 cd - "저기로 이동하고 싶어!"
> **Change Directory** - 디렉토리(폴더) 이동 명령어

#### 🌱 기초 예제
```bash
# 데스크탑으로 이동
cd ~/Desktop

# 한 단계 위로 이동
cd ..

# 홈 디렉토리로 이동
cd ~
# 또는 그냥
cd
```
**비유**: 집 안에서 방을 이동하는 것처럼, 폴더 사이를 이동해요!

#### 🌿 실무 예제
```bash
# 이전 위치로 돌아가기
cd -

# 절대 경로로 이동
cd /Users/yourname/Documents/Projects

# 상대 경로로 이동
cd ./subfolder/another_folder
```

#### 🌳 고급 예제
```bash
# 스페이스가 있는 폴더명 처리
cd "My Documents"
# 또는
cd My\ Documents

# 변수를 사용한 이동
PROJECT_DIR="/Users/yourname/Projects"
cd "$PROJECT_DIR"
```

### 📂 ls - "뭐가 있는지 보여줘!"
> **List** - 파일과 폴더 목록 보기

#### 🌱 기초 예제
```bash
# 현재 폴더의 내용 보기
ls

# 자세한 정보와 함께 보기
ls -l

# 숨김 파일도 함께 보기
ls -a
```
**비유**: 서랍을 열어서 안에 뭐가 있는지 확인하는 것과 같아요!

#### 🌿 실무 예제
```bash
# 사람이 읽기 쉬운 파일 크기로 표시
ls -lh

# 수정 시간 순으로 정렬
ls -lt

# 역순으로 정렬
ls -lr

# 조합하여 사용
ls -lah  # 숨김파일 포함, 자세히, 읽기 쉬운 크기
```

#### 🌳 고급 예제
```bash
# 특정 패턴의 파일만 보기
ls *.txt

# 하위 디렉토리까지 재귀적으로 보기
ls -R

# 파일 타입을 표시하며 보기
ls -F  # / = 디렉토리, * = 실행파일, @ = 심볼릭 링크
```

---

## 파일과 폴더 다루기

### 📁 mkdir - "새 폴더 만들어줘!"
> **Make Directory** - 디렉토리 생성

#### 🌱 기초 예제
```bash
# 새 폴더 만들기
mkdir my_project

# 여러 폴더 한번에 만들기
mkdir folder1 folder2 folder3
```
**비유**: 새 서랍장을 조립하는 것처럼 저장 공간을 만들어요!

#### 🌿 실무 예제
```bash
# 중첩된 폴더 구조 한번에 만들기
mkdir -p projects/2025/january/week1

# 권한 설정과 함께 만들기
mkdir -m 755 public_folder
```

#### 🌳 고급 예제
```bash
# 프로젝트 구조 한번에 생성
mkdir -p my_app/{src,tests,docs}/{components,utils,styles}

# 생성 과정 보기
mkdir -v new_folder  # verbose mode
```

### 📄 touch - "빈 파일 만들어줘!"
> 파일 생성 또는 수정 시간 업데이트

#### 🌱 기초 예제
```bash
# 새 파일 만들기
touch note.txt

# 여러 파일 한번에 만들기
touch file1.txt file2.txt file3.txt
```
**비유**: 새 노트를 준비하는 것처럼 빈 파일을 만들어요!

#### 🌿 실무 예제
```bash
# 특정 확장자 파일들 생성
touch index.{html,css,js}

# 날짜가 포함된 파일명
touch "backup_$(date +%Y%m%d).txt"
```

#### 🌳 고급 예제
```bash
# 특정 시간으로 수정 시간 설정
touch -t 202501011200 file.txt  # 2025년 1월 1일 12:00

# 다른 파일의 시간 정보 복사
touch -r reference.txt new_file.txt
```

### 📋 cp - "이거 복사해줘!"
> **Copy** - 파일이나 폴더 복사

#### 🌱 기초 예제
```bash
# 파일 복사
cp original.txt copy.txt

# 다른 폴더로 복사
cp file.txt ~/Desktop/
```
**비유**: 복사기로 서류를 복사하는 것과 같아요!

#### 🌿 실무 예제
```bash
# 폴더 전체 복사
cp -r source_folder destination_folder

# 복사하면서 원본 속성 유지
cp -p important.txt backup.txt

# 덮어쓰기 전에 확인
cp -i source.txt dest.txt
```

#### 🌳 고급 예제
```bash
# 백업 파일 자동 생성
cp --backup=numbered file.txt file.txt

# 심볼릭 링크도 그대로 복사
cp -P link_file new_link

# 진행 상황 표시 (macOS는 rsync 사용)
rsync -ah --progress source.txt destination.txt
```

### ✂️ mv - "이거 옮겨줘!"
> **Move** - 파일이나 폴더 이동/이름 변경

#### 🌱 기초 예제
```bash
# 파일 이름 변경
mv old_name.txt new_name.txt

# 다른 폴더로 이동
mv file.txt ~/Documents/
```
**비유**: 책을 다른 책장으로 옮기거나 제목을 바꾸는 것과 같아요!

#### 🌿 실무 예제
```bash
# 여러 파일을 한 폴더로 이동
mv *.txt text_files/

# 덮어쓰기 전에 확인
mv -i source.txt destination.txt

# 폴더 이름 변경
mv old_folder new_folder
```

#### 🌳 고급 예제
```bash
# 백업하면서 이동
mv -b important.txt ~/backup/

# 패턴을 사용한 일괄 이름 변경
for file in *.jpeg; do 
    mv "$file" "${file%.jpeg}.jpg"
done
```

### 🗑️ rm - "이거 지워줘!"
> **Remove** - 파일이나 폴더 삭제

#### 🌱 기초 예제
```bash
# 파일 삭제
rm unwanted.txt

# 여러 파일 삭제
rm file1.txt file2.txt
```
**비유**: 휴지통에 버리는 것과 같아요. 하지만 주의! 바로 영구 삭제됩니다!

#### 🌿 실무 예제
```bash
# 삭제 전 확인
rm -i important.txt

# 폴더와 내용 모두 삭제
rm -r folder_name

# 강제 삭제 (확인 없이)
rm -f locked_file.txt
```

#### 🌳 고급 예제
```bash
# 특정 패턴의 파일만 삭제
find . -name "*.tmp" -exec rm {} \;

# 안전한 삭제 (trash 명령 설치 필요)
brew install trash
trash file.txt  # 휴지통으로 이동

# 자세한 정보 표시하며 삭제
rm -rv unnecessary_folder/
```

⚠️ **주의사항**: `rm -rf /`는 절대 실행하면 안 됩니다! 시스템 전체를 삭제할 수 있습니다.

---

## 파일 내용 살펴보기

### 👀 cat - "파일 내용 전부 보여줘!"
> **Concatenate** - 파일 내용 출력

#### 🌱 기초 예제
```bash
# 파일 내용 보기
cat file.txt

# 여러 파일 연결해서 보기
cat file1.txt file2.txt
```
**비유**: 책을 펼쳐서 전체 내용을 한번에 보는 것과 같아요!

#### 🌿 실무 예제
```bash
# 줄 번호와 함께 보기
cat -n file.txt

# 빈 줄 제거하고 보기
cat -s file.txt

# 탭과 줄 끝 표시하기
cat -A file.txt
```

#### 🌳 고급 예제
```bash
# 여러 파일 합치기
cat header.txt content.txt footer.txt > complete.html

# 파일 끝에 내용 추가
cat >> diary.txt << EOF
오늘의 일기
내용...
EOF
```

### 📜 less/more - "천천히 보여줘!"
> 페이지 단위로 파일 보기

#### 🌱 기초 예제
```bash
# 페이지 단위로 보기
less large_file.txt
# q 키로 종료, 스페이스바로 다음 페이지

more file.txt
# 자동으로 끝에서 종료
```
**비유**: 책을 한 페이지씩 넘기며 읽는 것과 같아요!

#### 🌿 실무 예제
```bash
# less에서 검색하기
less file.txt
# /검색어 입력 후 엔터
# n: 다음 결과, N: 이전 결과

# 줄 번호 표시
less -N file.txt
```

#### 🌳 고급 예제
```bash
# 실시간 로그 파일 모니터링
less +F /var/log/system.log
# Ctrl+C로 중단, F로 재시작

# 여러 파일 탐색
less file1.txt file2.txt
# :n 다음 파일, :p 이전 파일
```

### 🔝 head/tail - "처음/끝만 보여줘!"
> 파일의 처음 또는 끝 부분 보기

#### 🌱 기초 예제
```bash
# 처음 10줄 보기
head file.txt

# 마지막 10줄 보기
tail file.txt
```
**비유**: 책의 서문이나 결론만 읽는 것과 같아요!

#### 🌿 실무 예제
```bash
# 특정 줄 수만큼 보기
head -n 20 file.txt
tail -n 5 file.txt

# 실시간 로그 모니터링
tail -f /var/log/system.log
```

#### 🌳 고급 예제
```bash
# 특정 범위의 줄 추출
head -n 100 file.txt | tail -n 20  # 81~100번째 줄

# 여러 파일 동시 모니터링
tail -f log1.txt log2.txt

# 바이트 단위로 보기
head -c 1024 file.bin  # 처음 1KB
```

---

## 시스템 정보와 프로세스

### 💻 whoami - "내가 누구야?"
> 현재 사용자 이름 표시

#### 🌱 기초 예제
```bash
whoami
# 출력: yourname
```
**비유**: 거울을 보고 "내가 누구지?"라고 묻는 것과 같아요!

### 📊 ps - "뭐가 실행 중이야?"
> **Process Status** - 실행 중인 프로세스 보기

#### 🌱 기초 예제
```bash
# 현재 터미널의 프로세스
ps

# 모든 프로세스 보기
ps aux
```

#### 🌿 실무 예제
```bash
# 특정 프로세스 찾기
ps aux | grep Chrome

# CPU 사용량 순으로 정렬
ps aux --sort=-%cpu | head
```

### 📈 top - "시스템 상태 실시간으로 보여줘!"
> 시스템 리소스 모니터링

#### 🌱 기초 예제
```bash
# 실시간 모니터링 시작
top
# q로 종료
```

#### 🌿 실무 예제
```bash
# CPU 사용량 순으로 정렬
# top 실행 후 'o' 누르고 'cpu' 입력

# 특정 프로세스만 모니터링
top -pid 1234
```

### ⚡ kill - "프로세스 종료해줘!"
> 프로세스 종료

#### 🌱 기초 예제
```bash
# 프로세스 종료
kill 1234  # PID가 1234인 프로세스 종료

# 강제 종료
kill -9 1234
```

⚠️ **주의**: 강제 종료는 데이터 손실을 일으킬 수 있습니다!

---

## 권한과 소유권

### 🔐 chmod - "권한을 바꿔줘!"
> **Change Mode** - 파일 권한 변경

#### 🌱 기초 예제
```bash
# 실행 권한 추가
chmod +x script.sh

# 쓰기 권한 제거
chmod -w protected.txt
```
**비유**: 문에 자물쇠를 달거나 여는 것과 같아요!

#### 🌿 실무 예제
```bash
# 숫자로 권한 설정 (읽기=4, 쓰기=2, 실행=1)
chmod 755 script.sh  # rwxr-xr-x
chmod 644 document.txt  # rw-r--r--

# 재귀적으로 권한 변경
chmod -R 755 project_folder/
```

#### 🌳 고급 예제
```bash
# 소유자만 모든 권한, 나머지는 읽기만
chmod 744 private.sh

# 디렉토리와 파일 다르게 설정
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
```

### 👤 chown - "소유자를 바꿔줘!"
> **Change Owner** - 파일 소유자 변경

#### 🌱 기초 예제
```bash
# 소유자 변경 (관리자 권한 필요)
sudo chown newuser file.txt

# 그룹도 함께 변경
sudo chown user:group file.txt
```

---

## 검색과 필터링

### 🔍 find - "파일을 찾아줘!"
> 파일 검색 명령어

#### 🌱 기초 예제
```bash
# 이름으로 찾기
find . -name "*.txt"

# 대소문자 구분 없이 찾기
find . -iname "readme*"
```
**비유**: 탐정이 단서를 찾는 것처럼 파일을 찾아요!

#### 🌿 실무 예제
```bash
# 크기로 찾기
find . -size +1M  # 1MB 이상
find . -size -100k  # 100KB 이하

# 수정 시간으로 찾기
find . -mtime -7  # 7일 이내 수정된 파일
```

#### 🌳 고급 예제
```bash
# 찾고 실행하기
find . -name "*.log" -exec rm {} \;

# 빈 디렉토리 찾기
find . -type d -empty

# 권한으로 찾기
find . -perm 777
```

### 🔎 grep - "내용을 검색해줘!"
> **Global Regular Expression Print** - 텍스트 검색

#### 🌱 기초 예제
```bash
# 파일에서 단어 찾기
grep "error" log.txt

# 대소문자 구분 없이 찾기
grep -i "ERROR" log.txt
```
**비유**: 책에서 특정 단어에 형광펜을 칠하는 것과 같아요!

#### 🌿 실무 예제
```bash
# 재귀적으로 검색
grep -r "TODO" ./src

# 줄 번호와 함께 표시
grep -n "function" script.js

# 일치하지 않는 줄 찾기
grep -v "success" log.txt
```

#### 🌳 고급 예제
```bash
# 정규 표현식 사용
grep -E "error|warning|critical" log.txt

# 파일명만 출력
grep -l "password" *.conf

# 앞뒤 문맥 포함
grep -C 3 "error" log.txt  # 앞뒤 3줄씩
```

### 📊 wc - "개수를 세어줘!"
> **Word Count** - 단어, 줄, 문자 수 세기

#### 🌱 기초 예제
```bash
# 줄, 단어, 바이트 수
wc file.txt

# 줄 수만 세기
wc -l file.txt
```

#### 🌿 실무 예제
```bash
# 여러 파일의 통계
wc -l *.txt

# 단어 수만 세기
wc -w essay.txt

# 가장 긴 줄의 길이
wc -L code.js
```

---

## 개발자 필수 명령어

### 🔧 curl - "웹 요청을 보내줘!"
> **Client URL** - HTTP 요청을 보내고 응답받기

#### 🌱 기초 예제
```bash
# 웹페이지 내용 가져오기
curl https://api.github.com

# 응답을 파일로 저장
curl https://example.com > response.html
```
**비유**: 편지를 보내고 답장을 받는 것처럼 서버와 통신해요!

#### 🌿 실무 예제
```bash
# API 테스트하기
curl -X GET "https://api.example.com/users" \
  -H "Authorization: Bearer token123"

# POST 요청으로 데이터 전송
curl -X POST "https://api.example.com/users" \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}'

# 응답 헤더도 함께 보기
curl -i https://httpbin.org/get
```

#### 🌳 고급 예제
```bash
# 파일 업로드
curl -X POST "https://api.example.com/upload" \
  -F "file=@document.pdf" \
  -F "description=Important document"

# 쿠키와 세션 관리
curl -c cookies.txt -b cookies.txt https://example.com/login

# 자세한 통신 과정 보기
curl -v https://api.github.com

# 타임아웃 설정
curl --connect-timeout 10 --max-time 30 https://slow-api.com
```

### 🌐 wget - "파일을 다운로드해줘!"
> **World Wide Web Get** - 웹에서 파일 다운로드

#### 🌱 기초 예제
```bash
# 파일 다운로드 (Homebrew로 설치 필요)
brew install wget
wget https://example.com/file.zip
```

#### 🌿 실무 예제
```bash
# 재귀적으로 웹사이트 전체 다운로드
wget -r -np https://example.com/docs/

# 특정 파일 형식만 다운로드
wget -A "*.pdf" -r https://example.com/papers/

# 백그라운드에서 다운로드
wget -b https://huge-file.com/dataset.tar.gz
```

### 📦 tar - "압축하고 풀어줘!"
> **Tape Archive** - 파일 압축 및 해제

#### 🌱 기초 예제
```bash
# 폴더 압축하기
tar -czf backup.tar.gz folder_name/

# 압축 풀기
tar -xzf backup.tar.gz
```
**비유**: 이사할 때 짐을 박스에 담고 푸는 것과 같아요!

#### 🌿 실무 예제
```bash
# 진행 상황 보면서 압축
tar -czf project.tar.gz --verbose project/

# 특정 파일만 제외하고 압축
tar -czf backup.tar.gz --exclude="*.log" --exclude="node_modules" project/

# 압축 내용 미리보기 (압축 풀지 않고)
tar -tzf backup.tar.gz
```

#### 🌳 고급 예제
```bash
# 날짜가 포함된 백업 생성
tar -czf "backup_$(date +%Y%m%d_%H%M%S).tar.gz" project/

# 특정 디렉토리로 압축 해제
tar -xzf backup.tar.gz -C /destination/path/

# 진행률 표시하며 압축 해제
tar -xzf large_archive.tar.gz --checkpoint=1000 --checkpoint-action=dot
```

### 🔑 ssh - "원격 서버에 접속해줘!"
> **Secure Shell** - 안전한 원격 서버 접속

#### 🌱 기초 예제
```bash
# 원격 서버 접속
ssh username@server.com

# 특정 포트로 접속
ssh -p 2222 username@server.com
```
**비유**: 다른 집에 전화해서 문을 열어달라고 하는 것과 같아요!

#### 🌿 실무 예제
```bash
# SSH 키로 접속 (비밀번호 없이)
ssh -i ~/.ssh/private_key username@server.com

# 명령어 실행하고 바로 종료
ssh username@server.com "ls -la /var/log/"

# 로컬 포트 포워딩
ssh -L 8080:localhost:80 username@server.com
```

#### 🌳 고급 예제
```bash
# SSH 터널링으로 안전한 연결
ssh -D 1080 username@server.com

# 압축 활성화 (느린 연결에서 유용)
ssh -C username@server.com

# SSH 설정 파일 사용 (~/.ssh/config)
# Host myserver
#     HostName server.example.com
#     User myusername
#     Port 2222
#     IdentityFile ~/.ssh/mykey
ssh myserver
```

### 📁 rsync - "스마트하게 동기화해줘!"
> **Remote Sync** - 효율적인 파일 동기화

#### 🌱 기초 예제
```bash
# 폴더 동기화
rsync -av source/ destination/

# 원격 서버와 동기화
rsync -av project/ username@server.com:/path/to/project/
```

#### 🌿 실무 예제
```bash
# 삭제된 파일도 반영하며 동기화
rsync -av --delete source/ destination/

# 진행 상황 보기
rsync -av --progress large_folder/ backup/

# 특정 파일 제외하고 동기화
rsync -av --exclude="*.log" --exclude="node_modules/" project/ backup/
```

#### 🌳 고급 예제
```bash
# SSH를 통한 압축 전송
rsync -avz -e ssh project/ server.com:/backup/

# 대역폭 제한 (초당 100KB)
rsync -av --bwlimit=100 large_file.zip server.com:/uploads/

# 드라이런(실제 실행하지 않고 미리보기)
rsync -av --dry-run --delete source/ destination/
```

---

## Git 워크플로우 명령어

### 🌿 기본 Git 워크플로우
> 일상적인 Git 작업을 위한 필수 명령어들

#### 🌱 프로젝트 시작하기
```bash
# 새 저장소 초기화
git init
git add .
git commit -m "Initial commit"

# 원격 저장소 연결
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

#### 🌿 일상 작업 플로우
```bash
# 최신 변경사항 받기
git pull origin main

# 작업 브랜치 만들고 이동
git checkout -b feature/new-feature

# 변경사항 확인
git status
git diff

# 스테이징과 커밋
git add .
git commit -m "Add new feature implementation"

# 원격에 푸시
git push origin feature/new-feature
```

#### 🌳 고급 Git 워크플로우
```bash
# 인터랙티브 리베이스로 커밋 정리
git rebase -i HEAD~3

# 체리픽으로 특정 커밋만 가져오기
git cherry-pick abc123

# 스태시로 임시 저장
git stash push -m "WIP: working on feature"
git stash pop

# 브랜치 병합과 삭제
git checkout main
git merge feature/new-feature
git branch -d feature/new-feature
git push origin --delete feature/new-feature
```

### 🔍 Git 히스토리와 분석
```bash
# 예쁜 로그 보기
git log --oneline --graph --decorate --all

# 특정 파일의 히스토리
git log -p filename.js

# 누가 언제 수정했는지 확인
git blame filename.js

# 특정 커밋의 변경사항 보기
git show abc123

# 두 브랜치 간 차이점 비교
git diff main..feature-branch
```

---

## 프로세스 관리와 모니터링

### ⚙️ htop - "시스템을 실시간으로 모니터링해줘!"
> **H**ybrid **Top** - 향상된 시스템 모니터

#### 🌱 기초 예제
```bash
# htop 설치 및 실행
brew install htop
htop
```
**비유**: 자동차 계기판처럼 시스템 상태를 한눈에 볼 수 있어요!

#### 🌿 실무 예제
```bash
# CPU 사용률 순으로 정렬: F6 → CPU%
# 메모리 사용률 순으로 정렬: F6 → MEM%
# 프로세스 검색: F3 → 검색어 입력
# 프로세스 종료: F9 → SIGTERM/SIGKILL 선택
```

### 🔄 nohup - "백그라운드에서 계속 실행해줘!"
> **No Hang Up** - 터미널 종료 후에도 프로세스 실행

#### 🌱 기초 예제
```bash
# 백그라운드에서 스크립트 실행
nohup python long_running_script.py &

# 출력을 특정 파일로 저장
nohup python script.py > output.log 2>&1 &
```

#### 🌿 실무 예제
```bash
# 여러 프로세스를 백그라운드에서 실행
nohup npm start > app.log 2>&1 &
nohup python worker.py > worker.log 2>&1 &

# 실행 중인 백그라운드 작업 확인
jobs
ps aux | grep python

# 백그라운드 작업을 포그라운드로 가져오기
fg %1  # 첫 번째 작업
```

### 📊 iostat, vmstat - "시스템 성능을 분석해줘!"
> 시스템 I/O와 메모리 통계

#### 🌱 기초 예제
```bash
# I/O 통계 (Linux/일부 macOS 도구)
iostat 1 10  # 1초마다 10번 출력

# macOS에서는 활성상태보기 사용
top -l 1 | grep "CPU usage"
```

#### 🌿 실무 예제
```bash
# 디스크 사용량 실시간 모니터링
df -h
du -sh * | sort -rh | head -10

# 메모리 사용 현황
vm_stat 1  # macOS 메모리 통계
```

---

## 네트워크 도구

### 🌐 netstat - "네트워크 상태를 보여줘!"
> **Network Statistics** - 네트워크 연결 상태 확인

#### 🌱 기초 예제
```bash
# 열린 포트 확인
netstat -an | grep LISTEN

# 특정 포트 사용 중인 프로세스 찾기
lsof -i :8080
```

#### 🌿 실무 예제
```bash
# 웹서버 포트 확인
lsof -i :80 -i :443 -i :8000 -i :3000

# 네트워크 연결 상태 모니터링
netstat -i  # 인터페이스 통계
```

### 🔍 ping/traceroute - "네트워크 연결을 확인해줘!"
> 네트워크 연결성 테스트

#### 🌱 기초 예제
```bash
# 서버 연결 테스트
ping google.com

# 네트워크 경로 추적
traceroute google.com
```

#### 🌿 실무 예제
```bash
# 5회만 ping 테스트
ping -c 5 server.com

# DNS 조회
nslookup example.com
dig example.com

# 포트 연결 테스트
telnet server.com 80
# 또는 (최신 macOS)
nc -zv server.com 80
```

---

## 개발 환경 관리

### 📦 Package Managers
> 개발 도구와 라이브러리 관리

#### 🌱 Homebrew (macOS)
```bash
# Homebrew 설치 (홈브류 공식 사이트 참조)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 패키지 검색 및 설치
brew search python
brew install python@3.11
brew install node

# 설치된 패키지 관리
brew list
brew update && brew upgrade
brew cleanup
```

#### 🌿 Node.js 환경 관리
```bash
# Node Version Manager 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Node.js 버전 관리
nvm list-remote | grep "Latest"
nvm install 18
nvm use 18
nvm alias default 18

# npm 글로벌 패키지
npm list -g --depth=0
npm install -g typescript eslint prettier
```

#### 🌳 Python 환경 관리
```bash
# pyenv로 Python 버전 관리
brew install pyenv
pyenv install 3.11.0
pyenv global 3.11.0

# 가상환경 생성 및 관리
python -m venv myproject_env
source myproject_env/bin/activate  # 활성화
pip install -r requirements.txt
deactivate  # 비활성화

# pipenv 사용 (권장)
pip install pipenv
pipenv install requests flask
pipenv shell  # 가상환경 진입
```

### 🐳 Docker 기본 명령어
> 컨테이너 개발 환경 관리

#### 🌱 기초 Docker 명령어
```bash
# Docker 상태 확인
docker --version
docker info

# 이미지 관리
docker images
docker pull nginx:latest
docker rmi old-image
```

#### 🌿 실무 Docker 워크플로우
```bash
# 컨테이너 실행
docker run -d -p 8080:80 --name my-nginx nginx

# 실행 중인 컨테이너 관리
docker ps
docker ps -a
docker logs my-nginx
docker exec -it my-nginx bash

# 컨테이너 빌드
docker build -t my-app:v1.0 .
docker tag my-app:v1.0 registry.com/my-app:v1.0
docker push registry.com/my-app:v1.0
```

#### 🌳 Docker Compose
```bash
# 멀티 컨테이너 애플리케이션 관리
docker-compose up -d
docker-compose ps
docker-compose logs -f web
docker-compose down

# 개발 환경 재시작
docker-compose down && docker-compose up --build
```

---

## 실무 업무별 명령어 모음

### 🚀 웹 개발 워크플로우

#### 🌱 프로젝트 초기 설정
```bash
# React 프로젝트 생성
npx create-react-app my-app
cd my-app

# 또는 Vite 사용
npm create vite@latest my-vue-app -- --template vue
cd my-vue-app
npm install

# Git 초기화 및 첫 커밋
git init
git add .
git commit -m "Initial project setup"
```

#### 🌿 개발 서버 실행
```bash
# 포트 지정하여 실행
PORT=3001 npm start

# 백그라운드에서 실행
nohup npm start > dev-server.log 2>&1 &

# 환경변수와 함께 실행
NODE_ENV=development API_URL=http://localhost:8000 npm start
```

#### 🌳 배포 준비
```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npx serve -s build

# Docker로 빌드 및 배포
docker build -t my-app:$(git rev-parse --short HEAD) .
docker run -p 3000:3000 my-app:latest
```

### 🔧 백엔드 개발 워크플로우

#### 🌱 API 서버 관리
```bash
# Express.js 프로젝트 초기화
mkdir my-api && cd my-api
npm init -y
npm install express cors helmet morgan

# 개발 도구 설치
npm install -D nodemon jest supertest

# 개발 서버 실행
npm run dev
```

#### 🌿 데이터베이스 관리
```bash
# PostgreSQL 관리
brew install postgresql
brew services start postgresql
createdb myproject_dev

# MongoDB 관리
brew install mongodb-community
brew services start mongodb-community
mongosh

# Redis 관리
brew install redis
brew services start redis
redis-cli ping
```

#### 🌳 API 테스트와 모니터링
```bash
# API 엔드포인트 테스트
curl -X GET "http://localhost:3000/api/users" \
  -H "Content-Type: application/json"

# 부하 테스트 (wrk 설치 필요)
brew install wrk
wrk -t12 -c400 -d30s http://localhost:3000/

# 로그 모니터링
tail -f app.log | grep ERROR
```

### 📱 모바일 개발 워크플로우

#### 🌱 React Native
```bash
# React Native CLI 설치
npm install -g @react-native-community/cli

# 새 프로젝트 생성
npx react-native init MyMobileApp
cd MyMobileApp

# iOS 시뮬레이터에서 실행
npx react-native run-ios

# Android 에뮬레이터에서 실행
npx react-native run-android
```

#### 🌿 Flutter
```bash
# Flutter 설치 상태 확인
flutter doctor

# 새 프로젝트 생성
flutter create my_flutter_app
cd my_flutter_app

# 개발 서버 실행
flutter run

# 빌드
flutter build apk  # Android
flutter build ios  # iOS
```

### 🎨 프론트엔드 도구 체인

#### 🌱 CSS 전처리기
```bash
# Sass 컴파일
npm install -g sass
sass styles.scss styles.css --watch

# PostCSS 처리
npm install -g postcss postcss-cli autoprefixer
postcss styles.css -o dist/styles.css
```

#### 🌿 번들러와 빌드 도구
```bash
# Webpack 빌드
npx webpack --mode production

# Vite 빌드
npm run build
npm run preview

# Parcel 사용
npx parcel build src/index.html
```

---

## 트러블슈팅 및 디버깅

### 🔍 시스템 진단

#### 🌱 메모리와 CPU 이슈
```bash
# 메모리 사용량 확인
free -m  # Linux
vm_stat  # macOS

# 메모리를 많이 사용하는 프로세스 찾기
ps aux --sort=-%mem | head -10

# CPU 사용률 높은 프로세스
ps aux --sort=-%cpu | head -10

# 시스템 부하 확인
uptime
w  # 현재 로그인한 사용자와 부하
```

#### 🌿 디스크 공간 이슈
```bash
# 디스크 사용량 확인
df -h

# 큰 파일/폴더 찾기
du -sh * | sort -rh | head -10
find / -size +100M 2>/dev/null

# 삭제된 파일이 여전히 공간을 차지하는 경우
lsof +L1  # 삭제됐지만 열려있는 파일들
```

#### 🌳 네트워크 문제 진단
```bash
# DNS 문제 확인
nslookup google.com
dig google.com

# 특정 포트 연결 테스트
telnet server.com 80
nc -zv server.com 22

# 방화벽 설정 확인 (macOS)
sudo pfctl -s all

# 네트워크 인터페이스 상태
ifconfig
```

### 🚨 로그 분석

#### 🌱 시스템 로그 확인
```bash
# macOS 시스템 로그
log show --predicate 'eventMessage contains "error"' --last 1h

# 특정 애플리케이션 로그
log show --predicate 'process == "MyApp"' --last 30m

# 실시간 로그 모니터링
log stream --predicate 'eventType == logEvent'
```

#### 🌿 애플리케이션 로그 분석
```bash
# 에러 패턴 분석
grep -E "(ERROR|FATAL|CRITICAL)" application.log | \
  awk '{print $1, $2}' | sort | uniq -c | sort -rn

# 특정 시간대 로그 필터링
awk '/2025-01-19 14:00:00/,/2025-01-19 15:00:00/' application.log

# 로그 회전 관리
logrotate /etc/logrotate.conf
```

### 🔧 성능 최적화

#### 🌱 파일 시스템 최적화
```bash
# 파일 시스템 확인
fsck -f /dev/disk1  # 주의: 언마운트된 상태에서만

# 중복 파일 찾기
fdupes -r /path/to/directory

# 임시 파일 정리
find /tmp -mtime +7 -exec rm {} \;
```

#### 🌿 프로세스 최적화
```bash
# 좀비 프로세스 찾기
ps aux | awk '$8 ~ /^Z/ { print $2 }'

# 프로세스 우선순위 조정
nice -n 10 long_running_command
renice -n -5 -p PID
```

---

## 자동화와 스크립팅

### 📜 Bash 스크립팅 기초

#### 🌱 기본 스크립트 구조
```bash
#!/bin/bash
# 개발 환경 백업 스크립트

set -e  # 에러 발생시 스크립트 중단
set -u  # 정의되지 않은 변수 사용시 에러

# 변수 정의
BACKUP_DIR="$HOME/backups"
DATE=$(date +%Y%m%d_%H%M%S)
PROJECT_DIR="$HOME/projects"

# 함수 정의
create_backup() {
    local source_dir=$1
    local backup_name=$2

    echo "Creating backup: $backup_name"
    tar -czf "$BACKUP_DIR/${backup_name}_${DATE}.tar.gz" "$source_dir"
    echo "Backup completed: $backup_name"
}

# 메인 로직
mkdir -p "$BACKUP_DIR"
create_backup "$PROJECT_DIR" "projects"
```

#### 🌿 실무 자동화 스크립트
```bash
#!/bin/bash
# 배포 자동화 스크립트

# 환경 확인
check_environment() {
    if ! command -v node &> /dev/null; then
        echo "Node.js가 설치되지 않았습니다."
        exit 1
    fi

    if ! command -v git &> /dev/null; then
        echo "Git이 설치되지 않았습니다."
        exit 1
    fi
}

# 코드 업데이트
update_code() {
    echo "코드 업데이트 중..."
    git pull origin main
    npm install
    npm run build
}

# 서비스 재시작
restart_service() {
    echo "서비스 재시작 중..."
    pm2 restart my-app
}

# 메인 실행
main() {
    check_environment
    update_code
    restart_service
    echo "배포 완료!"
}

main "$@"
```

### 🔄 cron을 이용한 스케줄링

#### 🌱 cron 기본 사용법
```bash
# cron 작업 목록 보기
crontab -l

# cron 작업 편집
crontab -e

# 기본 cron 문법
# 분 시 일 월 요일 명령어
# 0 2 * * * /path/to/backup_script.sh  # 매일 새벽 2시
# 0 */6 * * * /path/to/cleanup.sh      # 6시간마다
# 0 9 * * 1 /path/to/weekly_report.sh  # 매주 월요일 9시
```

#### 🌿 실무 cron 예제
```bash
# 매일 백업
0 3 * * * /home/user/scripts/daily_backup.sh >> /var/log/backup.log 2>&1

# 로그 정리 (매주 일요일)
0 0 * * 0 find /var/log -name "*.log" -mtime +30 -delete

# 애플리케이션 상태 체크 (5분마다)
*/5 * * * * /home/user/scripts/health_check.sh

# 데이터베이스 최적화 (매월 1일)
0 2 1 * * /home/user/scripts/db_optimize.sh
```

### 🤖 고급 자동화 도구

#### 🌱 Make를 이용한 작업 자동화
```makefile
# Makefile
.PHONY: install dev build test deploy clean

install:
	npm install

dev:
	npm run dev

build:
	npm run build

test:
	npm test
	npm run e2e

deploy: build test
	./scripts/deploy.sh

clean:
	rm -rf node_modules dist

# 사용법: make install, make dev, make deploy
```

#### 🌿 GitHub Actions 워크플로우
```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm test
    - run: npm run build
```

---

## 실전 활용 예제

### 🎯 고급 실무 워크플로우

#### 🚀 CI/CD 파이프라인 구축
```bash
#!/bin/bash
# 완전 자동화된 배포 스크립트

# 환경 설정
PROJECT_NAME="my-awesome-app"
BUILD_ID=$(date +%Y%m%d_%H%M%S)
DOCKER_REGISTRY="registry.company.com"

# 전체 파이프라인
deploy_pipeline() {
    echo "🔄 Starting deployment pipeline..."

    # 1. 코드 품질 검사
    echo "📊 Running code quality checks..."
    npm run lint || exit 1
    npm run test:coverage || exit 1

    # 2. 보안 스캔
    echo "🔒 Security scanning..."
    npm audit --audit-level moderate || exit 1

    # 3. 빌드
    echo "🏗️ Building application..."
    npm run build || exit 1

    # 4. Docker 이미지 생성
    echo "🐳 Building Docker image..."
    docker build -t "$PROJECT_NAME:$BUILD_ID" . || exit 1
    docker tag "$PROJECT_NAME:$BUILD_ID" "$DOCKER_REGISTRY/$PROJECT_NAME:latest"

    # 5. 배포
    echo "🚀 Deploying to production..."
    docker push "$DOCKER_REGISTRY/$PROJECT_NAME:latest" || exit 1

    # 6. 헬스체크
    echo "💚 Health check..."
    sleep 30
    curl -f http://production-server/health || exit 1

    echo "✅ Deployment completed successfully!"
}

deploy_pipeline
```

#### 📊 프로젝트 통계 자동 수집
```bash
#!/bin/bash
# 프로젝트 통계 리포트 생성

generate_project_stats() {
    local project_dir=${1:-.}
    local report_file="project_report_$(date +%Y%m%d).md"

    echo "# 프로젝트 통계 리포트 - $(date)" > "$report_file"
    echo "" >> "$report_file"

    # 코드 라인 수
    echo "## 📊 코드 통계" >> "$report_file"
    echo '```' >> "$report_file"
    find "$project_dir" -name "*.js" -o -name "*.ts" -o -name "*.jsx" -o -name "*.tsx" | \
        xargs wc -l | tail -1 >> "$report_file"
    echo '```' >> "$report_file"
    echo "" >> "$report_file"

    # Git 통계
    echo "## 📈 Git 활동" >> "$report_file"
    echo "- 총 커밋 수: $(git rev-list --count HEAD)" >> "$report_file"
    echo "- 기여자 수: $(git shortlog -sn | wc -l)" >> "$report_file"
    echo "- 최근 활동: $(git log -1 --format='%cr')" >> "$report_file"
    echo "" >> "$report_file"

    # 종속성 분석
    echo "## 📦 종속성 정보" >> "$report_file"
    if [ -f "package.json" ]; then
        echo "- 프로덕션 의존성: $(jq '.dependencies | length' package.json)" >> "$report_file"
        echo "- 개발 의존성: $(jq '.devDependencies | length' package.json)" >> "$report_file"
    fi

    echo "✅ 리포트 생성 완료: $report_file"
}

generate_project_stats
```

#### 🔄 멀티 프로젝트 관리
```bash
#!/bin/bash
# 여러 프로젝트를 한번에 관리하는 스크립트

PROJECTS_DIR="$HOME/projects"
PROJECTS=(
    "frontend-app"
    "backend-api"
    "mobile-app"
    "shared-components"
)

# 모든 프로젝트 업데이트
update_all_projects() {
    for project in "${PROJECTS[@]}"; do
        echo "🔄 Updating $project..."
        cd "$PROJECTS_DIR/$project" || continue

        # Git 업데이트
        git fetch origin
        git pull origin main

        # 종속성 업데이트
        if [ -f "package.json" ]; then
            npm install
        elif [ -f "requirements.txt" ]; then
            pip install -r requirements.txt
        elif [ -f "pubspec.yaml" ]; then
            flutter pub get
        fi

        echo "✅ $project updated"
    done
}

# 모든 프로젝트 상태 확인
check_all_status() {
    for project in "${PROJECTS[@]}"; do
        echo "📊 Checking $project..."
        cd "$PROJECTS_DIR/$project" || continue

        # Git 상태
        if git diff-index --quiet HEAD --; then
            echo "  ✅ Clean working directory"
        else
            echo "  ⚠️  Uncommitted changes"
        fi

        # 브랜치 정보
        current_branch=$(git branch --show-current)
        echo "  📍 Current branch: $current_branch"
    done
}

# 사용법 표시
case "$1" in
    "update")
        update_all_projects
        ;;
    "status")
        check_all_status
        ;;
    *)
        echo "Usage: $0 {update|status}"
        ;;
esac
```

### 💡 개발 생산성 향상 도구

#### 🛠️ 개발 환경 스위처
```bash
# ~/.zshrc에 추가할 환경 스위칭 함수들

# Node.js 버전 빠른 스위칭
node_switch() {
    local version=$1
    if [ -z "$version" ]; then
        echo "사용법: node_switch <version>"
        nvm list
        return 1
    fi
    nvm use "$version"
    echo "Node.js $version 활성화됨"
}

# Python 프로젝트 환경 설정
py_activate() {
    local env_name=${1:-venv}
    if [ -d "$env_name" ]; then
        source "$env_name/bin/activate"
        echo "Python 환경 '$env_name' 활성화됨"
    else
        echo "가상환경 '$env_name'을 찾을 수 없습니다."
        return 1
    fi
}

# 프로젝트 빠른 이동
goto() {
    local project=$1
    local projects_dir="$HOME/projects"

    if [ -z "$project" ]; then
        echo "프로젝트 목록:"
        ls -1 "$projects_dir"
        return 1
    fi

    if [ -d "$projects_dir/$project" ]; then
        cd "$projects_dir/$project"
        echo "📁 $project 프로젝트로 이동"

        # 자동으로 개발 환경 활성화
        if [ -f "package.json" ]; then
            echo "📦 Node.js 프로젝트 감지"
        elif [ -f "requirements.txt" ] && [ -d "venv" ]; then
            source venv/bin/activate
            echo "🐍 Python 가상환경 활성화"
        fi
    else
        echo "프로젝트 '$project'를 찾을 수 없습니다."
        return 1
    fi
}
```

#### 📱 모바일 개발 헬퍼
```bash
# React Native 개발 도우미 함수들

# iOS 시뮬레이터 관리
ios_sim() {
    case "$1" in
        "list")
            xcrun simctl list devices | grep -E "(iPhone|iPad)"
            ;;
        "boot")
            local device=${2:-"iPhone 14"}
            xcrun simctl boot "$device"
            open -a Simulator
            ;;
        "reset")
            local device=${2:-"iPhone 14"}
            xcrun simctl erase "$device"
            ;;
        *)
            echo "사용법: ios_sim {list|boot|reset} [device_name]"
            ;;
    esac
}

# Android 에뮬레이터 관리
android_emu() {
    case "$1" in
        "list")
            emulator -list-avds
            ;;
        "start")
            local avd=${2:-$(emulator -list-avds | head -1)}
            emulator -avd "$avd" &
            ;;
        "kill")
            adb devices | grep emulator | cut -f1 | while read line; do
                adb -s "$line" emu kill
            done
            ;;
        *)
            echo "사용법: android_emu {list|start|kill} [avd_name]"
            ;;
    esac
}

# 앱 빠른 빌드 및 설치
rn_deploy() {
    local platform=$1
    local mode=${2:-debug}

    case "$platform" in
        "ios")
            npx react-native run-ios --configuration "$mode"
            ;;
        "android")
            npx react-native run-android --variant="$mode"
            ;;
        "both")
            npx react-native run-ios --configuration "$mode" &
            npx react-native run-android --variant="$mode" &
            wait
            ;;
        *)
            echo "사용법: rn_deploy {ios|android|both} [debug|release]"
            ;;
    esac
}
```

### 🔧 시스템 최적화 도구

#### 🧹 개발 환경 정리
```bash
#!/bin/bash
# 개발 환경 정리 및 최적화 스크립트

cleanup_dev_env() {
    echo "🧹 개발 환경 정리 시작..."

    # 1. Node.js 캐시 정리
    echo "📦 Node.js 캐시 정리..."
    npm cache clean --force 2>/dev/null || true
    yarn cache clean 2>/dev/null || true

    # 2. Docker 정리
    echo "🐳 Docker 정리..."
    docker system prune -f 2>/dev/null || true
    docker volume prune -f 2>/dev/null || true

    # 3. Homebrew 정리
    echo "🍺 Homebrew 정리..."
    brew cleanup 2>/dev/null || true
    brew autoremove 2>/dev/null || true

    # 4. Python 캐시 정리
    echo "🐍 Python 캐시 정리..."
    find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
    find . -name "*.pyc" -delete 2>/dev/null || true

    # 5. 로그 파일 정리
    echo "📋 로그 파일 정리..."
    find ~/Library/Logs -name "*.log" -mtime +30 -delete 2>/dev/null || true

    # 6. Xcode 캐시 정리
    echo "📱 Xcode 캐시 정리..."
    rm -rf ~/Library/Developer/Xcode/DerivedData/* 2>/dev/null || true

    # 7. 디스크 사용량 분석
    echo "💾 디스크 사용량 분석..."
    du -sh ~/projects/* 2>/dev/null | sort -rh | head -10

    echo "✅ 정리 완료!"
}

cleanup_dev_env
```

#### ⚡ 성능 모니터링
```bash
#!/bin/bash
# 시스템 성능 모니터링 스크립트

monitor_system() {
    local duration=${1:-60}  # 기본 60초
    local interval=${2:-5}   # 기본 5초 간격

    echo "📊 시스템 모니터링 시작 (${duration}초간, ${interval}초 간격)"
    echo "시간,CPU%,메모리%,디스크%,네트워크" > performance.csv

    for ((i=0; i<duration; i+=interval)); do
        # CPU 사용률
        cpu_usage=$(ps -A -o %cpu | awk '{s+=$1} END {print s}')

        # 메모리 사용률
        memory_usage=$(vm_stat | awk '/free:/ {free=$3} /active:/ {active=$3} /inactive:/ {inactive=$3} /wired:/ {wired=$3} END {total=free+active+inactive+wired; used=active+inactive+wired; print (used/total)*100}')

        # 디스크 사용률
        disk_usage=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')

        # 네트워크 사용률 (간단한 예시)
        network_usage=$(netstat -ib | awk 'NR>1 {print $7+$10}' | awk '{sum+=$1} END {print sum}')

        # 타임스탬프
        timestamp=$(date '+%H:%M:%S')

        echo "$timestamp,$cpu_usage,$memory_usage,$disk_usage,$network_usage" >> performance.csv
        echo "[$timestamp] CPU: ${cpu_usage}%, 메모리: ${memory_usage}%, 디스크: ${disk_usage}%"

        sleep "$interval"
    done

    echo "📈 모니터링 완료. 결과: performance.csv"
}

# 프로세스별 리소스 사용량 분석
analyze_processes() {
    echo "🔍 프로세스별 리소스 사용량 분석"
    echo "=== CPU 사용량 Top 10 ==="
    ps aux --sort=-%cpu | head -11

    echo ""
    echo "=== 메모리 사용량 Top 10 ==="
    ps aux --sort=-%mem | head -11

    echo ""
    echo "=== 포트 사용 현황 ==="
    lsof -i -P -n | grep LISTEN | head -10
}

# 사용법에 따른 실행
case "$1" in
    "monitor")
        monitor_system "$2" "$3"
        ;;
    "analyze")
        analyze_processes
        ;;
    *)
        echo "사용법: $0 {monitor [duration] [interval]|analyze}"
        echo "예시: $0 monitor 120 10  # 120초간 10초 간격으로 모니터링"
        ;;
esac
```

### 🎯 팀 협업 도구

#### 👥 코드 리뷰 자동화
```bash
#!/bin/bash
# Git 기반 코드 리뷰 도우미

create_pr_checklist() {
    local branch_name=$(git branch --show-current)
    local checklist_file="PR_CHECKLIST_${branch_name}.md"

    cat > "$checklist_file" << EOF
# Pull Request Checklist

## 📋 기본 체크리스트
- [ ] 코드가 컴파일되고 테스트가 통과함
- [ ] 새로운 기능에 대한 테스트 코드 작성
- [ ] 문서화가 업데이트됨
- [ ] 코딩 스타일 가이드 준수
- [ ] 보안 취약점 검토 완료

## 🔍 코드 품질
- [ ] 중복 코드 제거
- [ ] 적절한 에러 처리
- [ ] 성능 고려사항 검토
- [ ] 접근성 고려사항 검토 (프론트엔드)

## 📊 자동 분석 결과
### 변경된 파일 수: $(git diff --name-only main..HEAD | wc -l)
### 추가된 줄 수: $(git diff --shortstat main..HEAD | grep -o '[0-9]* insertion' | grep -o '[0-9]*')
### 삭제된 줄 수: $(git diff --shortstat main..HEAD | grep -o '[0-9]* deletion' | grep -o '[0-9]*')

## 🏷️ 변경 분류
$(git diff --name-only main..HEAD | sed 's/.*\.//' | sort | uniq -c | sort -rn)

EOF

    echo "✅ PR 체크리스트 생성됨: $checklist_file"
}

# 코드 품질 분석
analyze_code_quality() {
    echo "🔍 코드 품질 분석 중..."

    # ESLint 실행 (JavaScript/TypeScript)
    if [ -f ".eslintrc.js" ] || [ -f ".eslintrc.json" ]; then
        echo "📊 ESLint 분석 중..."
        npx eslint . --format=table || true
    fi

    # Python 코드 품질 검사
    if find . -name "*.py" -type f | head -1 | grep -q .; then
        echo "🐍 Python 코드 품질 검사..."
        flake8 . || true
        pylint **/*.py || true
    fi

    # 복잡도 분석
    echo "🧮 코드 복잡도 분석..."
    find . -name "*.js" -o -name "*.ts" | head -10 | while read file; do
        lines=$(wc -l < "$file")
        echo "$file: $lines lines"
    done | sort -rn -k2
}

case "$1" in
    "checklist")
        create_pr_checklist
        ;;
    "quality")
        analyze_code_quality
        ;;
    *)
        echo "사용법: $0 {checklist|quality}"
        ;;
esac
```

### 💪 파워 유저 고급 팁

#### 🔑 SSH 키 관리
```bash
# SSH 키 생성 및 관리
ssh_key_manager() {
    case "$1" in
        "generate")
            local email=${2:-"$(git config user.email)"}
            local key_name=${3:-"id_rsa_$(date +%Y%m%d)"}

            ssh-keygen -t rsa -b 4096 -C "$email" -f ~/.ssh/"$key_name"
            echo "🔑 SSH 키 생성됨: ~/.ssh/$key_name"
            echo "📋 공개키 클립보드에 복사 중..."
            pbcopy < ~/.ssh/"$key_name".pub
            ;;
        "list")
            echo "🔑 SSH 키 목록:"
            ls -la ~/.ssh/*.pub 2>/dev/null || echo "SSH 키가 없습니다."
            ;;
        "test")
            local host=${2:-"github.com"}
            ssh -T git@"$host"
            ;;
        *)
            echo "사용법: ssh_key_manager {generate [email] [key_name]|list|test [host]}"
            ;;
    esac
}
```

#### 🌈 터미널 색상 커스터마이징
```bash
# ~/.zshrc에 추가할 색상 설정
setup_colors() {
    # 색상 변수 정의
    export RED='\033[0;31m'
    export GREEN='\033[0;32m'
    export YELLOW='\033[1;33m'
    export BLUE='\033[0;34m'
    export PURPLE='\033[0;35m'
    export CYAN='\033[0;36m'
    export WHITE='\033[1;37m'
    export NC='\033[0m' # No Color

    # 컬러풀한 프롬프트
    export PS1="${GREEN}\u@\h${NC}:${BLUE}\w${NC}\$ "

    # ls 명령어 색상
    export CLICOLOR=1
    export LSCOLORS=ExFxBxDxCxegedabagacad
}

# 컬러풀한 함수들
success_msg() { echo -e "${GREEN}✅ $1${NC}"; }
error_msg() { echo -e "${RED}❌ $1${NC}"; }
warning_msg() { echo -e "${YELLOW}⚠️ $1${NC}"; }
info_msg() { echo -e "${BLUE}ℹ️ $1${NC}"; }
```

#### 📊 고급 파이프라인 조합
```bash
# 복잡한 데이터 처리 파이프라인 예제

# 로그 분석 마스터 파이프라인
log_analysis() {
    local log_file=$1
    local output_dir="log_analysis_$(date +%Y%m%d_%H%M%S)"

    mkdir -p "$output_dir"

    # 1. 기본 통계
    echo "📊 로그 기본 통계 생성 중..."
    {
        echo "총 라인 수: $(wc -l < "$log_file")"
        echo "파일 크기: $(du -sh "$log_file" | cut -f1)"
        echo "시작 시간: $(head -1 "$log_file" | cut -d' ' -f1,2)"
        echo "종료 시간: $(tail -1 "$log_file" | cut -d' ' -f1,2)"
    } > "$output_dir/basic_stats.txt"

    # 2. 에러 분석
    echo "🚨 에러 분석 중..."
    grep -i "error\|fail\|exception" "$log_file" | \
        cut -d' ' -f3- | \
        sort | uniq -c | sort -rn > "$output_dir/error_frequency.txt"

    # 3. 시간대별 활동
    echo "⏰ 시간대별 활동 분석 중..."
    awk '{print $2}' "$log_file" | \
        cut -d: -f1 | \
        sort | uniq -c | \
        sort -k2n > "$output_dir/hourly_activity.txt"

    # 4. IP 주소 분석 (웹 로그인 경우)
    echo "🌐 IP 주소 분석 중..."
    grep -oE '\b([0-9]{1,3}\.){3}[0-9]{1,3}\b' "$log_file" | \
        sort | uniq -c | sort -rn | \
        head -20 > "$output_dir/top_ips.txt"

    echo "✅ 로그 분석 완료: $output_dir/"
}

# Git 커밋 분석 파이프라인
git_commit_analysis() {
    local output_file="git_analysis_$(date +%Y%m%d).csv"

    echo "날짜,작성자,커밋수,변경파일수,추가라인,삭제라인" > "$output_file"

    git log --pretty=format:"%ad,%an" --date=short --numstat | \
        awk '/^[0-9]/ {
            date=$1; author=$2;
            files=0; added=0; deleted=0;
            getline;
            while(/^[0-9]/) {
                files++; added+=$1; deleted+=$2;
                getline
            }
            print date","author",1,"files","added","deleted
        }' >> "$output_file"

    echo "📊 Git 분석 결과: $output_file"
}

# 프로젝트 의존성 분석
dependency_analysis() {
    local output_dir="dependency_analysis_$(date +%Y%m%d)"
    mkdir -p "$output_dir"

    # package.json 분석
    if [ -f "package.json" ]; then
        echo "📦 Node.js 의존성 분석..."
        jq -r '.dependencies | keys[]' package.json > "$output_dir/prod_deps.txt"
        jq -r '.devDependencies | keys[]' package.json > "$output_dir/dev_deps.txt"

        # 취약점 검사
        npm audit --json > "$output_dir/security_audit.json" 2>/dev/null || true
    fi

    # requirements.txt 분석
    if [ -f "requirements.txt" ]; then
        echo "🐍 Python 의존성 분석..."
        cat requirements.txt | cut -d'=' -f1 > "$output_dir/python_deps.txt"
    fi

    echo "🔍 의존성 분석 완료: $output_dir/"
}
```

---

## 14. 🛠️ 개발 도구별 명령어 가이드

### Node.js & npm
```bash
# 프로젝트 초기화 및 설정
npm init -y                          # package.json 생성
npm install                          # 의존성 설치
npm install --save-dev <패키지>       # 개발 의존성 설치
npm install -g <패키지>              # 전역 설치
npm uninstall <패키지>               # 패키지 제거
npm update                           # 패키지 업데이트
npm outdated                         # 오래된 패키지 확인
npm audit                           # 보안 취약점 검사
npm audit fix                       # 자동 취약점 수정
npm ls --depth=0                    # 설치된 패키지 목록

# npx 활용
npx create-react-app my-app         # React 앱 생성
npx eslint --init                   # ESLint 설정
npx prettier --write .              # 코드 포맷팅
npx degit <template> <project>      # 템플릿에서 프로젝트 생성

# 스크립트 실행
npm run dev                         # 개발 서버 시작
npm run build                       # 프로덕션 빌드
npm run test                        # 테스트 실행
npm run lint                        # 린트 검사
```

### Python & pip
```bash
# 가상환경 관리
python3 -m venv myenv               # 가상환경 생성
source myenv/bin/activate           # 가상환경 활성화 (macOS/Linux)
myenv\Scripts\activate              # 가상환경 활성화 (Windows)
deactivate                          # 가상환경 비활성화

# 패키지 관리
pip install <패키지>                 # 패키지 설치
pip install -r requirements.txt    # requirements.txt에서 설치
pip freeze > requirements.txt      # 현재 패키지 목록 저장
pip list                           # 설치된 패키지 목록
pip show <패키지>                   # 패키지 정보 확인
pip uninstall <패키지>              # 패키지 제거

# 개발 도구
python -m http.server 8000         # 간단한 웹 서버
python -m json.tool file.json      # JSON 포맷팅
python -c "import this"            # Python의 선(禪) 출력
python -m pdb script.py            # 디버거로 스크립트 실행
```

### Docker
```bash
# 이미지 관리
docker images                       # 이미지 목록
docker pull <이미지>                # 이미지 다운로드
docker build -t <태그> .           # Dockerfile로 이미지 빌드
docker rmi <이미지ID>               # 이미지 삭제
docker image prune                  # 사용하지 않는 이미지 정리

# 컨테이너 관리
docker ps                          # 실행 중인 컨테이너
docker ps -a                       # 모든 컨테이너
docker run -it <이미지> /bin/bash   # 컨테이너 실행 (인터랙티브)
docker run -d -p 8080:80 <이미지>   # 백그라운드로 실행
docker exec -it <컨테이너ID> bash   # 실행 중인 컨테이너 접속
docker stop <컨테이너ID>            # 컨테이너 중지
docker rm <컨테이너ID>              # 컨테이너 삭제
docker logs <컨테이너ID>            # 컨테이너 로그 확인

# Docker Compose
docker-compose up                   # 서비스 시작
docker-compose up -d                # 백그라운드로 서비스 시작
docker-compose down                 # 서비스 중지 및 삭제
docker-compose logs                 # 로그 확인
docker-compose exec <서비스> bash   # 서비스 컨테이너 접속
```

### Kubernetes (kubectl)
```bash
# 클러스터 정보
kubectl cluster-info                # 클러스터 정보
kubectl get nodes                   # 노드 목록
kubectl get pods                    # 파드 목록
kubectl get services                # 서비스 목록
kubectl get deployments            # 배포 목록

# 리소스 관리
kubectl apply -f <파일.yaml>        # 리소스 적용
kubectl delete -f <파일.yaml>       # 리소스 삭제
kubectl describe pod <파드명>       # 파드 상세 정보
kubectl logs <파드명>               # 파드 로그 확인
kubectl exec -it <파드명> -- bash   # 파드 접속

# 네임스페이스
kubectl get namespaces              # 네임스페이스 목록
kubectl config set-context --current --namespace=<네임스페이스>
```

### Maven & Gradle (Java)
```bash
# Maven
mvn clean compile                   # 컴파일
mvn clean package                   # 패키징
mvn clean install                   # 로컬 저장소에 설치
mvn dependency:tree                 # 의존성 트리
mvn test                           # 테스트 실행
mvn spring-boot:run                # Spring Boot 실행

# Gradle
./gradlew build                     # 빌드
./gradlew test                      # 테스트
./gradlew bootRun                   # Spring Boot 실행
./gradlew dependencies              # 의존성 확인
./gradlew clean                     # 빌드 아티팩트 정리
```

### Ruby & Bundler
```bash
# Bundler
bundle install                      # Gemfile 의존성 설치
bundle update                       # Gem 업데이트
bundle exec <명령어>                # Bundler 환경에서 명령어 실행
bundle list                        # 설치된 Gem 목록

# Rails
rails new <앱명>                    # 새 Rails 앱 생성
rails server                       # 개발 서버 시작
rails console                      # Rails 콘솔
rails generate model <모델명>       # 모델 생성
rails db:migrate                   # 데이터베이스 마이그레이션
```

### Go
```bash
# 모듈 관리
go mod init <모듈명>                # 모듈 초기화
go mod tidy                        # 의존성 정리
go get <패키지>                     # 패키지 설치
go list -m all                     # 모든 의존성 목록

# 빌드 및 실행
go run main.go                     # 소스 파일 실행
go build                          # 실행 파일 빌드
go install                        # 빌드 후 GOPATH/bin에 설치
go test                           # 테스트 실행
go fmt                            # 코드 포맷팅
```

### Rust & Cargo
```bash
# 프로젝트 관리
cargo new <프로젝트명>              # 새 프로젝트 생성
cargo build                        # 디버그 빌드
cargo build --release             # 릴리스 빌드
cargo run                         # 빌드 후 실행
cargo test                        # 테스트 실행
cargo check                       # 컴파일 검사 (빠름)
cargo doc --open                  # 문서 생성 및 열기
```

### 프레임워크별 개발 도구
```bash
# React Native
npx react-native init MyApp        # 새 앱 생성
npx react-native run-ios          # iOS 시뮬레이터 실행
npx react-native run-android      # Android 에뮬레이터 실행
npx react-native start            # Metro 번들러 시작

# Flutter
flutter create my_app             # 새 앱 생성
flutter run                       # 앱 실행
flutter build apk                 # Android APK 빌드
flutter build ios                 # iOS 빌드
flutter clean                     # 빌드 아티팩트 정리
flutter doctor                    # 개발 환경 검사

# Angular
ng new my-app                      # 새 앱 생성
ng serve                          # 개발 서버 시작
ng build                          # 프로덕션 빌드
ng test                           # 단위 테스트
ng e2e                            # E2E 테스트
ng generate component <이름>       # 컴포넌트 생성

# Vue CLI
vue create my-project             # 새 프로젝트 생성
vue serve                         # 개발 서버 시작
vue build                         # 프로덕션 빌드
vue add <플러그인>                 # 플러그인 추가
```

---

## 🤔 생각해보기 - 연습 문제

### 초급 문제
1. 현재 위치에서 `practice`라는 폴더를 만들고 들어가 보세요.
2. 3개의 텍스트 파일을 만들고 목록을 확인해 보세요.
3. 그 중 하나를 다른 이름으로 복사해 보세요.

### 중급 문제
1. 홈 디렉토리에서 최근 7일 이내에 수정된 모든 `.txt` 파일을 찾아보세요.
2. 시스템 로그에서 "error"가 포함된 줄의 개수를 세어보세요.
3. 현재 실행 중인 프로세스 중 메모리를 가장 많이 사용하는 Top 5를 찾아보세요.

### 고급 문제
1. 특정 디렉토리 아래의 모든 `.log` 파일에서 "ERROR"와 "WARNING"을 검색하고, 결과를 날짜별로 정렬해 보세요.
2. 스크립트를 작성해서 매일 자동으로 특정 폴더를 백업하도록 만들어 보세요.
3. 현재 디렉토리 구조를 트리 형태로 출력하는 명령어 조합을 만들어 보세요.

---

## 15. 🚨 트러블슈팅 및 문제 해결

### 자주 발생하는 문제들

#### "Permission denied" 오류
```bash
# 문제: 파일 실행 권한 없음
chmod +x script.sh                 # 실행 권한 부여

# 문제: sudo 권한 필요
sudo command                       # 관리자 권한으로 실행

# 문제: 파일 소유권 문제
sudo chown $(whoami) file.txt      # 현재 사용자로 소유권 변경
```

#### "Command not found" 오류
```bash
# 명령어 위치 확인
which command_name                 # 명령어 경로 찾기
echo $PATH                        # PATH 환경변수 확인

# 명령어 설치 (macOS)
brew install command_name          # Homebrew로 설치
brew search partial_name           # 부분 이름으로 검색

# PATH에 경로 추가
export PATH=$PATH:/usr/local/bin   # 임시로 PATH 추가
echo 'export PATH=$PATH:/new/path' >> ~/.zshrc  # 영구적으로 추가
```

#### 포트 사용 중 오류
```bash
# 포트 사용 중인 프로세스 찾기
lsof -i :8080                     # 8080 포트 사용 프로세스
netstat -tulpn | grep :8080       # 포트 상태 확인

# 프로세스 종료
kill -9 PID                       # 강제 종료 (PID는 위에서 확인)
pkill -f "process_name"           # 이름으로 프로세스 종료
```

#### 디스크 공간 부족
```bash
# 디스크 사용량 확인
df -h                             # 파일시스템별 사용량
du -sh *                          # 현재 디렉토리 내 폴더별 크기
du -sh . | sort -h                # 크기순 정렬

# 큰 파일 찾기
find . -size +100M -ls            # 100MB 이상 파일 찾기
find . -name "*.log" -size +50M   # 큰 로그 파일 찾기

# 불필요한 파일 정리
# 로그 파일 정리
find /var/log -name "*.log" -mtime +30 -delete
# 임시 파일 정리
rm -rf /tmp/*
# 휴지통 비우기 (macOS)
rm -rf ~/.Trash/*
```

#### Git 관련 문제
```bash
# 병합 충돌 해결
git status                        # 충돌 파일 확인
git mergetool                     # 병합 도구 실행
git add .                         # 해결된 파일 스테이징
git commit                        # 병합 커밋

# 잘못된 커밋 수정
git commit --amend                # 마지막 커밋 수정
git reset --soft HEAD~1           # 마지막 커밋 취소 (변경사항 유지)
git reset --hard HEAD~1           # 마지막 커밋 취소 (변경사항 삭제)

# 원격 저장소 동기화 문제
git fetch origin                  # 원격 변경사항 가져오기
git reset --hard origin/main      # 원격과 강제 동기화
```

### 성능 문제 해결

#### 시스템 리소스 모니터링
```bash
# CPU 사용량 확인
top                               # 실시간 프로세스 모니터링
htop                              # 더 나은 top (설치 필요)
ps aux | head -20                 # 메모리 사용량 상위 20개

# 메모리 사용량
free -h                           # Linux 메모리 사용량
vm_stat                           # macOS 메모리 사용량

# 네트워크 상태
netstat -i                        # 네트워크 인터페이스 상태
iftop                             # 네트워크 트래픽 모니터링
ping -c 4 google.com              # 네트워크 연결 테스트
```

#### 느린 명령어 최적화
```bash
# 느린 find 대신 fd 사용
brew install fd                   # fd 설치
fd pattern                        # 빠른 파일 검색

# 느린 grep 대신 ripgrep 사용
brew install ripgrep              # ripgrep 설치
rg pattern                        # 빠른 텍스트 검색

# 파일 내용 빠르게 확인
head -20 file.txt                 # 처음 20줄만
tail -20 file.txt                 # 마지막 20줄만
less file.txt                     # 페이지 단위로 보기
```

### 고급 트러블슈팅 도구

#### 시스템 진단
```bash
# 시스템 정보 수집
uname -a                          # 시스템 정보
uptime                            # 가동 시간과 부하
dmesg | tail                      # 시스템 메시지
journalctl -xe                    # systemd 로그 (Linux)

# 하드웨어 정보
lscpu                             # CPU 정보 (Linux)
lsblk                             # 블록 디바이스 정보 (Linux)
system_profiler SPHardwareDataType  # 하드웨어 정보 (macOS)
```

#### 네트워크 진단
```bash
# 연결 테스트
ping -c 4 8.8.8.8                # DNS 서버 연결 테스트
traceroute google.com             # 네트워크 경로 추적
dig google.com                    # DNS 조회

# 포트 테스트
telnet hostname port              # 포트 연결 테스트
nc -zv hostname port              # netcat으로 포트 테스트
```

#### 로그 분석
```bash
# 로그 실시간 모니터링
tail -f /var/log/system.log       # 로그 실시간 추적
grep "ERROR" /var/log/*.log       # 에러 메시지 검색

# 로그 압축 및 회전
gzip old_log.log                  # 로그 압축
logrotate /etc/logrotate.conf     # 로그 회전 (Linux)
```

### 응급 복구 명령어

#### 중요한 복구 명령어
```bash
# 시스템 복구 모드 진입 (재부팅 필요)
# Linux: GRUB에서 복구 모드 선택
# macOS: Command+R로 복구 모드

# 파일 시스템 검사
fsck /dev/diskname                # 파일시스템 검사 및 복구
diskutil verifyVolume /           # macOS 디스크 검증

# 백업에서 복원
rsync -av backup/ current/        # rsync로 백업 복원
cp -R backup/* current/           # 단순 복사 복원
```

#### 데이터 복구
```bash
# 삭제된 파일 복구 시도
testdisk                          # 강력한 데이터 복구 도구
photorec                          # 삭제된 파일 복구

# Git에서 삭제된 파일 복구
git reflog                        # 참조 로그 확인
git checkout HEAD~1 -- filename   # 이전 버전에서 파일 복구
```

---

## ⚠️ 주의사항 및 안전 수칙

### 절대 하지 말아야 할 것들
- ❌ `rm -rf /` - 시스템 전체 삭제
- ❌ `chmod 777` 무분별한 사용 - 보안 위험
- ❌ `sudo`를 모르는 명령어와 함께 사용
- ❌ 인터넷에서 복사한 스크립트 무작정 실행
- ❌ 프로덕션 서버에서 위험한 명령어 테스트
- ❌ 백업 없이 중요한 파일 수정

### 안전한 습관
- ✅ 중요한 작업 전 백업하기
- ✅ `rm` 사용 시 `-i` 옵션으로 확인하기
- ✅ 명령어 실행 전 `man` 명령어로 매뉴얼 확인하기
- ✅ 위험한 명령어는 `echo`로 먼저 테스트하기
- ✅ 테스트 환경에서 먼저 실행하기
- ✅ 정기적으로 시스템 백업하기

### 응급 상황 대응
```bash
# 무한 루프나 잘못된 명령어 중단
Ctrl + C                          # 현재 명령어 중단
Ctrl + Z                          # 현재 프로세스 일시 정지
kill -9 PID                       # 프로세스 강제 종료

# 터미널이 응답하지 않을 때
Ctrl + D                          # EOF 신호 전송
exit                              # 터미널 종료
```

---

## 📚 추가 학습 자료

### 유용한 명령어
- `man [command]` - 명령어 매뉴얼 보기
- `which [command]` - 명령어 위치 찾기
- `alias` - 명령어 단축키 만들기
- `echo` - 텍스트 출력하기
- `date` - 날짜와 시간 보기
- `df -h` - 디스크 사용량 보기
- `du -sh` - 폴더 크기 보기

### 다음 단계 학습 주제
1. **셸 스크립팅** - 명령어들을 조합한 자동화 스크립트
2. **정규 표현식** - 강력한 텍스트 패턴 매칭
3. **Git 명령어** - 버전 관리 시스템
4. **SSH** - 원격 서버 접속
5. **환경 변수** - 시스템 설정 관리

---

## 🎯 핵심 정리

터미널은 처음에는 어려워 보이지만, 일상에서 사용하는 대화와 같습니다. 컴퓨터에게 정확한 언어로 지시하면, 더 빠르고 강력하게 작업을 처리할 수 있습니다.

**기억해야 할 3가지 원칙:**
1. 🔍 **작은 것부터 시작하기** - 기본 명령어부터 천천히
2. 🔄 **반복해서 연습하기** - 매일 조금씩 사용해보기
3. ⚠️ **안전하게 실험하기** - 백업하고 테스트 환경에서 연습

"터미널은 컴퓨터와 친구가 되는 가장 빠른 길입니다!" 🚀

---

## 연결된 노트
- [[Git 기본 명령어]]
- [[Shell 스크립팅 입문]]
- [[macOS 시스템 관리]]
- [[개발 환경 설정 가이드]]
- [[정규 표현식 마스터하기]]