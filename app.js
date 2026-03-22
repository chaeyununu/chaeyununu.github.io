// ======================== i18n 번역 시스템 ========================

const translations = {
  kr: {
    // 공통 UI
    labelReality: "현실 쪽",
    labelDream: "꿈/내면 쪽",
    btnNext: "다음",
    btnSeeResult: "내 위치 보기",
    hintStart: "빈 공간을 클릭하면 테스트가 시작됩니다.",
    hintNext: "빈 공간을 클릭하면 다음 화면으로 넘어갑니다.",
    hintClose: "빈 공간을 클릭하면 결과 화면이 닫힙니다.",
    currentPosition: "지금 위치:",
    currentValue: "지금 값:",
    scaleLeft: "왼쪽 문장에 더 가깝다",
    scaleRight: "오른쪽 문장에 더 가깝다",

    // 1단계 인트로
    introTitle: "현실–꿈 위치 테스트",
    introText: "지금 나는 현실과 꿈 사이 어디쯤에 서 있는지,\n조용히 확인해보는 작은 테스트입니다.",
    introSubnote: "아직 점수는 없습니다. 지금은 그저, 이 축 위 어딘가에 서 있는 나를 떠올려 보는 시간입니다.",

    // 질문 공통
    questionMainText: "두 문장 사이에서 오늘의 나는 어디쯤에 있는지, 바를 움직여서 표시해 보세요.",

    // 결과 헤더
    resultTitle: "당신의 위치",
    resultAction: "오늘의 행동 한 가지",
    resultScene: "오늘을 위한 장면 하나",
    resultOtherBands: "다른 자리들도 이렇게 흐릅니다",
    resultFuture: "이 자리에서 앞으로",
    resultClosingTitle: "오늘의 위치를 지나며",
    resultClosing: "우리는 각자의 방식으로 하루를 지나갑니다.\n서 있는 자리도 조금씩 다를 뿐이고,\n오늘은 그 자리 그대로 지나가도 괜찮습니다.",

    // 2단계 에너지
    energyTitle: "당신의 내면 에너지 지도",
    energyDesc: "각 문장을 읽고, 지금의 나와 가장 가까운 정도로 바를 움직여 주세요.",
    energyNo: "아니오",
    energyYes: "네",
    energyBalanceTitle: "지금의 균형점",
    energyBalanceDesc: "다섯 방향에서의 값을 한 눈에 볼 수 있도록, 오늘의 에너지 모양을 한 번 그려드립니다.",
    energyBalanceNote: "이 도형은 오늘 하루에 찍힌 한 장면일 뿐입니다. 내일은 다른 모양일 수 있습니다.",
    energyLoadingTitle: "흐름은 이어집니다..",
    energyFlowTitle: "흐름을 관찰하세요",
    energyFlowNote: "점은 이렇게 여러 곳을 지나며, 결국 당신만의 방향을 만들어 갑니다.",
    energyFinalTitle: "오늘의 한 문장",
    energyFinalTemplate: (first, second) =>
      `오늘의 당신은 ${first}에 가장 기대어 서 있고, 그 옆에서 ${second}이 조용히 함께 숨 쉬고 있는 자리입니다.`,

    // 밴드 범위 레이블 (band-card-range)
    bandRangeTemplate: (min, max, title) => `${min}–${max} 점대 · ${title}`,

    // 질문 타이틀 형식
    questionTitleTemplate: (idx, total, category) => `Q${idx} / ${total} · ${category}`,
  },

  en: {
    // 공통 UI
    labelReality: "Reality",
    labelDream: "Dream",
    btnNext: "Next",
    btnSeeResult: "See My Results",
    hintStart: "Click anywhere to start the test.",
    hintNext: "Click anywhere to continue.",
    hintClose: "Click anywhere to close.",
    currentPosition: "Current position:",
    currentValue: "Current value:",
    scaleLeft: "Closer to the left",
    scaleRight: "Closer to the right",

    // 1단계 인트로
    introTitle: "Reality vs. Dream: Your Coordinate",
    introText: "Where do you stand between your daily life and your wildest dreams?\nThis is a quiet little test to find out.",
    introSubnote: "No score yet — just a moment to imagine where on this axis you might be standing today.",

    // 질문 공통
    questionMainText: "Move the slider to show where today's version of you sits between these two statements.",

    // 결과 헤더
    resultTitle: "Your Position",
    resultAction: "One Action for Today",
    resultScene: "A Scene for Today",
    resultOtherBands: "How the Other Positions Flow",
    resultFuture: "Moving Forward from Here",
    resultClosingTitle: "Passing Through Today's Position",
    resultClosing: "Each of us moves through the day in our own way.\nWhere we stand just differs a little,\nand it's okay to pass through exactly as you are today.",

    // 2단계 에너지
    energyTitle: "Your Inner Energy Map",
    energyDesc: "Read each statement and move the slider to how closely it describes you right now.",
    energyNo: "No",
    energyYes: "Yes",
    energyBalanceTitle: "Your Balance Point",
    energyBalanceDesc: "Here's your energy shape plotted across five directions — all at once.",
    energyBalanceNote: "This shape is just one frame from today. Tomorrow it may look different.",
    energyLoadingTitle: "The flow continues..",
    energyFlowTitle: "Observe the Flow",
    energyFlowNote: "The point drifts through many places — and eventually traces your own direction.",
    energyFinalTitle: "Today in One Sentence",
    energyFinalTemplate: (first, second) =>
      `Today you lean most on ${first}, while ${second} quietly breathes alongside it.`,

    // 밴드 범위 레이블
    bandRangeTemplate: (min, max, title) => `${min}–${max} pts · ${title}`,

    // 질문 타이틀 형식
    questionTitleTemplate: (idx, total, category) => `Q${idx} / ${total} · ${category}`,
  }
};

// 현재 언어 (기본값: 한국어)
let currentLang = "kr";

// 언어 전환 함수 (전역으로 선언 → HTML onclick에서 호출 가능)
function setLang(lang) {
  currentLang = lang;

  // 버튼 active 상태 갱신
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.id === `lang-${lang}`);
  });

  // data-i18n 속성을 가진 모든 요소 텍스트 갱신
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const t = translations[lang];
    if (t && typeof t[key] === "string") {
      // 줄바꿈 처리: \n → <br>
      el.innerHTML = t[key].replace(/\n/g, "<br />");
    }
  });

  // 동적으로 생성된 텍스트들 갱신 (현재 보이는 상태라면)
  refreshDynamicTexts();
}

// 동적으로 렌더된 텍스트(질문, 결과 등) 재렌더링
function refreshDynamicTexts() {
  const t = translations[currentLang];

  // question-text (질문 본문 설명)
  const questionTextEl = document.getElementById("question-text");
  if (questionTextEl && questionTextEl.textContent.trim()) {
    questionTextEl.textContent = t.questionMainText;
  }

  // next-btn 텍스트
  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) {
    // 마지막 질문이면 "결과 보기" 류, 아니면 "다음"
    // renderQuestion()이 관리하므로 여기선 현재 상태만 반영
    if (nextBtn.dataset.isLast === "true") {
      nextBtn.textContent = t.btnSeeResult;
    } else {
      nextBtn.textContent = t.btnNext;
    }
  }

  // energy-next 버튼
  const energyNextBtn = document.getElementById("energy-next");
  if (energyNextBtn) {
    energyNextBtn.textContent = t.btnNext;
  }

  // flow-hint
  const flowHintEl = document.getElementById("flow-hint");
  if (flowHintEl) {
    flowHintEl.textContent = t.hintStart;
  }
}

// ======================== 1단계: 현실–꿈 테스트 ========================

// A~J 영역 질문 (슬라이더: 0 = 현실 문장, 100 = 꿈/내면 문장)
const positionQuestions = {
  kr: [
    {
      id: "A",
      category: "속도·비교",
      left: "또래들이 앞서가는 모습을 보면, 나도 속도를 맞춰야 한다는 압박을 자주 느낀다.",
      right: "나만의 속도를 지키기 위해서라면, 남들보다 늦어지는 위험도 어느 정도 감수할 수 있다."
    },
    {
      id: "B",
      category: "루틴·성과",
      left: "하루 계획을 지키지 못하면, 그날 전체가 실패한 것 같은 기분이 든다.",
      right: "계획이 조금 틀어져도, 그날 내가 느낀 감정이나 장면이 좋았다면 '괜찮은 하루'라고 생각한다."
    },
    {
      id: "C",
      category: "커리어·미래 상상",
      left: "내 미래를 떠올릴 때, 먼저 떠오르는 것은 안정적인 직장·연봉·직함 같은 것들이다.",
      right: "내 미래를 떠올릴 때, 먼저 떠오르는 것은 내가 만들고 싶은 세계관·작품·서비스 같은 것들이다."
    },
    {
      id: "D",
      category: "인정·평가",
      left: "주변 사람들에게 '능력 있다', '잘 나간다'는 평가를 듣는 것이 크게 중요하다.",
      right: "사람들이 잘 몰라줘도, 내가 만든 것에 스스로 만족하면 그걸로 충분하다고 느낀다."
    },
    {
      id: "E",
      category: "선택 기준",
      left: "전공·진로를 선택할 때, 수입·안정성·스펙 같은 현실적인 기준을 가장 먼저 본다.",
      right: "전공·진로를 선택할 때, 내가 오래 좋아할 수 있는지, 나와 '결'이 맞는지를 더 우선으로 본다."
    },
    {
      id: "F",
      category: "실패·지연 반응",
      left: "계획했던 속도로 성과가 안 나오면, 스스로를 강하게 몰아붙이는 편이다.",
      right: "계획보다 느리게 가도, '지금은 기반 다지는 시기일 뿐'이라고 스스로를 달래는 편이다."
    },
    {
      id: "G",
      category: "관계·네트워킹",
      left: "인맥·네트워크를 쌓는 건, 나중에 기회를 잡기 위한 투자라고 생각한다.",
      right: "함께 뭔가를 만들거나 깊게 이야기 나눌 수 있는 '결 맞는 사람'을 찾는 게 더 중요하다."
    },
    {
      id: "H",
      category: "공부·일의 의미",
      left: "지금 하는 공부·일은, 결국 '좋은 자리'를 차지하기 위한 수단이라는 느낌이 강하다.",
      right: "지금 하는 공부·일은, 언젠가 내가 만들고 싶은 무언가를 위한 재료를 모으는 과정이라는 느낌이 강하다."
    },
    {
      id: "I",
      category: "리듬·휴식",
      left: "쉬고 있을 때도 '이 시간에 뭔가 더 생산적인 걸 해야 하는 거 아닌가' 하는 생각이 자주 든다.",
      right: "아무것도 안 하는 시간, 멍 때리는 시간이 오히려 내 감각을 살리는 데 필요하다고 느낀다."
    },
    {
      id: "J",
      category: "자기 이미지·정체감",
      left: "나는 결국 '열심히 달려서 올라가는 사람' 쪽에 가깝다고 느낀다.",
      right: "나는 결국 '천천히 기반을 쌓아서 나만의 세계를 만드는 사람' 쪽에 가깝다고 느낀다."
    }
  ],
  en: [
    {
      id: "A",
      category: "Pace & Comparison",
      left: "When I see peers moving ahead, I often feel pressured to keep up with their speed.",
      right: "If it means staying true to my own pace, I can accept falling a bit behind others."
    },
    {
      id: "B",
      category: "Routine & Achievement",
      left: "If I don't stick to my daily plan, the whole day feels like a failure.",
      right: "Even if plans shift, I consider it a good day if the moments I experienced felt right."
    },
    {
      id: "C",
      category: "Career & Future",
      left: "When I picture my future, what comes to mind first is a stable job, salary, or title.",
      right: "When I picture my future, what comes to mind first is a world, work, or service I want to create."
    },
    {
      id: "D",
      category: "Recognition & Evaluation",
      left: "It matters a lot to me that people around me see me as capable or successful.",
      right: "Even if others don't notice, I feel it's enough to be satisfied with what I've made."
    },
    {
      id: "E",
      category: "Decision Criteria",
      left: "When choosing a major or career, I prioritize practical factors like income, stability, and credentials.",
      right: "When choosing a major or career, I prioritize whether I'll love it long-term and whether it fits who I am."
    },
    {
      id: "F",
      category: "Response to Setbacks",
      left: "When results don't come at the pace I planned, I tend to push myself hard.",
      right: "Even if I'm going slower than planned, I tend to reassure myself that I'm just building foundations."
    },
    {
      id: "G",
      category: "Relationships & Networking",
      left: "Building connections is an investment — a way to seize opportunities later.",
      right: "Finding people I can create with or talk deeply to is more important than networking."
    },
    {
      id: "H",
      category: "Meaning of Work & Study",
      left: "What I'm studying or doing now feels mostly like a means to secure a good position.",
      right: "What I'm studying or doing now feels like gathering materials for something I'll eventually create."
    },
    {
      id: "I",
      category: "Rest & Rhythm",
      left: "Even when I'm resting, I often think: shouldn't I be doing something more productive right now?",
      right: "I feel that doing nothing — just spacing out — is actually what restores my senses."
    },
    {
      id: "J",
      category: "Self-Image & Identity",
      left: "I ultimately feel closer to being 'someone who works hard and climbs up.'",
      right: "I ultimately feel closer to being 'someone who slowly builds a foundation and creates my own world.'"
    }
  ]
};

// 밴드 정의 (0~100)
const bands = {
  kr: [
    {
      min: 0, max: 20,
      title: "현실 압박 존",
      label: "현실 쪽에 깊게 발 디딘 자리",
      message: "속도와 성과의 언어가 하루 대부분을 차지하는 시기에 가까운 자리입니다. '지금 여기에서 버티고, 책임을 다하는 것'이 먼저 보입니다.",
      summary: "현실과 책임에 먼저 응답하는 자리입니다.",
      scenePrompt: "오늘 하루 중 단 10분이라도, 아무 성과 없이 그냥 숨만 쉬어도 괜찮은 시간대를 떠올려 볼 수 있을까요?",
      futureHint: "또래보다 앞서야 한다는 압박이 강할수록, 당신은 그만큼 현실을 책임지는 사람이라는 뜻이기도 합니다. 이 힘은 나중에 조직이나 팀에서 버팀목 역할을 할 때 큰 장점이 됩니다. 다만 남들이 정한 속도가 아니라, '내가 감당할 수 있는 템포인지'만 가끔 점검해 주면 충분합니다. 속도를 늦추는 날이 있어도 전체 흐름이 무너지는 것은 아닙니다.",
      actionHint: "오늘은 알람을 10분 맞추고, 폰을 다른 방에 둔 채 창밖이나 천장만 바라보는 시간을 한 번 만들어 보세요. 그 10분은 아무 성과를 내지 않아도 괜찮은, 의도적으로 비워 둔 칸입니다."
    },
    {
      min: 21, max: 40,
      title: "현실 쪽으로 기울어진 균형",
      label: "현실 쪽으로 살짝 기울어진 균형",
      message: "현실의 규칙과 구조를 잘 이해하면서도, '이렇게만 살고 싶진 않은데'라는 감각이 함께 있습니다. 기반을 차곡차곡 쌓는 흐름입니다.",
      summary: "루틴과 기반을 차분히 쌓아가는 자리입니다.",
      scenePrompt: "오늘 해야 할 일들 사이에서, 잠깐이라도 '이 자체로 너무 즐겁다'라고 느낀 순간이 있었나요?",
      futureHint: "지금처럼 루틴과 성과를 꾸준히 관리하는 사람은, 나중에 어떤 길을 선택하더라도 기본 체력이 탄탄합니다. 여기에 가끔씩 '당장 쓸모없어 보여도 재밌는 것'을 섞어 두면, 번아웃을 덜 겪으면서도 자기 세계를 잃지 않을 수 있습니다. 현실 감각과 취향을 같이 들고 가는 타입은 장기전에 강합니다.",
      actionHint: "오늘 해야 할 일 목록 옆에, '지금의 나를 미세하게 깨우는 작은 즐거움 1개'를 붙여 보세요. 예를 들면 문제집 2페이지 + 좋아하는 영상 5분 보기처럼, 두 개를 세트로 실행해 보세요."
    },
    {
      min: 41, max: 60,
      title: "가운데 근처",
      label: "현실과 꿈 사이, 가운데 근처",
      message: "현실의 언어와 내면의 언어를 둘 다 이해하는 자리입니다. 상황에 따라 어느 쪽에 무게를 실을지 선택할 수 있는, 유연한 중간 지점입니다.",
      summary: "현실과 내면의 결을 함께 느끼는 중심축입니다.",
      scenePrompt: "오늘 하루를 떠올렸을 때, '현실 쪽으로 나를 끌어당긴 장면 1개'와 '내면/꿈 쪽으로 끌어당긴 장면 1개'는 각각 무엇이었나요?",
      futureHint: "이 자리에 있는 사람은 필요할 때는 현실 쪽으로 단단히 서고, 숨 쉴 틈이 생기면 자기 세계로 깊게 내려갈 수 있습니다. 두 언어를 번역해 줄 수 있는 사람이라, 팀에서는 연결자·조율자 역할을 잘 하게 됩니다. 다만 어느 쪽에 서 있을지 애매할 때, '이번 한 달은 현실 쪽에 10% 더 실어보자'처럼 임시 기준을 정해 두면 더 편해집니다.",
      actionHint: "오늘 하루를 마무리하면서, 메모장에 두 줄만 적어 보세요. ① 나를 현실 쪽으로 당긴 장면 1개 ② 나를 꿈/내면 쪽으로 당긴 장면 1개. 둘 다 분명히 있다는 걸 확인하는 것 자체가 의미 있는 기록입니다."
    },
    {
      min: 61, max: 80,
      title: "내면·기반 쪽 기울기",
      label: "내면과 기반 쪽으로 기울어진 자리",
      message: "속도보다는 결, 스펙보다는 기반을 보는 경향이 강한 자리입니다. 자기 리듬을 지키면서 쌓고 싶어 하는 마음이 분명히 보입니다.",
      summary: "자기 결과 기반을 지키려는 자리입니다.",
      scenePrompt: "오늘 기억에 남는 장면이나 문장이 있다면, 그때 당신의 속도는 주변 사람들과 어떻게 달랐나요?",
      futureHint: "예술·디자인·서비스·브랜드·기획처럼 '세계관'이 중요한 영역에서는 이런 감각이 큰 장점입니다. 눈에 잘 보이지 않는 기반을 오래 쌓을 수 있기 때문입니다. 다만 루틴과 현실 정리를 최소한으로 붙여 두면, 당신의 세계가 더 오래, 더 멀리 갈 수 있습니다. 느려 보일 수 있지만, 한번 쌓이면 쉽게 무너지지 않는 타입입니다.",
      actionHint: "오늘 떠오른 장면·문장·아이디어 중에서 하나를 골라 5줄짜리 메모나 작은 스케치로 남겨 보세요. 그리고 옆에 '내일 이걸 실제로 건드려보는 작은 행동 1개'를 같이 적어 두면, 머릿속에만 있던 감각이 현실으로 넘어오기 시작합니다."
    },
    {
      min: 81, max: 100,
      title: "꿈/내면 개방 존",
      label: "꿈·내면이 크게 열린 자리",
      message: "자기만의 시야와 언어가 매우 강한 자리입니다. 머릿속 장면·노래·이미지로 하루를 버티는 날이 많을 수 있습니다.",
      summary: "자기 세계관이 또렷하게 살아 있는 자리입니다.",
      scenePrompt: "오늘 혼자 이동하거나 걷던 시간에, 눈앞 풍경보다 더 선명하게 떠오르던 장면이 있었다면 무엇이었나요?",
      futureHint: "이 자리에 있는 사람은 때로 현실의 속도가 버겁게 느껴지지만, 대신 남들이 쉽게 흉내낼 수 없는 감각과 서사를 가지고 있습니다. 잘만 다루면 강력한 창작자·기획자·브랜드 오너가 될 수 있는 포지션입니다. 다만 머릿속 세계를 실제 형태로 꺼내기 위해, 아주 작은 생활 루틴(정리, 기록, 제출)을 스스로와 약속해 두면 좋습니다.",
      actionHint: "머릿속이 너무 복잡할 때 휴대폰을 다른 방에 두고, 방 정리·빨래·설거지·쓰레기 버리기 중 하나를 골라 15분만 해 보세요. 머리는 자유롭게 상상하되, 몸은 현실 루틴에 잠깐 묶어 두는 연습이라고 생각해도 괜찮습니다."
    }
  ],
  en: [
    {
      min: 0, max: 20,
      title: "Reality Pressure Zone",
      label: "Deeply rooted in the reality side",
      message: "You're in a phase where the language of speed and achievement fills most of your day. 'Holding on and meeting responsibilities right here, right now' comes first.",
      summary: "A place that answers first to reality and responsibility.",
      scenePrompt: "Can you think of even a 10-minute window today where it would be okay to just breathe — no output required?",
      futureHint: "The stronger the pressure to stay ahead of peers, the more it shows you're someone who takes reality seriously. That strength becomes a real asset when you serve as a pillar in a team or organization. Still, it's worth occasionally asking not 'am I keeping up with others' pace' but 'is this a tempo I can actually sustain?' Slowing down on some days doesn't break the whole arc.",
      actionHint: "Today, set a 10-minute alarm, put your phone in another room, and just look out the window or at the ceiling. That 10 minutes is a deliberately empty slot — no output needed."
    },
    {
      min: 21, max: 40,
      title: "Leaning Toward Reality",
      label: "A balance tilted slightly toward reality",
      message: "You understand the rules and structures of reality well — but there's also a quiet sense of 'I don't want to live only like this.' You're steadily building your foundation.",
      summary: "A place quietly stacking routines and foundations.",
      scenePrompt: "Somewhere among today's to-dos, was there even a moment where you thought 'this is just genuinely enjoyable'?",
      futureHint: "Someone who consistently manages routines and results like you do has strong baseline stamina — whatever path you choose later. Adding occasional 'things that seem useless but are fun' to the mix means you're less likely to burn out while still keeping your own world intact. The type who carries both practical sense and personal taste tends to go the distance.",
      actionHint: "Next to your to-do list today, attach one small joy that gently wakes up the present version of you — like 2 pages of study + 5 minutes of a video you love. Try running both as a set."
    },
    {
      min: 41, max: 60,
      title: "Near the Center",
      label: "Somewhere between reality and dream",
      message: "You understand both the language of reality and the language of your inner world. Depending on the situation, you can choose which side to lean toward — a flexible middle point.",
      summary: "A central axis that feels both reality and inner texture.",
      scenePrompt: "Thinking back on today — what was one scene that pulled you toward reality, and one that pulled you toward your inner world or dream?",
      futureHint: "Someone in this position can stand firmly on the reality side when needed, and dive deep into their own world when there's breathing room. Being able to translate between both languages makes you a natural connector or coordinator in a team. When it's unclear which side to be on, setting a temporary anchor — like 'this month I'll lean 10% more toward reality' — can help a lot.",
      actionHint: "As you wrap up today, write just two lines in a notes app: ① One scene that pulled me toward reality ② One scene that pulled me toward dream/inner world. Just confirming that both clearly exist is itself a meaningful record."
    },
    {
      min: 61, max: 80,
      title: "Leaning Toward Inner Foundation",
      label: "Tilted toward inner world and foundation",
      message: "You tend to value texture over speed, foundation over credentials. There's a clear desire to build while protecting your own rhythm.",
      summary: "A place committed to protecting your own texture and foundation.",
      scenePrompt: "If there's a scene or sentence that stayed with you today — how was your pace in that moment different from the people around you?",
      futureHint: "In areas where 'worldview' matters — art, design, services, brands, planning — this kind of sensibility is a huge advantage. You can build invisible foundations over a long time. Attaching just a minimal layer of routine and real-world tidying means your world can go further, for longer. You might look slow, but once built, you don't collapse easily.",
      actionHint: "Pick one scene, sentence, or idea that surfaced today and capture it in a 5-line note or small sketch. Then write next to it: 'one small action I'll actually try with this tomorrow.' That's when what lives only in your head starts crossing into reality."
    },
    {
      min: 81, max: 100,
      title: "Dream / Inner Open Zone",
      label: "Wide open toward dream and inner world",
      message: "Your own vision and language are very strong here. Many days, you get through on the scenes, songs, and images inside your head.",
      summary: "A place where your own worldview is vividly alive.",
      scenePrompt: "During the time you were moving or walking alone today — was there a scene that appeared more vividly than the view in front of you?",
      futureHint: "People in this position sometimes find reality's pace overwhelming — but in exchange, they carry sensibilities and narratives that others can't easily imitate. With the right handling, this is the position of a powerful creator, planner, or brand owner. To get the world inside your head into actual form, it helps to make small commitments to yourself: tiny daily routines like organizing, recording, submitting.",
      actionHint: "When your head feels too crowded, put your phone in another room and spend just 15 minutes on one thing: tidying your room, doing laundry, washing dishes, or taking out trash. Think of it as a practice of letting your mind roam freely while anchoring your body in reality for a little while."
    }
  ]
};

// ======================== 2단계: 기운 지도 메타 ========================

const energyAxesMeta = {
  kr: {
    E: { label: "확장·도전 🚀" },
    F: { label: "열정·점화 🔥" },
    G: { label: "중심·루틴 🪨" },
    C: { label: "정제·분석 🧠" },
    W: { label: "감성·흐름 🌊" }
  },
  en: {
    E: { label: "Expansion 🚀" },
    F: { label: "Passion 🔥" },
    G: { label: "Grounding 🪨" },
    C: { label: "Clarity 🧠" },
    W: { label: "Flow 🌊" }
  }
};

// 질문 (0 = 아니오, 100 = 네)
const energyQuestions = {
  kr: [
    {
      id: "E",
      labelKey: "E",
      prompt: "요즘, 전혀 다른 전공·진로·도시·일상을 상상해 보면서 '언젠가는 한 번 크게 틀어볼지도 모르겠다'는 생각을 진지하게 해 본 적이 자주 있나요?"
    },
    {
      id: "F",
      labelKey: "F",
      prompt: "일정에 없던 일이 갑자기 꽂혀서, 계획보다 '지금 이걸 해야겠다'는 마음 때문에 흐름을 바꿔본 날이 한 주에 여러 번 있었나요?"
    },
    {
      id: "G",
      labelKey: "G",
      prompt: "하루 시작 전에 대략적인 시간표나 할 일 목록이 머릿속에 그려져 있어야, 마음이 비교적 편안해지는 편인가요?"
    },
    {
      id: "C",
      labelKey: "C",
      prompt: "공부나 일을 할 때, 자연스럽게 기준을 정하고, 자료를 정리해서 '구조를 만들고 싶다'는 충동이 자주 드나요?"
    },
    {
      id: "W",
      labelKey: "W",
      prompt: "혼자 조용히 걷거나, 창밖을 멍하니 보거나, 음악만 들으면서 흐르는 시간 같은 것이 없으면 금방 예민해지는 편인가요?"
    }
  ],
  en: [
    {
      id: "E",
      labelKey: "E",
      prompt: "Lately, have you seriously imagined a completely different major, career, city, or lifestyle — and thought 'maybe one day I'll make a big switch'?"
    },
    {
      id: "F",
      labelKey: "F",
      prompt: "Has something unexpected grabbed you this week, making you change your flow because 'I need to do this right now' — multiple times?"
    },
    {
      id: "G",
      labelKey: "G",
      prompt: "Do you feel relatively at ease when you have a rough schedule or to-do list in your head before the day starts?"
    },
    {
      id: "C",
      labelKey: "C",
      prompt: "When studying or working, do you often feel the urge to set criteria, organize information, and 'build a structure'?"
    },
    {
      id: "W",
      labelKey: "W",
      prompt: "Do you get irritable pretty quickly if you don't have time to quietly walk alone, stare out a window, or just drift along with music?"
    }
  ]
};

// ======================== DOM 로직 ========================

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- 1단계 인트로 + 질문 플로우 ---------- */
  const flowEl = document.getElementById("test-flow");
  const flowPanelEl = document.getElementById("test-panel");
  const flowStepEls = Array.from(document.querySelectorAll(".flow-step"));
  const flowHintEl = document.getElementById("flow-hint");

  const questionTitleEl = document.getElementById("question-title");
  const questionTextEl = document.getElementById("question-text");
  const questionLeftEl = document.getElementById("question-left");
  const questionRightEl = document.getElementById("question-right");
  const questionSliderEl = document.getElementById("question-slider");
  const questionValueEl = document.getElementById("question-value");
  const nextBtn = document.getElementById("next-btn");

  let flowStep = 1;
  let currentQuestionIndex = 0;
  const positionAnswers = {};

  function getCurrentQuestions() {
    return positionQuestions[currentLang];
  }

  function getCurrentBands() {
    return bands[currentLang];
  }

  function setFlowStep(step) {
    flowStep = step;
    flowStepEls.forEach((el) => {
      const s = Number(el.getAttribute("data-step"));
      el.classList.toggle("active", s === flowStep);
    });

    if (flowStep === 1) {
      flowHintEl.textContent = translations[currentLang].hintStart;
    } else {
      flowHintEl.textContent = "";
    }

    if (flowStep === 2 && currentQuestionIndex === 0) {
      renderQuestion();
    }
  }

  flowEl.addEventListener("click", () => {
    if (flowStep === 1) {
      setFlowStep(2);
    }
  });

  flowPanelEl.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  function renderQuestion() {
    const questions = getCurrentQuestions();
    const total = questions.length;
    const q = questions[currentQuestionIndex];
    const t = translations[currentLang];

    questionTitleEl.textContent = t.questionTitleTemplate(currentQuestionIndex + 1, total, q.category);
    questionTextEl.textContent = t.questionMainText;
    questionLeftEl.textContent = q.left;
    questionRightEl.textContent = q.right;

    const saved = positionAnswers[q.id];
    const value = typeof saved === "number" ? saved : 50;
    questionSliderEl.value = value;
    questionValueEl.textContent = value.toString();

    const isLast = currentQuestionIndex === total - 1;
    nextBtn.dataset.isLast = isLast ? "true" : "false";
    nextBtn.textContent = isLast ? t.btnSeeResult : t.btnNext;
  }

  questionSliderEl.addEventListener("input", () => {
    questionValueEl.textContent = questionSliderEl.value;
  });

  /* ---------- 결과 계산 ---------- */
  function calculatePositionResult(answerMap) {
    const values = Object.values(answerMap).map((v) => Number(v)).filter((v) => !isNaN(v));
    if (!values.length) {
      const fallbackScore = 50;
      const bandList = getCurrentBands();
      const fallbackBand = bandList.find((b) => fallbackScore >= b.min && fallbackScore <= b.max) || bandList[2];
      return { score: fallbackScore, band: fallbackBand };
    }
    const sum = values.reduce((acc, v) => acc + v, 0);
    const score = Math.round(sum / values.length);
    const bandList = getCurrentBands();
    const band = bandList.find((b) => score >= b.min && score <= b.max) || bandList[2];
    return { score, band };
  }

  /* ---------- 결과 오버레이 ---------- */
  const resultEl = document.getElementById("result");
  const resultPanelEl = document.getElementById("result-panel");
  const resultStepEls = Array.from(document.querySelectorAll(".result-step"));
  const resultHintEl = document.getElementById("result-hint");

  const axisThumbEl = document.getElementById("axis-thumb");
  const scorePillEl = document.getElementById("score-pill");
  const bandLabelEl = document.getElementById("band-label");
  const messageEl = document.getElementById("message");
  const actionEl = document.getElementById("action-text");
  const sceneTextEl = document.getElementById("scene-text");
  const futureTextEl = document.getElementById("future-text");
  const bandsSummaryContainer = document.getElementById("bands-summary");

  let resultStep = 1;

  function setResultStep(step) {
    resultStep = step;
    resultStepEls.forEach((el) => {
      const s = Number(el.getAttribute("data-step"));
      el.classList.toggle("active", s === resultStep);
    });
    const t = translations[currentLang];
    if (resultStep >= resultStepEls.length) {
      resultHintEl.textContent = t.hintClose;
    } else {
      resultHintEl.textContent = t.hintNext;
    }
  }

  function renderBandsSummary() {
    const bandList = getCurrentBands();
    const t = translations[currentLang];
    bandsSummaryContainer.innerHTML = "";
    bandList.forEach((band) => {
      const card = document.createElement("div");
      card.className = "band-card";

      const title = document.createElement("div");
      title.className = "band-card-title";
      title.textContent = band.label;

      const range = document.createElement("div");
      range.className = "band-card-range";
      range.textContent = t.bandRangeTemplate(band.min, band.max, band.title);

      const summary = document.createElement("div");
      summary.textContent = band.summary;

      card.appendChild(title);
      card.appendChild(range);
      card.appendChild(summary);

      bandsSummaryContainer.appendChild(card);
    });
  }

  renderBandsSummary();

  function showResult(score, band) {
    scorePillEl.textContent = `${band.title} · ${score} / 100`;
    bandLabelEl.textContent = band.label;
    messageEl.textContent = band.message;
    actionEl.textContent = band.actionHint;

    const clamped = Math.max(0, Math.min(100, score));
    axisThumbEl.style.left = clamped + "%";

    renderBandsSummary();
    const allCards = bandsSummaryContainer.querySelectorAll(".band-card");
    const bandList = getCurrentBands();
    const bandIndex = bandList.indexOf(band);
    allCards.forEach((card, idx) => {
      card.classList.toggle("active", idx === bandIndex);
    });

    sceneTextEl.textContent = band.scenePrompt;
    futureTextEl.textContent = band.futureHint;

    resultEl.style.display = "flex";
    setResultStep(1);
  }

  nextBtn.addEventListener("click", () => {
    if (flowStep !== 2) return;

    const questions = getCurrentQuestions();
    const q = questions[currentQuestionIndex];
    const value = Number(questionSliderEl.value);
    positionAnswers[q.id] = value;

    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex += 1;
      renderQuestion();
    } else {
      const { score, band } = calculatePositionResult(positionAnswers);
      showResult(score, band);
      flowEl.style.display = "none";
    }
  });

  // ======================== 2단계: 기운 지도 ========================

  const energyTestEl = document.getElementById("energy-test");
  const energyPanelEl = document.getElementById("energy-panel");
  const energyStepEls = energyPanelEl
    ? Array.from(energyPanelEl.querySelectorAll(".energy-step"))
    : [];
  const energyHintEl = document.getElementById("energy-hint");

  const energyModeLabelEl = document.getElementById("energy-mode-label");
  const energyQuestionTextEl = document.getElementById("energy-question-text");
  const energySliderEl = document.getElementById("energy-slider");
  const energyValueEl = document.getElementById("energy-value");
  const energyNextBtn = document.getElementById("energy-next");

  const staticCanvas = document.getElementById("energy-static-canvas");
  const staticCtx = staticCanvas ? staticCanvas.getContext("2d") : null;

  const flowCanvas = document.getElementById("energy-flow-canvas");
  const flowCtx = flowCanvas ? flowCanvas.getContext("2d") : null;

  const energyFinalLineEl = document.getElementById("energy-final-line");

  let energyStep = 1;
  let currentEnergyIndex = 0;
  const energyValues = { E: 50, F: 50, G: 50, C: 50, W: 50 };

  let loadingTimer = null;
  let flowAnimationId = null;
  let flowTrail = [];
  let flowPos = { x: 0, y: 0 };
  let flowVel = { x: 0, y: 0 };
  let flowCenter = { x: 0, y: 0 };
  let flowRadius = 0;

  function getEnergyAxesMeta() {
    return energyAxesMeta[currentLang];
  }

  function getCurrentEnergyQuestions() {
    return energyQuestions[currentLang];
  }

  function setEnergyStep(step) {
    if (!energyPanelEl) return;

    energyStep = step;
    energyStepEls.forEach((el) => {
      const s = Number(el.getAttribute("data-step"));
      el.classList.toggle("active", s === energyStep);
    });

    const t = translations[currentLang];
    if (energyStep >= energyStepEls.length) {
      energyHintEl.textContent = t.hintClose;
    } else {
      energyHintEl.textContent = t.hintNext;
    }

    if (energyStep === 2) {
      drawStaticPoint();
    } else if (energyStep === 3) {
      if (loadingTimer) clearTimeout(loadingTimer);
      loadingTimer = setTimeout(() => {
        setEnergyStep(4);
      }, 3000);
    } else if (energyStep === 4) {
      if (loadingTimer) {
        clearTimeout(loadingTimer);
        loadingTimer = null;
      }
      startFlowAnimation();
    } else if (energyStep === 5) {
      stopFlowAnimation();
      energyPanelEl.classList.add("wave-active");
      buildEnergyFinalLine();
    }
  }

  function startEnergyTest() {
    if (!energyTestEl) return;

    currentEnergyIndex = 0;
    energyValues.E = 50;
    energyValues.F = 50;
    energyValues.G = 50;
    energyValues.C = 50;
    energyValues.W = 50;

    updateEnergyQuestion();
    const eqs = getCurrentEnergyQuestions();
    energySliderEl.value = energyValues[eqs[0].id];
    energyValueEl.textContent = energySliderEl.value;

    energyPanelEl.classList.remove("wave-active");
    energyTestEl.style.display = "flex";
    setEnergyStep(1);
  }

  if (energyTestEl) {
    energyPanelEl.addEventListener("click", (e) => e.stopPropagation());

    energyTestEl.addEventListener("click", () => {
      if (energyStep < energyStepEls.length) {
        setEnergyStep(energyStep + 1);
      } else {
        energyTestEl.style.display = "none";
      }
    });
  }

  function updateEnergyQuestion() {
    const eqs = getCurrentEnergyQuestions();
    const axesMeta = getEnergyAxesMeta();
    const q = eqs[currentEnergyIndex];

    const saved = energyValues[q.id];
    const currentValue = saved !== undefined ? saved : 50;

    energyModeLabelEl.textContent = axesMeta[q.id].label;
    energyQuestionTextEl.textContent = q.prompt;

    energySliderEl.value = currentValue;
    energyValueEl.textContent = currentValue;
  }

  energySliderEl.addEventListener("input", () => {
    energyValueEl.textContent = energySliderEl.value;
  });

  energyNextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const eqs = getCurrentEnergyQuestions();
    const q = eqs[currentEnergyIndex];
    energyValues[q.id] = Number(energySliderEl.value);

    if (currentEnergyIndex < eqs.length - 1) {
      currentEnergyIndex += 1;
      updateEnergyQuestion();
    } else {
      setEnergyStep(2);
    }
  });

  // ---------- 정적 균형점 (레이더 차트) ----------

  function drawStaticPoint() {
    if (!staticCtx || !staticCanvas) return;

    const axesMeta = getEnergyAxesMeta();
    const w = staticCanvas.width;
    const h = staticCanvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const maxR = Math.min(w, h) * 0.32;

    staticCtx.clearRect(0, 0, w, h);

    const bgGrad = staticCtx.createRadialGradient(cx, cy, maxR * 0.1, cx, cy, maxR * 1.5);
    bgGrad.addColorStop(0, "#020617");
    bgGrad.addColorStop(0.5, "#020617");
    bgGrad.addColorStop(1, "#020617");
    staticCtx.fillStyle = bgGrad;
    staticCtx.fillRect(0, 0, w, h);

    const directions = ["E", "F", "G", "C", "W"];
    const angles = getDirectionAngles();

    staticCtx.save();
    staticCtx.translate(cx, cy);

    staticCtx.strokeStyle = "rgba(148, 163, 184, 0.4)";
    staticCtx.lineWidth = 1.3;

    for (let layer = 1; layer <= 3; layer++) {
      const r = (maxR * layer) / 3;
      staticCtx.beginPath();
      directions.forEach((key, idx) => {
        const angle = angles[key];
        const x = r * Math.cos(angle);
        const y = r * Math.sin(angle);
        if (idx === 0) staticCtx.moveTo(x, y);
        else staticCtx.lineTo(x, y);
      });
      staticCtx.closePath();
      staticCtx.stroke();
    }

    staticCtx.strokeStyle = "rgba(148, 163, 184, 0.2)";
    directions.forEach((key) => {
      const angle = angles[key];
      staticCtx.beginPath();
      staticCtx.moveTo(0, 0);
      staticCtx.lineTo(maxR * Math.cos(angle), maxR * Math.sin(angle));
      staticCtx.stroke();
    });

    staticCtx.fillStyle = "rgba(148, 163, 184, 0.95)";
    staticCtx.font = "12px 'Noto Sans KR', system-ui";

    directions.forEach((key) => {
      const angle = angles[key];
      const r = maxR * 1.12;
      const x = r * Math.cos(angle);
      const y = r * Math.sin(angle);
      const text = axesMeta[key].label;
      const metrics = staticCtx.measureText(text);
      staticCtx.fillText(text, x - metrics.width / 2, y + 4);
    });

    const points = [];
    directions.forEach((key) => {
      const v = (energyValues[key] ?? 50) / 100;
      const r = maxR * v;
      const a = angles[key];
      const x = r * Math.cos(a);
      const y = r * Math.sin(a);
      points.push({ x, y });
    });

    staticCtx.beginPath();
    points.forEach((p, idx) => {
      if (idx === 0) staticCtx.moveTo(p.x, p.y);
      else staticCtx.lineTo(p.x, p.y);
    });
    staticCtx.closePath();

    const polyGrad = staticCtx.createRadialGradient(0, 0, maxR * 0.15, 0, 0, maxR);
    polyGrad.addColorStop(0, "rgba(56, 189, 248, 0.35)");
    polyGrad.addColorStop(1, "rgba(56, 189, 248, 0.08)");
    staticCtx.fillStyle = polyGrad;
    staticCtx.fill();

    staticCtx.strokeStyle = "rgba(56, 189, 248, 0.95)";
    staticCtx.lineWidth = 2.2;
    staticCtx.stroke();

    points.forEach((p) => {
      const r = 5.2;
      const grad = staticCtx.createRadialGradient(p.x - r / 3, p.y - r / 3, r * 0.2, p.x, p.y, r);
      grad.addColorStop(0, "#e5f0ff");
      grad.addColorStop(1, "#38bdf8");
      staticCtx.fillStyle = grad;
      staticCtx.beginPath();
      staticCtx.arc(p.x, p.y, r, 0, Math.PI * 2);
      staticCtx.fill();
    });

    let sumX = 0, sumY = 0;
    points.forEach((p) => { sumX += p.x; sumY += p.y; });
    const centerX = points.length ? sumX / points.length : 0;
    const centerY = points.length ? sumY / points.length : 0;

    const centerR = 4.5;
    const centerGrad = staticCtx.createRadialGradient(centerX, centerY, centerR * 0.1, centerX, centerY, centerR * 1.4);
    centerGrad.addColorStop(0, "#e5f0ff");
    centerGrad.addColorStop(1, "rgba(15, 23, 42, 1)");
    staticCtx.fillStyle = centerGrad;
    staticCtx.beginPath();
    staticCtx.arc(centerX, centerY, centerR, 0, Math.PI * 2);
    staticCtx.fill();

    staticCtx.restore();

    flowCenter = { x: cx, y: cy };
    flowRadius = maxR;
    flowPos = { x: cx + centerX, y: cy + centerY };
  }

  function getDirectionAngles() {
    const base = -Math.PI / 2;
    return {
      E: base,
      F: base + (2 * Math.PI) / 5,
      G: base + (4 * Math.PI) / 5,
      C: base + (6 * Math.PI) / 5,
      W: base + (8 * Math.PI) / 5
    };
  }

  // ---------- 부유 애니메이션 ----------

  function startFlowAnimation() {
    if (!flowCtx || !flowCanvas) return;

    stopFlowAnimation();
    flowTrail = [];

    if (!flowPos.x && !flowPos.y) {
      flowCenter = { x: flowCanvas.width / 2, y: flowCanvas.height / 2 };
      flowRadius = Math.min(flowCanvas.width, flowCanvas.height) * 0.32;
      flowPos = { x: flowCenter.x, y: flowCenter.y - flowRadius * 0.3 };
    }

    flowVel = { x: (Math.random() - 0.5) * 1.2, y: (Math.random() - 0.5) * 1.2 };

    const w = flowCanvas.width;
    const h = flowCanvas.height;

    const step = () => {
      flowAnimationId = requestAnimationFrame(step);

      flowCtx.clearRect(0, 0, w, h);
      const bgGrad = flowCtx.createRadialGradient(flowCenter.x, flowCenter.y, flowRadius * 0.2, flowCenter.x, flowCenter.y, flowRadius * 1.8);
      bgGrad.addColorStop(0, "#020617");
      bgGrad.addColorStop(1, "#020617");
      flowCtx.fillStyle = bgGrad;
      flowCtx.fillRect(0, 0, w, h);

      drawFlowPentagonGrid();

      flowVel.x += (Math.random() - 0.5) * 0.05;
      flowVel.y += (Math.random() - 0.5) * 0.05;

      const maxSpeed = 1.1;
      const speed = Math.hypot(flowVel.x, flowVel.y) || 0.0001;
      if (speed > maxSpeed) {
        flowVel.x = (flowVel.x / speed) * maxSpeed;
        flowVel.y = (flowVel.y / speed) * maxSpeed;
      }

      flowPos.x += flowVel.x;
      flowPos.y += flowVel.y;

      const dx = flowPos.x - flowCenter.x;
      const dy = flowPos.y - flowCenter.y;
      const dist = Math.hypot(dx, dy);
      const limit = flowRadius * 0.95;

      if (dist > limit && dist !== 0) {
        const nx = dx / dist;
        const ny = dy / dist;
        const dot = flowVel.x * nx + flowVel.y * ny;
        flowVel.x = flowVel.x - 2 * dot * nx;
        flowVel.y = flowVel.y - 2 * dot * ny;
        flowPos.x = flowCenter.x + nx * limit;
        flowPos.y = flowCenter.y + ny * limit;
      }

      flowTrail.push({ x: flowPos.x, y: flowPos.y });
      if (flowTrail.length > 40) flowTrail.shift();

      flowCtx.lineWidth = 1.4;
      for (let i = 1; i < flowTrail.length; i++) {
        const p0 = flowTrail[i - 1];
        const p1 = flowTrail[i];
        const alpha = i / flowTrail.length;
        flowCtx.strokeStyle = `rgba(129, 199, 255, ${alpha * 0.45})`;
        flowCtx.beginPath();
        flowCtx.moveTo(p0.x, p0.y);
        flowCtx.lineTo(p1.x, p1.y);
        flowCtx.stroke();
      }

      const pointR = 7;
      const grad = flowCtx.createRadialGradient(flowPos.x - pointR / 3, flowPos.y - pointR / 3, pointR * 0.2, flowPos.x, flowPos.y, pointR);
      grad.addColorStop(0, "#e5f0ff");
      grad.addColorStop(1, "#38bdf8");
      flowCtx.fillStyle = grad;
      flowCtx.beginPath();
      flowCtx.arc(flowPos.x, flowPos.y, pointR, 0, Math.PI * 2);
      flowCtx.fill();
    };

    step();
  }

  function stopFlowAnimation() {
    if (flowAnimationId) {
      cancelAnimationFrame(flowAnimationId);
      flowAnimationId = null;
    }
  }

  function drawFlowPentagonGrid() {
    if (!flowCtx) return;
    const axesMeta = getEnergyAxesMeta();
    const directions = ["E", "F", "G", "C", "W"];
    const angles = getDirectionAngles();
    const cx = flowCenter.x;
    const cy = flowCenter.y;
    const maxR = flowRadius;

    flowCtx.save();
    flowCtx.translate(cx, cy);

    const ringGrad = flowCtx.createRadialGradient(0, 0, maxR * 0.2, 0, 0, maxR * 1.2);
    ringGrad.addColorStop(0, "rgba(56, 189, 248, 0.08)");
    ringGrad.addColorStop(1, "rgba(15, 23, 42, 0.0)");
    flowCtx.fillStyle = ringGrad;
    flowCtx.beginPath();
    flowCtx.arc(0, 0, maxR * 1.2, 0, Math.PI * 2);
    flowCtx.fill();

    flowCtx.strokeStyle = "rgba(148, 163, 184, 0.35)";
    flowCtx.lineWidth = 1.1;

    for (let layer = 1; layer <= 3; layer++) {
      const r = (maxR * layer) / 3;
      flowCtx.beginPath();
      directions.forEach((key, idx) => {
        const angle = angles[key];
        const x = r * Math.cos(angle);
        const y = r * Math.sin(angle);
        if (idx === 0) flowCtx.moveTo(x, y);
        else flowCtx.lineTo(x, y);
      });
      flowCtx.closePath();
      flowCtx.stroke();
    }

    flowCtx.strokeStyle = "rgba(148, 163, 184, 0.25)";
    directions.forEach((key) => {
      const angle = angles[key];
      flowCtx.beginPath();
      flowCtx.moveTo(0, 0);
      flowCtx.lineTo(maxR * Math.cos(angle), maxR * Math.sin(angle));
      flowCtx.stroke();
    });

    flowCtx.fillStyle = "rgba(148, 163, 184, 0.9)";
    flowCtx.font = "12px 'Noto Sans KR', system-ui";

    directions.forEach((key) => {
      const angle = angles[key];
      const r = maxR * 1.12;
      const x = r * Math.cos(angle);
      const y = r * Math.sin(angle);
      const text = axesMeta[key].label;
      const metrics = flowCtx.measureText(text);
      flowCtx.fillText(text, x - metrics.width / 2, y + 4);
    });

    flowCtx.restore();
  }

  // ---------- 에너지 해석: 한 문장 ----------

  function buildEnergyFinalLine() {
    const axesMeta = getEnergyAxesMeta();
    const t = translations[currentLang];

    const E = energyValues.E ?? 50;
    const F = energyValues.F ?? 50;
    const G = energyValues.G ?? 50;
    const C = energyValues.C ?? 50;
    const W = energyValues.W ?? 50;

    const strongest = [
      { key: "E", label: axesMeta.E.label, value: E },
      { key: "F", label: axesMeta.F.label, value: F },
      { key: "G", label: axesMeta.G.label, value: G },
      { key: "C", label: axesMeta.C.label, value: C },
      { key: "W", label: axesMeta.W.label, value: W }
    ].sort((a, b) => b.value - a.value);

    const first = strongest[0];
    const second = strongest[1];

    energyFinalLineEl.textContent = t.energyFinalTemplate(first.label, second.label);
  }

  // ---------- 결과 오버레이 클릭 ----------

  resultPanelEl.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  resultEl.addEventListener("click", () => {
    if (resultStep < resultStepEls.length) {
      setResultStep(resultStep + 1);
    } else {
      resultEl.style.display = "none";
      if (energyTestEl) {
        startEnergyTest();
      }
    }
  });
});

