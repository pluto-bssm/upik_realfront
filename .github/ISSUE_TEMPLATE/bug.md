---
name: "Bug"
about: 버그를 수정 할 때 사용해주세요
title: "[] :: bug"
labels: ["bug"]
assignees: []
---
name: "🐞 Bug"
description: "새로운 기능 추가"
labels: ["bug"]
body:
- type: textarea
  attributes:
  label: 📄 문제를 설명해주세요
  description: 문제가 발생하는 위치나 부분
  placeholder: 자세히 적을수록 좋습니다!
  validations:
  required: true
- type: textarea
  attributes:
  label: ✅ 작업할 내용
  description: 할 일을 체크박스 형태로 작성해주세요.
  placeholder: 최대한 세분화 해서 적어주세요!
  validations:
  required: true
- type: textarea
  attributes:
  label: 🙋🏻 참고 자료
  description: 참고 자료가 있다면 작성해 주세요.