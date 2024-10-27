# Use the official Golang image to build the app
FROM golang:1.23-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the Go module files and download dependencies
COPY pocketbase/go.mod pocketbase/go.sum ./
RUN go mod download

# Copy the entire PocketBase project into the working directory
COPY pocketbase/ .

# Build the Go application
RUN go build -o pocketbase main.go

# Final image
FROM alpine:latest

# Set the working directory
WORKDIR /app

# Copy the PocketBase executable and pb_data folder from the builder stage
COPY --from=builder /app/pocketbase .
#COPY --from=builder /app/pb_data ./pb_data

# Expose the desired port
EXPOSE 8080

# Run the PocketBase server on port 8080
CMD ["/app/pocketbase", "--http=0.0.0.0:8080", "serve"]