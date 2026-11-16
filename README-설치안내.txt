실제 상담 신청 LIVE 연동 안내

1. ZIP 압축을 풀고, index.html / thank-you.html / netlify 폴더가 함께 들어있는 폴더 전체를 Netlify 프로젝트의 Deploys에 업로드하세요. ZIP 자체를 Netlify Drop에 업로드할 수도 있습니다.
2. Netlify 사이트 설정의 Environment variables에서 아래 2개를 추가하세요.
   NETLIFY_ACCESS_TOKEN = Netlify 개인 액세스 토큰 (사이트 방문자에게 공개되지 않도록 서버 환경변수로만 저장)
   NETLIFY_FORM_ID = Netlify Forms > coway-consultation 양식의 Form ID
3. 변수 추가 후 반드시 다시 배포하세요.
4. Netlify Forms에서 form detection이 활성화되었는지 확인하고, 실제 신청을 테스트하세요. Forms 목록에서 coway-consultation이 처음 배포 후 나타나는지 확인하세요.
5. 신청자가 선택 동의 체크박스에 동의한 경우에만 LIVE에 이름 일부와 관심 제품, 신청 시간이 표시됩니다. 실제 고객 신청 데이터만 표시됩니다.
6. 신규 배포 후 Netlify Functions 메뉴에서 live-submissions 함수가 배포되었는지 확인하세요.
7. 개인 액세스 토큰은 비밀입니다. 공유하지 마세요. 폼 API 토큰은 조회 권한이 넓을 수 있으니 운영 계정의 권한 관리에 주의하세요.

주의: Netlify Drop을 통한 수동 배포 환경에서 Functions가 정상 배포되지 않을 수 있습니다. 이 경우 Git 연동 배포로 전환해야 합니다. LIVE에는 실제 데이터만 표시되며, 연결 전에는 준비 중 문구가 나옵니다.
