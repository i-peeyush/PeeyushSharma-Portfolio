# Stage 1: Build the app
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Copy Maven wrapper and pom.xml
COPY pom.xml .
COPY .mvn .mvn
COPY mvnw mvnw

# Make mvnw executable (important fix!)
RUN chmod +x mvnw

# Download dependencies
RUN ./mvnw dependency:go-offline -B

# Copy source code and build
COPY src src
RUN ./mvnw clean package -DskipTests

# Stage 2: Run the app
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app

# Copy built jar from stage 1
COPY --from=build /app/target/portfolio-0.0.1-SNAPSHOT.jar app.jar

# Render will provide PORT, but expose 8080 for local runs
EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]
