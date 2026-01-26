---
title: "영자님의 GitHub 사용법 강의 교안(원본)"
date: 2025-06-15
created: '2026-01-27'
last_modified: '2026-01-27'
status: "published"
slug: "영자님의-github-사용법-강의-교안-원본"
category: "tutorials"
excerpt: "프로젝트 명칭: test A 가 (A 의 컴퓨터에서) 수정한 코드를 깃헙에 올린다(PUSH) A 가 수정한 내용을 B 가 받아서(PULL) 	수정한 다음, 다시 깃헙에 올린다 (PUSH). 깃허브(GITHUB)에 소스를 저장해 놓고(저장소), ..."
tags:
  - tutorial
  - guide
reading_time: 1
journalist: "tech-expert"
priority: "medium"
type: "guide"
---

프로젝트 명칭: test


A 가 (A 의 컴퓨터에서) 수정한 코드를 깃헙에 올린다(PUSH)
A 가 수정한 내용을 B 가 받아서(PULL)
	수정한 다음, 다시 깃헙에 올린다 (PUSH).


깃허브(GITHUB)에 소스를 저장해 놓고(저장소),
	여러 사람이, 깃헙에 있는 소스를 다운하고 수정하고, 합치고, 버전변경, ... 테스트, 배포...




소스 코드는 깃헙의 레포지토리에 저장: 저장소

깃헙 아이디: thruthesky
깃헙 레포지토리: test

레포 생성하는 방법:
https://github.com 에서 로그인을 하고, [ New repository ] 버튼을 생성하고, test 라고 레포 이름을 지정하면 됨.
이 때, Add a README file 을
	체크하지 않으면, bare repository (초기화가 안된 레포) 가 만들어 짐.
	체크하면, 기본 repository 가 만들어 짐.
	여기서는 README file을 선택하지 않고 진행.



주소: 계정/레포
thruthesky/test

전체 주소: 홈주소에는 github.com 을 붙이면 됨.

https://github.com/thruthesky/test 여기에 소스 코드가 저장되고, 이것을 레포지토리(레포), 저장소.


위의 레포를 내 컴퓨터로 다운.

맨 처음 (또는 깃헙에 있는) 소스 레포를 다운받기 위해서는 git clone

예)
git clone https://github.com/thruthesky/test


결과)
내 컴퓨터에 test 폴더가 만들어 지고 그 안에 소스 코드가 들어감.



-------------------------------------------


git clone https://github.com/thruthesky/test

소스 수정 후 ..

git add . (새로운 파일을 추가)
git commit -a -m "수정한 내용에 대한 설명"
git push (내가 수정한 코드를 서버로 올리는 것)

다른 사람이 수정한 코드를 가져올 때,

git pull

------------------------------------------


PR 을 쓰는 이유
말 그대로, Pull Request 하기 위한 것입니다.
Pull 을 요청하는 것입니다.
Pull 이 뭐냐하면, 소스 코드를 다운 받는 것입니다.
결론적으로 나의 소스 코드를 다운 받으라고 요청하는 것, pull request.
나의 코드를 다운 받아서, 테스트 하고, 리뷰하고, 문제 없으면, 프로덕션(또는 메인 브랜치)에 적용하시라.


가장 많이 쓰이는 방법:
누구든지, 언제든지, 소스 코드를 수정해서, 나에게 실제 코드(프로덕션, 메인브랜치)에 적용하라고 요청을 해 옴.


PR 를 하는 대표적인 두 가지 방법:
- Fork -> Branch -> Commit -> Push -> PR -> 어디서(dev1: abc) 어디로(thruthesky/test: main)
- Collaborator


-----

예전 버전으로 돌아가기
git reset (현재 버전의 코드를 버리고, 특정 commit 위치로 돌아가기)
git revert (현재 버전의 코드와 특정 commit 위치의 코드와 병법)
git checkout (특정 commit 위치의 코드를 살펴보기)


















