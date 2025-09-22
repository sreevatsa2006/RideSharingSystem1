## Multi-stage Dockerfile for Spring Boot (Java 17)

# 1) Build stage
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /workspace

# Leverage caching by copying pom first
COPY pom.xml .
RUN mvn -q -e -B -DskipTests dependency:go-offline

# Copy sources and build
COPY src ./src
RUN mvn -q -e -B -DskipTests package

# 2) Runtime stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy the built jar (the Boot repackage jar is the larger one, exclude *-plain.jar)
COPY --from=build /workspace/target/*SNAPSHOT.jar /app/app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","/app/app.jar"]