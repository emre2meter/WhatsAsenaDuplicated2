FROM fusuf/whatsasena:latest

RUN git clone https://github.com/emre2meter/WhatsAsenaDuplicated2 /root/WhatsAsenaDuplicated2
WORKDIR /root/WhatsAsenaDuplicated2/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
