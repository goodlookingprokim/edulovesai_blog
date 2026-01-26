---
title: macOS 루트 폴더 접근 완벽 가이드
created: 2025-08-01
last_modified: 2025-08-01
tags:
  - macOS
  - 시스템관리
  - 루트폴더
  - Terminal
  - Finder
  - 개발도구
  - 시스템
status: 완료
type: 가이드
priority: high
share_link: https://share.note.sx/jij61j67#gcuJ5dfoZTGHGdICne+JL0Ezw+58iLxCXm3p2s7OlBs
share_updated: 2025-08-02T11:03:38+09:00
---

# macOS 루트 폴더 접근 완벽 가이드

## 💡 핵심 요약

1. **Finder → 설정 → 하드 디스크 표시** → 'Macintosh HD'(=루트)만 클릭하면 끝!
2. **⌘ ⇧ G → "/" 입력** → 바로 루트 폴더로 점프!
3. **Terminal → `cd /` 또는 `open /`** → CLI·GUI 언제든 왕복
4. 특별히 시스템 깊숙이 건드려야 한다면 **root 사용자 활성화**(Directory Utility) → 작업 후 반드시 비활성화

## 📋 목차
1. [[#루트 폴더 vs 루트 사용자 개념 정리]]
2. [[#Finder에서 Macintosh HD 보이게 하기]]
3. [[#단축키로 순식간에 이동하기]]
4. [[#Terminal 활용법]]
5. [[#root 사용자 활성화 방법]]
6. [[#자주 묻는 Q&A]]

## 루트 폴더 vs 루트 사용자 개념 정리

### 헷갈리지 마세요! 🎯
- **루트 폴더("/")** = 하드디스크 최상단 폴더
- **루트 사용자(root)** = 시스템 전체 쓰기 권한을 가진 슈퍼유저

> ⚠️ **중요**: macOS는 기본적으로 root 사용자가 비활성화돼 있어요. Apple도 "가능하면 sudo만 쓰고 root는 잠깐 쓰고 끄라"고 권장합니다.

## Finder에서 Macintosh HD 보이게 하기

### 설정 방법 📂
1. Finder를 열고 **⌘ ,** (설정) → **일반** 탭에서 '하드 디스크' 체크
2. **사이드바** 탭에서도 '하드 디스크' 체크하면 좌측 '위치'에 Macintosh HD가 나타남
3. 이제 'Macintosh HD'를 클릭하면 바로 루트 폴더!

> 💡 **보조 팁**: macOS Sonoma 이후엔 'Finder > 설정'으로 이름이 바뀌었지만 위치·체크박스는 동일해요.

## 단축키로 순식간에 이동하기

### Go to Folder 기능 ⚡
1. Finder에서 **⌘ ⇧ G**
2. 경로 창에 **/** 입력 → Enter
3. 자, 프로쌤도 놀랄 속도로 루트에 착륙! 🚀

## Terminal 활용법

### 기본 명령어 💻
```bash
# 루트 폴더로 이동
cd /

# Finder 창으로 바로 열기
open /

# 특정 시스템 폴더 열기
open /System

# 관리자 권한으로 파일 편집
sudo nano /etc/hosts
```

### 활용 팁
- 관리자 권한이 필요한 작업은 앞에 `sudo`를 붙이세요
- `open /System`처럼 서브폴더도 바로 Finder에 띄울 수 있어요

## root 사용자 활성화 방법

> ⚠️ **주의!** 시스템 보호(SIP) 때문에 macOS Catalina+에선 루트여도 /System 같은 파티션은 읽기 전용입니다. 시스템 파일을 수정하려면 Recovery OS에서 SIP를 끄는 등 매우 위험한 절차가 따르므로 가급적 피하세요.

### 활성화 방법 (Directory Utility)
1. **Launchpad → 기타 → 디렉터리 유틸리티** (또는 Spotlight로 바로 검색)
2. **자물쇠 클릭** → 관리자 암호 입력
3. 메뉴 막대 **Edit > Enable Root User** → 새 root 암호 설정
4. 필요 작업 후 **Edit > Disable Root User**로 꼭 끄기! 🔒

## 자주 묻는 Q&A

| 질문 | 한 줄 답변 |
|------|-----------|
| 루트 폴더에 쓰기가 안 돼요! | /System은 읽기 전용(SIP). ~/Users 외부엔 sudo 필요 |
| Finder에 'Macintosh HD'가 안 보여요. | 설정-사이드바-'하드 디스크' 체크했는지 확인 |
| 굳이 root 로그인해야 하나요? | 99%는 sudo로 충분. root는 단발성으로만! |

## ✨ 프로쌤의 한마디

> "루트 폴더는 마치 학교의 지하 비밀 통로 같아요! 호기심은 좋지만, 안전모(백업) 쓰고 들어가야 한다는 것, 잊지 말기!"

재밌게, 그리고 안전하게 맥을 탐험해 보세요! 🚀

## 구현 체크리스트
- [ ] Finder 설정에서 하드 디스크 표시 활성화
- [ ] Go to Folder 단축키 숙지 (⌘ ⇧ G)
- [ ] Terminal 기본 명령어 연습
- [ ] sudo 사용법 이해
- [ ] 중요 작업 전 백업 실행

## 연결된 노트
- [[macOS 시스템 관리]]
- [[Terminal 기본 명령어]]
- [[macOS 보안 설정]]
- [[개발 환경 설정]]