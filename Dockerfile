# Stage 1: Compile and Build angular codebase
# Use official node image as the base image 
FROM node:16.13.0-alpine as builder
# Set the working directory 
WORKDIR /app
# Add the source code to app 
COPY . /app
# Install all the dependencies 
RUN npm install
# Generate the build of the application 
RUN npm run build
# Stage 2: Serve app with nginx server   
# Use official nginx image as the base image 
FROM nginx:1.17.10-alpine
# Copy the build output to replace the default nginx contents. 
COPY --from=builder /app/dist/Resume-Parser-Angular-main /usr/share/nginx/html
# Expose port 80 
EXPOSE 80

