FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get install -y python-pip python-dev build-essential

ENV BIND_PORT 5000
ENV FLASK_APP main.py

WORKDIR /opt/service

COPY requirements.txt requirements.txt
COPY main.py main.py
COPY Game.py Game.py
COPY static static
COPY templates templates

RUN pip install -r requirements.txt

EXPOSE $BIND_PORT

ENTRYPOINT [ "python" ]

CMD [ "main.py" ]

