FROM openjdk:17-slim as build
COPY . /al/quarkus-message-dispacher
WORKDIR /al/quarkus-message-dispacher
RUN ./mvnw package -Pnative -Dquarkus.native.container-build=true 

FROM registry.access.redhat.com/ubi8/ubi-minimal:8.2
WORKDIR /work/
COPY --from=build /al/quarkus-message-dispacher/target/*-runner /work/application
EXPOSE 8082
