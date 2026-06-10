import { Question } from '../types';

export const questions: Question[] = [
  {
    id: "Q1",
    text: "한 달 살기를 마치고 돌아온 아이에게 가장 듣고 싶은 말은?",
    options: [
      { label: "“다른 나라 친구들이랑 노는 게 정말 재밌었어.”", scoreKey: "A_EXPERIENCE" },
      { label: "“여기서는 평소랑 다른 걸 많이 해봤어.”", scoreKey: "A_EXPERIENCE" },
      { label: "“영어로 말하는 게 전보다 덜 무서워졌어.”", scoreKey: "A_GROWTH" },
      { label: "“처음엔 어려웠는데 끝까지 해냈어.”", scoreKey: "A_GROWTH" }
    ]
  },
  {
    id: "Q2",
    text: "현지에서 하루가 완전히 비었다면, 가장 마음이 가는 일정은?",
    options: [
      { label: "아침에 컨디션을 보고 동네 산책이나 시장 구경을 한다.", scoreKey: "B_FREE" },
      { label: "지도를 보다가 끌리는 곳이 있으면 그때 가본다.", scoreKey: "B_FREE" },
      { label: "미리 저장해둔 박물관이나 체험 프로그램을 방문한다.", scoreKey: "B_STRUCTURED" },
      { label: "오전·오후 이동 동선까지 정해 알차게 움직인다.", scoreKey: "B_STRUCTURED" }
    ]
  },
  {
    id: "Q3",
    text: "아이가 현지 친구의 집이나 생일파티에 초대받았다면?",
    options: [
      { label: "기본적인 확인만 되면 좋은 경험이라 생각하고 보내본다.", scoreKey: "C_OPEN" },
      { label: "아이가 원한다면 약속 내용을 스스로 정리해보게 한다.", scoreKey: "C_OPEN" },
      { label: "보호자, 장소, 시간, 연락처를 충분히 확인한 뒤 결정한다.", scoreKey: "C_PROTECTIVE" },
      { label: "초반에는 공식 프로그램 안에서 친구를 만나는 게 더 편하다.", scoreKey: "C_PROTECTIVE" }
    ]
  },
  {
    id: "Q4",
    text: "프로그램 소개에서 가장 마음이 가는 문장은?",
    options: [
      { label: "“교실 밖에서 도시 전체가 아이의 배움터가 됩니다.”", scoreKey: "A_EXPERIENCE" },
      { label: "“다양한 국적의 친구들과 생활하며 시야를 넓힙니다.”", scoreKey: "A_EXPERIENCE" },
      { label: "“짧은 기간 안에 영어 말하기 자신감을 끌어올립니다.”", scoreKey: "A_GROWTH" },
      { label: "“캠프·스쿨링을 통해 아이의 변화를 확인할 수 있습니다.”", scoreKey: "A_GROWTH" }
    ]
  },
  {
    id: "Q5",
    text: "출발 전 준비를 떠올릴 때 가장 편한 방식은?",
    options: [
      { label: "큰 틀만 정하고 현지에서 하나씩 채워간다.", scoreKey: "B_FREE" },
      { label: "꼭 필요한 것만 예약하고 나머지는 여지를 남겨둔다.", scoreKey: "B_FREE" },
      { label: "주차별 일정과 주요 예약을 미리 확정해둔다.", scoreKey: "B_STRUCTURED" },
      { label: "숙소, 수업, 이동, 보험까지 패키지처럼 정리해두고 싶다.", scoreKey: "B_STRUCTURED" }
    ]
  },
  {
    id: "Q6",
    text: "처음 가는 도시에서 아이의 등하원이나 이동을 생각하면?",
    options: [
      { label: "대중교통이나 도보 이동도 현지 생활에 적응하는 과정이라고 본다.", scoreKey: "C_OPEN" },
      { label: "처음 몇 번 함께 해본 뒤, 아이가 환경에 익숙해지면 좋겠다.", scoreKey: "C_OPEN" },
      { label: "가능하면 셔틀이나 픽업처럼 검증된 이동수단이 있으면 좋겠다.", scoreKey: "C_PROTECTIVE" },
      { label: "숙소는 학교와 가깝고 동선이 단순해야 안심된다.", scoreKey: "C_PROTECTIVE" }
    ]
  },
  {
    id: "Q7",
    text: "수업 수준은 기대보다 평범하지만, 아이가 현지 생활을 무척 좋아하고 있다면?",
    options: [
      { label: "지금은 교실 밖 경험이 더 큰 배움일 수 있다고 생각한다.", scoreKey: "A_EXPERIENCE" },
      { label: "아이의 즐거운 적응만으로도 충분히 의미 있다고 본다.", scoreKey: "A_EXPERIENCE" },
      { label: "학습 효과를 높일 보완 수업이나 활동을 찾아본다.", scoreKey: "A_GROWTH" },
      { label: "남은 기간 동안 얻을 수 있는 목표를 다시 정리해본다.", scoreKey: "A_GROWTH" }
    ]
  },
  {
    id: "Q8",
    text: "우리 가족에게 가장 잘 맞는 체류 리듬은?",
    options: [
      { label: "오전에는 가벼운 수업, 오후에는 가족이 자유롭게 움직이는 방식.", scoreKey: "B_FREE" },
      { label: "일주일에 몇 번만 활동을 넣고 나머지는 현지 생활처럼 보내는 방식.", scoreKey: "B_FREE" },
      { label: "평일은 캠프·수업 중심, 주말은 체험 중심으로 나누는 방식.", scoreKey: "B_STRUCTURED" },
      { label: "수업, 액티비티, 돌봄까지 하루 흐름이 정해진 방식.", scoreKey: "B_STRUCTURED" }
    ]
  },
  {
    id: "Q9",
    text: "아이가 캠프 첫날 힘들었다고 말한다면?",
    options: [
      { label: "낯선 환경의 첫날은 누구나 어려우니 조금 더 지켜본다.", scoreKey: "C_OPEN" },
      { label: "아이가 직접 선생님에게 말해볼 수 있도록 응원한다.", scoreKey: "C_OPEN" },
      { label: "선생님이나 운영자에게 상황을 확인하고 필요한 도움을 요청한다.", scoreKey: "C_PROTECTIVE" },
      { label: "아이가 불안해한다면 반, 활동, 일정 조정을 먼저 검토한다.", scoreKey: "C_PROTECTIVE" }
    ]
  }
];
