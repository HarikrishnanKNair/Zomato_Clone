FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

ENV MONGO_URL=mongodb+srv://Hari:hari@zomato-master.pxaom.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=727356915134-3uko53ov6kbhk6pckrm3fe0m8d93t626.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=Sl8hZMPdRElfpWxF18UcQRbH
ENV AWS_ACCESS_KEY_ID=AKIAUIFY336H4LW6VY5D
ENV AWS_SECRET_ACCESS_KEY=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
ENV MAILGUN__API__KEY=c753e83c08d9bdb0207b9bd921a909fc-443ec20e-1705a7df
ENV MAILGUN__DOMAIN=sandbox71d363936be745e4ac620ec7aa6dad2a.mailgun.org
ENV RZR_PAY_ID=rzp_test_NNY1Qyvvt7d202
ENV RZR_PAY_SECRET=qx1VL7gPyxu8GZAFOGgQd6nl

CMD ["npm", "run", "start"]