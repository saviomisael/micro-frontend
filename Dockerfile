FROM node:18 as build

WORKDIR /mf/

COPY ./react-header ./react-header

COPY ./react-lazy ./react-lazy

COPY ./react-multiple ./react-multiple

COPY ./react-parcel ./react-parcel

COPY ./react-route ./react-route

COPY ./react-single ./react-single

COPY ./single-spa ./single-spa

COPY ./utils ./utils

RUN cd ./react-header && npm i --silent && npm run build && cd ..

RUN cd ./react-lazy && npm i --silent && npm run build && cd ..

RUN cd ./react-multiple && npm i --silent && npm run build && cd ..

RUN cd ./react-parcel && npm i --silent && npm run build && cd ..

RUN cd ./react-route && npm i --silent && npm run build && cd ..

RUN cd ./react-single && npm i --silent && npm run build && cd ..

RUN cd ./single-spa && npm i --silent && npm run build && cd ..

RUN cd ./utils && npm i --silent && npm run build && cd ..

FROM nginx:1.23

COPY --from=build /mf/react-header/dist /usr/share/nginx/html/static

COPY --from=build /mf/react-lazy/dist /usr/share/nginx/html/static

COPY --from=build /mf/react-multiple/dist /usr/share/nginx/html/static

COPY --from=build /mf/react-parcel/dist /usr/share/nginx/html/static

COPY --from=build /mf/react-route/dist /usr/share/nginx/html/static

COPY --from=build /mf/react-single/dist /usr/share/nginx/html/static

COPY --from=build /mf/utils/dist /usr/share/nginx/html/static

COPY --from=build /mf/single-spa/dist/index.html /usr/share/nginx/html/

COPY --from=build /mf/single-spa/dist/sm-root-config.js* /usr/share/nginx/html/static

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
