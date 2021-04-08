FROM fusuf/whatsasena:latest

RUN git clone https://emre2meter:emre3114@github.com/emre2meter/calypso /root/calypso
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
