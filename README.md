## 프로젝트 소개 :ok_woman:
개발짤을 찾고자 하는 개발자들을 위한 웹사이트
<br><br>
## 배포 Link :exclamation:
[http://13.209.85.176/](http://13.209.85.176/) 이후에 도메인을 구입해 변경할 예정입니다.
<br><br>
## 기술스택 :hammer:
```
Frontend: React.js, Redux.js, Styled-components, react-query
Backend: Django, Django-Restframework
Storage: S3
Infra: EC2, Ngnix
Language: JavaScript, Python
Etc: GitHub, Eslint, Prettier
```
<br><br>
## 사용 방법 :computer:
1. 레포지토리를 클론하고자 하는 디렉토리에서 아래 명령어를 수행
```
https://github.com/Jeff-Ahn/DevMemestargram.git
```
2. 클론한 디렉토리에서 client 디렉토리로 들어가 아래 명령어를 통해 client에서 필요한 dependency 설치
```
yarn install
```
3. 클론한 디렉토리에서 아래 명령어를 통해 server에서 필요한 dependency 설치
(서버의 경우 python 가상환경에서 설치를 진행해 주세요)
```
python3 -m venv myvenv

mac: source ./myvenv/bin/activate
windows: .\myvenv\Scripts\actavate.bat

pip install -r server/requirements.txt
```
4. server에서 필요한 `dotenv` 설정
* `.env.example`를 열어 명시한 대로 `.env` 파일 작성
```
# AWS
SECRET_KEY={DJANGO SECRET_KEY}
AWS_ACCESS_KEY_ID={AWS_ACCESS_KEY_ID}
AWS_SECRET_ACCESS_KEY={AWS_SECRET_ACCESS_KEY}
AWS_STORAGE_BUCKET_NAME={AWS_STORAGE_BUCKET_NAME}
AWS_CLOUDFRONT_DOMAIN={AWS_CLOUDFRONT_DOMAIN}

# OAuth
SOCIAL_AUTH_GITHUB_CLIENT_ID={SOCIAL_AUTH_GITHUB_CLIENT_ID}
SOCIAL_AUTH_GITHUB_SECRET={SOCIAL_AUTH_GITHUB_SECRET}


REACT_APP_API_HOST={배포할 HOST}
```
> - [GitHub Developers Docs](https://docs.github.com/en/developers/apps/building-oauth-apps)를 참고
5. 두 개의 터미널을 가동한 후, 각 터미널에서 다음의 절차 수행
* `server` 폴더에서 아래의 명령어 수행
```
python manage.py makemigrations
python manage.py migrate   
---여기까지는 한 번만 실행---
python manage.py runserver
```
* `client` 폴더에서 아래의 명령어 수행
```
yarn start
```
