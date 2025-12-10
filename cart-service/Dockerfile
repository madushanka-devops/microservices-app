# Build Stage
FROM golang:1.23-alpine AS builder
WORKDIR /app
COPY . .
# Ensure dependencies are downloaded (since you now have go.mod)
RUN go mod download
RUN go build -o cart-service main.go

# Run Stage
FROM alpine:3.20
WORKDIR /root/
COPY --from=builder /app/cart-service .
EXPOSE 8080
CMD ["./cart-service"]
