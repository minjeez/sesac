# Dockerfile for Ubuntu 22.04 LTS with Python 3.10
ARG UBUNTU_VERSION=22.04
FROM ubuntu:${UBUNTU_VERSION}

# 환경 변수 설정
# ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update -y && \
    apt-get install -y python3.10 python3-pip && \
    apt-get install -y pkg-config libmysqlclient-dev
# Python 3.10을 기본 Python 버전으로 설정
RUN update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.10 1

# Verify Python installation
# RUN python3 --version && pip --version

# Clean up
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# RUN pwd

# 프로젝트 파일 복사
COPY . /app/

COPY arcana/requirements.txt /app/requirements.txt


# 컨테이너 환경의 작업 디렉토리 설정
WORKDIR /app


RUN pip install -r requirements.txt


EXPOSE 8000

CMD ["python3", "arcana/main.py"]
