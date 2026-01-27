#!/usr/bin/env python3
"""
Generate all 28 images for 초등교원을 위한 Obsidian의 쓸모 using DALL-E 3
"""

import os
import requests
import time
from pathlib import Path
from openai import OpenAI

OUTPUT_DIR = Path("content/_assets/images/obsidian-teachers")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Simplified prompts for each image (Korean style illustration)
PROMPTS = [
    # Image 1 - Already generated
    None,

    # Image 2 - 지식의 미로
    """Korean illustration style, warm semi-realistic.
A small Korean female teacher (Jihyun, early 30s, cream cardigan, gold-rimmed round glasses, shoulder-length black hair)
stands in the center of a vast, surreal maze made of giant filing cabinets and floating paper documents.
Folders labeled in Korean float around: '최종', '진짜최종', '이게진짜'. USB drives float like lost satellites.
Foggy horizon suggesting infinite confusion. One glowing folder visible far away, unreachable.
Mood: Disorientation, anxiety of lost knowledge, digital overwhelm.
Style: Surrealist Korean illustration, dreamlike quality.""",

    # Image 3 - 서랍 vs 거미줄 비교
    """Korean educational illustration style.
Split-screen comparison showing two different ways of organizing knowledge.
Left Side - '서랍 시스템': Cold, sterile office with rigid metal filing cabinets in rows. Each drawer locked and isolated.
A small silhouette struggling to search through drawers. Gray, compartmentalized, disconnected.
Right Side - '거미줄 시스템': Beautiful luminous spider web with morning dew drops.
Each intersection glows softly. When one node touched, connected nodes light up in cascade.
Labels: '수업', '학생', '아이디어', '연수'. Organic, alive, breathing.
Center: Clear 'VS' symbol.""",

    # Image 4 - 뇌 시냅스와 연결된 기억
    """Beautiful artistic visualization of neural networks and memory connections.
Close-up of stylized glowing neurons connected via luminous synapses.
Central neuron labeled '피자' fires with bright gold light.
Connected neurons light up: '치즈' (amber), '이탈리아' (orange), '배달' (yellow), '어젯밤 저녁' (pink).
Connections form constellation map patterns. Energy pulses traveling along connections.
Background: Deep purple and dark blue. Golden cores with amber halos.
Style: Scientific illustration meets artistic visualization, Korean warmth.""",

    # Image 5 - 두 번째 뇌
    """Korean illustration style, inspirational.
A Korean female teacher (Jihyun, early 30s, cream cardigan, gold-rimmed glasses) stands in profile view, looking hopeful.
Inside her head: Biological brain glowing with warm coral/pink light.
Floating beside her: A 'second brain' - crystalline digital representation with interconnected glowing nodes.
Purple-blue with circuit patterns. Each node contains tiny document previews.
Golden streams of light flow between the two brains showing knowledge transfer.
Background: Soft ethereal dawn colors suggesting new beginning.""",

    # Image 6 - 새로운 세계의 문
    """Korean fantasy illustration style.
A Korean female teacher (Jihyun, cream cardigan, gold-rimmed glasses, shoulder-length black hair)
stands before a massive ornate wooden door with golden frame.
The door has intricate patterns like interconnected nodes and network diagrams.
Door slightly ajar (10cm open), brilliant warm golden light streams through.
Her side: Dim, cold, with scattered papers and USB drives fading behind her.
Beyond door: Warm, inviting golden light suggesting something magical.
She reaches toward the door handle with mix of hesitation and curiosity.""",

    # Image 7 - 볼트는 집, 노트는 방
    """Korean architectural illustration, warm cozy style.
Cross-section view of a charming Korean-style house representing Obsidian 'Vault'.
House cut open like dollhouse showing interior rooms.
Rooms (Notes): Living room '수업 아이디어', Study '연수 기록', Bedroom '개인 메모', Kitchen '학급 운영'.
Each room has doorways connecting to hallways (representing links).
Small figure of Jihyun (cream cardigan, gold-rimmed glasses) visible in study room, looking content.
Labels: '볼트 = 집', '노트 = 방', '링크 = 복도'.
Warm, homey colors, soft creams, warm wood tones.""",

    # Image 8 - 내 자료는 내 것
    """Korean illustration, conceptual comparison.
Split-screen about data ownership.
Left: Korean teacher Jihyun looking worried, hands reaching up toward data trapped in cold corporate cloud.
Chains and lock symbols. 'SERVICE TERMINATED' warning. Cold, corporate blue.
Right: Same Jihyun looking relieved, hugging glowing folder close.
Data as warm folders on her desk. Physical hard drive with heart icons.
Her home computer setup. Warm, golden environment.
Center: Heart shape with text space for '내 자료는 내 것'.""",

    # Image 9 - 마크다운 레시피
    """Korean whimsical illustration style.
A Korean female teacher (Jihyun, cream cardigan with small apron, gold-rimmed glasses)
in a kitchen-meets-study setting, looking at a large floating recipe card.
Recipe card titled '마크다운 레시피' - vintage cookbook page style.
Ingredients listed as markdown symbols with icons:
# (chef's hat) → '제목', ** (star spoons) → '강조', - (whisk) → '목록',
1. (measuring cup) → '순서', > (quote ladle) → '인용'.
Warm kitchen colors, cream background, red accents.
Expression: 'Aha!' moment, curious satisfaction.""",

    # Image 10 - 마크다운 5개의 마법 열쇠
    """Korean magical infographic style.
Five ornate golden keys floating in magical circle around central glowing orb.
Key 1: '#' crown-shaped (purple) - '제목 만들기'
Key 2: '**' double stars (gold) - '굵게 강조'
Key 3: '-' leaf/bullet (green) - '목록 만들기'
Key 4: '1.' scroll (orange) - '순서 매기기'
Key 5: '>' speech bubble (blue) - '인용하기'
Central orb: Glowing warmly with document icons inside.
Background: Deep purple mystical, sparkles and particles.""",

    # Image 11 - 연결의 마법: 지식 은하 속의 지현
    """Korean magical realism illustration, breathtaking.
Most transformative moment - Jihyun (cream cardigan, gold-rimmed glasses)
stands at center of vast cosmic knowledge space.
Arms gently outstretched, golden threads of light emerge from fingertips.
Dozens of glowing orbs float around her (representing notes):
'수업 계획', '학생 관찰', '프로젝트 아이디어', '연수 기록'.
Golden threads connect related orbs forming 3D constellation.
Background: Deep blue-purple cosmic space, subtle stars, nebula clouds.
Expression: Wonder, joy, empowerment.""",

    # Image 12 - 링크와 백링크의 마법
    """Korean UI demonstration illustration.
Clean UI showing how note linking works in Obsidian.
Two floating note cards connected by glowing golden thread.
Left card: '프로젝트 수업 아이디어' with '[[협동학습 방법]]' highlighted.
Right card: '협동학습 방법' connected by glowing thread.
Bottom panel: '백링크' (Backlinks) showing reverse connection.
Small annotations: '링크 생성', '자동 백링크'.
A hand with wristwatch points at the link.
Dark Obsidian theme UI, golden connections.""",

    # Image 13 - 옵시디언 마법 주문서
    """Korean fantasy spellbook illustration.
Ancient mystical spellbook floating, titled '옵시디언 마법 주문서'.
Aged leather-bound with gold embossing (Obsidian gem icon).
Pages show 8 magical commands with icons:
1. [[노트]] - door icon '연결의 문'
2. [[노트|별칭]] - mask icon '가면 쓰기'
3. [[노트#제목]] - bookmark '챕터 점프'
4. [[노트#^ID]] - target '정밀 조준'
5. ![[노트]] - mirror '내용 소환'
6. ![[이미지]] - frame '사진 소환'
7. #태그 - tag '꼬리표'
8. - [ ] - checkbox '할일 체크'
Magical symbols in margins, quill pen, warm candle glow.""",

    # Image 14 - 첫 그래프 뷰의 감동
    """Korean emotional illustration.
Jihyun (cream cardigan, gold-rimmed glasses) looking at computer screen showing Obsidian graph view.
Expression: Eyes slightly watery with happy tears, soft smile of achievement.
One hand touching her heart.
Screen shows: 5 interconnected notes - '나의 교육철학' (center), '학생 중심 수업',
'프로젝트 학습', '협동학습 방법', '수업 아이디어'.
Nodes glow purple/blue, golden connection lines shimmer.
Subtle sparkles around screen, warm golden glow from monitor.
Her organized desk, warm lamp light. Milestone moment.""",

    # Image 15 - 집 꾸미기: 테마와 플러그인
    """Korean interior design illustration, cozy.
Split-screen room transformation metaphor.
Left '기본 옵시디언' (Before): Plain empty room, basic furniture, gray walls, simple desk.
Faded silhouette of Jihyun looking uncertain.
Right '나만의 옵시디언' (After): Same room transformed beautifully.
Fairy lights, nice lamp, curtains, plants, personal photos.
Smart home devices glowing. Cozy rug, organized bookshelves.
Jihyun (cream cardigan, gold glasses) stands satisfied, arms slightly open.
Labels: '테마 = 인테리어', '플러그인 = 스마트 가전'.""",

    # Image 16 - 테마 Before/After 비교
    """Clean UI comparison screenshot style.
Side-by-side of Obsidian interface before/after Obsidianite theme.
Left '기본 테마': Standard dark theme, basic typography.
Content: '# 오늘의 수업 일지', bullet points. Functional but uninspired.
Right 'Obsidianite 테마': Refined, elegant dark theme.
Better typography, improved spacing, better contrast.
Same content looking more polished and professional.
Callouts: '더 선명한 글씨', '편안한 색상', '정돈된 레이아웃'.
Clean 50/50 split.""",

    # Image 17 - 4가지 마법 플러그인 도구
    """Korean product showcase illustration, magical.
Four magical tools orbiting around central Obsidian gem logo.
1. QuickAdd (12 o'clock): Magic wand with lightning tip, yellow glow - '자동화의 마법'
2. Share Note (3 o'clock): Glowing envelope becoming web link, blue - '공유의 마법'
3. Templater (6 o'clock): Golden rubber stamp with sparkles, gold - '스마트 양식'
4. Open Gate (9 o'clock): Magical portal/gateway, purple - '차원의 문'
Deep purple cosmic background, sparkles, glow effects connecting to center.""",

    # Image 18 - Open Gate: NotebookLM으로의 포털
    """Korean futuristic portal illustration.
Jihyun (cream cardigan, gold-rimmed glasses) stands before glowing magical portal.
Portal: Large rectangular gateway, frame of dark purple Obsidian energy with circuit patterns.
Through portal: NotebookLM interface visible - Google UI elements, AI sparkles, neural patterns, sound waves.
Warm, inviting colors through portal.
Her side: Dark Obsidian workspace, familiar desk in background, floating note icons.
She reaches toward glowing threshold with excited anticipation.
Golden light emanating from portal.""",

    # Image 19 - NotebookLM 활용 4컷 만화
    """Korean webtoon/manhwa 4-panel comic style.
Same character (Jihyun: cream cardigan, gold-rimmed glasses) IDENTICAL in all panels.
Panel 1 '1. 연수 자료가 50페이지...': Jihyun overwhelmed at desk with thick PDF.
Panel 2 '2. NotebookLM에 업로드!': Uploading PDF to NotebookLM via Open Gate, hopeful.
Panel 3 '3. AI 팟캐스트가 만들어진다!': Screen shows Audio Overview generating,
two friendly AI podcast host icons, sound waves. Surprised and delighted.
Panel 4 '4. 출퇴근길에 편하게 청취!': Jihyun on subway, earbuds in, relaxed,
phone showing audio playback. Content, peaceful smile.
Warm consistent tones throughout.""",

    # Image 20 - 무한의 캔버스
    """Korean expansive inspiring illustration.
Jihyun (cream cardigan, gold-rimmed glasses) stands at edge of vast, infinite white canvas.
Arms slightly outstretched, embracing the space. Small figure to emphasize scale.
Expression: Creative joy, freedom.
Various colorful elements already on canvas:
Sticky notes '도입', '탐구', '발표', '평가'. Connected mind map elements.
Arrows, small images, shapes. Canvas glows where items placed.
Sky: Soft blue gradient suggesting endless possibility.
Canvas has no visible boundaries.""",

    # Image 21 - AI 조교의 등장
    """Korean warm fantasy illustration.
Jihyun (cream cardigan, gold-rimmed glasses) seated at desk, turned toward floating AI assistant.
Looking at AI with friendly curiosity, hand gesturing toward notes on screen.
AI Assistant: Floats beside her at shoulder height. Made of soft translucent light
with neural network patterns inside. Organic, friendly spirit form.
Soft blue and purple glow with golden sparkles. Subtle smile, kind 'eyes'.
Holds small glowing orb containing note icons.
Golden sparkles connecting AI to notes on screen.
Warm desk setup, Obsidian interface visible.""",

    # Image 22 - @멘션의 마법
    """Korean UI demonstration with magical elements.
Close-up of Obsidian Smart Composer chat interface.
Chat input shows: '@나의교육철학.md @작년수업기록.md 이걸 바탕으로 수업 아이디어 줘'
@mentions highlighted in blue/purple.
Glowing golden threads emerge from each @mention.
Connect to floating note preview cards on sides.
Left: '나의교육철학.md' preview. Right: '작년수업기록.md' preview.
Threads pulse with light, suggesting data flowing.
AI response area showing personalized response beginning.
Jihyun's hands with wristwatch visible at keyboard.
Dark Obsidian UI, warm golden connections.""",

    # Image 23 - 달인의 손끝: 단축키 마스터
    """Korean dynamic action illustration.
Close-up on Jihyun's hands flying over keyboard like a pianist.
Motion blur trails suggesting speed and fluency.
Keys glowing softly where touched.
Above hands - ghostly holographic projections:
'Ctrl+N' → new note, 'Ctrl+P' → command palette, 'Ctrl+G' → graph view.
Commands as floating text with golden glow, speed lines.
Keyboard: Sleek, backlit keys. Some highlighted (Ctrl, N, P, G).
Partial view: Her gold-rimmed glasses reflecting screen, confident smile.
Cream cardigan sleeve at wrists. Dark background, warm golden accents.
Mood: Satisfaction of mastery, flow state.""",

    # Image 24 - 나비의 변신: 지현 선생님의 변화
    """Korean transformation/metamorphosis illustration.
Left Side - The Cocoon (Before):
Translucent chrysalis containing tangled documents, scattered USB drives.
Stress symbols, shadowy tired version of Jihyun curled up.
Cream cardigan visible but muted. Confined colors.
Right Side - The Butterfly (After):
Magnificent butterfly emerging.
Jihyun's silhouette WITHIN butterfly, arms raised in joy.
Cream cardigan, gold glasses visible. Joy, freedom, triumph.
Butterfly wings made of interconnected glowing notes.
Knowledge graph patterns, golden connection threads forming wing patterns.
Transformation: Golden sparkles at transition point.
Dawn breaking, golden sunrise light. New beginning.""",

    # Image 25 - 지현 선생님의 일주일
    """Korean slice-of-life illustration, 4-quadrant layout.
Same Jihyun (cream cardigan, gold-rimmed glasses) IDENTICAL in all quadrants.
Top-Left '월요일 아침 - 수업 준비 5분 완료':
At desk confidently, Obsidian graph on monitor, efficient.
Top-Right '수요일 방과 후 - 학부모 안내문 공유':
Holding phone, Share Note sparkle, satisfied.
Bottom-Left '목요일 저녁 - 연수 자료를 팟캐스트로':
On subway/bus, earbuds in, peaceful, listening to NotebookLM.
Bottom-Right '금요일 오후 - AI와 함께 보고서 작성':
At desk with AI assistant floating beside, collaborative.
Center: Small weekly calendar showing 월/화/수/목/금 with heart.
Warm consistent tones throughout.""",

    # Image 26 - 지현 선생님의 고백: 성장의 초상화
    """Korean intimate emotional portrait.
Close-up portrait of Jihyun - now confident, peaceful, transformed.
3/4 angle, warm brown eyes reflecting small glowing knowledge graph.
Thin gold-rimmed glasses catching warm light.
Shoulder-length black hair neatly framing face.
Gentle, knowing smile - deeply content.
One hand on heart (cream cardigan sleeve visible).
Expression: Quiet confidence, inner peace, satisfaction of growth.
Background: Beautiful organized constellation of connected notes.
Forms protective aurora shape around her.
Nodes glow in purples, golds, blues. Golden connection threads.
Small butterfly motifs scattered. Warm golden lighting.""",

    # Image 27 - 작은 시작의 힘: 성장하는 지식 나무
    """Korean hopeful inspirational illustration.
Growth metaphor - journey from small note to magnificent knowledge tree.
Stage 1 '시작' (Far Left): Jihyun (cream cardigan, gold glasses) kneeling,
planting tiny seedling sprouting from single note. Hopeful, determined.
Stage 2 '연결' (Center-Left): Small plant with 2-3 branches.
Each branch has note leaves connecting. Golden threads visible.
Stage 3 '그래프' (Center-Right): Medium tree with spreading branches.
Branches form network patterns. Glowing nodes.
Stage 4 '지식의 나무' (Far Right): Magnificent full tree.
Branches entirely of interconnected glowing notes.
Leaves are idea sparks/lightbulbs. Golden threads throughout.
Aurora-like glow around canopy.
Path connecting all stages. Sunrise in background (right brighter).""",

    # Image 28 - 피날레: 새로운 시작
    """Korean cinematic inspiring finale illustration.
Jihyun stands confidently facing magnificent sunrise (back/3/4 view).
Arms slightly open, embracing new day.
Cream cardigan, shoulder-length black hair, gold-rimmed glasses catching light.
Silhouette strong and assured.
The Knowledge Aurora above/behind:
Massive beautiful knowledge graph fills sky like aurora borealis.
Individual nodes containing glimpses of lesson plans, student memories, ideas.
Golden threads weaving, graph alive and gently pulsing.
Sunrise: Dawn breaking on right, warm oranges, pinks, golds. Light rays.
In distance: Silhouettes of other teachers at their starting points.
Small glowing seedlings in their hands. 'Your journey can begin too.'
Gentle landscape, rolling hills toward horizon.
Mood: Triumphant transformation, hope, 'I did it, and you can too.'"""
]

def generate_image(client: OpenAI, prompt: str, image_num: int) -> bool:
    """Generate a single image using DALL-E 3."""
    filename = f"obsidian-teachers-{image_num:02d}.png"
    output_path = OUTPUT_DIR / filename

    if output_path.exists():
        print(f"  [SKIP] {filename} already exists")
        return True

    try:
        print(f"  Generating...")
        response = client.images.generate(
            model="dall-e-3",
            prompt=prompt,
            size="1792x1024",
            quality="standard",
            n=1,
        )

        image_url = response.data[0].url
        print(f"  Downloading...")

        img_response = requests.get(image_url)
        if img_response.status_code == 200:
            output_path.write_bytes(img_response.content)
            print(f"  [OK] Saved {filename}")
            return True
        else:
            print(f"  [ERROR] Failed to download")
            return False

    except Exception as e:
        print(f"  [ERROR] {str(e)[:100]}")
        return False

def main():
    api_key = os.environ.get('OPENAI_API_KEY')
    if not api_key:
        print("ERROR: OPENAI_API_KEY not set")
        return

    client = OpenAI(api_key=api_key)

    success = 0
    failed = 0

    for i, prompt in enumerate(PROMPTS):
        image_num = i + 1
        print(f"\n[{image_num}/28] Image {image_num}")

        if prompt is None:
            print("  [SKIP] Already handled separately")
            continue

        if generate_image(client, prompt, image_num):
            success += 1
        else:
            failed += 1

        # Rate limiting
        time.sleep(2)

    print(f"\n{'='*50}")
    print(f"Done: {success} success, {failed} failed")
    print(f"Images in: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()
